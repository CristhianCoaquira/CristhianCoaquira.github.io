$(document).ready(function () {
  let $btns = $('.project-area .button-group button')

  $btns.click(function (e) {
    $btns.removeClass('active')
    e.target.classList.add('active')
    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector
    })
    return false
  })

  $('.project-area .button-group #btn-1').trigger('click')

  // Magnific Popup
  $('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: {enabled: true}
  })
})