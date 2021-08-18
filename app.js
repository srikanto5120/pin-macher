function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const string = pin + '';
    if(string .length == 4){
        return pin;
    }else{
         
         getPin()
    }
}
function generatePin(){
   document.getElementById('display-pin').value = pin;
     
}
document.getElementById('keypad').addEventListener('click',function(event){
const inputNumber= event.target.innerText;
const calcNUmber= document.getElementById('calc');
 if(isNaN(inputNumber)){
     if(inputNumber =='C'){
        calcNUmber.value= ''; 
     }

 }
 else{
    
    const previousNumber = calcNUmber.value;
    const newNumber =  previousNumber + inputNumber;
    calcNUmber.value = newNumber;
 }

})
 function veryfiedPin(){
 const typedPin = document.getElementById('calc').value;
const displayPin= document.getElementById('display_pin2')
 if(displayPin = typedPin){
     console.log('pin matched')
 }else{
     console.log('opps!')
 }
}