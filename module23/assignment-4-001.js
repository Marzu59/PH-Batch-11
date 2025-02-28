function cashOut(money){
    if( typeof money !== 'number'  ){
        return 'Invalid'
    }



    const percentege = 1.75;
    const charge = money * percentege / 100;
    return charge;

 
}
 
// const co  = cashOut('two thousend')
// console.log(co)

// assignment task2--

function validEmail(email){
if( typeof email !== 'string'){
    return 'Invalid'
}    
if(email[0] == '.' || email[0] == '-' || email[0] == '_' || email[0] == '+' || email[0] == '@' || email[0] == ' ' ){
    return false;
}
else if( !email.includes('@')   ){
    return false;
}
else if( !email.endsWith('.com')   ){
    return false;
}
else if( email.includes(' ') ){
    return false;
}


else{
    return true;
}

}


// const mail = 'nazmul28@gmail.com'
// console.log(validEmail(mail))



// assignment task3 


function electionResult(array){
    if(!Array.isArray(array)){
        return 'Invalid'
    }

     let count1 = 0;
     let count2 = 0;
    for(let arr of array){

          
        if( arr === "mango" ){
            count1++;
        }
        else if(arr === "banana"){
            count2++;
        }


    }
    if( count1 > count2 ){
        return 'mango'
    }
    else if(count2 > count1){
        return 'banana'
    }
    else if( count1 == count2){
        return 'draw'
    }

  

}

// const allVote =  ["mango", "banana", "Na-Vote", "mango"]


// const  all = electionResult(allVote);
// console.log(all)
