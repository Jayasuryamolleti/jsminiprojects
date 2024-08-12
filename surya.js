console.log('welcome to calculator');
while(true){
    console.log('1.addition\n2.subtraction\n3.Multiplication\n4.divison')
    let choice=parseInt(prompt('Enter your choice:'));
    if(choice===1){
        let num1=parseInt(prompt('Enter your num1:'));
        let num2=parseInt(prompt('Enter your num1:'));
        let add=num1+num2
        console.log("the sum is:",add)
    }
    else if(choice===2){
        let num1=parseInt(prompt('Enter your num1:'));
        let num2=parseInt(prompt('Enter your num1:'));
        let sub=num1-num2
        console.log("the difference is:",sub)
    }
    else if(choice===3){
        let num1=parseInt(prompt('Enter your num1:'));
        let num2=parseInt(prompt('Enter your num1:'));
        let mul=num1*num2
        console.log("the multiplication is:",mul)

    }
    else if(choice===4){
        let num1=parseInt(prompt('Enter your num1:'));
        let num2=parseInt(prompt('Enter your num1:'));
        let div=math.floor(num1/num2)
        console.log("the division is:",div)
    }
    else{
        console.log('invalid input loop stopped');
        break;
    }
}