import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function Accordion() {
  const faqData: FAQItem[] = [
    {
      question: "What is AmarPay?",
      answer:
        "AmarPay is a secure digital wallet that lets you store money, send and receive payments, and manage all your transactions seamlessly from one app.",
    },
    {
      question: "How can I add money to my AmarPay wallet?",
      answer:
        "You can top up your wallet using a linked bank account, debit/credit card, or via authorized agents. The process is instant and secure.",
    },
    {
      question: "Is my money safe in AmarPay?",
      answer:
        "Absolutely. AmarPay uses bank-level encryption, secure authentication, and advanced fraud detection to protect your funds and personal data.",
    },
    {
      question: "How do I withdraw cash from AmarPay?",
      answer:
        "You can withdraw cash via partner agents, merchants, or transfer the amount directly to your linked bank account.",
    },
    {
      question: "Are there any fees for using AmarPay?",
      answer:
        "Adding money to your wallet is free. Minimal charges may apply for cash-outs, transfers, or certain services. Full details are available in the AmarPay pricing policy.",
    },
    {
      question: "Can I pay bills using AmarPay?",
      answer:
        "Yes! You can pay utility bills such as electricity, water, internet, and mobile recharge directly from your AmarPay wallet easily.",
    },
    {
      question: "Does AmarPay support QR payments?",
      answer:
        "Yes, you can pay merchants, agents, or peers by scanning their AmarPay QR codes for fast and secure transactions.",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="p-0.5 rounded-lg bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left p-4 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <span className="text-lg font-medium text-gray-900 dark:text-white">
            {question}
          </span>
          <span
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
