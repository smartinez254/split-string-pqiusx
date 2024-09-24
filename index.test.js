// DO NOT CHANGE ANYTHING IN THIS FILE.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test 1', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when str="Hello World!"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('Hello World!');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual(['Hello', 'World!']);
    });
  });
  test('when str=""', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual(['']);
    });
  });
  test('when str="Welcome to CIS 171!"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('Welcome to CIS 171!');

    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual(['Welcome', 'to', 'CIS', '171!']);
    });
  });
  test('when str=" "', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce(' ');

    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual(['', '']);
    });
  });
  test('when str=" "', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('A-Single-Word');

    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual(['A-Single-Word']);
    });
  });
});
