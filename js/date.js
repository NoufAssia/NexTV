const timeElement = document.querySelector("#time");
const dateElement = document.querySelector("#date");
export function dateAndTime() {
  let now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    // timeZone: "Africa/Casablanca",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const date = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "2-digit",
  });
  timeElement.textContent = time;
  dateElement.textContent = date;
}
setInterval(dateAndTime, 1000);
