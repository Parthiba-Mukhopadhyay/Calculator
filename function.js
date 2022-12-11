let str="";
let buttons1=document.querySelectorAll('.button'); //to select all query having class button
Array.from(buttons1).forEach((button)=>{ //Array listing all the instances
    button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='=') //It evaluates the string
    {
        str=eval(str);
        
    }
    else if(e.target.innerHTML=='AC') //to perform all clear operation
    {
        str="";
    }
    else if(e.target.innerHTML=='D') // to perform delete operation
    {
        str=str.substring(0,str.length-1);
    }
    else{
        str=str+e.target.innerHTML;
    }
    document.querySelector('input').value=str; //To assign the input box value with the value of string
    })
})
