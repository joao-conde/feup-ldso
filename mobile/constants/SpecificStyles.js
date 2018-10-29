import {StyleSheet} from 'react-native';
import NestedStyleSheet from 'rn-nested-stylesheet';

export const invertedMode = {
    'fadeup': false,
    'faup': false,
    'fbaup': false,
    'fcnaup': false,
    'fcup': false,
    'fdup': false,
    'fep': false,
    'feup': true,
    'ffup': true,
    'flup': true,
    'fmdup': false,
    'fmup': false,
    'fpceup': false,
    'icbas': false
};

export const facultyStyles = NestedStyleSheet(StyleSheet, {

    fadeup: {
        header: {
            backgroundColor: '#c6db00',
        }
    },
    faup: {
        header: {
            backgroundColor: '#ffffff',
        }
    },
    fbaup: {
        header: {
            backgroundColor: '#b2b3b5',
        }
    },
    fcnaup: {
        header: {
            backgroundColor: '#ffd600',
        }
    },
    fcup: {
        header: {
            backgroundColor: '#92bfeb',
        }
    },
    fdup: {
        header: {
            backgroundColor: '#f42a41',
        }
    },
    fep: {
        header: {
            backgroundColor: '#f42a41',
        }
    },
    feup: {
        header: {
            backgroundColor: '#8c2d19',
        }
    },
    ffup: {
        header: {
            backgroundColor: '#6e20a0',
        }
    },
    flup: {
        header: {
            backgroundColor: '#0019a8',
        }
    },
    fmdup: {
        header: {
            backgroundColor: '#ff5c00',
        }
    },
    fmup: {
        header: {
            backgroundColor: '#f4ce15',
        }
    },
    fpceup: {
        header: {
            backgroundColor: '#ff5c00',
        }
    },
    icbas: {
        header: {
            backgroundColor: '#ffd600',
        }
    }
});

export default facultyStyles;
