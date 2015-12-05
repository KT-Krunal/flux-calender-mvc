
var _ = require('lodash');

var slots = [
    {
        startTime: '9',
        displayTime: '9AM-10AM',
        booked: 'true',
        name: 'rob',
        phone: '888-888-8888'
    },
    {
        startTime: '10',
        displayTime: '10AM-11AM',
        booked: 'false'
    },
    {
        startTime: '11',
        displayTime: '11AM-12PM',
        booked: 'true',
        name: 'tom',
        phone: '800-000-0000'
    },
    {
        startTime: '12',
        displayTime: '12PM-1PM',
        booked: 'false'
    },
    {
        startTime: '13',
        displayTime: '1PM-2PM',
        booked: 'false'
    },
    {
        startTime: '14',
        displayTime: '3PM-4PM',
        booked: 'false'
    },
    {
        startTime: '15',
        displayTime: '4PM-5PM',
        booked: 'false'
    }
  ];

/**
* This class exposes methods for CRUD operations for Slot db schema
*/
var slotController = function() {
  return {
    getSlots: getSlots,
    updateSlot: updateSlot
  }

  function getSlots(req, res) {
    res.type('json').json(slots);
  };

  function updateSlot(req, res) {
    var updatedSlot = req.body;
    var index = _.findIndex(slots, function(slot) {
        return slot.startTime == req.params.starttime;
    });

    console.log('index is ' + index);
    slots[index] = _.extend(slots[index], updatedSlot);
    console.log(slots);
  }
}

module.exports = slotController;
