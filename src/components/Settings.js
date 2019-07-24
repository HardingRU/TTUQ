import React from 'react';
import '../App.css';

class Settings extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			firstName: '',
			lastName: '',
			emailAddress: ''
		};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
		var newState = {};
		newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
		var errorMessage = '';
		if(this.state.firstName === '') {
			errorMessage += 'First Name must not be blank \n';
		}
		if(this.state.lastName === '') {
			errorMessage += 'Last Name must not be blank \n';
		}
		if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.emailAddress)) {
			errorMessage += 'Invalid email address format'
		}
		if(errorMessage != '') {
			alert(errorMessage);
		}
		else {
			this.props.returnData(this.state)
		}
    event.preventDefault();
  }

  render() {
    return (
			<div>
				<h1>Enter Settings:</h1>
	      <form onSubmit={this.handleSubmit}>
	        <label>
	          First Name:
	          <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange} />
	        </label>
					<label>
						Last Name:
						<input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
					</label>
					<label>
						Email:
						<input type="text" id="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} />
					</label>
	        <input type="submit" value="Submit" />
	      </form>
			</div>
    );
  }
}

export default Settings
