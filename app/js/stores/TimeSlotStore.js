var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CalanderConstants = require('../constants/CalendarConstants');
var TimeSlotAPI = require('../utils/TimeSlotAPI');
var assign = require('object-assign');
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var _timeslots = {}, _selectedTimeslot = {}, _detailModalVisible = false;

// Method to load product data from mock API
function loadTimeSlotData(data) {
  _timeslots = data;
}

// Set modal visibility
function setDetailVisible(detailVisible) {
  _detailModalVisible = detailVisible;
}

// Method to set the currently selected timeslot 
function setSelectedTimeSlot(startTime) {
  _selectedTimeslot = _.find(_timeslots, function(slot) {return slot.startTime == startTime});
  _detailModalVisible = true;
}

//update the timeslot details when user saves the info in the modal
function updateTimeSlotData(updatedSlot) {
  var selectedTimeslot = _.find(_timeslots, function(slot) {return slot.startTime == updatedSlot.startTime});
  selectedTimeslot.name = updatedSlot.name;
  selectedTimeslot.phone = updatedSlot.phone;
  selectedTimeslot.booked = 'true';  
  _detailModalVisible = false;
  _selectedTimeslot = {};
  TimeSlotAPI.updateTimeSlot(selectedTimeslot);
}

var TimeSlotStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of timeslots.
   * @return {object}
   */
  getAll: function() {
    return _timeslots;
  },

  // Return selected timeslot
  getDetailedTimeSlot: function() {
    return _selectedTimeslot;
  },

  // Return modal visibility state
  getDetailModalVisible: function() {
    return _detailModalVisible;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  
  switch(action.actionType) {
    case CalanderConstants.RECEIVE_DATA:
      loadTimeSlotData(action.data);
      break;

    case CalanderConstants.SAVE_TIME_SLOT:
      updateTimeSlotData(action.slot);
      break;

    case CalanderConstants.SELECT_TIME_SLOT:
      setSelectedTimeSlot(action.startTime);
      break;

    default:
      // no op
  }

  TimeSlotStore.emitChange();
});

module.exports = TimeSlotStore;
