import React from 'react';
import {TransitionGroup, CSSTransition } from 'react-transition-group';


const SimilarCharactersCard = (
    {
        clickedCharacter,
        characterspop,
        listOfCharacterInfo,
        eachSingleArray,
    }
) => {
    return ( 
      
    <div className='everythingsimilar'>


              {
              // if CLICKED, RETURN THE SIMILAR CHARACTER CARD

              // MAP OVER EACH CHARACTER IN ARRAY OF SIMILAR CHARACTERS
              eachSingleArray.map(eachIndividualSimilarCharacter =>

         <div className={listOfCharacterInfo.char == clickedCharacter ? "similarCharacterCard" : "similarCharacterCardNotVisible"} >
                    <div className=
                    {(`similarCharacter ${characterspop.map(cinfo=>cinfo.char == eachIndividualSimilarCharacter && cinfo.pinyin.includes('1') ? 'red' : 
                    cinfo.char == eachIndividualSimilarCharacter && cinfo.pinyin.includes('2') ? 'green' :
                    cinfo.char == eachIndividualSimilarCharacter && cinfo.pinyin.includes('3') ? 'purple' :
                    cinfo.char == eachIndividualSimilarCharacter && cinfo.pinyin.includes('4') ? 'blue' :
                    null).join('')}` )}
                    >{eachIndividualSimilarCharacter}
                    </div>
               { // FOR EACH CHARCTER IN ARRAY OF SIMILAR CHARATERS MAP AND FIND EXPANDED CHARACTER INFO
                  characterspop.map(listOfCharacterInfo => 
                  
                  listOfCharacterInfo.char == eachIndividualSimilarCharacter ? 
                  <div className="similarCharacterInfo">
                        <div className="pinyinAndMeaning">
                                <div className="similarCharacterPinyin">{listOfCharacterInfo.pinyin}</div>
                                <div className="similarCharacterMeaning">{listOfCharacterInfo.meaning}</div>
                        </div>
                        <div className="allRadicals">
                                    {listOfCharacterInfo.rad.map(eachRadicalInfo =>
                                    <div className="similarEverything">
                                                  <div className="similarCharacterRadicals">
                                                      {eachRadicalInfo[0].radical}
                                                  </div>
                                                  <div className="similarCharactersPinyin">
                                                  {eachRadicalInfo[0].pinyin}
                                                  </div>
                                                  <div className="similarCharactersMeaning">
                                                  {eachRadicalInfo[0].meaning}
                                                  </div>
                                       </div>
                                      )
                                      }
                        </div>
                  </div>
                  
                  
                //ELSE RETURN NULL
                : null )
}

                </div> 
              )
            }
        </div>

);
}
 
export default SimilarCharactersCard;