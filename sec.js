//const heading=document.getElementById("heading");
//console.log(heading)
//get element by tag
const header=document.getElementsByTagName("h2");
console.log(header);
//get element by class names
const headcl=document.getElementsByClassName('headcl');
console.log(headcl);
//query selector
const first=document.querySelector('#heading');
console.log(first);
const second=document.querySelector('.headcl');
console.log(second);
//queryselectorby all
const third=document.querySelectorAll('.headcl');
console.log(third);
//by using th child node we should get parent node
const two=document.querySelector('.two');
const parent=two.parentNode;
console.log(parent);
//childrenNodes by using parent we get children
const parent1=document.querySelector('.parent');
console.log(parent1.childNodes);
//nextelementsibling-get the next sibling 
const fourth=document.querySelector('.two');
console.log(fourth.nextElementSibling);
//previous sibling
const subhead=document.querySelector('h3');
console.log(subhead.previousElementSibling);
//manipulation of text
const heading=document.querySelector('#heading');
heading.innerHTML="web dev is excellent";
heading.style.color='red';
heading.style.fontSize='70px';
//to add class
heading.classList.add('title');
heading.classList.add('title2');
heading.classList.remove('title');
//to add elements
const five=document.createElement('h2');
five.innerHTML="adding h2 element";
//const parent1=document.querySelector('.parent');
parent1.appendChild(five);//it append the element at the last
console.log(five);
five.classList.add('title');

const six=document.createElement('h3');
six.innerHTML="adding  anthore h3 element";
//want to add element above something
heading.insertAdjacentElement('beforebegin',six)