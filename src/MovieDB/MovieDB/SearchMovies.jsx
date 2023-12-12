import React from 'react';
import { Input } from 'antd';
const SearchMovies = (props) => {
    return (
        <div className='col col-md-6'>
        <form  className="ml-auto form-inline">
     <Input style={{width:200,marginRight:'50px'}} placeholder='Type something for search' 
     value={props.value}
     className='search' onChange={()=>props.setSearchMovies(event.target.value)}/>
    
   </form>
   </div>
    );
}

export default SearchMovies;
