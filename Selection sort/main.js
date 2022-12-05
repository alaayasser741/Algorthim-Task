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
  selectionSort(arr);
  event.preventDefault();
}}
)
sortBtn.addEventListener('click',()=>{
  selectionSort(arr)
})




//? Selection Sort Code

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for(let i = 1;i < arr.length;i++){
    if(arr[i] < smallest){
        smallestIndex = i;
        smallest=arr[i]
    }
}
return smallestIndex
}
function selectionSort(arr){
    let newArr=[];
    let smallest;
    let deleteItem;
    let n =arr.length;
    for(let i = 0;i < n;i++){
        smallest = findSmallest(arr);
        deleteItem = arr.splice(smallest,1)
        newArr.push(...deleteItem);
    }
    screen.innerHTML = newArr;
    return newArr
}

/*
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) { // >> n
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) { // >> n
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
  }
}
console.log(selectionSort([2, 3, 4, 1, 5]));
*/