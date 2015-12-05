module.exports = {
  init: function() {
    localStorage.clear();
    localStorage.setItem('timeslots', JSON.stringify([
      {
        startTime: 9,
        displayTime: '9-10AM',
        booked: true,
        name: 'rob',
        phone: 3456
      },
      {
        startTime: 10,
        displayTime: '10-11AM',
        booked: false
      },
      {
        startTime: 11,
        displayTime: '11AM-12PM',
        booked: true,
        name: 'tom',
        phone: 3456
      }
    ]));
  }
}