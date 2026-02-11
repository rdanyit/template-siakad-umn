function formatK(number) {
  if (number >= 1000) {
    const result = number / 1000;
    return (result % 1 === 0 ? result : result.toFixed(1)) + " K";
  }
  return number.toString();
}

document.querySelectorAll(".number-statistik").forEach((el) => {
  const value = parseFloat(el.textContent.trim());
  if (!isNaN(value)) {
    el.textContent = formatK(value);
  }
});
