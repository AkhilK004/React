const element = React.createElement(
    'h1',
    {id:'element',class:'element1',style:{backgroundColor:'black',color:'green'}},"Hello EveryOne"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

const element2 = React.createElement(
    'h1',
    {id:'element2',class:'element',style:{backgroundColor:"black",color:"blue"}},
    'Como estas!'
);

const divBundle = React.createElement('div',
    {id:'container1',class:'container',style:{backgroundColor:'black'}},[element,element2]
)
root.render(divBundle);