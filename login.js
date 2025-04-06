function validateForm() {
    const username = document.forms["loginForm"]["username"].value;
    const regno = document.forms["loginForm"]["regno"].value;
    const password = document.forms["loginForm"]["password"].value;
  
    if (username === "deena" && regno === "713522cs503" && password === "22cs503") {
      window.location.href = "homepage.html";
      return false; 
    } else {
      alert("Invalid login credentials.");
      return false;
    }
  }
  