import { useState } from 'react'

const KnowledgeCheck = ({handleCancel}) => {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the primary purpose of using microfiber cloths?',
      options: [
        'To make surfaces shinier',
        'To trap more dust and particles',
        'To use less cleaning solution'
      ],
      answer: 1
    },
    {
      question: 'When should you use an all-purpose cleaner?',
      options: [
        'Only on glass surfaces',
        'On most non-porous surfaces',
        'Never on countertops'
      ],
      answer: 0
    }
  ])

  // Track selected answers (index of selected option per question)
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(-1)
  )

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[questionIndex] = optionIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  return (
    <div className='flex flex-col gap-5 br p-5 rounded-lg mt-5'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-medium'>Knowledge Check</h1>
        <p className='text-sm text-[#888888]'>
          Test your knowledge! Select the correct answers by clicking the boxes.
        </p>
      </div>
      {questions.map((item, questionIndex) => (
        <div key={questionIndex} className='flex flex-col gap-3'>
          <h2 className='font-medium text-[#131E47]'>
            {questionIndex + 1}. {item.question}
          </h2>
          <div className='flex flex-col gap-2 ml-2'>
            {item.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className='flex items-center gap-1 cursor-pointer'
              >
                <input
                  type='radio'
                  name={`radio-group-${questionIndex}`} // Unique per question
                  checked={selectedAnswers[questionIndex] === optionIndex}
                  onChange={() =>
                    handleOptionChange(questionIndex, optionIndex)
                  }
                  className='form-radio accent-primary h-4 w-4 text-primary rounded-full'
                />
                <span className='text-sm text-[#131E47]'>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className='flex justify-end gap-3 items-center'>
        <button onClick={handleCancel} className='bg-[#F7F8FA] text-[#131E47] border border-[#D9D9D9] rounded-lg px-4 py-2'>
          Cancel
        </button>
        <button className='bg-primary text-white rounded-lg px-4 py-2'>
          Submit Answers
        </button>
      </div>
    </div>
  )
}

export default KnowledgeCheck
