// Set the value of the hidden timestamp field to the current date and time
document.addEventListener("DOMContentLoaded", function () {
  const now = new Date().toISOString();
  const timestampField = document.getElementById("timestamp");
  if (timestampField) timestampField.value = now;
});

export function getTimestamp() {
  const timestampField = document.getElementById("timestamp");
  return timestampField ? timestampField.value : null;
}