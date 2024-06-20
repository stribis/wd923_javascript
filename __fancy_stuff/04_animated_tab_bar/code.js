// setting some variables
const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

// clickItem function
function clickItem(item, index) {
  // remove the timeout property which we define later on
  menu.style.removeProperty("--timeout");

  // check if current item is active item
  if (activeItem == item) return;

  // remove the active-class from the current item if the clicked
  // item is not te current active item
  if (activeItem) {
    activeItem.classList.remove("active");
  }

  // add the active class to the selected item
  item.classList.add("active");
  // give the BG a backgroundcolor depending on the index of the current
  // selected item
  body.style.backgroundColor = bgColorsBody[index];
  // set the current selected item as the activeItem
  activeItem = item;
  // call the hoisted function offsetMenuBorder
  offsetMenuBorder(activeItem, menuBorder);
}

// function offsetMenuBorder, which controls the weird shape
// above the active item, so there's no overflow and everything
// is aligned in the design
function offsetMenuBorder(element, menuBorder) {
  // get the offsetActiveItem
  const offsetActiveItem = element.getBoundingClientRect();
  // some math to calculate the left offset (distance from the left 0)
  // of the menucontainer
  const left =
    // Math.floor is used to get an integer (GANZE ZAHLEN)
    Math.floor(
      // the most left point of the activeItem
      offsetActiveItem.left -
        // the most left point of the menu
        menu.offsetLeft -
        // get the center according to the menuBorder and the activeItem
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
      // pixel so that we can place it accordingly
    ) + "px";
  // style the css
  menuBorder.style.transform = `translate3d(${left}, 0, 0)`;
}

// call the offSetMenuBorder to initialiaze
offsetMenuBorder(activeItem, menuBorder);

// click addEventlistener for the menuItems
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});
