import { handleTotalSum, totalPages, handleVATValue } from './helpers';

describe('helpers', () => {
  describe('handleTotalSum', () => {
    it('should return 0 when b is 0', () => {
      expect(handleTotalSum(10, 0)).toBe(0);
    });

    it('should return the sum of a and b as a string with 2 decimal places', () => {
      expect(handleTotalSum(10.5, 5.25)).toBe('15.75');
    });
  });

  describe('handleVATValue', () => {
    it('should return 0 when b is 0', () => {
      expect(handleVATValue(10, 0)).toBe(0);
    });

    it('should return a as a string with 2 decimal places when b is not 0', () => {
      expect(handleVATValue(12.5, 1)).toBe('12.50');
    });
  });

  describe('totalPages', () => {
    it('should return the correct number of pages', () => {
      expect(totalPages(10, 3)).toBe(4);
      expect(totalPages(10, 5)).toBe(2);
    });
  });
});
