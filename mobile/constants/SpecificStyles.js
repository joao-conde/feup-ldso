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
        },
        icon: {
            borderColor: '#c6db00'
        },
        mainMenuIcon: {
            color: '#c6db00'
        },
        mainMenuBtn: {
            borderColor: '#c6db00'
        },
    },
    faup: {
        header: {
            backgroundColor: '#ffffff',
        },
        icon: {
            borderColor: '#b2b3b5'
        },
        mainMenuIcon: {
            color: '#b2b3b5'
        },
        mainMenuBtn: {
            borderColor: '#b2b3b5'
        },
    },
    fbaup: {
        header: {
            backgroundColor: '#b2b3b5',
        },
        icon: {
            borderColor: '#b2b3b5'
        },
        mainMenuIcon: {
            color: '#b2b3b5'
        },
        mainMenuBtn: {
            borderColor: '#b2b3b5'
        },
    },
    fcnaup: {
        header: {
            backgroundColor: '#ffd600',
        },
        icon: {
            borderColor: '#ffd600'
        },

    },
    fcup: {
        header: {
            backgroundColor: '#92bfeb',
        },
        icon: {
            borderColor: '#92bfeb'
        },
        mainMenuIcon: {
            color: '#92bfeb'
        },
        mainMenuBtn: {
            borderColor: '#92bfeb'
        },
    },
    fdup: {
        header: {
            backgroundColor: '#f42a41',
        },
        icon: {
            borderColor: '#f42a41'
        },
        mainMenuIcon: {
            color: '#f42a41'
        },
        mainMenuBtn: {
            borderColor: '#f42a41'
        },
    },
    fep: {
        header: {
            backgroundColor: '#f42a41',
        },
        icon: {
            borderColor: '#f42a41'
        },
        mainMenuIcon: {
            color: '#f42a41'
        },
        mainMenuBtn: {
            borderColor: '#f42a41'
        },
    },
    feup: {
        header: {
            backgroundColor: '#8c2d19',
        },
        icon: {
            borderColor: '#8c2d19'
        },
        mainMenuBtn: {
            backgroundColor: '#8c2d19',
            borderColor: '#8c2d19'
        },
    },
    ffup: {
        header: {
            backgroundColor: '#6e20a0',
        },
        icon: {
            borderColor: '#6e20a0'
        },
        mainMenuBtn: {
            borderColor: '#6e20a0'
        },
    },
    flup: {
        header: {
            backgroundColor: '#0019a8',
        },
        icon: {
            borderColor: '#0019a8'
        },
        mainMenuIcon: {
            color: '#0019a8'
        },
        mainMenuBtn: {
            borderColor: '#0019a8'
        },
    },
    fmdup: {
        header: {
            backgroundColor: '#ff5c00',
        },
        icon: {
            borderColor: '#ff5c00'
        },
        mainMenuIcon: {
            color: '#ff5c00'
        },
        mainMenuBtn: {
            borderColor: '#ff5c00'
        },
    },
    fmup: {
        header: {
            backgroundColor: '#f4ce15',
        },
        icon: {
            borderColor: '#f4ce15'
        },

    },
    fpceup: {
        header: {
            backgroundColor: '#ff5c00',
        },
        icon: {
            borderColor: '#ff5c00'
        },
        mainMenuIcon: {
            color: '#ff5c00'
        },
        mainMenuBtn: {
            borderColor: '#ff5c00'
        },
    },
    icbas: {
        header: {
            backgroundColor: '#ffd600',
        },
        icon: {
            borderColor: '#ffd600'
        },
        mainMenuIcon: {
            color: '#ffd600'
        },
        mainMenuBtn: {
            borderColor: '#ffd600'
        },
    }
});

export default facultyStyles;
