function getpin(){
    const pin = genaratepin();
    const pinstring = pin + '';
    if(pinstring.length === 4){
        return pin;
    }
    else{
        
        return getpin();
    }
}

function genaratepin(){
    const random = Math.round(Math.random()*10000)
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getpin();
    // console.log(pin);
    const displayPinField = document.getElementById('display-pin');
         displayPinField.value = pin;   
    
})
document.getElementById('calculator').addEventListener('click',function(event){
   const number = event.target.innerText;
   const typedNumberField = document.getElementById('typed-number')
   const previouseTypeNumber = typedNumberField.value;
    if(isNaN(number)){
          if(number === 'C'){
            typedNumberField.value = '';
          }
          else if(number === '<'){
            const digits = previouseTypeNumber.split('')
            digits.pop();
            const remainingdigit = digits.join('');
            typedNumberField.value = remainingdigit;
          }
    }
    else{
        
        
        const newTypeNumber = previouseTypeNumber + number;
        typedNumberField.value = newTypeNumber;

    }
    
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin')
    const currentPin = displayPinField.value;


    const typedNumberField = document.getElementById('typed-number')
    const typeNumber = typedNumberField.value;
    const pinSuccessNumber = document.getElementById('pin-success');
    const failurePinNumber = document.getElementById('pin-failure');
    if(currentPin === typeNumber){
          
           pinSuccessNumber.style.display = 'block';
           failurePinNumber.style.display = 'none' ; 
    }

    else{
        
        failurePinNumber.style.display = 'block' ;  
        pinSuccessNumber.style.display = 'none'; 
    }
})