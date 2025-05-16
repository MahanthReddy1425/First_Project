let d=document.getElementById('okbtn').addEventListener('onclick',okbtn)
let a=['/img/icons8-dice-one-32.png','/img/icons8-dice-two-32.png','/img/icons8-dice-three-32.png','/img/icons8-dice-four-32.png','/img/icons8-dice-five-32.png','/img/icons8-dice-six-32.png']
let n1=""
let n2=""
let n3=""
function start(){
    n1=document.querySelectorAll('input')[0].value
    n2=document.querySelectorAll('input')[1].value
    n3=document.querySelectorAll('input')[2].value
    document.getElementsByClassName('input1')[0].style.display='none'
    document.getElementsByClassName('input2')[0].style.display='none'
    document.getElementsByClassName('input3')[0].style.display='none'
    document.getElementById('okbtn').style.display='none'
    document.getElementsByClassName('div1')[0].style.display='block'
    document.getElementsByClassName('div2')[0].style.display='block'
    document.getElementsByClassName('div3')[0].style.display='block'
    document.getElementsByClassName('head')[0].style.display='block'
    document.getElementsByClassName('showbtn')[0].style.display='block'

}
function begin(){
    let pn1=Math.floor(Math.random(6)*6)
    let pn2=Math.floor(Math.random(6)*6)
    let pn3=Math.floor(Math.random(6)*6)
    document.getElementsByClassName('pl1')[0].innerText=n1
    document.getElementsByClassName('pl2')[0].innerText=n2
    document.getElementsByClassName('pl3')[0].innerText=n3
    let img1= document.getElementsByClassName('div1i')[0]
    let img2= document.getElementsByClassName('div2i')[0]
    let img3= document.getElementsByClassName('div3i')[0]
    img1.setAttribute('src',a[pn1])
    img2.setAttribute('src',a[pn2])
    img3.setAttribute('src',a[pn3])
    let i=document.getElementsByClassName('res')[0]
    if (pn1>pn2){
        if(pn1>pn2){
            i.innerText=`${n1} won!`
        }
        else{
            i.innerText=`${n3} won!`
        }
       
    }
    else if(pn1==pn2==pn3){
        i.innerText=`It's a Tie!`
    }
    else{
        if(pn2>pn3){
            i.innerText=`${n2} won!`
        }
        else{
            i.innerText=`${n3} won!`
        }
    }
}

