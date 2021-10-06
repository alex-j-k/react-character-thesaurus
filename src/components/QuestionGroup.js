import React from 'react'

const QuestionGroup = (
    {
        currentQuestionNumber,
        totalQuestionNumber,
        correctNumber
    }
) => {
    return (
        <div className="questioncard">
              <div className="qpm">Question {currentQuestionNumber+1} of {totalQuestionNumber}</div>
                <div className="qpm">You have {correctNumber} correct so far!</div>
                {/* <div className="questionpreamble">Choose the correct character...</div> */}
        </div>
      );
}
 
export default QuestionGroup;