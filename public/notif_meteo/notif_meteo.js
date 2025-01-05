const monthYear = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");
const prevMonth = document.getElementById("prev-month");
const nextMonth = document.getElementById("next-month");
const eventModal = document.getElementById("event-modal");
const eventInput = document.getElementById("event-input");
const selectedDateElement = document.getElementById("selected-date");
const saveEvent = document.getElementById("save-event");
const closeModal = document.getElementById("close-modal");

let currentDate = new Date();
let events = {};

function loadCalendar() {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  monthYear.textContent = `${new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(currentDate)} ${year}`;
  calendarDays.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
    calendarDays.innerHTML += `<div></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${month + 1}-${day}`;
    const dayElement = document.createElement("div");
    dayElement.classList.add("day");
    dayElement.dataset.date = dateStr;

    if (events[dateStr]) {
      dayElement.classList.add("event");
    }

    dayElement.innerHTML = `
      <div>${day}</div>
      <div class="weather">☀️ 10°C</div>
    `;

    dayElement.addEventListener("click", () => openEventModal(dateStr));
    calendarDays.appendChild(dayElement);
  }
}

function openEventModal(date) {
  selectedDateElement.textContent = `Date sélectionnée : ${date}`;
  eventInput.value = events[date] || "";
  eventModal.classList.remove("hidden");
}

function closeEventModal() {
  eventModal.classList.add("hidden");
}

saveEvent.addEventListener("click", () => {
  const date = selectedDateElement.textContent.split(": ")[1];
  const eventText = eventInput.value.trim();

  if (eventText) {
    events[date] = eventText;
  } else {
    delete events[date];
  }

  closeEventModal();
  loadCalendar();
});

closeModal.addEventListener("click", closeEventModal);

prevMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  loadCalendar();
});

nextMonth.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  loadCalendar();
});

loadCalendar();
