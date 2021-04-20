var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}


//Click dropdown
let clickDropdown = document.querySelectorAll(".click-dropdown");
for (let i = 0; i < clickDropdown.length; i++) {
  const clickDrop = clickDropdown[i];
  let openElement = clickDrop.querySelector(".open-drop")
  openElement.addEventListener("click", function() {
    if (openElement.className.includes("no-close")) {
      clickDrop.classList.add("is-show");
    } else {
      clickDrop.classList.toggle("is-show");
    }
  }, supportsPassive ? { passive: true } : false);
  if (clickDrop.querySelector(".close-drop")) {
    let closeDrop = clickDrop.querySelectorAll(".close-drop");
    for (let j = 0; j < closeDrop.length; j++) {
      const colse = closeDrop[j];
      colse.addEventListener("click", function() {
        clickDrop.classList.remove("is-show");
      }, supportsPassive ? { passive: true } : false);
    }
  }

}

window.addEventListener("click", function(event) {
  for (let j = 0; j < clickDropdown.length; j++) {
    const clickDropd = clickDropdown[j];
    if (!event.composedPath().includes(clickDropd) && !clickDropd.className.includes("win-not-close")) {
      clickDropd.classList.remove("is-show");
    } else if (event.composedPath().includes(clickDropd) && !event.composedPath().includes(clickDropd.querySelector(".click-dropdown-content")) && !event.composedPath().includes(clickDropd.querySelector(".open-drop")) && !clickDropd.className.includes("win-not-close")) {
      clickDropd.classList.remove("is-show");
    }
  }
}, supportsPassive ? { passive: true } : false);
