/* ハンバーガーメニュー開閉、スライドイン、スクロール固定 */
$('.bl_btn_trigger').on('click',function(){
  $('.bl_btn_trigger').toggleClass('close');
  $('.bl_header_hamburgerMenu').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});

/* タブレットサイズ navItemをクリックするとメニュー表示が消える*/
if( $(window).width() <= 768 ){
  $('.bl_header_navItem >a').on('click',function(){
    $('.bl_header_hamburgerMenu').fadeOut(500);
    $('.bl_btn_trigger').removeClass('close');
    $('body').removeClass('noscroll');
  });
}
/* スマホサイズ navItemをクリックするとメニュー表示が消える*/
if( $(window).width() <= 480 ){
  $('.bl_header_navItem >a').on('click',function(){
    $('.bl_header_hamburgerMenu').fadeOut(500);
    $('.bl_btn_trigger').removeClass('close');
    $('body').removeClass('noscroll');
  });
}

/* ハンバーガーメニューを開くと後ろのページが暗くなる*/
if( $(window).width() <= 768 ){
  $('.bl_btn_trigger').on('click',function(){
    $('.hamburgerMenu_bg').toggleClass('active');
  });
}

/* スクロールするとトップに戻るボタンが表示される*/
$(function() {
  var topBtn = $('.el_btn_pagetop');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップに戻る
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});

/* スクロールすると画像が下からフェードインする */
$(function() {
  $(window).scroll(function() {
    $(".fade-block").each(function() {
      var scroll = $(window).scrollTop(); 
      var blockPosition = $(this).offset().top; 
      var windowHeihgt = $(window).height(); 
      if (scroll > blockPosition - windowHeihgt + 50) {
        $(this).addClass("blockIn");
      }
    });
  });
});
