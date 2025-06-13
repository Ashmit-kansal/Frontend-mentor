import { useRef, useEffect, useState } from 'react';

function FaqItem({ faq, index, activeIndex, toggleFaq, faqsL }) {
  const contentRef = useRef(null);
  const isActive = activeIndex === index;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isActive) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isActive]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-preset2 md:text-[18px] text-purple-950 hover:text-violet-600">{faq.question}</h2>
        <button
          className="cursor-pointer"
          onClick={() => toggleFaq(index)}
          aria-label="Toggle FAQ"
        >
          {isActive ? (
            <svg className="w-[25px] h-[25px] min-w-fit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31">
              <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
            </svg>
          ) : (
            <svg className="w-[25px] h-[25px] min-w-fit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 31">
              <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
            </svg>
          )}
        </button>
      </div>
      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="transition-all duration-500 ease-in-out overflow-hidden"
      >
        <p className="text-purple-600 text-preset3 md:text-[14px] mt-5">{faq.answer}</p>
      </div>
      {index !== faqsL - 1 && <hr className="text-purple-100 border-t-2 my-5" />}
    </div>
  );
}

export default FaqItem;