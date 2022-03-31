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