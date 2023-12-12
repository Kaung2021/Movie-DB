import React from 'react';

const Headind = (props) => {
    return (
        <div>
            <h3 style={{color:'white',fontFamily:'monospace'}} className='m-2'>{props.heading}</h3>
        </div>
    );
}

export default Headind;
