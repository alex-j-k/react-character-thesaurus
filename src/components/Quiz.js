import React from 'react';
import  { useState } from 'react'
import AnswerButtons from './AnswerButtons';
import NextButton from './NextButton';
import QuestionGroup from './QuestionGroup';
import QuestionPM from './QuestionPM';
import QuizThesaurusToggle from './QuizThesaurausToggle';
import StartButton from './StartButton';

////////////////////////////////////////////////////
const Quiz = (
    {
        arraysOfCharacters,
        characterspop
    }
) => {


    const [ totalQuestionNumber, setTotalQuestionNumber ] = useState(0);
    const [ currentQuestionNumber, setCurrentQuestionNumber ] = useState(0);
    const [ selectedAnswer, setSelectedAnswer] = useState();
    const [ correctNumber, setCorrectNumber ] = useState('');
    const [ submitted, setSubmitted ] = useState(false);
    const [ finishedGame, setFinishedGame ] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState('a');

   
   //FIND THE CURRENT ARRAY USED FOR QUESTIONS
    const currentArray = arraysOfCharacters[currentQuestionNumber];
   //CHOOSE RANDOM NUMBER AMONGST ARRAY LENGTH 
   const randomNumber = currentArray ? Math.floor(Math.random()*(currentArray.length -1)): 1;
   //USE RANDOM NUMBER TO CHOOSE RANDOM CHARACTER OF ARRAY TO BE QUESTION
    const randomCharacter = currentArray[randomNumber];
    console.log(randomCharacter);
    
    //BACKGOUND IMAGE CLASSES

    const imgClasses =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u'];

    //THE TOTAL NUMBER OF QUESTIONS
    const tqn = arraysOfCharacters.length;


//GAME FINISHED - HANDLE START CLICK
const handleStartClick = () => {
    setFinishedGame(false);
    setTotalQuestionNumber(tqn);
    setCorrectNumber(0);



}

// CLICK ANSWER FOR EACH QUESTION
const handleAnswerClick = (e) => {
    console.log(e.target);
    if(e.target.id == randomCharacter){ 
    setCorrectNumber(correctNumber+1);
    setSelectedAnswer(e.target.id);
    setSubmitted(true);
    console.log(randomCharacter);console.log(randomCharacter);console.log(randomCharacter);
    // setCurrentQuestionNumber(currentQuestionNumber + 1);
    setCorrectAnswer(randomCharacter);


} else {
        setSelectedAnswer(e.target.id);
        setSubmitted(true);    
        console.log(randomCharacter);console.log(randomCharacter);console.log(randomCharacter);
        setCorrectAnswer(randomCharacter);

    }

}

// CLICK TO GOTO NEXT QUESTION OR ARRIVE AT FINISHED GAME
const handleNextClick =() =>{
    setSubmitted(false);
    setCurrentQuestionNumber(currentQuestionNumber + 1);
    setSelectedAnswer('');




    if (currentQuestionNumber  == totalQuestionNumber-1){
        setFinishedGame(true);     
        setCurrentQuestionNumber(0);    
    }
}

    return (
<div className={`quiz`}>
                           
                { finishedGame  ? <React.Fragment>
                                    <StartButton handleStartClick={handleStartClick} correctNumber={correctNumber} totalQuestionNumber={totalQuestionNumber} >START</StartButton>
                                    <QuizThesaurusToggle></QuizThesaurusToggle>
                                    </React.Fragment>
                :
    <React.Fragment>
        <div className='info'>
                <QuestionPM characterspop={characterspop} randomCharacter={randomCharacter} submitted={submitted} correctAnswer={correctAnswer}></QuestionPM>
                <QuestionGroup currentQuestionNumber={currentQuestionNumber} totalQuestionNumber={totalQuestionNumber} correctNumber={correctNumber}></QuestionGroup>
        </div>

         <div className="questioncard" id='ans'>



                <AnswerButtons currentArray={currentArray} 
                handleAnswerClick={handleAnswerClick} 
                submitted={submitted} 
                selectedAnswer={selectedAnswer} 
                randomCharacter={randomCharacter} 
                correctAnswer={correctAnswer}>
                    setCorrectAnswer={setCorrectAnswer}
                </AnswerButtons>

                <NextButton submitted={submitted} handleNextClick={handleNextClick}></NextButton>

        </div>
        <QuizThesaurusToggle></QuizThesaurusToggle>
    </React.Fragment>                  
                }
</div>
      );
}
 
export default Quiz;