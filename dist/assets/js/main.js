
// light box initializing
const lightbox = GLightbox({
    'href': 'https://youtu.be/vbiQFJw12GY',
    'type': 'video',
    'source': 'youtube',
    'width': 900,
    'autoPlayVideos': true
});

AOS.init({
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    duration: 1000,
});

const portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters button').on('click', function() {
    $("#portfolio-flters button").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });

  const backtotop = document.querySelector('.back_to_top');
window.onscroll = () => {
    if (window.scrollY > 300) {
      backtotop.classList.add('active');        
    }else {
      backtotop.classList.remove('active');
    }
};