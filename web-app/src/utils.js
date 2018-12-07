var assert = require('assert');

export const deepEqual = (a, b) => {
    try {
        assert.deepEqual(a, b);
    } catch (error) {
        if (error.name === 'AssertionError') {
            return false;
        }
        throw error;
    }
    return true;
};