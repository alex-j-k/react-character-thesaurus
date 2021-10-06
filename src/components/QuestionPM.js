import React from 'react'

const QuestionPM = (
    {
        characterspop,
        randomCharacter
    }
) => {
    return (  
        <div className="questionPM">

                { //QUESTION PINYIN AND MEANING
                characterspop.map(setOfCharacterInfo => setOfCharacterInfo.char == randomCharacter ? 
                <div className="dynamicquestion">
                    <div className="qpmnormalfont">Pinyin - {setOfCharacterInfo.pinyin}</div>
                    <div className="qpmnormalfont">Meaning - {setOfCharacterInfo.meaning}</div>
                </div> 
                :null)}
        </div>
    );
}
 
export default QuestionPM