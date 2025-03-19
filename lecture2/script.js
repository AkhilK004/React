import React from "react";
import ReactDOM from "react-dom/client"

// const element = React.createElement(
//     'h1',
//     {id:'element',class:'element1',style:{backgroundColor:'black',color:'green'}},"Hello EveryOne"
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// const element2 = React.createElement(
//     'h1',
//     {id:'element2',class:'element',style:{backgroundColor:"black",color:"blue"}},
//     'Como estas!'
// );

// const divBundle = React.createElement('div',
//     {id:'container1',class:'container',style:{backgroundColor:'black'}},[element,element2]
// )
// root.render(divBundle);

const name ="Akhil";
const student = 
{
    name:"Akhil",
    age:21
}

const greet =()=>{
    <h3>hello bhai!</h3> 
 }

const studentName =["akhil ","vishal ","ankit ","satyam ","harsh"];

const newElement =(
<>
<h1 id='heading1' className="heading">Hello EveryOne {student.name} !</h1>
<h2>Hows everything {name}!</h2>
</> 
)
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(newElement );




