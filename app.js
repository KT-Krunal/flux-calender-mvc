
var React = require('react');
var TimeSlotData = require('./app/js/TimeSlotData');
var TimeSlotAPI = require('./app/js/utils/TimeSlotAPI');
var CalendarApp = require('./app/js/components/CalendarApp.react');

//initialize the mock data
TimeSlotData.init();

//get the initial data
TimeSlotAPI.getTimeSlotData();

React.render(
  <CalendarApp />,
  document.getElementById('calendarapp')
);
