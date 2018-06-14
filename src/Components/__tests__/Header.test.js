import React from 'react';
import { shallow } from 'enzyme'
import Header from '../Header';


describe('Components/Header', () => {
    it('renders with bad data without crashing', () => {
        const actual = shallow(<Header />);
        expect(actual).toBeDefined();
      });
      
      it('has default text if no props passed', () => {
        const actual = shallow(<Header />);
        expect(actual.find('h1').text()).toEqual('Delivery Schedule');
      }); 

      it('has props text if props passed', () => {
        const headerText = 'test head text';
        const actual = shallow(<Header headerText={headerText} />);
        expect(actual.find('h1').text()).toEqual(headerText);
      }); 
})
