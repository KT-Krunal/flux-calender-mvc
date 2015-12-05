var TimeSlotActions = require('../actions/TimeSlotActions');

module.exports = {

  // Load mock product data from localStorage into TimeSlotStore via Action
  getTimeSlotData: function() {
    $.ajax({
      url: 'http://localhost:3001/api/slots/',
      success: function(data) {
        TimeSlotActions.receiveTimeSlots(data);
      }
    });
  },

  updateTimeSlot: function(slot) {
    var url = 'http://localhost:3001/api/slots/' + slot.startTime;
    $.ajax({
      type: 'POST',
      url: url,
      data: slot,
      success: function(result) {
        //TODO
      }
    });
  }
};