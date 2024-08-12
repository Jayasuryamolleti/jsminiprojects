console.log('welcome to Train ticket reservation');
while(true){
    console.log('1.one AC\n2.two AC\n3.sleeper\n4.general')
    let choice=parseInt(prompt('Enter your choice:'));
    if(choice===1)
    {
        let total=15;
        console.log('Available Tickets:',total)
        let tkt=parseInt(prompt('Enter no.of tickets:'))
        if (tkt<=total){
            console.log('Booking confirmed:',tkt)
            let rem=total-tkt
            console.log('remaining tickets:',rem)
        }
        else{
            console.log('not available')
            break;
        }
    }
    else if(choice===2)
    {
        let total=15;
        console.log('Available Tickets:',total)
        let tkt=parseInt(prompt('Enter no.of tickets:'))
        if (tkt<=total)
        {
            console.log('Booking confirmed:',tkt)
            let rem=total-tkt
            console.log('remaining tickets:',rem)
        }
        else
        {
            console.log('not available')
            break;
        }

    }
    else if(choice===3)
    {
        var upper=10;
        var middle=10;
        var down=10;
        console.log('1.upper\n2.middle\n3.down');
        ch=parseInt(prompt('choose your option:'))
        if(ch===1){
            console.log('Available tickets:',upper)
            utk=parseInt(prompt('Enter no.of tickets:'));
            if(utk<=upper){
                console.log('tickets confirmed:',utk);
            }
            else{
                console.log('not available');
            }

        }
        if(ch===2){
            console.log('Available tickets:',middle)
            utk=parseInt(prompt('Enter no.of tickets:'));
            if(utk<=middle){
                console.log('tickets confirmed:',utk);
            }
            else{
                console.log('not available');
            }

        }
        if(ch===3){
            console.log('Available tickets:',down)
            utk=parseInt(prompt('Enter no.of tickets:'));
            if(utk<=down){
                console.log('tickets confirmed:',utk);
            }
            else{
                console.log('not available');
            }

        }

    }
    else if(choice===4)
    {
        let gen=100;
        console.log('available tickets:',gen);
        gtkt=parseInt(prompt('enter the number of tickets:'));
        if(gtkt<=gen)
        {
            console.log('ticket confirmed:',gtkt)
            console.log('remaining tickets:',(gen-gtkt));
        }
        else{
            console.log('na')
        }

    }
    else{
        console.log('Invalid option')
        break;
    }
}
