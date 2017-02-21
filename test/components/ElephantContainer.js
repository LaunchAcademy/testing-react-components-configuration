import ElephantContainer from 'components/ElephantContainer';
import Elephant from 'components/Elephant';
// import { mount } from 'enzyme';
// import jasmineEnzyme from 'jasmine-enzyme';
// import React from 'react';

describe('ElephantContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    spyOn(ElephantContainer.prototype, 'handleClick').and.callThrough();
    spyOn(ElephantContainer.prototype, 'componentDidMount').and.callThrough();
    spyOn(global, 'alert');
    wrapper = mount(<ElephantContainer />);
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ babyElephant: false });
  })

  it('should render an Elephant Component', () => {
    expect(wrapper.find(Elephant)).toBePresent();
  });

  it('should render the Elephant Component with specific props when babyElephant is false', () => {
    expect(wrapper.find(Elephant).props()).toEqual({
      image: "https://animalcorner.co.uk/wp-content/uploads/2015/02/elephant-1.jpg",
      onClick: jasmine.any(Function),
      text: 'that\'s a big elephant'
    });
  });

  it('should render the Elephant Component with specific props when babyElephant is true', () => {
    wrapper.setState({ babyElephant: true });
    expect(wrapper.find(Elephant).props()).toEqual({
      image: "http://akns-images.eonline.com/eol_images/Entire_Site/201438/rs_560x415-140408154504-1024.baby-elephant-grass.ls.4814.jpg",
      onClick: jasmine.any(Function),
      text: "Look at the baby elephant!"
    })
  })

  it('should invoke componentDidMount', () => {
    expect(ElephantContainer.prototype.componentDidMount).toHaveBeenCalled();
  });

  it('should invoke alert', () => {
    expect(alert).toHaveBeenCalledWith('click on the Elephant!')
  })

  it('should render the tree of the Elephant component', () => {
    expect(wrapper.find(Elephant).find('h1')).toBePresent();
  });

  describe('handleClick', () => {
    it('should eb invoked when the function assigned to the onClick property of the Elephant props is executed', () => {
      wrapper.find(Elephant).props().onClick();
      expect(ElephantContainer.prototype.handleClick).toHaveBeenCalled();
    });

    it('should change the babyElephant property in the state to the opposite boolean', () => {
      wrapper.find(Elephant).props().onClick();
      expect(wrapper.state()).toEqual({ babyElephant:true })
    });
  });
});
