// eventListener for when DOM is completely loaded
// once it's loaded, call the casParallax function
addEventListener("DOMContentLoaded", () => castParallax());

// function for the parallax scroll effect
function castParallax() {
  // eventListener for the window when it is being scrolled
  window.addEventListener("scroll", function () {
    // "this" is only available on a function with the function keyword
    // in this example it refers to the window
    // "top" is the topmost element in the scroll of the sidebar
    let top = this.scrollY;

    // get all layers for the parallax in the body
    const layers = document.querySelectorAll(".parallax");

    // define variables for layer, speed, yPos
    // layer is for all the unique layers
    // speed refers to the data-speed in HTML
    // yPos is being calculated with "top" and "speed"
    let layer, speed, yPos;

    // iterate through all the layers with the help of a for loop
    for (let i = 0; i < layers.length; i++) {
      // replace value of layer with the current iteration
      layer = layers[i];

      // get HTML attribute of data-speed
      speed = layer.getAttribute("data-speed");

      // set yPos according to the top reference of the scrollbar
      // and the data-speed reference
      yPos = -((top * speed) / 100);
      console.log(yPos);

      // set dynamic transform with the help of the iteration
      layer.setAttribute("style", `transform: translate3d(0px, ${yPos}px, 0px)`);
    }
  });
}
