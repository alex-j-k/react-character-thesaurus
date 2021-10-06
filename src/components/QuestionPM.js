import React from 'react'

const QuestionPM = (
    {
        characterspop,
        randomCharacter,
        submitted,
        correctAnswer,
    }
) => {
    
    return (  
        <div className="questionPM">

                { //QUESTION PINYIN AND MEANING 
                
                characterspop.map(setOfCharacterInfo => setOfCharacterInfo.char == randomCharacter ? 
                <div className="dynamicquestion">
                    <div className="qpmnormalfont">Pinyin - {!submitted ? setOfCharacterInfo.pinyin : 
                    characterspop.map(setOfCharacterInfo => setOfCharacterInfo.char == correctAnswer ? 
                        setOfCharacterInfo.pinyin : null)}</div>


                    <div className="qpmnormalfont">Meaning - {!submitted ? setOfCharacterInfo.meaning: 
                    characterspop.map(setOfCharacterInfo => setOfCharacterInfo.char == correctAnswer ? 
                        setOfCharacterInfo.meaning : null)}</div>
                </div> 
                :null)}
        </div>
    );
}
 
export default QuestionPM