# Raphaël Zoom plugin - 0.0.2

### What is it?
An extension to the Raphael Vector Library.<br/>
It enables Raphael to zoom the whole paper, stroke widths included.

The zoom functionality is non destructive.
This means that you can set the zoom back to 1 (100%) at any time.

### Usage

Basic usage:

    // Creates canvas 800 × 500 at 10, 10
    var paper = Raphael(10, 10, 800, 500);
    
    // Add a circle
    var circle = this.paper.circle(150, 120, 100);
    circle.attr({
      fill:           "#83B100",
      stroke:         "#333",
      "stroke-width": 10
    });
    
    // Set the paper zoom to 50%
    paper.setZoom(0.5);

When using a zoomed paper the standard "attr" method should be replaced with "setAttr".
The raphael.zoom plugin will than take care of zoomed stroke widths and text elements.

    // Example of setting attributes with the zoom plugin:
    circle.setAttr("stroke-width", 2);
    
    // or
    circle.setAttr({ "stroke-width": 2 });

Important:
Using element.attr instead of element.setAttr with a zoomed paper, the shape will be transformed in the current zoom value and not the real value!

Also element.translate shoud be replaced with element.setTranslation.
Like

    // Translate element
    circle.setTranslation(20, 30);

As an extra this plugin will provide you with a paper.elements() function.
This will return an array with all elements in the paper:

    // Get all elements
    var shapes = paper.elements();

### Dependencies
- [Raphael JS](http://raphaeljs.com/)
- [Prototype JS](http://prototypejs.org/)

### Important
- This plugin is still under development
- It requires the Prototype JS library

### To-do
- writing tests
- testing with sets