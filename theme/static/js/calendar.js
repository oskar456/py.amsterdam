document.addEventListener('DOMContentLoaded', function () {const eventList = [{"title": "Meetup", "url": "2020/02/17/first-meetup.html", "start": "2020-02-17"}];let calendarEl = document.getElementById('calendar');let calendar = new FullCalendar.Calendar(calendarEl, {locale: 'en-gb',height: 'auto',plugins: ['dayGrid'],editable: true,eventLimit: true,events: eventList});calendar.render();});