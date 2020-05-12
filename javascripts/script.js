$(document).ready(function () {
  $('.fancy-menu').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });


  //scroll
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop(),
      p01Top = $('.bg1').offset().top,
      p02Top = $('.bg2').offset().top,
      p03Top = $('.bg3').offset().top,
      p04Top = $('.bg4').offset().top,
      p05Top = $('.bg5').offset().top;

    if (scrollTop >= p01Top && scrollTop <= p02Top) {
      $('.navbar-nav li a').removeClass('active');
      $('.navbar-nav li:eq(0) a').addClass('active');
    } else if (scrollTop >= p02Top && scrollTop <= p03Top) {
      $('.navbar-nav li a').removeClass('active');
      $('.navbar-nav li:eq(1) a').addClass('active');
    } else if (scrollTop >= p03Top && scrollTop <= p04Top) {
      $('.navbar-nav li a').removeClass('active');
      $('.navbar-nav li:eq(2) a').addClass('active');
    } else if (scrollTop >= p04Top && scrollTop <= p05Top) {
      $('.navbar-nav li a').removeClass('active');
      $('.navbar-nav li:eq(3) a').addClass('active');
    } else if (scrollTop >= p05Top) {
      $('.navbar-nav li a').removeClass('active');
      $('.navbar-nav li:eq(4) a').addClass('active');
    }
  })
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 20) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }

  })

  var num_a = $('.navbar-nav li.nav-scroll').length //計算有幾個a
  for (i = 0; i <= num_a; i++) {
    $('.navbar-nav li.nav-scroll:eq(' + i + ')').click({ id: i }, function (e) {
      e.preventDefault();
      page = e.data.id + 1;
      $('html,body').animate({ 'scrollTop': $('.bg' + page).offset().top }, 800);
      $('.collapse').removeClass('show');
      $('.fancy-menu').removeClass('active');
    })
  }


  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true
  });

  $('.carousel').flickity({
    // options
    // cellAlign: 'left',
    // contain: true
    imagesLoaded: true
    // prevNextButtons: false,
    // pageDots: false
  });

  /*TAB*/
  $('.js-tab').find('.js-tabs li:eq(0)').addClass('current');
  $('.js-tabs li').on('click', function (g) {
    var tab = $(this).closest('.js-tab')
      , index = $(this).closest('li').index();

    tab.find('.js-tabs > li').removeClass('current');
    $(this).closest('li').addClass('current');

    tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item').not('.js-tabs-item:eq(' + index + ')').hide().fadeOut();
    tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item:eq(' + index + ')').fadeIn();

    g.preventDefault();
  });

  // Gets the video src from the data-src on each button
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })


})

