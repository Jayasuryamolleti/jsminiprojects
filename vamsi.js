console.log("WELCOME TO ATM")
let pin=parseInt(prompt('ENTER YOUR PIN:'));
let total=1000;
let userexist=false;
for(let i=0;i<100;i++){
    if(pin==1234){
        console.log('user exists')
        userexist=true;
    }
}
if(!userexist){
    console.log('user not existed')
}
else{
    while(true){
        console.log("1.check balance\n2.deposit\n3.withdraw\n4.exit")
        let choice=parseInt(prompt('enter your choice:'));
        if(choice===1){
            console.log("your balace ",total);
        }
        else if(choice===2){
            let dep=parseInt(prompt('Enter your amount to deposit:'));
            total=total+dep
        }
        else if(choice===3){
            let draw=parseInt(prompt('Enter your amount to deposit:'));
            total=total-draw
        }
        else{
            console.log('Thank you for using the ATM');
            break;
        }

    }
}