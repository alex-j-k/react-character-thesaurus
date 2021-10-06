import './css/App.css';
import React, { useState } from 'react';
import MainCharacterCard from './components/MainCharacterCard';
import SearchBar from './SearchBar';
import Header from './components/Header';
import Quiz from './components/Quiz';


////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////

const App = () => {

//ARRAY OF ALL CHARACTERS //ARRAY OF ALL CHARACTERS //ARRAY OF ALL CHARACTERS //ARRAY OF ALL CHARACTERS 
 
const arraysOfCharacters = [
  ['蔼', '喝', '曷', '渴', '揭', '歇',],
  ['贝', '见',],
  ['哀', '衰', '衷',],
  ['包', '抱', '拘', '句',],
  ['裁', '栽', '载',],
  ['彻', '切', '窃' ,],
  ['惭', '渐', '暂', '崭', '斩',],
  ['澈', '撤',],
  ['畐', '幅', '辐', '福', '富', '副',],
  ['禾', '来', '米', '末', '木', '未',],
  ['季', '李',],
  ['坚', '型',],
  ['监', '蓝', '览', '临',],
  ['浇', '侥', '挠', '饶', '绕',],
  ['亚', '业', '晋', '普', '谱',],
  ['歹', '例', '列', '烈','夕',],
  ['生', '牛', '午'],
  ['其', '棋', '期', '欺',],
  ['辛', '幸'],
  ['诞', '廷', '庭', '挺', '延',],
  ['输', '俞', '偷', '愉', '愈', '喻',],
];

//RADICAL CONSTANTS //RADICAL CONSTANTS //RADICAL CONSTANTS //RADICAL CONSTANTS //RADICAL CONSTANTS //RADICAL CONSTANTS 

const 冂 =  {radical:  '冂',        pinyin:  'jiong1',    meaning:    'Box' };
const 人 =  {radical:  '人',        pinyin:  'ren2',    meaning:    'Man' };
const 儿 =  {radical:  '儿',        pinyin:  'er2',    meaning:    'Son' };
const 口 =  {radical:  '口',        pinyin:  'kou3',    meaning:    'Mouth' };
const 勹 =  {radical:  '勹',        pinyin:  'bao1',    meaning:    'Wrap' };
const 日 =  {radical:  '日',        pinyin:  'ri4',    meaning:    'Sun' };
const 扌 =  {radical:  '扌',        pinyin:  'shou3',    meaning:    'Hand' };
const 欠 =  {radical:  '欠',        pinyin:  'qian4',    meaning:    'Lack/Owe' };
const 氵 =  {radical:  '氵',        pinyin:  'shui3',    meaning:    'Water' };
const 艹 =  {radical:  '艹',        pinyin:  'cao3',    meaning:    'Grass' };
const 讠 =  {radical:  '讠',        pinyin:  'yan2',    meaning:    'Word' };
const 一 =  {radical:  '一',        pinyin:  'yi1',    meaning:    'One' };
const 丨 =  {radical:  '丨',        pinyin:  'gun3',    meaning:    'Line' };
const 衣 =  {radical:  '衣',        pinyin:  'yi1',    meaning:    'Clothes' };
const 巳 =  {radical:  '巳',        pinyin:  'si4',    meaning:    'Self' };
const 戈 =  {radical:  '戈',        pinyin:  'ge1',    meaning:    'Spear' };
const 土 =  {radical:  '土',        pinyin:  'tu3',    meaning:    'Soil' };
const 忄 =  {radical:  '忄',        pinyin:  'xin1',    meaning:    'heart' };
const 车 =  {radical:  '车',        pinyin:  'che1',    meaning:    'Car' };
const 斤 =  {radical:  '斤',        pinyin:  'jin1',    meaning:    'Axe' };
const 彳 =  {radical:  '彳',        pinyin:  'chi4',    meaning:    'Left Step' };
const 七 =  {radical:  '七',        pinyin:  'qi1',    meaning:    'Seven' };
const 刀 =  {radical:  '刀',        pinyin:  'dao1',    meaning:    'Knife' };
const 山 =  {radical:  '山',        pinyin:  'shan3',    meaning:    'Mountain' };
const 攵 =  {radical:  '攵',        pinyin:  'pu1',    meaning:    'Tap' };
const 礻 =  {radical:  '礻',        pinyin:  'shi4',    meaning:    'Spirit' };
const 巾 =  {radical:  '巾',        pinyin:  'jin1',    meaning:    'Towel' };
const 刂 =  {radical:  '刂',        pinyin:  'dao1',    meaning:    'Knife' };
const 田 =  {radical:  '田',        pinyin:  'tian2',    meaning:    'Field' };
const 宀 =  {radical:  '宀',        pinyin:  'mian2',    meaning:    'Roof' };
const 子 =  {radical:  '子',        pinyin:  'zi3',     meaning:    'Child' };
const 又 =  {radical:  '又',        pinyin:  'you4',    meaning:   'Again' };
const 开 =  {radical:  '开',        pinyin:  'kai1',    meaning:    'Open' };
const 丶 =  {radical:  '丶',        pinyin:  'zhu3',    meaning:    'Dot' };
const 皿 =  {radical:  '皿',        pinyin:  'min3',    meaning:    'Dish' };
const 亻 =  {radical:  '亻',        pinyin:  'ren2',    meaning:    'Man' };

const 监rad = {radical: '监',       pinyin:   'jian1',  meaning: 'Supervise'     };
const 见rad = {radical: '见',       pinyin:   'jian4',  meaning: 'To See'     };
const 八rad = {radical: '八',       pinyin:   'ba1',    meaning: 'Eight'     };
const 木rad = {radical: '木',       pinyin:   'mu4',    meaning: 'Tree'     };
const 未rad = {radical: '未',       pinyin:   'wei4',     meaning: 'Not Yet'     };
const 禾rad = {radical: '禾',       pinyin:   'he2',    meaning: 'Grain'     };

const 兀 =    {radical: '兀',       pinyin:  'wu4',       meaning: 'Cut Off Feet' };
const 饣 =    {radical: '饣',       pinyin:  'shi2',      meaning: 'Food' };
const 纟 =    {radical: '纟',       pinyin:  'si1',       meaning: 'Silk'}; 
const 灬 =    {radical: '灬',       pinyin:  'huo3',      meaning: 'Fire'};
const 甘 =    {radical: '甘',       pinyin:  'gan1',      meaning: 'Sweet' };
const 廴 =    {radical: '廴',       pinyin:  'yin3',      meaning: 'Long Stride' };
const 壬 =    {radical: '壬',       pinyin:  'ran2',      meaning: '9th Heavenly Stem' };
const 广 =    {radical: '广',       pinyin:  'guang3',    meaning:   'Wide' };
const 心 =    {radical: '心',       pinyin:  'xin1',      meaning: 'Heart'};
const 延rad = {radical: '延',       pinyin:  'yan2',       meaning: 'Prolong'};
const 廷rad = {radical: '廷',       pinyin:  'ting2',      meaning: 'Royal Court'};
const 俞rad = {radical: '俞',       pinyin:  'shu4',       meaning: 'Assent' };
const 正rad = {radical: '正',       pinyin:  'zheng4',    meaning: 'Correct' };
const 月rad = {radical: '月',       pinyin:  'yue4',      meaning: 'Month'};
const 其rad = {radical: '其',       pinyin:  'qi2',        meaning: 'Such'}; 
const 十rad = {radical: '十',       pinyin:  'shi2',       meaning: 'Ten'}; 
const 牛rad = {radical: '牛',       pinyin:  'niu2',       meaning: 'Cow' };
const 干 =    {radical: '干',       pinyin:  'gan4',      meaning: 'To Do' };
const 立 =    {radical: '立',       pinyin:  'li4',       meaning: 'Stand'}; 
const 列rad = {radical: '列',       pinyin:  'lie4',       meaning: 'List'}; 
const 夕rad = {radical: '夕',       pinyin:  'xi1',        meaning:     'Dusk' };
const 歹rad = {radical: '歹',       pinyin:  'dai3',      meaning:     'Evil' };
const 晋rad = {radical: '晋',       pinyin:  'jin4',       meaning:     'Advance' };
const 普rad = {radical: '普',       pinyin:  'pu3',       meaning:     'Universal'}; 
const 业rad = {radical: '业',       pinyin:  'ye4',        meaning:     'Asia' };
const 亚rad = {radical: '亚',       pinyin:  'ya4',       meaning:     'Profession' }; 
const 育rad = {radical: '育',       pinyin:  'yu4',        meaning:     'Educate' };
const 畐rad = {radical: '畐',       pinyin:  'fu2',       meaning:     'Fill' };
const 富rad = {radical: '富',       pinyin:  'fu4',       meaning:     'Wealthy' };
const 斩rad = {radical: '斩',       pinyin:  'zhan3',     meaning:     'Chop' };
const 穴rad = {radical: '穴',       pinyin:  'xue2',      meaning:    'Cave' };
const 曷rad = {radical: '曷',       pinyin:  'he2',       meaning:     'Why?' };


//CHARACTER INFO CONSTANTS //CHARACTER INFO CONSTANTS //CHARACTER INFO CONSTANTS //CHARACTER INFO CONSTANTS 
const characterspop = [

  { char: '蔼', pinyin: 'ai3',           meaning: 'Friendly',          rad:[[讠],[艹],[曷rad]     ]}, 
  { char: '曷', pinyin: 'he2',           meaning: 'Why?',              rad:[[日], [勹],[人]       ]},
  { char:'渴',  pinyin:'ke3',            meaning:'Thirsty',            rad:[[氵],[曷rad]      ]},
  { char:'喝',  pinyin:'he1',            meaning:'To Drink',           rad:[[口],[曷rad]      ]}, 
  { char:'揭',  pinyin:'jie1',           meaning:'To Lift',            rad:[[扌],[曷rad]      ]},
  { char:'歇',  pinyin:'xie1',           meaning:'To Rest',            rad:[[曷rad],[欠]      ]},

  { char:'贝',  pinyin:'bei4',           meaning:'Shell',             rad:[[冂],[人]                ]},
  { char:'见',  pinyin:'jian4',          meaning:'To See',            rad:[[冂],[儿]                ]},

{ char:'哀',  pinyin: 'ai1',             meaning:'Sorrow',                      rad: [[衣],[口]]},
{ char:'衰',  pinyin: 'shuai1',          meaning:'Decrease',                    rad: [[衣],[口],[一]]},
{ char:'衷',  pinyin: 'zhong1',          meaning:'Inner Feelings',              rad: [[衣],[口],[丨]]},
{ char:'包',  pinyin: 'bao1',            meaning:'Wrap',                        rad: [[勹],[巳]]},
{ char:'抱',  pinyin: 'bao4',            meaning:'Embrace',                     rad: [[扌],[巳],[勹]]},
{ char:'拘',  pinyin: 'ju1',             meaning:'Detain',                      rad: [[扌],[口],[勹]]},
{ char:'句',  pinyin: 'ju4',             meaning:'Sentence',                    rad: [[口],[勹]]},

{ char:'裁',  pinyin: 'cai2',            meaning:'To cut',                      rad: [[土],[衣],[戈]]},
{ char:'栽',  pinyin: 'zai1',            meaning:'To Grow',                     rad: [[土],[木rad],[戈]]},
{ char:'载',  pinyin: 'zai3 (zai4)',      meaning:'Write Down (To Load)',    rad: [[土],[车],[戈]]},

{ char: '彻', pinyin: 'che4',             meaning: 'Thorough',                           rad:[  [彳],[七],[刀]  ]},
{ char: '切', pinyin: 'qie1 (qie4)',      meaning:   'Cut (Eager)',                   rad:[ [七],[刀]  ]},
{ char: '窃', pinyin: 'qie4',             meaning:   'Steal',                              rad:[  [穴rad],[七],[刀]  ]},

{ char: '惭', pinyin: 'can2',             meaning:   'Ashamed',                            rad:[  [忄],[斩rad]  ]},
{ char: '渐', pinyin: 'jian4',            meaning:     'Gradually',                                rad:[ [氵], [斩rad]  ]},
{ char: '暂', pinyin: 'zan4',             meaning:   'Temporarily',                                rad:[  [斩rad],[日]  ]},
{ char: '崭', pinyin: 'zhan3',            meaning:     'High',                                     rad:[ [山],[斩rad  ]]},
{ char: '斩', pinyin: 'zhan3',            meaning:     'Chop',                                     rad:[  [车],[斤] ]},

{ char: '澈', pinyin: 'che4',             meaning:   'Clear',                        rad:[  [氵],[育rad],[攵]  ]},
{ char: '撤', pinyin: 'che4',             meaning:   'Withdraw',                       rad:[ [扌],[育rad],[攵]  ]},

{ char: '畐', pinyin: 'fu2',              meaning:   'Fill',                      rad: [ [一],[口],[田]  ]},
{ char: '幅', pinyin: 'fu2',              meaning:   'Width',                                           rad: [  [巾], [畐rad]   ]},
{ char: '辐', pinyin: 'fu2',              meaning:   'Spokes',                                           rad: [  [车],[畐rad] ]},
{ char: '福', pinyin: 'fu2',              meaning:   'Blessing',                                             rad: [  [礻],[畐rad]  ]},   
{ char: '富', pinyin: 'fu4',              meaning:   'Wealthy',                                             rad: [  [宀],[畐rad]   ]}, 
{ char: '副', pinyin: 'fu4',              meaning:   'Secondary',                                               rad: [  [畐rad],[刂]   ]},

{ char: '禾', pinyin: 'he2',              meaning:   'Grain',                                           rad: [  [一],[木rad],[曷rad]   ]},
{ char: '来', pinyin: 'lai2',             meaning:   'Come',                                            rad: [  [八rad],[未rad]   ]},
{ char: '米', pinyin: 'mi3',              meaning:   'Rice',                                          rad: [  [八rad], [木rad] ]},
{ char: '末', pinyin: 'mo4',              meaning:   'Tip',                                         rad: [  [一],[木rad]  ]},
{ char: '木', pinyin: 'mu4',              meaning:   'Tree',                                          rad: [  [木rad],[日]   ]},
{ char: '未', pinyin: 'wei4',             meaning:   'Not yet',                                             rad: [  [一],[木rad]  ]},
{ char: '季', pinyin: 'ji4',              meaning:   'Season',                           rad: [  [禾rad],[子] ]},
{ char: '李', pinyin: 'li3',              meaning:   'Plum tree',                             rad: [  [木rad],[子]  ]},

{ char: '坚', pinyin: 'jian1',            meaning:     'Resolve',                               rad: [  [丨],[丨],[又],[土]  ]},
{ char: '型', pinyin: 'xing2',            meaning:    'Model',                                rad: [  [开],[刂],[土] ]},
{ char: '监', pinyin: 'jian1',            meaning:       'Supervise',                           rad: [ [丨],[亻],[丶],[皿]]},
{ char: '蓝', pinyin: 'lan2',             meaning:     'Blue',                            rad: [ [艹],[监rad]   ]},
{ char: '览', pinyin: 'lan3',             meaning:     'To Look At',                      rad: [ [丨],[亻],[丶],[见rad]  ]},
{ char: '临', pinyin: 'lin2',             meaning:     'Just Near',                           rad: [ [丨],[亻],[丶],[口]  ]},

{ char: '浇', pinyin: 'jiao1',            meaning:       'Pour',                            rad: [ [氵],[戈],[兀]    ]},
{ char: '侥', pinyin: 'jiao3',            meaning:       'Lucky',                             rad: [ [亻],[戈],[兀]    ]},
{ char: '挠', pinyin: 'nao2',             meaning:     'Hinder',                                rad: [ [扌],[戈],[兀]    ]},
{ char: '饶', pinyin: 'rao2',             meaning:     'Plentiful',                             rad: [ [饣],[戈],[兀]   ]},
{ char: '绕', pinyin: 'rao4',             meaning:     'To Wind',                             rad: [ [纟],[戈],[兀]   ]},

{ char: '晋', pinyin: 'jin4',             meaning:     'Hinder',                        rad: [ [亚rad],[日]   ]},
{ char: '普', pinyin: 'pu3',              meaning:     'Universal',                           rad: [ [八rad],[晋rad]    ]},
{ char: '谱', pinyin: 'pu3',              meaning:     'Chart',                                     rad: [ [讠],[普rad]   ]},

{ char: '亚', pinyin: 'ya4',              meaning:     'Asia',                                rad: [ [一],[业rad]  ]},
{ char: '业', pinyin: 'ye4',              meaning:     'Profession',                            rad: [ [八rad],[丨],[一]   ]},

{ char: '歹', pinyin: 'dai3',             meaning:     'Evil',                              rad: [ [一],[夕rad]  ]},
{ char: '例', pinyin: 'li4',              meaning:     'Example',                             rad: [[亻],[歹rad],[刂]   ]},
{ char: '列', pinyin: 'lie4',             meaning:     'List',                            rad: [ [歹rad],[刂]    ]},
{ char: '烈', pinyin: 'lie4',             meaning:     'Intense',                             rad: [ [列rad],[灬]   ]},
{ char: '夕', pinyin: 'xi1',              meaning:     'Dusk',                                      rad: [[夕rad]  ]},

{ char: '生', pinyin: 'sheng1',           meaning:       'Life',                        rad: [ [牛rad],[一]   ]},
{ char: '牛', pinyin: 'niu2',             meaning:     'Afternoon',                         rad: [ [亻],[十rad]   ]},
{ char: '午', pinyin: 'wu3',              meaning:     'Cow',                           rad: [ [亻],[十rad]  ]},

{ char: '期', pinyin: 'qi1',              meaning:     'Period',                                rad: [ [其rad],[月rad]    ]},
{ char: '欺', pinyin: 'qi1',              meaning:     'Deceive',                                 rad: [ [其rad],[欠]   ]},
{ char: '其', pinyin: 'qi2',              meaning:     'Such',                                  rad: [ [甘],[一],[八rad]   ]},
{ char: '棋', pinyin: 'qi2',              meaning:     'Chess',                               rad: [ [木rad],[其rad]   ]},

{ char: '辛', pinyin: 'xin1',             meaning:     'Suffering',                 rad: [ [立],[十rad]   ]},
{ char: '幸', pinyin: 'xing4',            meaning:       'Fortunate',                 rad: [ [土],[八rad],[干]    ]},

{ char: '诞', pinyin: 'dan4',             meaning:     'Birth',                                 rad: [ [讠],[延rad]    ]},
{ char: '廷', pinyin: 'ting2',            meaning:       'Royal Court',                           rad: [[廴], [壬]   ]},
{ char: '庭', pinyin: 'ting2',            meaning:       'Yard',                                    rad: [ [广],[廷rad]    ]},
{ char: '挺', pinyin: 'ting3',            meaning:       'Rather',                                  rad: [[扌],[廷rad]  ]},
{ char: '延', pinyin: 'yan2',             meaning:     'Prolong',                                   rad: [ [廴],[正rad]   ]},

{ char: '输', pinyin: 'shu1',             meaning:     'Transport',                                     rad: [[车], [俞rad]   ]},
{ char: '俞', pinyin: 'yu2',              meaning:     'Assent',                                          rad: [ [人],[一],[月rad]    ]},
{ char: '偷', pinyin: 'tou1',             meaning:     'Thief',                                       rad: [ [亻],[俞rad]    ]},
{ char: '愉', pinyin: 'yu2',              meaning:     'Pleasant',                                    rad: [[扌],[俞rad]  ]},
{ char: '愈', pinyin: 'yu4',              meaning:     'Heal',                                        rad: [ [俞rad],[心]    ]},
{ char: '喻', pinyin: 'yu4',              meaning:     'Analogy',                                     rad: [ [口],[俞rad]   ]},
]


//STATE
const [clickedCharacter, setClickedCharacter ] = useState('');

const [searchTerm, setSearchTerm] = useState('');


//HANDLER FUNCTIONS - MAIN CHARACTER CLICK AND SCROLL
const handleClick = (e) => {
 setClickedCharacter(clickedCharacter == e.target.id ? '' : e.target.id);
 const section = document.getElementById(`${e.target.id}`);
 section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

//SEARCHBAR SETSTATE
const handleChange =(e)=> {
  setSearchTerm(e.target.value);

  //Close any open cards on typing change
  setClickedCharacter('');
}

// const scrollToSection = () => {
//   const section = document.getElementById(`${clickedCharacter}`);
//   section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//  }

//CONSTS

//HTML RETURN
  return (
    <div className="App">
          <Header></Header>
          <SearchBar handleChange={handleChange}></SearchBar>
          <MainCharacterCard
          arraysOfCharacters={arraysOfCharacters}
          characterspop={characterspop}
          clickedCharacter={clickedCharacter}
          handleClick={handleClick}
          searchTerm={searchTerm}
          ></MainCharacterCard>
          
          <Quiz
            arraysOfCharacters={arraysOfCharacters}
            characterspop={characterspop}
          ></Quiz>

    </div>
);
}

export default App;

























