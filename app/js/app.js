
var React = require('react');
var TimeSlotData = require('./TimeSlotData');
var TimeSlotAPI = require('./utils/TimeSlotAPI');
var CalendarApp = require('./components/CalendarApp.react');

//initialize the mock data
//TimeSlotData.init();

//get the initial data
TimeSlotAPI.getTimeSlotData();

React.render(
  <CalendarApp />,
  document.getElementById('calendarapp')
);
