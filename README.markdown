# Raphaël Zoom plugin - 0.0.1

### What is it?
An extension to the Raphael Vector Library.<br/>
It enables Raphael to zoom the whole paper, stroke widths included.

The zoom functionality is non destructive.
This means that you can set the zoom back to 1 (100%) at any time.

### Usage

    // Creates canvas 800 × 500 at 10, 10
    var paper = Raphael(10, 10, 800, 500);
    // Creates circle at x = 50, y = 40, with radius 10
    var circle = paper.circle(50, 40, 10);
    // Sets the fill attribute of the circle to red (#f00)
    circle.attr("fill", "#f00");
    // Sets the stroke attribute of the circle to white (#fff)
    circle.attr("stroke", "#fff");
    // Sets the zoom of the whole paper to 20%
    paper.setZoom(0.2);

### Dependencies
- [Raphael JS](http://raphaeljs.com/)
- [Prototype JS](http://prototypejs.org/)

### Important
- This plugin is still under development
- It requires the Prototype JS library

### To-do
- Zooming text still needs to be implemented