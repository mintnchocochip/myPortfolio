import React from "react";
import CustomHeader from "../components/CustomHeader";
import CTFDescription from "../components/CTFDescription";
import CTFList from "../components/CTFList";

interface Question {
  questionId: string;
  question: string;
  description: string;
  points: number;
  solved: number;
}

const CTFs = () => {
  const [hoveredQuestionId, setHoveredQuestionId] = React.useState<string>("");

  const questions: Question[] = [
    {
      questionId: "1",
      question: "QUESTION 1",
      description:
        "This is a description for question 1. It is a very long description that should be truncated.",
      points: 10,
      solved: 5,
    },
    {
      questionId: "2",
      question: "QUESTION 2",
      description:
        "This is a description for question 2. It is a very long description that should be truncated.",
      points: 10,
      solved: 12,
    },
    {
      questionId: "3",
      question: "QUESTION 3",
      description:
        "This is a description for question 3. It is a very long description that should be truncated.",
      points: 100,
      solved: 200,
    },
    {
      questionId: "4",
      question: "QUESTION 4",
      description: "This is a description for question 4.",
      points: 16,
      solved: 10,
    },
    {
      questionId: "5",
      question: "QUESTION 5",
      description:
        "This is a description for question 5. It is a very long description that should be truncated. This is a description for question 5. It is a very long description that should be truncated.",
      points: 11,
      solved: 119,
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col">
      <CustomHeader />
      <div className="font-neuebit flex-grow flex flex-row justify-center mt-8">
        <CTFList ctfList={questions} onHover={setHoveredQuestionId} />
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
