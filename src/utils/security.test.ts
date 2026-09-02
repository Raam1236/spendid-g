import {
  escapeHtml,
  sanitizeSafeUrl,
  stripControlChars,
  detectSqlInjection,
  isSafePath,
  validateEnquiryPayload,
  sanitizeNoSqlPayload,
  SafeStorage
} from './security';

/**
 * Enterprise Security Test Suite
 * Validates OWASP Top 10 Defenses across all 7 Phases
 */
export function runSecurityTestSuite(): { passed: boolean; testResults: Array<{ name: string; passed: boolean; details?: string }> } {
  const results: Array<{ name: string; passed: boolean; details?: string }> = [];

  // 1. Phase 1: XSS HTML Escaping Test
  const xssInput = '<script>alert("xss")</script><img src=x onerror=alert(1)>';
  const escaped = escapeHtml(xssInput);
  const xssPassed = !escaped.includes('<script>') && escaped.includes('&lt;script&gt;');
  results.push({
    name: 'Phase 1: HTML Entity Sanitization & XSS Defense',
    passed: xssPassed,
    details: escaped
  });

  // 2. Phase 1: Dangerous URL Protocol Blocking Test
  const dangerousUrls = ['javascript:alert(1)', 'data:text/html;base64,PHNjcmlwdD4=', 'vbscript:msgbox(1)'];
  const urlTestPassed = dangerousUrls.every(url => sanitizeSafeUrl(url, '#') === '#');
  results.push({
    name: 'Phase 1: Safe URL Protocol Filter',
    passed: urlTestPassed
  });

  // 3. Phase 2 & 3: FastAPI / Pydantic Schema Validation Test
  const validPayload = {
    fullName: 'Rahul Sharma',
    phone: '+91 99000 41880',
    email: 'rahul.sharma@example.com',
    projectInterest: 'Splendid Lake Breez',
    budgetRange: '₹80 Lakhs - ₹1.2 Cr',
    message: 'Interested in a 3 BHK unit'
  };
  const validationRes = validateEnquiryPayload(validPayload);
  results.push({
    name: 'Phase 2 & 3: Runtime Schema Type Guard & Validation',
    passed: validationRes.isValid && validationRes.errors.length === 0
  });

  // 4. Phase 4: SQL Injection Vector Detection Test
  const sqliVectors = [
    "' OR '1'='1",
    "1; DROP TABLE users; --",
    "UNION SELECT null, username, password FROM users",
    "admin' --"
  ];
  const sqliPassed = sqliVectors.every(detectSqlInjection);
  results.push({
    name: 'Phase 4: SQL Injection Vector Detector',
    passed: sqliPassed
  });

  // 5. Phase 5: Path Traversal & Dotfile Guard Test
  const badPaths = ['../../etc/passwd', '..\\windows\\system32', '.env', '.git/config', 'sub/.env'];
  const pathTestPassed = badPaths.every(p => !isSafePath(p));
  results.push({
    name: 'Phase 5: Linux/Docker File Path Traversal Defense',
    passed: pathTestPassed
  });

  // 6. Phase 7: NoSQL Injection Deep Sanitization Test
  const maliciousNoSql = {
    username: 'admin',
    password: { $ne: null },
    $where: 'sleep(5000)',
    query: { $gt: '' }
  };
  const sanitizedNoSql = sanitizeNoSqlPayload(maliciousNoSql) as Record<string, unknown>;
  const nosqlPassed = !('$where' in sanitizedNoSql) && typeof sanitizedNoSql.password === 'object' && !('$ne' in (sanitizedNoSql.password as Record<string, unknown>));
  results.push({
    name: 'Phase 7: Deep NoSQL Operator Sanitization',
    passed: nosqlPassed
  });

  const allPassed = results.every(r => r.passed);
  return { passed: allPassed, testResults: results };
}
