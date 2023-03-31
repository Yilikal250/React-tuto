import React from 'react'

import React from 'react'

const Book = (props) => {
    const {img,title,author} = props;
    return <article className='book'>
      <img src={img} alt=""/>
      <h1 onClick={()=>console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>refernce example</button>
       </article>;
  }

export default Book
