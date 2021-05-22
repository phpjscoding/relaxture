


  let closeSidebar = document.querySelector('.sidebar__toggle'),
       openSidebar = document.querySelector('.main-header_bars'),
       sidebar = document.querySelector('.sidebar'),
       topContainer = document.querySelector('.container-top'),
       mainHeroText = document.querySelector('.main-hero_text');

  document.addEventListener('DOMContentLoaded',function(){
   
    openSidebar.addEventListener('click',()=>{
      
      sidebar.classList.add('open')

      topContainer.classList.add('shrink')
      
      

    })

    closeSidebar.addEventListener('click',()=>{
      sidebar.classList.remove('open');
      topContainer.classList.remove('shrink')
    })




  })



     

// reveal images on scroll 
 AOS.init();
