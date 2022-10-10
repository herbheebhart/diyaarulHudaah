const countDown = ()=>{
    const countDate = new Date("october 30, 2022 00:00:00").getTime()
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
    document.querySelector('.hour').innerHTML =formatTime(textHour)
    document.querySelector('.min').innerHTML =formatTime(textMin)
    document.querySelector('.sec').innerHTML =formatTime(textSec)

}
function formatTime(time){
    return time < 10 ? `0${time}`:time;
}
setInterval(countDown, 1000);
// FAQ
const faq = document.querySelectorAll('.faq')
faq.forEach((faqs)=>{
    faqs.addEventListener('click',function(){
        faqs.classList.toggle('open')

        const icons = faqs.querySelector('.icon-faq i')
        if(icons.className==="bi bi-plus-lg"){
            icons.className ="bi bi-dash-lg"
        } else{
            icons.className ="bi bi-plus-lg" 
        }
    })
})
// payment method is paypal
var amountElement = document.getElementById('amount');

paypal.Buttons({
    createOrder: function(data, actions) {
      // This function sets up the details of the transaction, including the amount and line item details.
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: amountElement.value
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      // This function captures the funds from the transaction.
      return actions.order.capture().then(function(details) {
        // This function shows a transaction success message to your buyer.
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    }
  }).render('#paypal');
  //This function displays payment buttons on your web page.