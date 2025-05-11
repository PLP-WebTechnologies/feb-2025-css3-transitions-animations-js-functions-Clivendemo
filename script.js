// Change text content 
function changeTitle() {
  const title = document.getElementById("title");
  title.textContent = "Empowering Students to Succeed in Sciences & Tech!";
  title.style.color = "#ffeb3b";
  title.style.backgroundColor = "#333";
  title.style.padding = "16px";
  title.style.borderRadius = "10px";
}

// Add or remove motivation message
function showMessage() {
  const area = document.getElementById("message-area");
  if (area.textContent === "") {
    const msg = document.createElement("p");
    msg.textContent = "You can achieve greatness with the right guidance and mindset!";
    msg.style.color = "green";
    msg.style.fontWeight = "bold";
    area.appendChild(msg);
  } else {
    area.textContent = "";
  }
}

const colorPicker = document.getElementById('sectionColorPicker');
const section = document.getElementById('customSection');

// Load saved color on page load
const savedColor = localStorage.getItem('sectionColor');
if (savedColor) {
  section.style.backgroundColor = savedColor;
  colorPicker.value = savedColor;
}

// Change color on input and save it
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  section.style.backgroundColor = selectedColor;
  localStorage.setItem('sectionColor', selectedColor);
});

// Save color and animate box
//applyBtn.addEventListener('click', () => {
  //const selectedColor = colorPicker.value;
  //localStorage.setItem('boxColor', selectedColor);
 // box.style.backgroundColor = selectedColor;
//});
  // Trigger animation
  //box.classList.add('animate');
  //setTimeout(() => {
  //  box.classList.remove('animate');
 // }, 500);
//});

