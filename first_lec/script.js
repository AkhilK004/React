// const parent = document.getElementsByClassName("container")[0];
// parent.style.width="100px";

// const lst = parent.querySelectorAll('ul')[0];

// const btn = document.createElement('button');
// parent.appendChild(btn);
// btn.style.height='40px'; 
// btn.style.width='100px';
// btn.style.margin='10px';
// btn.innerHTML="New !";


// const btn2 = document.createElement('button');
// parent.appendChild(btn2);
// btn2.style.height='40px'; 
// btn2.style.width='100px';
// btn2.style.margin='10px';
// btn2.innerHTML="Remove";

// btn.addEventListener('click',(event)=>{
//   const newElement = document.createElement('li');
//   newElement.innerText="new element";
//   lst.appendChild(newElement);
// })

// btn2.addEventListener('click',(event)=>{
//   const capture = lst;
//  capture.removeChild(lst.lastChild);
// })


const React = {
    createElement: function(tag, style, children) {
        const element = document.createElement(tag);
        element.innerText = children;

        for (const key in style) {
            element.style[key] = style[key];
        }

        return element;
    }
};

// Example usage:
const div = React.createElement('div', { color: 'red', fontSize: '20px' }, 'Hello World!');
document.body.appendChild(div);

const div2 = React.createElement('div', { color: 'blue', fontSize: '20px' }, 'I am AKhil!');
document.body.appendChild(div2);