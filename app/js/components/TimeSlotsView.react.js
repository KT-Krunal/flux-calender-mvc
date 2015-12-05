var React = require('react');
var TimeSlotActions = require('../actions/TimeSlotActions');

// displays all timeslots 
var TimeSlotsView = React.createClass({

  selectSlot: function(event) {
    TimeSlotActions.selectTimeSlot(event.target.value);
  },
  render: function() {
    var self = this;
    var slots = [];
    var slotsData = this.props.slots;

    if(Object.prototype.toString.call(slotsData) === '[object Array]' && slotsData.length > 0) {
      
      this.props.slots.forEach(function(slot) {
      
        var color = 'green';
        if(slot.booked == 'true') {
          color = 'red';
        }

        var slotStyle = {
          backgroundColor: color
        };
        
        var slot = <li onClick={self.selectSlot} 
                      key={slot.startTime} 
                      value={slot.startTime}
                      style={slotStyle}>
                    {slot.displayTime}</li>
        
        slots.push(slot);
      });
    }
    
    return (
      <ul>
        {slots}
      </ul>
    );
  }
});

module.exports = TimeSlotsView;