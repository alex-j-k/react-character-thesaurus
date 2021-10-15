import React from 'react'
import { Link } from 'react-router-dom';


const QuizThesaurusToggle = () => {

    const path = window.location.pathname;


        console.log(path)
  

    return ( 
<React.Fragment>
        { path !== '/quiz' ?
            

       ( <Link to={"/quiz"}>
                <div className="quizthesaurustoggle">
                    <i class="far fa-question-circle fa-3x"></i>
                        <div className="all">
                                    <div className="take">
                                                <p className='text'>Test your knowledge!</p>
                                                <p className='text'>Take the...</p>
                                    </div>
                                    
                                                <p className='quiztext'>Character Confusion Quiz</p>
                            </div>
                </div>
        </Link>)
            : 
            ( <Link to={"/"}>
            <div className="quizthesaurustoggle">
                <div className="return">	<i id='returnsym' class="fas fa-reply fa-3x"></i>

</div>
                    <div className="rmc">
                            <div className="returnmain">
                                    <p className='text' id='return'>Return me to the main page...</p>
                            </div>
                                     <p className='quiztext' id='returncc'>Character Confusion</p>
                     </div>             
            </div>
            </Link>)
        }


</React.Fragment>
     );        
}
 
export default QuizThesaurusToggle;