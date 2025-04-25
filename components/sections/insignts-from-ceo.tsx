import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

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
                <div className="">
                    {/* Headline */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-4">Buried in regulations?</h1>
                        <h2 className="text-2xl font-semibold text-gray-700">Let’s fix that.</h2>
                    </div>

                    {/* Two-column layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-josefin text-base md:text-lg text-justify leading-relaxed">
                        {/* Left Column */}
                        {/* <Image src={'/letter.png'} alt="Letter" width={500} height={500} className="block w-full h-auto mb-4" />  */}
                        <div className='md:text-base text-base font-semibold mb-3 text-blue-900'>
                            <p className="mb-4 text-lg">Dear Reader,</p>
                            <p className="mb-4">
                                Most days in compliance start the same way:
                                multiple government sites open, dozens of PDFs to decode, a looming deadline you’re not 100% sure about.
                            </p>
                            <p className="mb-4">
                                I spent a decade inside that grind as a regulatory‑compliance lawyer.
                                Every new directive meant hours of manual cross-checking, or another costly outside-counsel bill.
                                The process felt upside-down: we paid for interpretation before we could even act.
                            </p>
                            <p className="mb-4">
                                I witnessed three recurring failures:
                                <br />
                                <strong className='text-blue-600'>discovery gaps</strong> — critical clauses hidden in scattered gazettes.
                                <br />
                                <strong className='text-blue-600'>Interpretation costs</strong> — teams paying twice: first to know what the law says, then to do it.
                                <br />
                                <strong className='text-blue-600'>Execution bottlenecks</strong> — oaths, filings, and attestations delayed by distance or scarce professional capacity.
                            </p>
                            <p className="mb-4">
                                Lexlytic exists because that model is broken.
                                Our platform reads every new rule, pinpoints exactly what matters to your organisation,
                                and when human hands are needed, connects you to vetted professionals who can execute the work.
                            </p>
                            <p className="mb-4">
                                In short: less billable friction, fewer surprises, and a compliance posture your auditors (and board) can trust.
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className='md:text-base text-base font-semibold mb-3 text-blue-900'>
                            <p className="mb-4">
                                <strong className='text-blue-600'>Instant clarity</strong> — obligations, dates, penalties, fully cited.
                                <br />
                                <strong className='text-blue-600'>Live updates</strong> — know the moment a statute or guideline changes.
                                <br />
                                <strong className='text-blue-600'>Execution included</strong> — create your compliance checklist and report, and view it at a glance.
                                <br />
                                <strong className='text-blue-600'>One‑click action</strong> — file, notarise, or swear an oath without the usual run‑around.
                            </p>
                            <p className="mb-4">
                                <strong className='text-blue-600'>Strategic Impact:</strong>
                                <br />
                                <strong className='text-blue-600'>Cost efficiency</strong> — up to 70% reduction in outside‑counsel spend on routine regulatory interpretation and filings.
                                <br />
                                <strong className='text-blue-600'>Speed to compliance</strong> — from weeks of manual research to actionable guidance with a few clicks.
                                <br />
                                <strong className='text-blue-600'>Risk reduction</strong> — live change alerts prevent missed obligations; automated audit trails satisfy regulators and external auditors.
                                <br />
                                <strong className='text-blue-600'>Scalability</strong> — built for fragmented markets first, and robust enough for Fortune 500 footprints.
                            </p>
                            <p className="mb-4">
                                If your mandate is to govern responsibly, expand securely, or operate under multiple legal regimes without latency,
                                I invite you to experience Lexlytic.
                                Early pilots are already cutting research time by 90% and slashing external‑counsel spend.
                            </p>
                            <p className="mb-4">
                                Take two minutes to see your own compliance checklist.
                                I think you’ll wonder how you worked without it.
                            </p>
                            <p className="mt-8 text-right font-medium italic">
                                Warm regards,<br />
                                Chioma Wilson-Dike<br />
                                Founder & CEO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InsightsFromCeo
