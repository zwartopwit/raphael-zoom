/*
 * Open raphael.zoom-spec.html to run all tests
 */


var createPaper = function() {
  return Raphael("paper", 800, 500);
}

describe('Raphael.fn.elements', {
  before_each : function() {
    paper     = createPaper(),
    rect      = paper.rect(10, 10, 50, 50),
    ellipse   = paper.ellipse(50, 50, 40, 20),
    elements  = paper.elements();
  },
  'should return all the elements in the paper': function() {
    value_of(elements).should_have_exactly(2, "items");
  },
  'should include all elements created in the paper':function() {
    value_of(elements).should_include(rect) && value_of(elements).should_include(ellipse);
  }
});

describe('Raphael.fn.initZoom', {
  before_each : function() { paper = createPaper() },
  'should initialize the paper\'s zoom with 1 if no value is given': function() {
    paper.initZoom();
    value_of(paper.zoom).should_be(1);
  },
  'should initialize the paper\'s zoom with 3 if 3 is given': function() {
    paper.initZoom(3);
    value_of(paper.zoom).should_be(3);
  },
  'should initialize the zoom of all elements in the paper': function() {
    var rect = paper.rect(10, 10, 50, 50);
    paper.initZoom();
    value_of(rect.zoom).should_be(1);
  },
  'should initialize the zoom of all elements in the paper with the same zoom value': function() {
    var rect = paper.rect(10, 10, 50, 50);
    paper.initZoom(3);
    value_of(rect.zoom).should_be(3);
  }
});

describe('Raphael.fn.setZoom', {
  before_each : function() { paper = createPaper().initZoom() },
  'should return \'undefined\' if no value is given': function() {
    var result = paper.setZoom();
    
    value_of(result).should_be_undefined();
  },
  'should return the paper if a value is given': function() {
    var result = paper.setZoom(1);
    
    value_of(result).should_be(paper);
  },
  'should not change paper\'s zoom if no value is given': function() {
    paper.setZoom();
    value_of(paper.zoom).should_be(1);
  },
  'should set the paper\'s zoom to 10': function() {
    paper.setZoom(10);
    value_of(paper.zoom).should_be(10);
  },
  'should set the zoom of all the elements in the paper tot the paper\'s zoom': function() {
    var rect = paper.rect(10, 10, 50, 50).initZoom();
    
    paper.setZoom(10);
    value_of(rect.zoom).should_be(paper.zoom);
  }
});

describe('Raphael.el.initZoom', {
  before_each: function(){
    paper = createPaper().initZoom();
    rect  = paper.rect(10, 10, 50, 50);
  },
  'should initialize the zoom of an element with the zoom of the paper' : function() {
    rect.initZoom();
    
    value_of(rect.zoom).should_be(paper.zoom);
  },
  'should create a zoom_memory object in the element' : function() {
    rect.initZoom();
    
    value_of(typeof rect.zoom_memory).should_be('object');
  },
  'should return the element' : function() {
    var result = rect.initZoom();
    
    value_of(result).should_be(rect);
  }
});

describe('Raphael.el.setFontSize', {
  before_each: function(){
    paper = createPaper().initZoom();
    text  = paper.text(50, 50, "Raphaël\nkicks\nbutt!").attr('font-size', 20).initZoom();
  },
  'should change the font size of the element' : function() {
    text.setFontSize(50);
    
    value_of(text.attr('font-size')).should_be(50);
  },
  'should set the font-size in the zoom_memory' : function() {
    text.setFontSize(38);
    
    value_of(text.zoom_memory['font-size']).should_be(38);
  },
  'should not change the font-size in the zoom_memory when the paper is zoomed' : function() {
    text.setFontSize(38);
    paper.setZoom(2);
    
    value_of(text.zoom_memory['font-size']).should_be(38);
  },
  'shoud recalculate the font-size when the paper is zoomed' : function() {
    text.setFontSize(18);
    paper.setZoom(2);
    
    value_of(text.attr('font-size')).should_be(36);
  },
  'should not change anything when no font size is given' : function() {
    text.setFontSize();
    
    value_of(text.attr('font-size')).should_be(20);
  }
});

describe('Raphael.el.setStrokeWidth', {
  before_each: function(){
    paper = createPaper().initZoom();
    rect  = paper.rect(10, 10, 50, 50).attr('stroke-width', 2).initZoom();
  },
  'should change the stroke width of the element' : function() {
    rect.setStrokeWidth(4);
    
    value_of(rect.attr('stroke-width')).should_be(4);
  },
  'should store the stroke-width in the element\'s zoom_memory' : function() {
    rect.setStrokeWidth(4);
    
    value_of(rect.zoom_memory['stroke-width']).should_be(4);
  },
  'should not change the stroke-width in the zoom_memory when the paper is zoomed' : function() {
    rect.setStrokeWidth(19);
    paper.setZoom(2);
    
    value_of(rect.zoom_memory['stroke-width']).should_be(19);
  },
  'shoud recalculate the stroke-width when the paper is zoomed' : function() {
    rect.setStrokeWidth(6);
    paper.setZoom(3);
    
    value_of(rect.attr('stroke-width')).should_be(18);
  },
});




























