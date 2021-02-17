var date = new Date();                  //date object
var presentYear = date.getFullYear();   //current year

//This function computes interest and if user give 0 or -ve no then alert user.

function compute(){
    let principal = parseFloat(document.querySelector('#principal').value);
    if(principal<=0 || isNaN(principal)){
        alert("Enter a positive number");
        document.querySelector('#principal').focus();
    }
    else{
        let rate = parseFloat(document.querySelector('#rate').value);
        let years = parseFloat(document.querySelector('#years').value);
        let interest = principal*years*rate/100;
        document.getElementById('result').innerHTML="<br>If you deposit <span class='highlight'>"+principal+"</span>,<br>\
                                                at an interest rate of <span class='highlight'>"+ rate+"%</span>.<br>\
                                                You will receive an amount of <span class='highlight'>"+interest+"</span>,<br>\
                                               in the year <span class='highlight'>"+ (presentYear+years) +"</span><br>";
    }
}


//This function change rate of interest.

function newStatus(){
    let rate = parseFloat(document.querySelector('#rate').value);
    document.querySelector('#status').innerHTML=rate+"%";
}
