




const form = document.querySelector(".form");

form.eventListener('submit', onSubmit);

function onSubmit(evt){
   console.log(evt);
}