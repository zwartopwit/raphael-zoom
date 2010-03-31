var Demo = {
  initialize: function() {
    // set paper
    var dim = this.getWindowDimensions();
    this.paper = Raphael("paper", dim.width, dim.height).initZoom();
    
    // set events
    (document.onresize ? document : window).onresize = function() {
      Demo.resize();
    }
    
    // add circle
    var circle = this.paper.circle(150, 120, 100).initZoom();
    
    circle.setAttr({
      fill:           "#83B100",
      stroke:         "#333",
      "stroke-width": 10
    });
    
    // add text
    var text = this.paper.text(400, 300, "Raphaël\nkicks\nbutt!").initZoom();
    
    text.setAttr({
      "font-size":    50,
      fill:           "#83B100",
      stroke:         "#333",
      "stroke-width": 2
    });
  },
  
  // resize the paper
  resize: function() {
    var dim = this.getWindowDimensions();
    this.paper.setSize(dim.width, dim.height);
  },
  
  // set the paper's zoom
  setZoom: function(zoom) {
    this.paper.setZoom(zoom);
  },
  
  // change the stroke widths
  changeStroke: function() {
    var elements  = this.paper.elements(),
        width     = 0.5 + Math.random() * 10;
    
    for (var i = 0; i < elements.length; i++) {
      elements[i].setAttr({
        'stroke-width': width
      });
    }
  },
  
  // change the fon size
  changeFontSize: function() {
    var elements  = this.paper.elements(),
        size      = 100//10 + Math.random() * 100;
    
    for (var i = 0; i < elements.length; i++) {
      elements[i].setAttr({
        'font-size': size
      });
    }
  },
  
  // helpers
  getWindowDimensions: function() {
    var dim = {};
    if (typeof(window.innerWidth) == 'number') {
      dim['width']  = window.innerWidth;
      dim['height'] = window.innerHeight;
    } else {
      if (document.documentElement && document.documentElement.clientWidth) {
        dim['width']  = document.documentElement.clientWidth;
        dim['height'] = document.documentElement.clientHeight;
      } else {
        if (document.body && document.body.clientWidth) {
          dim['width']  = document.body.clientWidth;
          dim['height'] = document.body.clientHeight;
        }
      }
    }
    return dim;
  }
};

Demo.initialize();





