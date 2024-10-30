// Change color on click
function changeColor() {
    const box = document.getElementById("box");
    box.style.backgroundColor = box.style.backgroundColor === "lightgray" ? "blue" : "lightgray";
  }
  
  // Add mouseover effect
  function addHoverEffect() {
    const box = document.getElementById("box");
    box.style.border = "2px solid black";
  }
  
  // Remove mouseover effect
  function removeHoverEffect() {
    const box = document.getElementById("box");
    box.style.border = "none";
  }
  
  // Attach event listeners
  const box = document.getElementById("box");
  box.addEventListener("click", changeColor);
  box.addEventListener("mouseover", addHoverEffect);
  box.addEventListener("mouseout", removeHoverEffect);
  