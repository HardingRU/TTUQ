import React from 'react';
import '../App.css';
import axios from 'axios';

class Recreational extends React.Component {
	constructor() {
		super()
		this.state = {
			activity: null,
      type: null,
      participants: null,
      loading: true
		}


    //FIND NEW ACT BUTTON?
    //BREAK OUT INTO OWN SERVICE?
		this.getActivity = this.getActivity.bind(this)
	}

  getActivity() {
    var that = this;

    axios.get('http://www.boredapi.com/api/activity?type=recreational')
      .then(function (response) {
        that.setState({
          activity: response.data.activity,
          type: response.data.type,
          participants: response.data.participants
        })
      })
      .catch(function (error) {
        // handle error
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
						Activity: {this.state.activity} <br/>
						Type: {this.state.type} <br/>
						Participants: {this.state.participants}<br/>
					</div>
				}
			</div>
		)
	}
}

export default Recreational
