import React from 'react'

interface CTFQuestionItemProps {
  questionId: string
  question: string
  onHover: (questionId: string) => void
  onClick: (questionId: string) => void
}

const CTFQuestionItem = React.memo(
  ({ questionId, question, onHover, onClick }: CTFQuestionItemProps) => {
    const [isHovered, setIsHovered] = React.useState(false)

    const handleMouseEnter = React.useCallback(() => {
      setIsHovered(true)
      onHover(questionId)
    }, [questionId, onHover])

    const handleMouseLeave = React.useCallback(() => {
      setIsHovered(false)
      onHover(questionId)
    }, [questionId, onHover])

    return (
      <div
        className="overflow-visible bg-enigma-green"
        onClick={() => onClick(questionId)}
      >
        <div
          className={`pointy relative transform border border-white bg-[#111111] px-8 py-10 text-5xl transition-all duration-200 hover:-translate-y-2 hover:translate-x-3`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            height: 'min-content',
            minHeight: '120px', // Matches the py-10 (40px) + additional space for content
            display: 'flex',
            alignItems: 'center',
            zIndex: isHovered ? 10 : 1, // Add z-index to ensure hover state appears above other items
            position: 'relative'
          }}
        >
          <div
            className={`absolute left-6 block transform items-center text-left text-3xl text-white transition-all duration-200 ${
              isHovered
                ? 'translate-x-0 opacity-100'
                : '-translate-x-4 opacity-0'
            } pointy`}
          >
            <img
              src="/icons/chevron.svg"
              alt="Left arrow rotated to fix our needs"
              className="inline-block h-8 w-8 rotate-180 transform"
              loading="lazy"
            />
          </div>
          <div className="flex w-full items-center">
            <span
              className={`inline-block transition-all duration-200 ease-out ${
                isHovered ? 'translate-x-12' : 'translate-x-0'
              } pointy`}
            >
              {question}
            </span>
          </div>
        </div>
      </div>
    )
  }
)

CTFQuestionItem.displayName = 'CTFQuestionItem'

export default CTFQuestionItem
