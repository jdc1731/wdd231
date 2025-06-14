document
  .getElementById("gardeningForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("firstname").value.trim(),
      lastName: document.getElementById("lastname").value.trim(),
      email: document.getElementById("email").value.trim(),
      gardeningLevel: document.querySelector(
        'input[name="gardeningLevel"]:checked'
      )?.value,
      advice: document.getElementById("advice").value.trim(),
      timestamp: new Date().toISOString(),
    };

    // Save to full history
    const existing = JSON.parse(localStorage.getItem("gardeningAdvice")) || [];
    existing.push(formData);
    localStorage.setItem("gardeningAdvice", JSON.stringify(existing));

    // Save to recent (for thank you page display)
    localStorage.setItem("latestGardeningAdvice", JSON.stringify(formData));

    window.location.href = "thankyou.html";
  });
