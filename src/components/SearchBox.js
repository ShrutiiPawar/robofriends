import React from "react";

const SearchBox=({searchChange})=>{
    return(
        <div className="pa2" >
            <input 
            className="tc pa3 ba bg-lightest-blue" 
            type= 'search'
            placeholder='search robots'
            onChange = {searchChange}
            />
        </div>


    );
}
export default SearchBox;
// here evrytime on change event is triggered(line 10 in the above code) call the search change fucntion
//then if you remeber searchChange function that is passed as a prop is the onSearchChange function