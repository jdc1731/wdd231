// Set the value of the hidden timestamp field to the current date and time
document.addEventListener("DOMContentLoaded", function () {
  const now = new Date().toISOString(); // ISO format: YYYY-MM-DDTHH:MM:SSZ
  document.getElementById("timestamp").value = now;
});

export function getTimestamp() {
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    return timestampField.value;
  } else {
    console.error("Timestamp field not found.");
    return null;
  }
}