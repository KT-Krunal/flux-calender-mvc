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
      
        var color = 'limegreen';
        if(slot.booked == 'true') {
          color = 'darkred';
        }

        var slotStyle = {
          color: 'white',
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
      <div className='slotsBlock'>
        <span className='heading'>
          All the slots are listed below. Red slot indicates it is blocked by someone. Clicking on the slot will open 
          up the modal which will allow to book/re-book the timeslot.
        </span>
        <ul>
          {slots}
        </ul>
      </div>
    );
  }
});

module.exports = TimeSlotsView;