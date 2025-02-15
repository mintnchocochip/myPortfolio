import React from "react";
import CustomHeader from "../components/CustomHeader";
import CTFDescription from "../components/CTFDescription";
import CTFList from "../components/CTFList";
import CTF_type from "../assets/functions/CTF_type";

interface Question {
  questionId: string;
  question: string;
  description: string;
  questionType: number;
  points: number;
  solved: number;
}

const CTFs = () => {
  const [hoveredQuestionId, setHoveredQuestionId] = React.useState<string>("");
  const [selectedQuestionType, setSelectedQuestionType] = React.useState<string>("");

  const questions: Question[] = [
    {
      questionId: "1",
      question: "QUESTION 1",
      description:
        "This is a description for question 1. It is a very long description that should be truncated.",
        questionType: 1,
      points: 10,
      solved: 5,
    },
    {
      questionId: "2",
      question: "QUESTION 2",
      description:
        "This is a description for question 2. It is a very long description that should be truncated.",
        questionType: 6,
      points: 10,
      solved: 12,
    },
    {
      questionId: "3",
      question: "QUESTION 3",
      description:
        "This is a description for question 3. It is a very long description that should be truncated.",
        questionType: 3,
      points: 100,
      solved: 200,
    },
    {
      questionId: "4",
      question: "QUESTION 4",
      description: "This is a description for question 4.",
      questionType: 12,
      points: 16,
      solved: 10,
    },
    {
      questionId: "5",
      question: "QUESTION 5",
      description:
        "This is a description for question 5. It is a very long description that should be truncated. This is a description for question 5. It is a very long description that should be truncated.",
        questionType: 13,
      points: 11,
      solved: 119,
    },
  ];

  return (
    <div className="w-screen h-screen font-neuebit flex flex-col">
      <CustomHeader />
      <div className="text-3xl mt-4 flex flex-row justify-center w-screen">
        <div className="w-[80%] overflow-x-auto whitespace-nowrap flex scrollbar-hide">
          <span className="border border-white py-4 px-8 hover:bg-white hover:text-black transition-all pointy" onClick={() => setSelectedQuestionType("")}>
            ALL
          </span>
          <span className="border border-white py-4 px-8 hover:bg-white hover:text-black transition-all pointy" onClick={() => setSelectedQuestionType("Web")}>
            Web
          </span>
          <span className="border border-white py-4 px-8 hover:bg-white hover:text-black transition-all pointy" onClick={() => setSelectedQuestionType("OSINT")}>
            OSINT
          </span>
          <span className="border border-white py-4 px-8 hover:bg-white hover:text-black transition-all pointy" onClick={() => setSelectedQuestionType("Binary")}>
            Binary
          </span>
          <span className="border border-white py-4 px-8 hover:bg-white hover:text-black transition-all pointy" onClick={() => setSelectedQuestionType("Reversing")}>
            Reversing
          </span>
          <span className="border border-white py-4 px-8 hover:bg-white hover:text-black transition-all pointy" onClick={() => setSelectedQuestionType("Forensics")}>
            Forensics
          </span>
          <span className="border border-white py-4 px-8 hover:bg-white hover:text-black transition-all pointy" onClick={() => setSelectedQuestionType("Cryptography")}>
            Cryptography
          </span>
          <span className="border border-white py-4 px-8 hover:bg-white hover:text-black transition-all pointy" onClick={() => setSelectedQuestionType("Miscellaneous")}>
            Miscellaneous
          </span>
        </div>
      </div>

      <div className="flex-grow flex flex-row justify-center">
        <CTFList
          ctfList={
            questions.filter(
              (question) => {
                selectedQuestionType in CTF_type(question.questionType)
                console.log(CTF_type(question.questionType))
              }
            )
          }
          onHover={setHoveredQuestionId}
        />
        <CTFDescription
          description={
            questions.find(
              (question) => question.questionId === hoveredQuestionId,
            )?.description || ""
          }
          points={
            questions.find(
              (question) => question.questionId === hoveredQuestionId,
            )?.points || 0
          }
          solved={
            questions.find(
              (question) => question.questionId === hoveredQuestionId,
            )?.solved || 0
          }
        />
      </div>
    </div>
  );
};

export default CTFs;
