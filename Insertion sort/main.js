const inputNum = document.getElementById('array');
const screen = document.getElementById('display');
const addBtn = document.getElementById('add');
const sortBtn = document.getElementById('sort');
let arr =[];
let num = 0;
addBtn.addEventListener('click',()=>{
  num = inputNum.value;
  inputNum.value = '';
  arr.push(parseFloat(num))
  
})
document.addEventListener('keypress',
function(event){
  if(event.key ==" "){
    num = inputNum.value;
  inputNum.value = '';
  arr.push(parseFloat(num))
  event.preventDefault();
  }
}
)
document.addEventListener('keypress',
function(event){
  if(event.key =="Enter"){
    insertionSort(arr);
  event.preventDefault();
}}
)
sortBtn.addEventListener('click',()=>{
  insertionSort(arr)
})




//? Insertion Sort Code
function insertionSort(arr){
  for(let j =1;j<arr.length;j++){
    let key =arr[j];
    let i = j-1;
    while(i>=0 && arr[i]>key){
      arr[i+1]=arr[i]
      i--;
    }
    arr[i+1]=key;
  
  }
  screen.innerHTML = arr;
}