$("document").ready(function(){
    $(".g-toggle-icon").click(function(){
      $(".g-menu-items").slideToggle();
      return false;
  })
    $(".g-toggle-crose").click(function(){
      $(".g-menu-items").slideToggle();
      return false;
  })
  // Dropdown
  $(".sub-btn").click(function(){
    $('.g-submenu').slideToggle();
  });
  $(".sub-btn2").click(function(){
    $('.g-submenu2').slideToggle();
  });

});