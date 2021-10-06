import React from 'react'

const AnswerButtons = (
    {
        currentArray,
        handleAnswerClick,
        submitted,
        selectedAnswer,
        randomCharacter
    }
) => {
    console.log(currentArray);
    return (  
        <div className="answerbuttons">
                 {//ANSWER BUTTONS
                currentArray.map(eachCharacter => {
                    return <button 
                    // className={(`answerbutton ${submitted && eachCharacter == randomCharacter ? 'correct' 
                    // : submitted && eachCharacter !== randomCharacter ? '' 
                    // : submitted && eachCharacter == selectedAnswer ? 'incorrect': ''}`)}
                    className={(`answerbutton ${ eachCharacter == randomCharacter ? 'correct' 
                    : submitted && eachCharacter == selectedAnswer ? 'incorrect' : ''}`)}


                    id={eachCharacter}
                             onClick={handleAnswerClick}
                             disabled={submitted == true}>ran{randomCharacter}
                             each{eachCharacter}</button>
                 }
                 )
                 }
        </div>
    );
}
 
export default AnswerButtons
