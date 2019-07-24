import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

const mockFunction = jest.fn();

describe('Profile', () => {
  describe('when component initializes', () => {
    const settingsData = {
      firstName: '',
      lastName: '',
      emailAddress: ''
    }
    const app = mount(<Profile settingsData={settingsData} redirectToSettings={mockFunction}/>);

    it('calls passed function on click', () => {
        app.find('a').simulate('click');
        expect(mockFunction).toHaveBeenCalled();
    });

  });
});
