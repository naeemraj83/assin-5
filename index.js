console.log('done');


// function makeColor(){
//     document.button.style.backgroundColor='green';
// }

// document.getElementById('btn-a1').addEventListener('click', function(){
// const locationId = document.getElementById('location');
// const locationId1 = document.getElementById('location1');
// const locationId2 = document.getElementById('location2');
// locationId.innerText = ' naeem ';
// locationId1.innerText = ' naeem1 ';
// locationId2.innerText = ' naeem2 ';
// locationId.append


// })

// document.getElementById('btn-a2').addEventListener('click', function(){
//     const locationId = document.getElementById('location');
//     const locationId1 = document.getElementById('location1');
//     const locationId2 = document.getElementById('location2');
//     locationId.innerText = ' naeem3 ';
//     locationId1.innerText = ' naeem4 ';
//     locationId2.innerText = ' naeem5 ';
    
    
//     })



const allBtn = document.getElementsByClassName('add-btn');
// console.log(buttons);
let count = 0;


for (const button of allBtn) {
   button.addEventListener('click', function(e){
  count = count + 1;
  counts  = count - 8;
  

  setText( 'n-count',count);
setText('m-count', counts);


// const sitName = e.target.parentNode.childNodes[3].innerText ;
const sitName = e.target.parentNode.childNodes[1].innerText ;


// console.log(e.target.parentNode.parentNode);
// console.log(e.target.parentNode.childNodes[1].innerText );



const dataAll=document.getElementById('data-all');

const li = document.createElement('li');
const p = document.createElement('p');
p.innerText = sitName ;
// p.innerText = sitNameS ;

const p2 = document.createElement('p');
p2.innerText= 'AcBus';
const p3 = document.createElement('p');
p3.innerText= '550';

li.appendChild(p);
li.appendChild(p2);
li.appendChild(p3);
dataAll.appendChild(li);

const totalAmmount = document.getElementById('t-price').innerText;
const convert = parseInt(totalAmmount);
// const taka = document.get
// console.log(convert + parseInt(p3.innerText) )

const sum = convert + parseInt(p3.innerText);
document.getElementById('t-price').innerText = sum ;




   });
    
}

function setText(id, value){
    document.getElementById(id).innerText = value;
}





//     const seats = document.querySelectorAll(".add-btn");
// const tickets = document.querySelectorAll(".ticket")

// let totalPrice = 0;
// let seatCount =0;
// let remainSeat =8;




// for (let i = 0; i < seats.length; i++) {
//     const seat = seats[i];
    
//     seat.addEventListener("click", function () {
        

      
//         totalPrices = + 550;

        

        
//         setText("price-count", totalPrice);
//         setText("grand-total", totalPrice);
//         setText("seat-count", seatCount);
//         setText("remain-seat", remainSeat);
//     })
// }

// // function setText(id, value){
// //     document.getElementById(id).innerText = value;
// // }
