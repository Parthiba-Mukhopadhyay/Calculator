let str="";
let buttons1=document.querySelectorAll('.button');
Array.from(buttons1).forEach((button)=>{
    button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='=')
    {
        str=eval(str);
        
    }
    else if(e.target.innerHTML=='AC')
    {
        str="";
    }
    else if(e.target.innerHTML=='D')
    {
        str=str.substring(0,str.length-1);
    }
    else{
        str=str+e.target.innerHTML;
    }
    document.querySelector('input').value=str;
    })
})
