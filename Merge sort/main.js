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
    mergeSort(arr);
  event.preventDefault();
}}
)
sortBtn.addEventListener('click',()=>{
  mergeSort(arr)
})




//? Merge Sort Code
function merge(leftArr,rightArr){
  let B=[]
  while(leftArr.length && rightArr.length){
    if(leftArr[0] < rightArr[0]){
      B.push(leftArr.shift())
    }else{
      B.push(rightArr.shift())
    }
  }
  // console.log([...B , ...leftArr,...rightArr])
  // screen.innerHTML = [...B,...leftArr,...rightArr];
  screen.innerHTML = [...B,...leftArr,...rightArr];
  return [...B,...leftArr,...rightArr]
}
function mergeSort(arr){
  
  if(arr.length <= 1){ return arr}
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right)
}

