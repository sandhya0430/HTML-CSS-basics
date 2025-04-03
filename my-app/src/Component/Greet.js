import React from 'react' ;
function Greet(props){
    console.log(props.name);
    return <h1>Hello World {props.name}</h1>
}
export default Greet;