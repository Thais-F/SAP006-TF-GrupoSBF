const utils = require('./utils');

describe('utils', () => {
  describe('utils.normalizeStr', () => {
    it('normalizes the strings correctly', () => {
      expect(utils.normalizeStr('Chapéu')).toBe('chapeu');
      expect(utils.normalizeStr('àáãâ')).toBe('aaaa');
      expect(utils.normalizeStr('lingüiça')).toBe('linguica');
      expect(utils.normalizeStr('Meu Nome é')).toBe('meu nome e');
    });
  });
});
