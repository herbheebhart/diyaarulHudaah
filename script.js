const countDown = ()=>{
    const countDate = new Date("october 10, 2022 00:00:00").getTime()
    const current = new Date()
    // You can set the counter by subtrating future times from current 
    const gap =countDate - current
    // how it work
    const secs = 1000
    const mins = secs * 60 
    const hrs = mins * 60
    const days = hrs * 24
    // calculate the rubbish
    const textDay =Math.floor(gap/days)
    const textHour = Math.floor((gap % days)/hrs)
    const textMin = Math.floor( (gap  % hrs)/mins)
    const textSec = Math.floor( (gap % mins)/secs)


    // Dom
    document.querySelector('.day').innerHTML = textDay
    document.querySelector('.hour').innerHTML = textHour
    document.querySelector('.min').innerHTML = textMin
    document.querySelector('.sec').innerHTML = textSec



}
setInterval(countDown, 1000)