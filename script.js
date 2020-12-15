let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed = document.getElementById('inpSpeed')
let btnStart = document.getElementById('btnStart')
let btnStop = document.getElementById('btnStop')

let myoutput = document.getElementById('myoutput')

let values = [
    '😍','😊','😜','😂','😘','😎','😉'
]

function getRandomValue(){
    return values[Math.floor(Math.random()*7)]
}

// console.log(document.getElementById('value1'))

let animationid;
function upddateAnimation(newSpeed){
    if(animationid) clearInterval(animationid)

    animationid = setInterval(()=>{
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
        
    },1000/newSpeed)
}

inpSpeed.onchange = function(ev){
    // console.log("value changed to ",ev.target.value)
    // document.documentElement => this is ':root' of css
    document.documentElement.style.setProperty('--speed',ev.target.value)
    upddateAnimation(ev.target.value)
}

function stopclick(){
    clearInterval(animationid);
    console.log("stop button clicked")
    text = ''
    if(value1.innerText==value2.innerText && value2.innerText==value3.innerText){
        text = ' WOW! YOU WON'
    }else{
        text = ' OOPS Try again'
    }
    myoutput.textContent = text


}

function startclick(){
    upddateAnimation(inpSpeed.value)
    

    myoutput.textContent = 'Game is Runnning'
}


// console.log(myoutput.target.value)

