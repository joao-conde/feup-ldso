import 'react-native';
import React from 'react';
import MenuScreen from '../../screens/MenuScreen';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<MenuScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
