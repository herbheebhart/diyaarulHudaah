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
    const textSpace =Math.floor(gap/days)
    const textHour = Math.floor((gap % days)/hrs)
    const textMin = Math.floor( (gap  % hrs)/mins)
    const textSec = Math.floor( (gap % mins)/secs)


    // Dom
    document.querySelector('.day').innerHTML =textSpace;
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
  //This function displays payment buttons on your web page.
  // payStack
  const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_34c83ef35135f7afb77dbe3b40d8b0a6803b6a34', // Replace with your public key
    email: document.getElementById("email-address").value,
    contact:document.getElementById("contact").value,
    amount: document.getElementById("amount").value * 100,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}
// popup for
var formPop = document.getElementById('myForm');
var openModal = document.getElementById('openModal');
var closeModal = document.getElementById('closeModal');

openModal.onclick = function(){
  formPop.style.display = "block"
}
closeModal.onclick = function(){
  formPop.style.display = "none"
}
