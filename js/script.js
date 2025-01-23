let noClickCount = 0; // Counter for "No" button clicks

document.getElementById("no-btn").addEventListener("click", function () {
  noClickCount++;

  const response = document.getElementById("response");
  const box = document.querySelector(".box");
  const noFirstAudio = new Audio("assets/first no sound.mp3");
  const noSecondAudio = new Audio("assets/no_button_sound.wav");
  const image = document.createElement("img"); // Create an image element

  if (noClickCount === 1) {
    // First "No" click: Play the first sound twice
    let playCount = 0;
    const playFirstSoundTwice = () => {
      if (playCount < 2) {
        noFirstAudio.play();
        playCount++;
        noFirstAudio.onended = playFirstSoundTwice; // Replay until played twice
      } else {
        noFirstAudio.pause(); // Stop the sound
        noFirstAudio.currentTime = 0;
        response.classList.add("hidden"); // Reset the sound
      }
    };

    playFirstSoundTwice(); // Start playing the first sound
    response.textContent = "Shoo, don't do!";
    response.classList.remove("hidden");
  } else if (noClickCount === 2) {
    // Second "No" click: Show image and play second sound
    response.classList.add("hidden"); // Hide response
    box.style.display = "none"; // Hide box

    // Configure image
    image.src = "assets/no button.jpg"; // Replace with your image file name
    image.alt = "no button";
    image.style.maxWidth = "100%";
    image.style.margin = "0 auto";
    image.style.display = "block";

    // Append image to body
    document.body.appendChild(image);

    // Play the second sound twice
    let playCount = 0;
    const playSecondSoundTwice = () => {
      if (playCount < 2) {
        noSecondAudio.play();
        playCount++;
        noSecondAudio.onended = playSecondSoundTwice; // Replay until played twice
      } else {
        noSecondAudio.pause(); // Stop the sound
        noSecondAudio.currentTime = 0; // Reset the sound
        // Remove image and reset the box
        document.body.removeChild(image); // Remove image
        box.style.display = "block"; // Show box again
        noClickCount = 0; // Reset click count
      }
    };

    playSecondSoundTwice(); // Start playing the second sound
  }
});

document.getElementById("yes-btn").addEventListener("click", function () {
  const yesAudio = new Audio("assets/yes sound.mp3"); // Sound for "Yes" click
  const body = document.body;
  const box = document.querySelector(".box");

  // Hide the box
  box.style.display = "none";

  // Change the background to happy cat GIF
  body.style.backgroundImage = "url('assets/happy cat.gif')"; // Replace with your GIF path
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "center";

  yesAudio.play(); // Play the sound
  yesAudio.onended = () => {
    // Redirect to the main birthday page after the sound ends
    window.location.href = "birthday_page.html"; // Replace with your page file name or URL
  };
});


document.getElementById("yes-btn").addEventListener("click", function () {
  const yesAudio = new Audio("assets/yes_sound.mp3"); // Sound for "Yes" click
  const body = document.body;
  const box = document.querySelector(".box");

  // Hide the box
  box.style.display = "none";


// Create the happy cat GIF element
const happyCat = document.createElement("img");
happyCat.id = "happy-cat";
happyCat.src = "assets/happy cat.gif"; // Replace with your GIF path
happyCat.alt = "Happy Cat";

// Add the happy cat GIF to the body
body.appendChild(happyCat);

// Style the GIF to fill the screen (height and width)
happyCat.style.height = "100vh"; // Fill the full height
happyCat.style.width = "auto";  // Maintain aspect ratio
happyCat.style.objectFit = "cover"; // Cover the area without stretching

// Play the sound immediately after setting up the elements
yesAudio.play().catch(error => {
  console.log("Error playing audio:", error);
});

yesAudio.onended = () => {
  // Cleanup after sound ends
  body.removeChild(happyCat); // Remove the GIF
  window.location.href = "birthday_page.html"; // Redirect to the main page
};
});

