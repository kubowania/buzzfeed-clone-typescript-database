import React from 'react'
import { Question } from '../../interfaces'

const QuestionBlock = ({
     quizItemId,
     question,
     chosenAnswerItems,
     setChosenAnswerItems,
     unansweredQuestionIds,
     setUnansweredQuestionIds
}: {
    quizItemId: number;
    question: Question,
    chosenAnswerItems: string[],
    setChosenAnswerItems: Function,
    unansweredQuestionIds: number[] | undefined,
    setUnansweredQuestionIds: Function
}) => {


    const handleClick = () => {
        setChosenAnswerItems((prevState: string[]) => [...prevState, question.text])
        setUnansweredQuestionIds(unansweredQuestionIds?.filter((id: number) => id !== quizItemId))
    }

    const validPick = !chosenAnswerItems?.includes(question.text) &&
        !unansweredQuestionIds?.includes(quizItemId)


    return (
        <button
            className="question-block"
            onClick={handleClick}
            disabled={validPick}
        >
            <img src={question.image} alt={question.alt}/>
            <h3>{question.text}</h3>
            <p>
                <a href={question.image}>{question.credit} </a>
                <a href="https://www.unsplash.com">Unsplash</a>
            </p>

        </button>
    )
}

export default QuestionBlock
