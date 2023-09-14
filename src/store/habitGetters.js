// Format a given date. If no date is provided, the current date is used.
function formatCurrentDate(date = new Date()) {
  // Check if the provided date is a valid Date object
  if (!(date instanceof Date) || Number.isNaN(date)) {
    // If not, use the current date
    // eslint-disable-next-line no-param-reassign
    date = new Date();
  }
  // Define the formatting options
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  // Return formatted date
  return date.toLocaleDateString('en-US', options);
}

// Function to format the currentDate property of the habit store.
// eslint-disable-next-line import/prefer-default-export
export function formattedCurrentDate() {
  return formatCurrentDate(this.currentDate);
}
