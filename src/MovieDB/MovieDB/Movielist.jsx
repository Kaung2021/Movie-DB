import React from 'react';
import { List,Card } from 'antd';
const Movielist = (props) => {
     const Favcomponent = props.favourite;
      // Check if props.movies is a valid array
  if (!props.movies || !Array.isArray(props.movies)) {
    return null; // or return some default content or an error message
  }
    return (
        <>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '10px' }}>

            {props.movies.map((movie,index)=>(
                <List
                 key={index}
                grid={{ gutter: 16, column: 'auto' }}
              
                >

                  <List.Item>
                    <Card
                      hoverable
                      style={{ width: 240, height: 'fit-content', padding: '5px', margin: '5px' }}
                      cover={<img src={movie.Poster} alt="" style={{ width: '100%', height: 'auto' }} />}
                      className='img-container'
                      onClick={()=>props.handlefavourite(movie)}
                      >
                      <Card.Meta title={movie.Title} description={`Year: ${movie.Year}`}  />
                    <div className="overlay-layer" >
                     <Favcomponent/>   </div> 
                    </Card>
                  </List.Item>
                        </List>
           
            
            ))}  
                      </div>
        </>
    );
}

export default Movielist;
