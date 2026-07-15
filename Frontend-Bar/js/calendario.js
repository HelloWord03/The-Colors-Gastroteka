
document.addEventListener('DOMContentLoaded', function () {
  const calendarDefaultExample = document.getElementById('calendar')
  const eventDay = new Date()
  const calendarDefault = new FullCalendar.Calendar(calendarDefaultExample, {
    initialView: 'dayGridMonth',
    buttonText: {
      today: 'Today'
    },
    events: [
      {
        title: 'Learn JavaScript',
        start: eventDay.toISOString().split('T')[0],
        classNames: ['fc-event-primary']
      }
    ]
  })
})
calendarDefault.render()

