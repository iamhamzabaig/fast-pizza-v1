export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

// export function calcMinutesLeft(dateStr) {
//   const d1 = new Date().getTime();
//   const d2 = new Date(dateStr).getTime();
//   return Math.round((d2 - d1) / 60000);
// }
export function calcMinutesLeft(dateStr) {
  const currentTime = new Date().getTime();
  const targetTime = new Date(dateStr).getTime();

  // Check if the target time is a valid date
  if (isNaN(targetTime)) {
    throw new Error("Invalid date string provided");
  }

  // Calculate the difference in milliseconds and convert to minutes
  const minutesLeft = Math.round((targetTime - currentTime) / 60000);

  return minutesLeft > 0 ? minutesLeft : 0; // Return 0 if the time has passed
}
