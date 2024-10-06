function checkPass() {
  const passwordInput = document.getElementById("password").value;
  const correctPassword = "cockroach";

  if (passwordInput === correctPassword) {
      // Redirect to another page if the password is correct
      window.location.href = "https://www.example.com"; // Change to your desired URL
  } else {
      const errorSound = document.getElementById("errorSound");
      errorSound.play()
      document.getElementById("incorrectPasswordMessage").innerHTML = "Incorrect Password ❌";
      const message = document.getElementById("incorrectPasswordMessage");
      message.classList.add("incorrectAnimation");
  }
}
