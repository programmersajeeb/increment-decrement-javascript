//dom declear
const counter = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

//inisilaization
let count = 0;

// event

incrementEl.addEventListener('click', () =>{
  count++;
  counter.innerText = count;
})
// incrementEl.onclick = () =>{
//   count++;
//   counter.innerText = count;
// }
decrementEl.addEventListener('click', () =>{
  count--;
  counter.innerText = count;
  if (count <= 0){
    decrementEl.style.color = 'blue';
    count = 0;
    counter.innerText = 0;
  }else if (count >= 0) {
    decrementEl.style.color = 'white';
  }
})