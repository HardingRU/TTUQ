import React from 'react';
import './App.css';
import Recreational from './components/Recreational';
import Cooking from './components/Cooking';
import Activity from './components/Activity'
import Settings from './components/Settings';
import Profile from './components/Profile';
import Landing from './components/Landing';

 class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentPage: 'landing',
      firstName: null,
      lastName: null,
      emailAddress: null
    }

    this.toggle = this.toggle.bind(this);
    this.accordion = this.accordion.bind(this);
    this.setProfileInformation = this.setProfileInformation.bind(this);
    this.redirectToSettings = this.redirectToSettings.bind(this);
  }

  toggle(input) {
    this.setState({
      currentPage: input.target.id
    })
  }

  setProfileInformation(settingsData) {
    this.setState({
      firstName: settingsData.firstName,
      lastName: settingsData.lastName,
      emailAddress: settingsData.emailAddress,
      currentPage: 'profile'
    })
  }

  redirectToSettings() {
    this.setState({
      currentPage: 'settings'
    })
  }

  accordion(input) {
    var x;
    if(input.target.className.indexOf("activities") !== -1) {
      x = document.getElementById('activitiesAccordion')
    }
    if(input.target.className.indexOf("account") !== -1) {
      x = document.getElementById('accountAccordion')
    }

    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-green";
    } else {
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-green", "");
    }
  }

  render() {
    let currentPage;

    switch(this.state.currentPage) {
      case 'recreational':
        //currentPage = <Activity type='recreational' />
        currentPage = <Recreational />
        break;
      case 'cooking':
        //currentPage = <Activity type='cooking' />
        currentPage = <Cooking />
        break;
      case 'profile':
        var settingsData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          emailAddress: this.state.emailAddress
        }
        currentPage = <Profile settingsData={settingsData} redirectToSettings={this.redirectToSettings}/>
        break;
      case 'settings':
        currentPage = <Settings returnData={this.setProfileInformation}/>
        break;
      default:
        currentPage = <Landing />
    }

    return (
     <div>
        <div>
          <div className="w3-sidebar w3-bar-block w3-light-grey w3-card" style={{width: '160px'}}>
            <div id="landing" className="w3-bar-item w3-button" onClick={this.toggle}>Landing</div>
            <div className="activities w3-bar-item w3-button" onClick={this.accordion}>
              Activities <i className="activities fa fa-caret-down"></i>
            </div>
            <div id="activitiesAccordion" className="w3-hide w3-white w3-card-4">
              <button id="recreational" className="w3-bar-item w3-button" onClick={this.toggle}>Recreational</button>
              <button id="cooking" className="w3-bar-item w3-button" onClick={this.toggle}>Cooking</button>
            </div>
            <div className="account w3-bar-item w3-button" onClick={this.accordion}>
              Account <i className="account fa fa-caret-down"></i>
            </div>
            <div id="accountAccordion" className="w3-hide w3-white w3-card-4">
              <button id="profile" className="w3-bar-item w3-button" onClick={this.toggle}>Profile</button>
              <button id="settings" className="w3-bar-item w3-button" onClick={this.toggle}>Settings</button>
            </div>
          </div>

          <div className="w3-container" style={{margin: '0px 0px 0px 160px'}}>
              {currentPage}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
