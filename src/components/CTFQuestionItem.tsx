import React from "react";

interface CTFQuestionItemProps {
  questionId: string;
  question: string;
  onHover: (questionId: string) => void;
}

const CTFQuestionItem = React.memo(
  ({ questionId, question, onHover }: CTFQuestionItemProps) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = React.useCallback(() => {
      setIsHovered(true);
      onHover(questionId);
    }, []);

    const handleMouseLeave = React.useCallback(() => {
      setIsHovered(false);
      onHover(questionId);
    }, []);

    return (
      <div
        className={`relative bg-[#111111] text-5xl px-4 py-10 border border-white transform transition-all duration-200 hover:-translate-y-2 hover:translate-x-3 pointy`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`absolute text-white left-6 w-full block text-left items-center text-3xl transform transition-all duration-200 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}  pointy`}
        >
          <img
            src="/icons/chevron.svg"
            alt="Left arrow rotated to fix our needs"
            className="transform rotate-180 inline-block w-8 h-8"
          />
        </div>
        <span
          className={`inline-block transition-all duration-200 ease-out ${isHovered ? "translate-x-12" : "translate-x-0"} pointy`}
        >
          {question}
        </span>
      </div>
    );
  },
);

export default CTFQuestionItem;
