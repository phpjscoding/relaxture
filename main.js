


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



     let title = document.querySelector('.featured_title');
     let title2 = document.querySelector('.tobe-sticky-2');
         
  
   
    window.addEventListener('scroll',()=>{
      makeSticky1()
      makeSticky2()
    })

    function makeSticky1(){

     let scrolled = window.pageYOffset;
     let start = document.querySelector('.featured').offsetTop | '';
     console.log(scrolled,start)

     if(scrolled > start){
       title.classList.add('_stiky')
      }
  }
  function makeSticky2(){
    let scrolled = window.pageYOffset;
     let start = document.querySelector('.start-ticky-2').offsetTop;
     console.log(scrolled,start)

     if(scrolled > start){
       title2.classList.add('_stiky')
      }
  }

// reveal images on scroll 

document.addEventListener('DOMContentLoaded',()=>{
  let options = {
    root:null,
    rootMargin:'0px',
    treshold:.5
  }

  let observer = new IntersectionObserver(revealImg,options);


  [...document.querySelectorAll('.product_content')].forEach(img=>{
    observer.observe(img)
  })

})


function revealImg(entries,ob){
   entries.forEach(entry=>{
    if(entry.isEntersecting){ 
      console.log('entry is entresecting')
      entry.target.classList.add('active')
    } 
    entry.target.classList.remove('active')
   })
}
