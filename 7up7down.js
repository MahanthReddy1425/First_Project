document.getElementById('div1').addEventListener('onclick',div1)
document.getElementById('div2').addEventListener('onclick',div2)
document.getElementById('div3').addEventListener('onclick',div3)
document.getElementById('play_again').addEventListener('onclick',play_again)
document.getElementById('exit').addEventListener('onclick',exit)
let fr=document.getElementsByClassName('fins')[0]
let x="123456"
let a=['','/img/icons8-dice-one-32.png','/img/icons8-dice-two-32.png','/img/icons8-dice-three-32.png','/img/icons8-dice-four-32.png','/img/icons8-dice-five-32.png','/img/icons8-dice-six-32.png']
let pn1=0
let pn2=0
let balance=0
let s=""
let img1=document.getElementsByClassName('res1i')[0]
let img2=document.getElementsByClassName('res2i')[0]
let w=0
let loss=0
let sound1
let sound2
let sound3
function d1(){
    sound1 = document.getElementById("rollSound");
    sound1.play();
    document.getElementsByTagName('button')[1].style.display='none'
    document.getElementsByTagName('button')[2].style.display='none'
    document.getElementsByClassName('input')[0].style.display='none'
    document.getElementsByClassName('head')[0].style.display='none'
    document.getElementsByTagName('button')[0].style.display='block'
    document.getElementsByClassName('res1')[0].style.display='block'
    document.getElementsByClassName('res2')[0].style.display='block'
    let bet=document.getElementById('bet').value
    document.getElementById('exit').style.display='block'
    document.getElementById('play_again').style.display='block'
    document.getElementsByClassName('finres')[0].style.display='block'
    pn1=Math.ceil(Math.random(x)*6)
    pn2=Math.ceil(Math.random(x)*6)
    img1.setAttribute('src',a[pn1])
img2.setAttribute('src',a[pn2])
    if((pn1+pn2)>7){
        balance=balance+parseInt(bet)
        fr.innerText='You Won!'
        console.log(typeof(balance),balance)
        w+=1

    }
    else{
        balance=balance-parseInt(bet)
        fr.innerText="You lost!"
        console.log(typeof(balance),balance)
        loss+=1

    }
    document.getElementsByClassName('bals')[0].innerText=`Your balance amount is ${balance}`
}
function d2(){
    sound2 = document.getElementById("rollSound");
    sound2.play();
    document.getElementsByTagName('button')[1].style.display='block'
    document.getElementsByTagName('button')[0].style.display='none'
    let bet=document.getElementById('bet').value
    document.getElementsByClassName('head')[0].style.display='none'
    document.getElementsByClassName('input')[0].style.display='none'
    document.getElementsByTagName('button')[2].style.display='none'
    document.getElementsByClassName('res1')[0].style.display='block'
    document.getElementsByClassName('res2')[0].style.display='block'
    document.getElementsByClassName('finres')[0].style.display='block'
 document.getElementById('exit').style.display='block'
    pn1=Math.ceil(Math.random(x)*6)
    pn2=Math.ceil(Math.random(x)*6)
    img1.setAttribute('src',a[pn1])
img2.setAttribute('src',a[pn2])
    document.getElementById('play_again').style.display='block'
    if(pn1+pn2==7){
        balance=balance+parseInt(bet)*2
        console.log(typeof(balance),balance)
        fr.innerText='You Won!'
        w+=1
    }
    else{
        balance=balance-parseInt(bet)
        fr.innerText="You lost!"
        console.log(typeof(balance),balance)
        loss+=1

    }
    document.getElementsByClassName('bals')[0].innerText=`Your balance amount is ${balance}`
}
function d3(){
    sound3 = document.getElementById("rollSound");
    sound3.play();
    
    document.getElementsByTagName('button')[2].style.display='block'
    document.getElementsByTagName('button')[0].style.display='none'
    document.getElementsByClassName('head')[0].style.display='none'
    document.getElementsByClassName('input')[0].style.display='none'
    document.getElementsByTagName('button')[1].style.display='none'
    let bet=document.getElementById('bet').value
    pn1=Math.ceil(Math.random(x)*6)
    pn2=Math.ceil(Math.random(x)*6)
    img1.setAttribute('src',a[pn1])
img2.setAttribute('src',a[pn2])
    document.getElementsByClassName('res1')[0].style.display='block'
    document.getElementsByClassName('res2')[0].style.display='block'
    document.getElementsByClassName('finres')[0].style.display='block'
     document.getElementById('exit').style.display='block'
    document.getElementById('play_again').style.display='block'
    if(pn1+pn2<7){
        balance=balance+parseInt(bet)
        fr.innerText='You Won!'
        console.log(typeof(balance),balance)
        w+=1

    }
        else{
        balance=balance-parseInt(bet)
        fr.innerText="You lost!"
        console.log(typeof(balance),balance)
        loss+=1

    }
    document.getElementsByClassName('bals')[0].innerText=`Your balance amount is ${balance}`
}



   console.log(balance)

function pa(){
    document.getElementsByTagName('button')[2].style.display='block'
    document.getElementsByTagName('button')[0].style.display='block'
    document.getElementsByClassName('head')[0].style.display='block'
    document.getElementsByClassName('input')[0].style.display='block'
    document.getElementsByTagName('button')[1].style.display='block'
    document.getElementsByClassName('res1')[0].style.display='none'
    document.getElementsByClassName('res2')[0].style.display='none'
    document.getElementsByClassName('finres')[0].style.display='none'
     document.getElementById('exit').style.display='none'
    document.getElementById('play_again').style.display='none'
}
function exit(){
    document.getElementsByTagName('button')[2].style.display='none'
    document.getElementsByTagName('button')[0].style.display='none'
    document.getElementsByClassName('head')[0].style.display='none'
    document.getElementsByClassName('input')[0].style.display='none'
    document.getElementsByTagName('button')[1].style.display='none'
    document.getElementsByClassName('res1')[0].style.display='none'
    document.getElementsByClassName('res2')[0].style.display='none'
    document.getElementsByClassName('finres')[0].style.display='none'
    document.getElementsByClassName('exit_res')[0].style.display='block'
    document.getElementsByClassName('balance')[0].style.display='none'

     document.getElementById('exit').style.display='none'
    document.getElementById('play_again').style.display='none'
    let l=document.getElementsByClassName('ers')[0]
    if(balance>0){
        l.innerText=`Total games played ${(w+loss)}\n\n\t    Win : ${w}\nLost : ${loss}\n\n You gained ${balance}`
        balance=0
    }
    else if(balance<0){
        l.innerText=`Total games played ${(w+loss)}\n\n\t    Win : ${w}\nLost : ${loss}\n \nYou lost ${balance}`
        balance=0
    }
    else{
        l.innerText=`Total games played ${(w+loss)}\n\n \t    Win : ${w}\nLost : ${loss}\n\n  You didn't lost and didn't gain`
    }

}