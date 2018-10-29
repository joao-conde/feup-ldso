// @flow

import variable from './../variables/platform';

export default (variables /*: * */ = variable) => {
    const h3Theme = {
        color: variables.textColor,
        fontFamily: variables.titleFontfamily,
        fontSize: variables.fontSizeH3,
        lineHeight: variables.lineHeightH3
    };

    return h3Theme;
};
