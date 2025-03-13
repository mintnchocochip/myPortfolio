import React, { useMemo, useRef } from 'react'
import CTFQuestionItem from './CTFQuestionItem'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

interface Question {
  id: string
  name: string
  description: string
  tags: number
  points: number
  // solved: number
  author: string
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
          questionId={ctf.id}
          question={
            ctf.name.length > 64 ? ctf.name.substring(0, 64) + '...' : ctf.name
          }
          key={`ctf-${index}-${ctf.id}`}
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
