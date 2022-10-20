var mon = document.querySelector('.mon');
var tue = document.querySelector('.tue');
var wed = document.querySelector('.wed');
var thu = document.querySelector('.thu');
var fri = document.querySelector('.fri');
var sat = document.querySelector('.sat');
var sun = document.querySelector('.sun');

var prices = ['$38,40']

    let dzien = new Date();
    var dzienTygodnia = dzien.getDay();

    switch(dzienTygodnia){
        case 1: 
        //console.log("Dziś jest niedziela!");
        mon.style.backgroundColor = 'hsl(186, 34%, 60%)';
        break;

        case 2: 
        //console.log("Dziś jest poniedziałek!");
        tue.style.backgroundColor = 'hsl(186, 34%, 60%)'; 
        break;

        case 3: 
        //console.log("Dziś jest wtorek!");
        wed.style.backgroundColor = 'hsl(186, 34%, 60%)'; 
        break;

        case 4: 
        //console.log("Dziś jest środa!");
        thu.style.backgroundColor = 'hsl(186, 34%, 60%)'; 
        break;

        case 5: 
        //console.log("Dziś jest czwartek!");
        fri.style.backgroundColor = 'hsl(186, 34%, 60%)'; 
        break;

        case 6: 
        //console.log("Dziś jest piątek!");
        sat.style.backgroundColor = 'hsl(186, 34%, 60%)'; 
        break;

        case 7: 
        //console.log("Dziś jest sobota!");
        sun.style.backgroundColor = 'hsl(186, 34%, 60%)'; 
        break;
    }
    

var gp = document.querySelector('.graph');

var cena = '$' + parseFloat(Math.floor(Math.random()*99)) + ',' +  parseFloat(Math.floor(Math.random()*99+1));
var cena1 = '$' + parseFloat(Math.floor(Math.random()*99)) + ',' +  parseFloat(Math.floor(Math.random()*99+1));
var cena2 = '$' + parseFloat(Math.floor(Math.random()*99)) + ',' +  parseFloat(Math.floor(Math.random()*99+1));
var cena3 = '$' + parseFloat(Math.floor(Math.random()*99)) + ',' +  parseFloat(Math.floor(Math.random()*99+1));
var cena4 = '$' + parseFloat(Math.floor(Math.random()*99)) + ',' +  parseFloat(Math.floor(Math.random()*99+1));
var cena5 = '$' + parseFloat(Math.floor(Math.random()*99)) + ',' +  parseFloat(Math.floor(Math.random()*99+1));
var cena6 = '$' + parseFloat(Math.floor(Math.random()*99)) + ',' +  parseFloat(Math.floor(Math.random()*99+1));

console.log(cena + " " + cena1 + " " + cena2 + " " + cena3 + " " + cena4 + " " + cena5 + " " + cena6);

var nd1 = document.createElement("div");
var nd2 = document.createElement("div");
var nd3 = document.createElement("div");
var nd4 = document.createElement("div");
var nd5 = document.createElement("div");
var nd6 = document.createElement("div");
var nd7 = document.createElement("div");

nd1.setAttribute("class", "worth");
nd2.setAttribute("class", "worth");
nd3.setAttribute("class", "worth");
nd4.setAttribute("class", "worth");
nd5.setAttribute("class", "worth");
nd6.setAttribute("class", "worth");
nd7.setAttribute("class", "worth");

nd1.style.bottom = '77px'
nd1.style.left = '-10px'

nd2.style.bottom = '117px'
nd2.style.left = '50px'

nd3.style.left = '112px'
nd3.style.bottom = '155px'

nd4.style.left = '172px'
nd4.style.bottom = '95px'

nd5.style.left = '232px'
nd5.style.bottom = '85px'

nd6.style.left = '292px'
nd6.style.bottom = '125px'

nd7.style.left = '352px'
nd7.style.bottom = '90px'

nd1.innerText = cena;
nd2.innerText = cena1;
nd3.innerText = cena2;
nd4.innerText = cena3;
nd5.innerText = cena4;
nd6.innerText = cena5;
nd7.innerText = cena6;

gp.appendChild(nd1);
gp.appendChild(nd2);
gp.appendChild(nd3);
gp.appendChild(nd4);
gp.appendChild(nd5);
gp.appendChild(nd6);
gp.appendChild(nd7);



function show()
{
    nd1.style.display = 'block';
}
mon.addEventListener('mouseenter', show);
function hide()
{
    nd1.style.display = 'none';
}
mon.addEventListener('mouseout', hide);




function show1()
{
    nd2.style.display = 'block';
}
tue.addEventListener('mouseenter', show1);
function hide1()
{
    nd2.style.display = 'none';
}
tue.addEventListener('mouseout', hide1);




function show2()
{
    nd3.style.display = 'block';
}
wed.addEventListener('mouseenter', show2);
function hide2()
{
    nd3.style.display = 'none';
}
wed.addEventListener('mouseout', hide2);




function show3()
{
    nd4.style.display = 'block';
}
thu.addEventListener('mouseenter', show3);
function hide3()
{
    nd4.style.display = 'none';
}
thu.addEventListener('mouseout', hide3);


function show4()
{
    nd5.style.display = 'block';
}
fri.addEventListener('mouseenter', show4);
function hide4()
{
    nd5.style.display = 'none';
}
fri.addEventListener('mouseout', hide4);


function show5()
{
    nd6.style.display = 'block';
}
sat.addEventListener('mouseenter', show5);
function hide5()
{
    nd6.style.display = 'none';
}
sat.addEventListener('mouseout', hide5);


function show6()
{
    nd7.style.display = 'block';
}
sun.addEventListener('mouseenter', show6);
function hide6()
{
    nd7.style.display = 'none';
}
sun.addEventListener('mouseout', hide6);




