import React from 'react'

const NextButton = (
    {
        submitted,
        handleNextClick
    }
) => {
    return (  
        <div className="nextbutton">
            <button className="next" disabled={submitted == false} onClick={handleNextClick}>NEXT QUESTION</button>
        </div>
    );
}
 
export default NextButton;