import React, { useState } from "react";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginBottom: "10px",
        borderRadius: "6px",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "10px",
          fontWeight: "bold",
          background: "#f5f5f5",
          border: "none",
          cursor: "pointer",
        }}
      >
        {question} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div style={{ padding: "10px", background: "#fff" }}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building UIs.",
    },
    {
      question: "What is a Hook?",
      answer: "Hooks let you use state and lifecycle in function components.",
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript, used in React.",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // toggle open/close
  };

  return (
    <div>
      <h2>FAQ Section</h2>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
