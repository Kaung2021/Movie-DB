import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import React from 'react';

const Favourite = (props) => {
    return (
        <div>
             <p style={{textAlign:'center',color:'white',marginTop:'30px'}}>
                Add to Favourite 
                <HeartFilled style={{color:'white'}}/>
             </p>
        </div>
    );
}

export default Favourite;
