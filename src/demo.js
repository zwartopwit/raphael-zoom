var ZoomDemo = Class.create({
  initialize: function() {
    // set paper
    var dim = document.viewport.getDimensions();
    this.paper = Raphael($("paper"), dim.width, dim.height);
    this.paper.initZoom();
    // set events
    window.observe("resize", (function() {
      this.resize();
    }).bind(this));
    // add circle
    var circle = this.paper.circle(150, 120, 100);
    circle.attr({
      fill:           "#83B100",
      stroke:         "#333",
      "stroke-width": 10
    });
    // add text
    var text = this.paper.text(400, 300, "Raphaël\nkicks\nbutt!");
    text.attr({
      "font-size":    50,
      fill:           "#83B100",
      stroke:         "#333",
      "stroke-width": 2
    });
  },
  resize: function() {
    var dim = document.viewport.getDimensions();
    this.paper.setSize(dim.width, dim.height);
  },
  setZoom: function(zoom) {
    this.paper.setZoom(zoom);
  }
});

var Demo = new ZoomDemo();