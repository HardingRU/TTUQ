import React from 'react';
import '../App.css';

class Landing extends React.Component {

	render(){
		return (
			<div>
				<h1>Welcome!</h1>
								<p>Thanks for stopping by -- I hope you enjoy my <span className="strikethrough">job</span> web application!</p>
				<iframe src="https://giphy.com/embed/11vhCpFcD3um7m" title="minions" width="480" height="451" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
			</div>
		)
	}

}

export default Landing
