/*
 * raphael.zoom 0.0.3
 *
 * Copyright (c) 2009 Wout Fierens
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
 
// initialize zoom of paper
Raphael.fn.initZoom = function(zoom) {
  this.zoom = zoom || 1;
  this.elements().each((function(element) {
    element.initZoom(this.zoom);
  }).bind(this));
}

// set the zoom of all elements
Raphael.fn.setZoom = function(zoom) {
  if (!this.zoom) this.initZoom();
  this.elements().each((function(element) {
     if (!element.zoom) element.initZoom(this.zoom);
     element.setZoom(zoom);
   }).bind(this));
  this.zoom = zoom;
}

// get all elements in the paper
Raphael.fn.elements = function() {
  var b = this.bottom,
      r = []; 
  while (b) { 
    r.push(b); 
    b = b.next; 
  }
  return r;
}

// initialize zoom of element
Raphael.el.initZoom = function(zoom) {
  var sw = parseFloat(this.attrs["stroke-width"]) || 0;
  this.zoom = {
    value: zoom,
    "stroke-width": sw
  };
  this.setStrokeWidth(sw);
  if (this.type == "text") {
    var fs = parseFloat(this.attrs["font-size"]) || 0
    this.zoom["font-size"] = fs;
    this.zoom["x"] = (parseFloat(this.attrs["x"]) || 0) / zoom;
    this.zoom["y"] = (parseFloat(this.attrs["y"]) || 0) / zoom;
    this.setFontSize(fs);
  }
}

// zoom element preserving some original values
Raphael.el.setZoom = function(zoom) {
  if (!zoom) return;
  if (!this.zoom) this.initZoom(zoom);
  // scale to zoom
  var new_zoom = zoom / this.zoom.value;
  this.scale(new_zoom, new_zoom, 0, 0);
  this.applyScale();
  // save new zoom
  this.zoom.value = zoom;
  this.setStrokeWidth(this.zoom["stroke-width"]);
  if (this.type == "text") {
    this.setFontSize(this.zoom["font-size"] * zoom);
    this.attr("x", this.zoom["x"] * zoom);
    this.attr("y", this.zoom["y"] * zoom);
  }
  return this;
}

// set element zoomed attributes
Raphael.el.setAttr = function() {
  if (typeof arguments[0] == "string") {
    attr = {};
    attr[arguments[0]] = arguments[1];
  } else {
    attr = arguments[0];
  }
  Object.keys(attr).each((function(key) {
    switch(key) {
      case "stroke-width":
        this.setStrokeWidth(attr[key]);
      break;
      case "font-size":
        this.setFontSize(attr[key]);
      break;
      case "x":
      case "y":
        if (this.type == "text") this.zoom[key] = attr[key] / this.zoom.value;
        this.attr(key, attr[key]);
      break;
      default:
        this.attr(key, attr[key]);
      break;
    }
  }).bind(this));
}

// set element translation
Raphael.el.setTranslation = function(x, y) {
  if (this.type == "text")
    this.setAttr({
      x: this.attrs["x"] + x,
      y: this.attrs["y"] + y
    });
  else
    this.translate(x,y);
}

// set element zoomed stroke width
Raphael.el.setStrokeWidth = function(sw) {
  if (sw.isFloat()) {
    sw = parseFloat(sw);
    this.attr({ "stroke-width": sw * this.zoom.value });
    this.zoom["stroke-width"] = sw;
  }
  return this;
}

// set element font size
Raphael.el.setFontSize = function(fs) {
  if (fs.isFloat()) {
    fs = parseFloat(fs);
    this.attr({ "font-size": fs });
    this.zoom["font-size"] = fs / this.zoom.value;
  }
  return this;
}

// apply the current scale and reset it to 1
Raphael.el.applyScale = function() {
  this._.sx = 1;
  this._.sy = 1;
  this.scale(1, 1);
}

// Number class methods
Object.extend(Number.prototype, {
  isInt: function() {
    if (this == 0) return true;
    return parseInt(this) ? true : false;
  },
  isFloat: function() {
    if (this == 0.0) return true;
    return parseFloat(this) ? true : false;
  }
});

// String class methods
Object.extend(String.prototype, {
  isInt: function() {
    if (this == "0") return true;
    return parseInt(this) ? true : false;
  },
  isFloat: function() {
    if (["0", "0.0"].indexOf(this) > -1) return true;
    return parseFloat(this) ? true : false;
  }
});







