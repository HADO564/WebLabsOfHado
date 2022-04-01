let m=null;

function MC()
{
    m=null;
}

function MS()
{
    m=document.getElementById('main').value;
}

function MR()
{
    document.getElementById('main').value=m;
}

function Mplus()
{
    m= m+'+'+ document.getElementById('main').value;
    console.log("Mplus1")
    solve2();
    document.getElementById('main').value=m;
}

function decimal() {
    let x = document.getElementById('main').value;
    if (x == '')
        x = '0.';
    else
        x += '.';

    document.getElementById('main').value = x
}

function comp() {
    let x = document.getElementById('main').value;
    if (x[0] == '+')
        x = x.replace('+', '-');
    else if (x[0] == '-')
        x = x.replace('-', '+');
    else
        x = "+" + x;
    document.getElementById('main').value = x;
}

function solve(){
    let x = document.getElementById('main').value;
    x=x.replace('^','**');
    x=eval(x);
    if(x=="Infinity")
    x="Math Error";
    document.getElementById('main').value=x;
}

function solve2(){
    x=m;
    x=x.replace('^','**');
    x=eval(x);
    if(x=="Infinity")
    x="Math Error";
    m=x;
}


function exp(){
    let x = document.getElementById('main').value;
    document.getElementById('main').value+='^2';
}

function exp2(){
    let x = document.getElementById('main').value;
    document.getElementById('main').value+='^(1/2)';
}
function frac(){
    let x = document.getElementById('main').value;
    if(x=='')
    {
        x="1/";
    }
    else
    x+='/'
    document.getElementById('main').value=x;
}