var btns = document.querySelectorAll('.btn');
 var content = document.querySelectorAll('.content');

var tabBtn = document.querySelector('.tab-btn');




tabBtn.addEventListener('click', function(e){
   const id = e.target.dataset.id;   
   if(id){
      btns.forEach((btn) => {
           btn.classList.remove('active');
           e.target.classList.add('active')
      });

      content.forEach((item) =>{
         item.classList.remove('active')
      });

       var element = document.getElementById(id);

       element.classList.add('active')

   }
})