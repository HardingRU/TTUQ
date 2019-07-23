import React from 'react';
import { shallow } from 'enzyme';
import Cooking from './Cooking';
import axios from 'axios';

jest.mock('axios');

describe('Cooking', () => {
  describe('when component initializes', () => {
    const spy = jest.spyOn(axios, 'get');
    const app = shallow(<Cooking />);

    it('gets data from Bored API', () => {
      const getSpy = jest.spyOn(axios, 'get');
      expect(getSpy).toBeCalled();
    });

  });
});
