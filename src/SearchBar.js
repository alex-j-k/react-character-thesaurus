import React from 'react'


const SearchBar = (
    {handleChange}
) => {

    return (  
        <div className="searchbar">
            <input className='searchinput' type='search' onChange={handleChange} placeholder='Search by pinyin...'/>
        </div>
    );
}
 
export default SearchBar
