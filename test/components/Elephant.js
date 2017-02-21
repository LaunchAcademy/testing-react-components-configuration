import Elephant from 'components/Elephant';
// import { mount } from 'enzyme';
// import jasmineEnzyme from 'jasmine-enzyme';
// import React from 'react';

describe('Elephant', () => {
  let image,
      onClick,
      text,
      wrapper;

  beforeEach(() => {
    // jasmineEnzyme();
    onClick = jasmine.createSpy('onClick spy');
    wrapper = mount(
      <Elephant
        image="http://fakeurl.com/elephant"
        onClick={onClick}
        text="I am an Elephant!"
      />
    );
  });

  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });

  it('should render an h1 tag with the text property value', () => {
    expect(wrapper.find('h1').text()).toBe('I am an Elephant!');
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://fakeurl.com/elephant',
      height: '400',
      width: '600'
    });
  });

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
