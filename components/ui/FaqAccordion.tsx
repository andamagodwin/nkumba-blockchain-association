'use client';

import { useState } from 'react';
import { ArrowDown2 } from 'iconsax-react';

const faqs = [
  {
    question: "Do I need prior blockchain or coding experience to join?",
    answer: "Not at all. We welcome everyone — from complete beginners to experienced developers. Our curriculum is designed to take you from zero knowledge to building your first decentralized application step by step.",
  },
  {
    question: "When and where do sessions take place?",
    answer: "We meet every Friday at 2:00 PM on the Nkumba University Main Campus. Sessions typically last 2–3 hours and include a mix of theory, hands-on coding, and open discussion.",
  },
  {
    question: "Is there a membership fee?",
    answer: "Joining the Nkumba Blockchain Club is completely free. All resources, workshop materials, and project guides shared during sessions are available to members at no cost.",
  },
  {
    question: "What technologies will I learn?",
    answer: "You'll get hands-on experience with Solidity, Ethers.js, Hardhat, Polygon, IPFS, React, Next.js, and more. As AI meets Web3, we also explore autonomous agents, on-chain AI models, and decentralized compute networks.",
  },
  {
    question: "Can I contribute to real projects?",
    answer: "Absolutely. We run open-source club projects that members contribute to. You'll have the opportunity to build DApps, smart contracts, and Web3 interfaces that are deployed on real testnets and eventually mainnets.",
  },
  {
    question: "How do I officially join?",
    answer: "Simply show up to any Friday session and introduce yourself! You can also click the 'Build the Future With Us' button on this page to register your interest and we'll reach out with the next session details.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-nkumba-yellow/30 bg-nkumba-yellow/[0.04]'
                : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
            >
              <span className={`text-base md:text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-nkumba-yellow' : 'text-white'}`}>
                {faq.question}
              </span>
              <ArrowDown2
                size="20"
                color={isOpen ? '#F2ED00' : '#94a3b8'}
                className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="px-6 pb-6 text-slate-300 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
