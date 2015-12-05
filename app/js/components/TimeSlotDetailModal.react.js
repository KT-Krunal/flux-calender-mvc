var React = require('react');
var TimeSlotActions = require('../actions/TimeSlotActions');

var TimeSlotDetailModal = React.createClass({
  
  getInitialState: function() {
    return {
      name: this.props.slot.name || '',
      phone: this.props.slot.phone || ''
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      name: nextProps.slot.name || '',
      phone: nextProps.slot.phone || ''
    });
  },

  componentDidMount: function() {
    // When the component is added, turn it into a modal
    $(this.refs.root.getDOMNode()).modal({backdrop: 'static', keyboard: false, show: false});
  },
  
  componentWillUnmount: function() {
    $(this.refs.root.getDOMNode()).off('hidden', this.handleHidden);
  },
  
  componentDidUpdate: function(prevProps, prevState) {
    if(this.props.visible === true) {
      this.open();
    } else {
      this.close();
    }
  },

  close: function() {
    $(this.refs.root.getDOMNode()).modal('hide');
  },
  
  open: function() {
    $(this.refs.root.getDOMNode()).modal('show');
  },
  
  handleSave: function() {
    TimeSlotActions.updateTimeSlot({
                      startTime: this.props.slot.startTime,
                      name: this.state.name,
                      phone: this.state.phone
                    });
    this.close();
  },

  handleNameChange: function(event) {
    this.setState({name: event.target.value});
  },

  handlePhoneChange: function(event) {
    this.setState({phone: event.target.value});
  },

  render: function() {
    
    return (
      <div className="modal fade" ref="root">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={this.close}>
                &times;
              </button>
              <h3>Booking Details for {this.props.slot.displayTime}:</h3>
            </div>
            <div className="modal-body">
              <div>
                <span className='modal-label'>Name: </span><input type='text' value={this.state.name} autoFocus={true} onChange={this.handleNameChange} />
              </div>
              <div>
                <span className='modal-label'>Phone Number: </span><input type='text' value={this.state.phone} onChange={this.handlePhoneChange} />
              </div>
            </div>
            <div className="modal-footer">
              <a onClick={this.close} href="javascript:;" role="button" className='btn-default btn'>Cancel</a>
              <a onClick={this.handleSave} href="javascript:;" role="button" className='btn-primary btn'>Save</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TimeSlotDetailModal;