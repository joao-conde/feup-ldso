import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Svg } from 'expo';
const { Text} = Svg;

// TODO Text is a separate component so that it could wrap the given text inside the surrounding hexagon
class HexText extends Component {
  static propTypes = {
    children: PropTypes.string,
    x: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    y: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    className: PropTypes.string,
    fontSize: PropTypes.number,
  };
  

  render() {
    const { children, x, y, className, fontSize } = this.props;
    const fontSizeValue = (fontSize) ? fontSize : 5;
    return (
        <Text x={x || 0} y={y ? y : '0.3'} className={className}  textAnchor="middle" fontSize={fontSizeValue} style={{fontFamily: 'OpenSans_regular'}}>{children}</Text>
    );
  }
}

export default HexText;
