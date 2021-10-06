import React from 'react'

const StartButton = (
    {handleStartClick,
    correctNumber,
totalQuestionNumber}
) => {
    return (  
        <React.Fragment>
            <div className="questioncard">
            {correctNumber && <div className="qpm">The score on your last game was {correctNumber} out of {totalQuestionNumber}</div>}
            <button className='startbutton' onClick={handleStartClick}>START</button>
            </div>
        </React.Fragment>
    );
}
 
export default StartButton