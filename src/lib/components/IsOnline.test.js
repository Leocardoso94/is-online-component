import React from 'react';
import { shallow } from 'enzyme';
import IsOnline from './IsOnline';


describe('IsOnline', () => {
  const map = {};
  window.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  Object.defineProperty(navigator, 'onLine', { value: true, writable: true, configurable: true });

  it('should render the OnlineComponent', () => {
    navigator.onLine = true;
    const wrapper = shallow(<IsOnline
      OnlineComponent={<h1>online</h1>}
      OfflineComponent={<h1>offline</h1>}
    />);

    expect(wrapper.text()).toBe('online');
  });


  it('should call the onChange function ', () => {
    navigator.onLine = true;
    let foo;
    const handleChange = (isOn) => { foo = isOn; };

    shallow(<IsOnline onChange={handleChange} />);

    map.online();
    expect(foo).toBe(true);
    navigator.onLine = false;
    map.offline();
    expect(foo).toBe(false);
  });


  it('should render the OfflineComponent', () => {
    navigator.onLine = false;
    const wrapper = shallow(<IsOnline
      OnlineComponent={<h1>online</h1>}
      OfflineComponent={<h1>offline</h1>}
    />);

    expect(wrapper.text()).toBe('offline');
  });
});
