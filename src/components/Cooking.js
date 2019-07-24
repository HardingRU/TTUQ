import React from 'react';
import '../App.css';
import axios from 'axios';

class Cooking extends React.Component {
	constructor() {
		super()
		this.state = {
			activity: null,
			type: null,
			participants: null,
			loading: true
		}
		this.getActivity = this.getActivity.bind(this)
	}

	getActivity() {
		var that = this;

    axios.get('http://www.boredapi.com/api/activity?type=cooking')
      .then(function (response) {
        that.setState({
					activity: response.data.activity,
					type: response.data.type,
					participants: response.data.participants
				})
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        that.setState({
					loading: false
				})
      });

  }

  componentDidMount() {
		this.getActivity();
  }

	render(){
		return (
			<div>
			  {this.state.loading ?
					<div>Loading..</div> :
        	<div>
					<h1>Random Cooking Activity</h1>
						Activity: {this.state.activity} <br/>
						Type: {this.state.type} <br/>
						Participants: {this.state.participants}<br/>
					</div>
				}
			</div>
		)
	}
}

export default Cooking
