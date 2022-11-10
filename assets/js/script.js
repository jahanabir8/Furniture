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