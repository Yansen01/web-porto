
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });

  link.addEventListener("mouseout", () => {
    link.classList.remove("active");
  });
});

function scrollToProjects() {
  document.querySelector('#Projects').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSkills() {
  document.querySelector('#Skills').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
  document.querySelector('#About').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  document.querySelector('#Contact').scrollIntoView({ behavior: 'smooth' });
}


  // define the text to be displayed with the typing effect
  const text = "Computer Engineer";


  // get a reference to the HTML element that contains the text
  const lead = document.querySelector(".lead");

  // set the initial text of the element to an empty string
  lead.textContent = "";

  // define a function that adds one character to the element at a time
  function type() {
    if (lead.textContent.length === text.length) {
      // stop typing when the full text has been displayed
      return;
    }

    // add the next character of the text
    lead.textContent += text[lead.textContent.length];

    // wait for a short delay, then call the function again
    setTimeout(type, 100);
  }

  // start the typing effect when the page has finished loading
  window.addEventListener("load", type);

  const bubbles = document.querySelector('.bubbles');
  const bubbleCount = 20;
  const colors = ['#ffffff', '#cccccc', '#e6e6e6', '#f2f2f2', '#bfbfbf'];
  const sizes = ['40px', '60px', '80px', '100px'];

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.width = sizes[Math.floor(Math.random() * sizes.length)];
    bubble.style.height = bubble.style.width;
    bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    bubbles.appendChild(bubble);
  }


  
