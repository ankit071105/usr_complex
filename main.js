let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,

  
});
 
typewriter
  .pauseFor(2500)
  .typeString('UMA SHANKAR ROYAL COMPLEX')
  .typeString('BOOKING OPEN GRAB YOUR SHOP NOW....')

  .pauseFor(200)
  .deleteChars(10)
  .start();