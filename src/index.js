import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// 1,
//stateless function component
//always return jsx

//2,
//jsx rules
//return single element
//div / section / article or Fregment
//use camelCase for html attribute
//className instead of class
//formating

// Nested Components,React Tools 

function BookList(){
  return (
    <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
    </section>
  );
}


const Book = () => {

  return <article>
    <Image></Image>
    <Title/>
    <Author/>
     </article>;
}

const Image = () => <img src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg" alt=""/>
const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>

ReactDOM.render(<BookList/>,document.getElementById('root')); 