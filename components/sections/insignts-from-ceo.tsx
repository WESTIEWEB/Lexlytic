import React from 'react'
import { motion } from 'framer-motion';

const InsightsFromCeo = () => {

    const slideInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      };
  return (
    <section className="py-16 box-border">
      <div className="container mx-auto px-4 md:px-6 mb-4">
        <div 

        className='bg-gray-100 p-8 shadow-md rounded-xl'>
            <h1 className="text-3xl font-bold mb-4 text-center">Buried in regulations?</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-8 text-center">Let’s fix that.</h2>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">Dear Reader,</p>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">
              Most days in compliance start the same way:
              <br />• Multiple government sites open
              <br />• Dozens of PDFs to decode
              <br />• A looming deadline you’re not 100% sure about
            </p>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">
              I spent a decade inside that grind as a regulatory‑compliance lawyer. Every new directive meant hours of manual cross‑checking, or another costly outside‑counsel bill. The process felt upside‑down: we paid for interpretation before we could even act.
            </p>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">
              I witnessed three recurring failures:
              <br />1. <strong>Discovery gaps:</strong> critical clauses hidden in scattered gazettes.
              <br />2. <strong>Interpretation costs:</strong> teams paying twice: first to know what the law says, then to do it.
              <br />3. <strong>Execution bottlenecks:</strong> oaths, filings, and attestations delayed by distance or scarce professional capacity.
            </p>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">
              Lexlytic exists because that model is broken. Our platform reads every new rule, pinpoints exactly what matters to your organisation, and when human hands are needed, connects you to vetted professionals who can execute the work.
            </p>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">
              In short: less billable friction, fewer surprises, and a compliance posture your auditors (and board) can trust.
            </p>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">
              • <strong>Instant clarity</strong> – Obligations, dates, penalties, fully cited.<br />
              • <strong>Live updates</strong> – Know the moment a statute or guideline changes.<br />
              • <strong>Execution included</strong> – Create your compliance checklist and report, and view it at a glance.<br />
              • <strong>One‑click action</strong> – File, notarise, or swear an oath without the usual run‑around.
            </p>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">
              <strong>Strategic Impact</strong>
              <br className='font-' />• Cost efficiency: up to 70% reduction in outside‑counsel spend on routine regulatory interpretation and filings.
              <br className='font-' />• Speed to compliance: from weeks of manual research to actionable guidance with a few clicks.
              <br className='font-' />• Risk reduction: live change alerts prevent missed obligations; automated audit trails satisfy regulators and external auditors.
              <br className='font-' />• Scalability: built for fragmented markets first, and robust enough for Fortune 500 footprints.
            </p>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">
              If your mandate is to govern responsibly, expand securely, or operate under multiple legal regimes without latency, I invite you to experience Lexlytic. Early pilots are already cutting research time by 90% and slashing external‑counsel spend.
            </p>
            <p className="mb-4 font-josefin text-base md:text-lg text-justify">
              Take two minutes to see your own compliance checklist. I think you’ll wonder how you worked without it.
            </p>
            <p className="mt-8 text-right font-medium italic font-josefin">Warm regards,<br />Chioma Wilson-Dike<br />Founder & CEO</p>
        </div>
      </div>
    </section>
  )
}

export default InsightsFromCeo
