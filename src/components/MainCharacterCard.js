import React from 'react'
import SimilarCharactersCard from './SimilarCharactersCard';
import {TransitionGroup, CSSTransition } from 'react-transition-group';


const MainCharacterCard = (
    {
        arraysOfCharacters,
        handleClick,
        characterspop,
        clickedCharacter,
        searchTerm
    }

) => {
    return ( 
        <React.Fragment>               
                          {
                                //Map overs arrays of characters - return each single array
                                arraysOfCharacters.map(eachArray => 
                                // for each single array, return each single character 
                                eachArray.map(individualCharacter => 
                                //  map over list of objects with expanded character info - return expanded info of each single character
                                characterspop.map(listOfCharacterInfo => 
                                // dot access actual character amongst all info, and compare to single character above   
                                listOfCharacterInfo.char==individualCharacter ? 
                                // if its the same, RETURN...
                                <React.Fragment>
                                    <div 
                                    className=
                                    {(`everything ${listOfCharacterInfo.pinyin.includes(searchTerm) ? "" : 'displaynone'}` )}>
                                            <div className=
                                            {listOfCharacterInfo.char == clickedCharacter ? "mainCharacterCardClicked" : "mainCharacterCard"}
                                            onClick={handleClick} 
                                            id={listOfCharacterInfo.char}>
                                                        <div className=
                                                        {(`mainCharacter ${listOfCharacterInfo.pinyin.includes('1') ? "red" : 
                                                                            listOfCharacterInfo.pinyin.includes('2') ? "green" :
                                                                            listOfCharacterInfo.pinyin.includes('3') ? "purple" :
                                                                            listOfCharacterInfo.pinyin.includes('4') ? "blue" :
                                                        ''}` )}
                                                        > {listOfCharacterInfo.char}</div>
                                                        <div className="mainCharacterPinyin"> {listOfCharacterInfo.pinyin}</div>
                                                        <div className="mainCharacterMeaning"> {listOfCharacterInfo.meaning}</div>
                                                        <div className="listOfSimilarCharacters">{eachArray}</div>
                                            </div>
                                    </div>

                                    <TransitionGroup className='tg'>

                                        <CSSTransition
                                        key={Math.random()}
                                        timeout={500}
                                        classNames="item"
                                        >

                                                <SimilarCharactersCard
                                                arraysOfCharacters={arraysOfCharacters}
                                                characterspop={characterspop}
                                                clickedCharacter={clickedCharacter}
                                                listOfCharacterInfo={listOfCharacterInfo}
                                                eachSingleArray={eachArray}
                                                ></SimilarCharactersCard>

                                        </CSSTransition>             


                                    </TransitionGroup>

                                </React.Fragment>
                            // ELSE RETURN NULL
                            : null )  ))}
        </React.Fragment>
     );
}
 
export default MainCharacterCard;