// select the image container and save into a variable
const track = document.querySelector("#image-track");

// window event listener for user movememnts
// when mouse button is pressed
window.onmousedown = (event) => handleOnDown(event);
// when touch through hand is pressed
window.ontouchstart = (event) => handleOnDown(event.touches[0]);
// when mouse button is not pressed
window.onmouseup = () => handleOnUp();
// when touch through is is left
window.ontouchend = () => handleOnUp();
// when mouse is moved while being pressed down
window.onmousemove = (event) => handleOnMove(event);
// when touch is moved while being pressed down
window.ontouchmove = (event) => handleOnMove(event.touches[0]);

// function to track when mouseDown event is entered
// register the current X-Coordinate of the mouseDown event with
// the help of a custom data attribute
const handleOnDown = (event) => (track.dataset.mouseDownAt = event.clientX);

// function to track when mouseDown event is elft
const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  // overwrites the prevPercentage in the HTML with the percentage of the
  // track when handleDown is press
  track.dataset.prevPercentage = track.dataset.percentage;
};

// function to handle the mouseMove
const handleOnMove = (event) => {
  // get out of the function if mouseDown event isn't active
  if (track.dataset.mouseDownAt === "0") return;

  // get the current delta (relative position of the mouse) in correliation of
  // fullwWidht of the client
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - event.clientX,
    maxDelta = window.innerWidth / 2;

  // dividing relative position by maxDistance (maxDelta) and converts it to a decimal
  // my muliplying it by 100 we get a percentage
  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    // set minimum and maximum value, so that the track doesn't scroll to infinity
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  // constantly update the eprcentage and saves it into a custom data-attribute
  track.dataset.percentage = nextPercentage;

  // animation of the track (image container)
  track.animate(
    { transform: `translate(${nextPercentage}%, -50%)` },
    { duration: 1200, fill: "forwards" }
  );

  // get all iamges for the parallax effect
  for (const image of track.querySelectorAll(".image")) {
    // animation of parallax effect of the images inside their respective container
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      {
        duration: 1200,
        fill: "forwards",
      }
    );
  }
};
