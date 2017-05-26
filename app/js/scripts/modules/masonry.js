import $ from 'jquery';
var Isotope = require('isotope-layout');

class MasonryModule {
  constructor() {
    this.grid = $('.grid')[0];

    this.iso = new Isotope( this.grid, {
      itemSelector: '.grid-item',
      hiddenStyle: { opacity: 0 },
      visibleStyle: { opacity: 1 },
      itemSelector: '.grid-item',
      stagger: 30,
      transitionDuration: '0.8s',
      masonry: {
        columnWidth: 280,
        fitWidth: true
      }
    });

    $('.portfolio__filter-link').on( 'click', function() {
      $('.portfolio__filter-item').removeClass('active');
      $(this).parent('.portfolio__filter-item').addClass('active');
      var filterValue = $(this).attr('data-filter');
      console.log(filterValue);
      $('.grid-item').show();
      this.iso = new Isotope('.grid', {
        hiddenStyle: { opacity: 0 },
        visibleStyle: { opacity: 1 },
        itemSelector: '.grid-item',
        stagger: 30,
        transitionDuration: '0.8s',
        masonry: {
          columnWidth: 280,
          fitWidth: true
        },
        filter: filterValue
      });
    });

  }



}

export default MasonryModule;
