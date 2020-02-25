const ChromeFirefoxMocks = {
  enter: {
    charCode: 13,
    code: 'Enter',
    key: 'Enter',
    keyCode: 13,
    keyIdentifier: undefined,
    which: 13,
  },
  up: {
    charCode: 0,
    code: 'ArrowUp',
    key: 'ArrowUp',
    keyCode: 38,
    keyIdentifier: undefined,
    which: 38
  },
  down: {
    charCode: 0,
    code: 'ArrowDown',
    key: 'ArrowDown',
    keyCode: 40,
    keyIdentifier: undefined,
    which: 40
  },
  left: {
    charCode: 0,
    code: 'ArrowLeft',
    key: 'ArrowLeft',
    keyCode: 37,
    keyIdentifier: undefined,
    which: 37
  },
  right: {
    charCode: 0,
    code: 'ArrowRight',
    key: 'ArrowRight',
    keyCode: 39,
    keyIdentifier: undefined,
    which: 39
  },
  tab: {
    charCode: 0,
    code: 'Tab',
    key: 'Tab',
    keyCode: 9,
    keyIdentifier: undefined,
    which: 9
  },
  esc: {
    charCode: 0,
    code: 'Escape',
    key: 'Escape',
    keyCode: 27,
    keyIdentifier: undefined,
    which: 27
  },
  space: {
    charCode: 0,
    code: 'Space',
    key: ' ',
    keyCode: 32,
    keyIdentifier: undefined,
    which: 32
  },
  shift: {
    charCode: 0,
    code: 'ShiftLeft',
    key: 'Shift',
    keyCode: 16,
    keyIdentifier: undefined,
    which: 16
  },
  backspace: {
    charCode: 0,
    code: 'Backspace',
    key: 'Backspace',
    keyCode: 8,
    keyIdentifier: undefined,
    which: 8
  },
  delete: {
    charCode: 0,
    code: 'Delete',
    key: 'Delete',
    keyCode: 46,
    keyIdentifier: undefined,
    which: 46
  },
  0: {
    charCode: 0,
    code: 'Digit0',
    key: 0,
    keyCode: 48,
    keyIdentifier: 'U+0030',
    which: 48
  },
  1: {
    charCode: 0,
    code: 'Digit1',
    key: 1,
    keyCode: 49,
    keyIdentifier: 'U+0031',
    which: 49
  },
  2: {
    charCode: 0,
    code: 'Digit2',
    key: 2,
    keyCode: 50,
    keyIdentifier: 'U+0032',
    which: 50
  },
  3: {
    charCode: 0,
    code: 'Digit3',
    key: 3,
    keyCode: 51,
    keyIdentifier: 'U+0033',
    which: 51
  },
  4: {
    charCode: 0,
    code: 'Digit4',
    key: 4,
    keyCode: 52,
    keyIdentifier: 'U+0034',
    which: 52
  },
  5: {
    charCode: 0,
    code: 'Digit5',
    key: 5,
    keyCode: 53,
    keyIdentifier: 'U+0035',
    which: 53
  },
  6: {
    charCode: 0,
    code: 'Digit6',
    key: 6,
    keyCode: 54,
    keyIdentifier: 'U+0036',
    which: 54
  },
  7: {
    charCode: 0,
    code: 'Digit7',
    key: 7,
    keyCode: 55,
    keyIdentifier: 'U+0037',
    which: 55
  },
  8: {
    charCode: 0,
    code: 'Digit8',
    key: 8,
    keyCode: 56,
    keyIdentifier: 'U+0038',
    which: 56
  },
  9: {
    charCode: 0,
    code: 'Digit9',
    key: 9,
    keyCode: 57,
    keyIdentifier: 'U+0039',
    which: 57
  }
};

const SafariMocks = {
  enter: {
    charCode: 0,
    code: 'Enter',
    key: 'Enter',
    keyCode: 13,
    keyIdentifier: 'Enter',
    which: 13
  },
  up: {
    charCode: 0,
    code: 'ArrowUp',
    key: 'ArrowUp',
    keyCode: 38,
    keyIdentifier: 'Up',
    which: 38
  },
  down: {
    charCode: 0,
    code: 'ArrowDown',
    key: 'ArrowDown',
    keyCode: 40,
    keyIdentifier: 'Down',
    which: 40
  },
  left: {
    charCode: 0,
    code: 'ArrowLeft',
    key: 'ArrowLeft',
    keyCode: 37,
    keyIdentifier: 'Left',
    which: 37
  },
  right: {
    charCode: 0,
    code: 'ArrowRight',
    key: 'ArrowRight',
    keyCode: 39,
    keyIdentifier: 'Right',
    which: 39
  },
  tab: {
    charCode: 0,
    code: 'Tab',
    key: 'Tab',
    keyCode: 9,
    keyIdentifier: 'U+0009',
    which: 9
  },
  esc: {
    charCode: 0,
    code: 'Escape',
    key: 'Escape',
    keyCode: 27,
    keyIdentifier: 'U+001B',
    which: 27
  },
  space: {
    charCode: 0,
    code: 'Space',
    key: ' ',
    keyCode: 32,
    keyIdentifier: 'U+0020',
    which: 32
  },
  shift: {
    charCode: 0,
    code: 'ShiftLeft',
    key: 'Shift',
    keyCode: 16,
    keyIdentifier: 'Shift',
    which: 16
  },
  backspace: {
    charCode: 0,
    code: 'Backspace',
    key: 'Backspace',
    keyCode: 8,
    keyIdentifier: 'U+0008',
    which: 8
  },
  delete: {
    charCode: 0,
    code: 'Delete',
    key: 'Delete',
    keyCode: 46,
    keyIdentifier: 'U+007F',
    which: 46
  },
  0: {
    charCode: 0,
    code: 'Digit0',
    key: 0,
    keyCode: 48,
    keyIdentifier: 'U+0030',
    which: 48
  },
  1: {
    charCode: 0,
    code: 'Digit1',
    key: 1,
    keyCode: 49,
    keyIdentifier: 'U+0031',
    which: 49
  },
  2: {
    charCode: 0,
    code: 'Digit2',
    key: 2,
    keyCode: 50,
    keyIdentifier: 'U+0032',
    which: 50
  },
  3: {
    charCode: 0,
    code: 'Digit3',
    key: 3,
    keyCode: 51,
    keyIdentifier: 'U+0033',
    which: 51
  },
  4: {
    charCode: 0,
    code: 'Digit4',
    key: 4,
    keyCode: 52,
    keyIdentifier: 'U+0034',
    which: 52
  },
  5: {
    charCode: 0,
    code: 'Digit5',
    key: 5,
    keyCode: 53,
    keyIdentifier: 'U+0035',
    which: 53
  },
  6: {
    charCode: 0,
    code: 'Digit6',
    key: 6,
    keyCode: 54,
    keyIdentifier: 'U+0036',
    which: 54
  },
  7: {
    charCode: 0,
    code: 'Digit7',
    key: 7,
    keyCode: 55,
    keyIdentifier: 'U+0037',
    which: 55
  },
  8: {
    charCode: 0,
    code: 'Digit8',
    key: 8,
    keyCode: 56,
    keyIdentifier: 'U+0038',
    which: 56
  },
  9: {
    charCode: 0,
    code: 'Digit9',
    key: 9,
    keyCode: 57,
    keyIdentifier: 'U+0039',
    which: 57
  }
};

const EdgeMocks = {
  enter: {
    charCode: 0,
    code: undefined,
    key: 'Enter',
    keyCode: 13,
    keyIdentifier: undefined,
    which: 13
  },
  up: {
    charCode: 0,
    code: undefined,
    key: 'Up',
    keyCode: 38,
    keyIdentifier: undefined,
    which: 38
  },
  down: {
    charCode: 0,
    code: undefined,
    key: 'Down',
    keyCode: 40,
    keyIdentifier: undefined,
    which: 40
  },
  left: {
    charCode: 0,
    code: undefined,
    key: 'Left',
    keyCode: 37,
    keyIdentifier: undefined,
    which: 37
  },
  right: {
    charCode: 0,
    code: undefined,
    key: 'Right',
    keyCode: 39,
    keyIdentifier: undefined,
    which: 39
  },
  tab: {
    charCode: 0,
    code: undefined,
    key: 'Tab',
    keyCode: 9,
    keyIdentifier: undefined,
    which: 9
  },
  esc: {
    charCode: 0,
    code: undefined,
    key: 'Esc',
    keyCode: 27,
    keyIdentifier: undefined,
    which: 27
  },
  space: {
    charCode: 0,
    code: undefined,
    key: ' ',
    keyCode: 32,
    keyIdentifier: undefined,
    which: 32
  },
  shift: {
    charCode: 0,
    code: undefined,
    key: 'Shift',
    keyCode: 16,
    keyIdentifier: undefined,
    which: 16
  },
  backspace: {
    charCode: 0,
    code: undefined,
    key: 'Backspace',
    keyCode: 8,
    keyIdentifier: undefined,
    which: 8
  },
  delete: {
    charCode: 0,
    code: undefined,
    key: 'Delete',
    keyCode: 46,
    keyIdentifier: undefined,
    which: 46
  },
  0: {
    charCode: 0,
    code: 'Digit0',
    key: 0,
    keyCode: 48,
    keyIdentifier: 'U+0030',
    which: 48
  },
  1: {
    charCode: 0,
    code: 'Digit1',
    key: 1,
    keyCode: 49,
    keyIdentifier: 'U+0031',
    which: 49
  },
  2: {
    charCode: 0,
    code: 'Digit2',
    key: 2,
    keyCode: 50,
    keyIdentifier: 'U+0032',
    which: 50
  },
  3: {
    charCode: 0,
    code: 'Digit3',
    key: 3,
    keyCode: 51,
    keyIdentifier: 'U+0033',
    which: 51
  },
  4: {
    charCode: 0,
    code: 'Digit4',
    key: 4,
    keyCode: 52,
    keyIdentifier: 'U+0034',
    which: 52
  },
  5: {
    charCode: 0,
    code: 'Digit5',
    key: 5,
    keyCode: 53,
    keyIdentifier: 'U+0035',
    which: 53
  },
  6: {
    charCode: 0,
    code: 'Digit6',
    key: 6,
    keyCode: 54,
    keyIdentifier: 'U+0036',
    which: 54
  },
  7: {
    charCode: 0,
    code: 'Digit7',
    key: 7,
    keyCode: 55,
    keyIdentifier: 'U+0037',
    which: 55
  },
  8: {
    charCode: 0,
    code: 'Digit8',
    key: 8,
    keyCode: 56,
    keyIdentifier: 'U+0038',
    which: 56
  },
  9: {
    charCode: 0,
    code: 'Digit9',
    key: 9,
    keyCode: 57,
    keyIdentifier: 'U+0039',
    which: 57
  }
};

const IEMocks = {
  enter: {
    charCode: 0,
    code: undefined,
    key: 'Enter',
    keyCode: 13,
    keyIdentifier: undefined,
    which: 13
  },
  up: {
    charCode: 0,
    code: undefined,
    key: 'Up',
    keyCode: 38,
    keyIdentifier: undefined,
    which: 38
  },
  down: {
    charCode: 0,
    code: undefined,
    key: 'Down',
    keyCode: 40,
    keyIdentifier: undefined,
    which: 40
  },
  left: {
    charCode: 0,
    code: undefined,
    key: 'Left',
    keyCode: 37,
    keyIdentifier: undefined,
    which: 37
  },
  right: {
    charCode: 0,
    code: undefined,
    key: 'Right',
    keyCode: 39,
    keyIdentifier: undefined,
    which: 39
  },
  tab: {
    charCode: 0,
    code: undefined,
    key: 'Tab',
    keyCode: 9,
    keyIdentifier: undefined,
    which: 9
  },
  esc: {
    charCode: 0,
    code: undefined,
    key: 'Esc',
    keyCode: 27,
    keyIdentifier: undefined,
    which: 27
  },
  space: {
    charCode: 0,
    code: undefined,
    key: 'Spacebar',
    keyCode: 32,
    keyIdentifier: undefined,
    which: 32
  },
  shift: {
    charCode: 0,
    code: undefined,
    key: 'Shift',
    keyCode: 16,
    keyIdentifier: undefined,
    which: 16
  },
  backspace: {
    charCode: 0,
    code: undefined,
    key: 'Backspace',
    keyCode: 8,
    keyIdentifier: undefined,
    which: 8
  },
  delete: {
    charCode: 0,
    code: undefined,
    key: 'Delete',
    keyCode: 46,
    keyIdentifier: undefined,
    which: 46
  },
  0: {
    charCode: 0,
    code: 'Digit0',
    key: 0,
    keyCode: 48,
    keyIdentifier: 'U+0030',
    which: 48
  },
  1: {
    charCode: 0,
    code: 'Digit1',
    key: 1,
    keyCode: 49,
    keyIdentifier: 'U+0031',
    which: 49
  },
  2: {
    charCode: 0,
    code: 'Digit2',
    key: 2,
    keyCode: 50,
    keyIdentifier: 'U+0032',
    which: 50
  },
  3: {
    charCode: 0,
    code: 'Digit3',
    key: 3,
    keyCode: 51,
    keyIdentifier: 'U+0033',
    which: 51
  },
  4: {
    charCode: 0,
    code: 'Digit4',
    key: 4,
    keyCode: 52,
    keyIdentifier: 'U+0034',
    which: 52
  },
  5: {
    charCode: 0,
    code: 'Digit5',
    key: 5,
    keyCode: 53,
    keyIdentifier: 'U+0035',
    which: 53
  },
  6: {
    charCode: 0,
    code: 'Digit6',
    key: 6,
    keyCode: 54,
    keyIdentifier: 'U+0036',
    which: 54
  },
  7: {
    charCode: 0,
    code: 'Digit7',
    key: 7,
    keyCode: 55,
    keyIdentifier: 'U+0037',
    which: 55
  },
  8: {
    charCode: 0,
    code: 'Digit8',
    key: 8,
    keyCode: 56,
    keyIdentifier: 'U+0038',
    which: 56
  },
  9: {
    charCode: 0,
    code: 'Digit9',
    key: 9,
    keyCode: 57,
    keyIdentifier: 'U+0039',
    which: 57
  }
};

export const mocks = {
  ie: IEMocks,
  edge: EdgeMocks,
  default: ChromeFirefoxMocks,
  safari: SafariMocks
}