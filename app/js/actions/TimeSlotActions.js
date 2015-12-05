var AppDispatcher = require('../dispatcher/AppDispatcher');
var CalanderConstants = require('../constants/CalendarConstants');

// Define action methods
var TimeSlotActions = {

  // Receive inital timeslots data
  receiveTimeSlots: function(data) {
    AppDispatcher.dispatch({
      actionType: CalanderConstants.RECEIVE_DATA,
      data: data
    })
  },

  // Set currently selected timeslot
  selectTimeSlot: function(startTime) {
    AppDispatcher.dispatch({
      actionType: CalanderConstants.SELECT_TIME_SLOT,
      startTime: startTime
    })
  },

  // update timeslot information
  updateTimeSlot: function(newSlotData) {
    AppDispatcher.dispatch({
      actionType: CalanderConstants.SAVE_TIME_SLOT,
      slot: newSlotData
    })
  },
};

module.exports = TimeSlotActions;
