$(document).ready(function(){
  window.addEventListener("message", receiveMessage, false);
  function receiveMessage(event)
          {
            console.log("I am in receive :" +event.data);
          }
});
