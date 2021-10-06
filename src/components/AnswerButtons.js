import React from 'react'

const AnswerButtons = (
    {
        currentArray,
        handleAnswerClick,
        submitted,
        selectedAnswer,
        randomCharacter,
        correctAnswer,
        
    }
) => {
    console.log(currentArray);

    return (  
        <div className="answerbuttons">
                 {//ANSWER BUTTONS
                currentArray.map(eachCharacter => { 
                    return <button 
                   
                    // className={(`answerbutton ${ eachCharacter == randomCharacter ? 'correct' 
                    // : submitted && eachCharacter == selectedAnswer ? 'incorrect' : ''}
                    
                    className={(`answerbutton ${ eachCharacter == correctAnswer ? 'correct' 
                    : submitted && eachCharacter == selectedAnswer ? 'incorrect' : ''}
                    
                    
                    `)}


                            id={eachCharacter}
                             onClick={handleAnswerClick}
                            disabled={submitted == true}>
                                
                                {/* correct
                                {correctAnswer}

                                ran
                                {randomCharacter} */}

                                {/* each */}
                                {eachCharacter}
                                
                                </button>
                 }
                 )
                 }
        </div>
    );
}
 
export default AnswerButtons
