// show = (val) => {
//     return document.getElementById('result').value += val;
// }
// equal = () => {
//     var exp = document.getElementById('result').value;

//     if (exp) {
//         document.getElementById('result').value = eval(exp)
//     }
// }


// cleartext = () => {
//     return document.getElementById('result').value = '';
// };
// class Calculator{
//     constructor(prevOperandTextElement,curOperandTextElement){
//         this.prevOperand = prevOperandTextElement;
//         this.curOperand = curOperandTextElement;
//         this.clear();
//     }

// clear(){
// this.curOperand = '';
// this.prevOperand = '';
// this.operation = undefined;
// }
// appendNumber(number){

// this.curOperand =this.curOperand.toString() +number.toString();
// }
// chooseOperation(operation){
//     if(this.curOperand == '')return
// this.operation = operation;
// this.prevOperand = this.curOperand;
// this.curOperand ='';
// }
// compute(){

// }
// display(){
// this.curOperandTextElement.innerText = this.curOperand;
// this.prevOperandTextElement.innerText = this.prevOperand;
// }
// }
// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equlasButton = document.querySelectorAll('[data-equals]');
// const clearButton = document.querySelectorAll('[data-clear]');
// const prevOperandTextElement = document.querySelectorAll('[data-previous-opreand]');
// const curOperandTextElement = document.querySelectorAll('data-current-operand'); 
buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('button text ',buttonText);
    })
}

// const calculator =new Calculator(prevOperandTextElement,curOperandTextElement);
// numberButtons.forEach(button =>{
//     button.addEventListener('click',(e)=>{
//         buttonText = e.target.innerText;
     
//         calculator.appendNumber(button.innerText);
//         calculator.display();
//     })
// })