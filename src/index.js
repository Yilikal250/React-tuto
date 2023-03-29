import React from 'react';
import ReactDOM from 'react-dom';


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

function Greetings(){
  return (<div>  
  <h4>this is Yilikal and this is my first 
    </h4> 
    </div>);
}

// const Greetings = () => {

//   return React.createElement('h1',{},'hello world')
// }

ReactDOM.render(<Greetings/>,document.getElementById('root')); 
