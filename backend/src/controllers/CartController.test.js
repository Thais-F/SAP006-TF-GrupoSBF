const cartController = require('./CartController');

function mockGlobalFunc(funcName, funcMock) {
  const funcOriginal = global[funcName];
  global[funcName] = funcMock;

  return () => {
    global[funcName] = funcOriginal;
  };
}

const setTimeoutRestoreFunction = mockGlobalFunc('setTimeout', (callback) => callback());

describe('CartController', () => {
  afterAll(() => {
    setTimeoutRestoreFunction();
  });

  describe('CartController.finish', () => {
    it('success response', async () => {
      jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.12);

      const fakeResponse = {
        sendStatus: jest.fn(),
      };

      cartController.finish(undefined, fakeResponse);

      expect(fakeResponse.sendStatus).toHaveBeenCalledWith(201);
    });

    it('error response', async () => {
      jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.6);

      const fakeResponse = {
        sendStatus: jest.fn(),
      };

      cartController.finish(undefined, fakeResponse);

      expect(fakeResponse.sendStatus).toHaveBeenCalledWith(500);
    });
  });
});
