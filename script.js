function updateUI() {
  const now = new Date();
  const progress = calculateYearProgress(now);
  
  // Update Text
  document.getElementById('percentage-text').innerText = `${now.getFullYear()} is ${progress}% completed`;
  
  // Update Progress Bar width
  document.getElementById('progress-fill').style.width = `${progress}%`;
  
  console.log(`Updated at ${now.toLocaleTimeString()}: ${progress}%`);
}

function calculateYearProgress(date = new Date()) {
  const year = date.getFullYear();
  const start = new Date(year, 0, 1); // Jan 1st
  const end = new Date(year + 1, 0, 1); // Jan 1st next year

  const total = end - start;
  const elapsed = date - start;

  return (elapsed / total * 100).toFixed(4); // Increased decimals for smoother feel
}

// Run immediately on load
document.addEventListener("DOMContentLoaded", () => {
  updateUI();
  
  // Set interval to check every 60 seconds (60000 ms)
  // This ensures that when it hits 12:00 AM, it will catch the change.
  setInterval(updateUI, 10000);
});