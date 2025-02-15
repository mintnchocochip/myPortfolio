import React, { useMemo, useRef } from 'react'
import CTFQuestionItem from './CTFQuestionItem'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

interface Question {
  questionId: string
  question: string
  description: string
  points: number
  solved: number
}

interface CTFListProps {
  ctfList: Question[]
  onHover: (questionId: string) => void
  onClick: (questionId: string) => void
}

CTFQuestionItem.displayName = 'CTFQuestionItem'

const CTFList = ({ ctfList, onHover, onClick }: CTFListProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useSmoothScroll(containerRef)

  const renderedList = useMemo(
    () =>
      ctfList.map((ctf, index) => (
        <CTFQuestionItem
          questionId={ctf.questionId}
          question={ctf.question}
          key={`ctf-${index}-${ctf.questionId}`}
          onHover={(questionId: string) => {
            onHover(questionId)
          }}
          onClick={(questionId: string) => {
            onClick(questionId)
          }}
        />
      )),
    [ctfList, onHover]
  )

  return (
    <div
      ref={containerRef}
      className="scrollbar-hide relative h-fit max-h-[70vh] w-[40%] overflow-y-auto border border-white"
      style={{
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        overscrollBehavior: 'contain'
      }}
    >
      <div className="space-y-0">{renderedList}</div>
    </div>
  )
}

export default React.memo(CTFList)
