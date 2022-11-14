// mobile menu js
$(".burger__menu").click(function(){
    $(".mobile__menu").addClass("open");
  })

  $(".cross__menu").click(function(){
    $(".mobile__menu").removeClass("open");
  })


// bootsrap modal
 /* IFrame Player APIのコード */
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player(
     'player', { // 埋め込み場所のID
     videoId: 'uOo_gFjECIQ',  // YouTube動画ID
     playerVars: {
       playsinline: 1, // インライン再生
     }
   });
 }


  // tab
  $(function(){
    $('nav a').click(function(){
      var tabId = $(this).attr('data-tab');
      
      $('nav a').removeClass('active');
      $('.Tabcondent').removeClass('active');
      
      $(this).addClass('active');
      $('#'+tabId).addClass('active');
    });
    
  });

  // review slider
  var swiper = new Swiper(".reviewSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    // loop: true,
    // autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
    // breakpoints: {
    //   "@0.00": {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //   },
    //   "@0.75": {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   "@1.00": {
    //     slidesPerView: 3,
    //     spaceBetween: 40,
    //   },
    //   "@1.50": {
    //     slidesPerView: 4,
    //     spaceBetween: 50,
    //   },
    // },
  });





  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})