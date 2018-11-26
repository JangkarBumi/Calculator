/*Before this code i have already tried to create it 
manually inserting onclick event listener for every button in html
which is resulting in long and ugly code
*/


//select all span which is contain number & operator
let button = document.querySelectorAll(".container span")

//add event listener to button;parameter(e) represent the element that was affected by it
for(let i =0;i<button.length;i++){
    button[i].onclick = function(e) {

     let result =   document.querySelector(".result")
     let inputValue = result.innerHTML;
     //in this case "this" refer to global variable button; a.k.a window which is default
        let btnValue = this.innerHTML;
//cannot clear result using inputValue variable but can use result.innerHTML directly
//assign number to result if the button is not an operator or clear button
        if(btnValue == "C") {
            result.innerHTML = "0";
//plus minus sign to convert positive value to negative and vice versa            
        } else if (btnValue == "+/-"){
            result.innerHTML = -result.innerHTML
           // eval() function evaluates or executes an argument.
        }  else if(btnValue == "="){
            let operator = inputValue

            //replace symbol with functional operator using regex
            operator = operator.replace(/X/g, '*').replace(/÷/g, '/').replace(/,/g, '.'); 
     

             result.innerHTML = eval(operator);
                
        } else if (btnValue == "%") {
            result.innerHTML =  result.innerHTML / 100;
        }  else {
            if(inputValue == 0) {
                result.innerHTML =""
            }
           result.innerHTML += btnValue;
        }
        if(result.innerHTML=="Infinity") {
            result.innerHTML="Really bro? It's infinity you know";
        }
}
}


