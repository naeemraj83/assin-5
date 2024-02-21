console.log('done');

const allBtn = document.getElementsByClassName('add-btn');
let count = 0;



for (const button of allBtn) {
   button.addEventListener('click', function(e){
  count = count + 1;

  setText('n-count',count);

const sitName = e.target.parentNode.childNodes[1].innerText ;
const dataAll=document.getElementById('data-all');

const li = document.createElement('li');
const p = document.createElement('p');
p.innerText = sitName ;
const p2 = document.createElement('p');
p2.innerText= 'AcBus';
const p3 = document.createElement('p');
p3.innerText= '550';

 const color = e.target.parentNode.childNodes[1].style.backgroundColor = '#90EE90';
// if( conNumber + 1>4){
//    alert('r na ')
//    return;
// }

li.appendChild(p);
li.appendChild(p2);
li.appendChild(p3);
dataAll.appendChild(li);

const totalAmmount = document.getElementById('t-price').innerText;
const convert = parseInt(totalAmmount);
const sum = convert + parseInt(p3.innerText);
document.getElementById('t-price').innerText = sum ;

const totalAmmountS = document.getElementById('g-price').innerText;
const convertGrand = parseInt(totalAmmountS);
const sum1 = convertGrand + parseInt(p3.innerText);
document.getElementById('g-price').innerText = sum1 ;

// const minus1 = document.getElementById('m-count');
// if( minus1 + 1 < 5){
//    // alert('r na ');
//    return;
// }

 const upperNumber = document.getElementById('m-count').innerText;
 const conNumber =parseInt(upperNumber);
 const minus = conNumber - 1 ;
 document.getElementById('m-count').innerText = minus;


   });
    
}

function setText(id, value){
    document.getElementById(id).innerText = value;
}

function hide(){
  const homeSec =document.getElementById('home');
  // console.log(homeSec.classList);
  homeSec.classList.add('hidden');

  const hiddenSec =document.getElementById('model');
  hiddenSec.classList.remove('hidden');

}





