// form.js
export function handleFormSubmit() {
  const form = document.getElementById("gardeningForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
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

    const existing = JSON.parse(localStorage.getItem("gardeningAdvice")) || [];
    existing.push(formData);
    localStorage.setItem("gardeningAdvice", JSON.stringify(existing));

    localStorage.setItem("latestGardeningAdvice", JSON.stringify(formData));

    window.location.href = "thankyou.html";
  });
}
