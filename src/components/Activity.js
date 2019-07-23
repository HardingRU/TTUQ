import React from 'react';
import '../App.css';
import axios from 'axios';

class Activity extends React.Component {
	constructor(props) {
		super()
		this.state = {
			activity: null,
			type: null,
			participants: null,
			loading: true,
			propsType: null
		}

		this.getActivity = this.getActivity.bind(this)
	}

	getActivity() {
		console.log('get Activity')
		var that = this;

		that.setState({
			loading: true,
		})

    axios.get('http://www.boredapi.com/api/activity?type=' + this.props.type)
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
		console.log('this.props.type ', this.props.type)
		console.log(this.state.propsType)
  }

	render(){
		return (
			<div>
			  {this.state.loading ? <div>Loading..</div> :
        <div>Activity: {this.state.activity} <br/>
				Type: {this.state.type} <br/>
				Participants: {this.state.participants}<br/>
				</div>
				}
			</div>
		)
	}
}

export default Activity
