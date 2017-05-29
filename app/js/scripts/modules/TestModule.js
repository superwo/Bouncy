import $ from 'jquery';

class TestModule {
  constructor() {
    // cache elements from page
    this.titles = $('h1');
    this.quals = $('.team__qual-line');
    console.log(this.qualsPercents);
    this.events();
    this.setPercentWidth(this.quals);
  }

  events() {
    this.titles.on('click', this.logSomething);
  }

  // custom functions
  logSomething() {
    console.log("You clicked me!");
  }
  setPercentWidth($els) {
    $els.each(function(index) {
      var perc = $(this).data('percents');
      var el = $('<div>');
      el.width(perc + "%");
      $(this).append(el);
    });
  }
}

export default TestModule;
