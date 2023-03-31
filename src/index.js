import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const  books = [{
  id:1, 
  img:'https://m.media-amazon.com/images/I/81TMvHnKlwL._AC_UY327_FMwebp_QL65_.jpg',
  title:'I Love You to the Moon and Back',
  author:'Sam McBratney and Anita Jeram'
},

 {
  id:2,
  img:'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg',
  title:'Guess How Much I Love You',
  author:'Amelia Hepworth'
},
{
  id:3,
  img:'https://m.media-amazon.com/images/I/71nfLYoh5jL._AC_UY327_FMwebp_QL65_.jpg',
  title:'Peter Rabbit I Love You Daddy',
  author:'Beatrix Potter'
}
];


function BookList(){
  return (
    <section className='booklist'>
      {books.map((books)=> {
      return <Book key={books.id} {...books}> </Book>;
    })}

    </section>
  );
}



const Book = (props) => {
  const {img,title,author} = props;
  return <article className='book'>
    <img src={img} alt=""/>
    <h1>{title}</h1>
    <h4>{author}</h4>
     </article>;
}


ReactDOM.render(<BookList/>,document.getElementById('root')); 