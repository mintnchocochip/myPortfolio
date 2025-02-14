import React, { useMemo } from "react";
import CTFQuestionItem from "./CTFQuestionItem";

interface Question {
  questionId: string;
  question: string;
  description: string;
  points: number;
  solved: number;
}

interface CTFListProps {
  ctfList: Question[];
  onHover: (questionId: string) => void;
}

CTFQuestionItem.displayName = "CTFQuestionItem";

const CTFList = ({ ctfList, onHover }: CTFListProps) => {
  const renderedList = useMemo(
    () =>
      ctfList.map((ctf, index) => (
        <CTFQuestionItem
          questionId={ctf.questionId}
          question={ctf.question}
          key={`ctf-${index}-${ctf.questionId}`}
          onHover={(questionId: string) => {
            onHover(questionId);
          }}
        />
      )),
    [ctfList],
  );

  return (
    <div className="w-[40%] border border-white h-fit bg-enigma-green">
      {renderedList}
    </div>
  );
};

export default React.memo(CTFList);
