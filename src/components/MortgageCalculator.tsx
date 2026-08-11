import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

export const MortgageCalculator: React.FC = () => {
  // Initial default: 85 Lakhs property
  const [propertyPrice, setPropertyPrice] = useState<number>(8800000); // ₹88 Lakhs
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 Years

  // Calculations
  const downPayment = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPayment;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const monthlyEMI =
    loanAmount > 0 && monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const totalPayment = monthlyEMI * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  return (
    <section className="py-12 md:py-16 bg-[#F5F2ED] text-[#1A1A1A] border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
              FINANCIAL PLANNING
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
          </div>

          <h2
            className="font-serif italic text-4xl sm:text-5xl text-[#1A1A1A] font-light"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Home Loan & EMI Calculator
          </h2>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans font-light leading-relaxed">
            Estimate monthly home loan installments for Splendid residences with transparent interest breakdowns.
          </p>
        </div>

        <div className="bg-white border border-[#1A1A1A]/10 p-6 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Property Price Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="font-semibold text-[#1A1A1A]">PROPERTY VALUE</span>
                <span className="font-serif italic text-xl font-normal text-[#C5A059]" style={{ fontFamily: "'Georgia', serif" }}>{formatINR(propertyPrice)}</span>
              </div>
              <input
                type="range"
                min={6000000}
                max={30000000}
                step={500000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#E6E2D8] rounded-none appearance-none cursor-pointer accent-[#C5A059]"
              />
              <div className="flex justify-between text-[11px] text-[#1A1A1A]/60 font-sans">
                <span>₹60 Lakhs</span>
                <span>₹1.5 Cr</span>
                <span>₹3.0 Cr</span>
              </div>
            </div>

            {/* Down Payment % Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="font-semibold text-[#1A1A1A]">DOWN PAYMENT ({downPaymentPercent}%)</span>
                <span className="font-serif italic text-lg text-[#1A1A1A]/80" style={{ fontFamily: "'Georgia', serif" }}>{formatINR(downPayment)}</span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-[#E6E2D8] rounded-none appearance-none cursor-pointer accent-[#C5A059]"
              />
            </div>

            {/* Interest Rate % */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="font-semibold text-[#1A1A1A]">INTEREST RATE (%)</span>
                <span className="font-serif italic text-lg text-[#C5A059]" style={{ fontFamily: "'Georgia', serif" }}>{interestRate}% p.a.</span>
              </div>
              <input
                type="range"
                min={7.5}
                max={12.0}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-[#E6E2D8] rounded-none appearance-none cursor-pointer accent-[#C5A059]"
              />
            </div>

            {/* Loan Tenure Years */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-sans">
                <span className="font-semibold text-[#1A1A1A]">LOAN TENURE</span>
                <span className="font-serif italic text-lg text-[#1A1A1A]/80" style={{ fontFamily: "'Georgia', serif" }}>{tenureYears} Years</span>
              </div>
              <input
                type="range"
                min={5}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-[#E6E2D8] rounded-none appearance-none cursor-pointer accent-[#C5A059]"
              />
            </div>

          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-8 space-y-6 flex flex-col justify-between border border-white/10">
            <div className="space-y-4">
              <span className="text-[10px] font-sans tracking-[0.3em] text-[#C5A059] uppercase block font-bold">
                MONTHLY REPAYMENT
              </span>
              <div className="border-b border-white/10 pb-4">
                <span className="text-[11px] text-white/70 uppercase block tracking-wider font-medium">ESTIMATED MONTHLY EMI</span>
                <span className="font-serif italic text-3xl sm:text-4xl font-normal text-[#C5A059]" style={{ fontFamily: "'Georgia', serif" }}>
                  {formatINR(monthlyEMI)} <span className="text-xs font-sans font-normal text-white/70">/ month</span>
                </span>
              </div>

              <div className="space-y-3 text-xs font-sans">
                <div className="flex justify-between py-1 border-b border-white/10 text-white/70">
                  <span>LOAN PRINCIPAL:</span>
                  <span className="font-semibold text-white">{formatINR(loanAmount)}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-white/10 text-white/70">
                  <span>TOTAL INTEREST:</span>
                  <span className="font-semibold text-[#C5A059]">{formatINR(totalInterest)}</span>
                </div>

                <div className="flex justify-between py-1 text-white/70">
                  <span>TOTAL OUTFLOW:</span>
                  <span className="font-semibold text-white">{formatINR(totalPayment)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <p className="text-[11px] text-white/60 leading-relaxed">
                * Pre-approved home loan support available with HDFC, SBI, ICICI, and Axis Bank for Splendid projects.
              </p>
              <a
                href="#site-visit"
                className="w-full bg-[#C5A059] text-[#1A1A1A] py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-2 border border-[#C5A059]"
              >
                REQUEST BANK FINANCING DESK
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

