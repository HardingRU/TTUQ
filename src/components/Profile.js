import React from 'react';
import '../App.css';

class Profile extends React.Component {
	constructor() {
		super()
		this.redirectToSettings = this.redirectToSettings.bind(this)
	}

	redirectToSettings() {
		this.props.redirectToSettings();
	}

	render(){
		return (

			<div>
				{this.props.settingsData.firstName ?
					<div>
					<h1> User Profile </h1>
					<strong>First Name:</strong> {this.props.settingsData.firstName} <br/>
					<strong>Last Name:</strong> {this.props.settingsData.lastName} <br/>
					<strong>Email Address:</strong> {this.props.settingsData.emailAddress}
					</div> :
					<div>
						<h1> No Profile Information Available </h1>
						Please enter your information in the <a href="#" onClick={this.redirectToSettings}>Settings</a> section
					</div>
				}
			</div>
		)
	}
}

export default Profile
