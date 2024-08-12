console.log("welcome to ATM")
let pin = parseInt(prompt("Enter PN Number"))
let total =1000;

let userExist=false;
for(let i=0;i<100;i++){
    if(i==pi){
        console.log("User Exists")
        userExist = true;
        break;
    }
}

if(!userExist){
    console.log("User NOT Exist")
}
else{
    while(true){
        console.log("1.Deposit\n2.withdraw\n3.Balance Enquiry\n4.Exit")
        let choice = parseInt(prompt("Enter your choice"))
        if(choice==1){
            let dep = parseInt(prompt("Enter Amount to Deposit"))
            AC=AC+dep;
            console.log("Now Your Account Balance is ",AC)
        }
        else if (choice==2){
            let wth =parseInt(prompt("Enter Amount to Withdraw:"))
            AC=AC-wth;
            console.log("Now Your Account Balanceelse if (choice==3){ is ",AC)

        }
        else if (choice==3){
            console.log("Now Your Account Balance is ",AC)
        }
        else if (choice==4){
            console.log("Thanks for coming,visit Again")
            break;
        }
        else{
            console.log("Invalid Input")
            break;
        }
        let next =prompt("Enter Yes or No")
        if(next.toLowerCase()=="no"){
            console.log("Thanks for coming,visit again")
            break;
        }
    }
}