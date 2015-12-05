/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */

var React = require('react');
var TimeSlotStore = require('../stores/TimeSlotStore');

var TimeSlotsView = require('./TimeSlotsView.react');
var TimeSlotDetailModal = require('./TimeSlotDetailModal.react');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getCalendarState() {
  return {
    allSlots: TimeSlotStore.getAll(),
    selectedTimeSlot: TimeSlotStore.getDetailedTimeSlot(),
    modalVisible: TimeSlotStore.getDetailModalVisible()
  };
}

var CalendarApp = React.createClass({

  getInitialState: function() {
    return getCalendarState();
  },

  componentDidMount: function() {
    TimeSlotStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TimeSlotStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <TimeSlotDetailModal slot={this.state.selectedTimeSlot} visible={this.state.modalVisible} />
        <TimeSlotsView slots={this.state.allSlots} />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TimeSlotStore
   */
  _onChange: function() {
    this.setState(getCalendarState());
  }

});

module.exports = CalendarApp;
