
const askItems = document.querySelectorAll('.ask__item');

askItems.forEach( askItem => {
   const btn = askItem.querySelector('.ask__arrow');
   const answer = askItem.querySelector('.ask__answer'); 
   const answerWrapper = askItem.querySelector('.ask__answer__wrapper'); 
   const heightAnswer = answer.clientHeight;
   
   const heightItem = askItems 
   askItem.addEventListener('click', ()=>{
         btn.classList.toggle('ask__arrow--active');
         answer.classList.toggle('ask__answer--active');
         if(btn.classList.contains('ask__arrow--active')){
            answerWrapper.style.height = 5 + heightAnswer + 'px';
         }else{
            answerWrapper.style.height = 0;
         }
   })
})