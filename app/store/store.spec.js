import { counter } from './store';

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      expect(counter(undefined, {})).toBe(0);
    })

    it('should handle INCREMENT action', () => {
      expect(counter(1, { type: 'INCREMENT' })).toBe(2);
    })

    it('should handle DECREMENT action', () => {
      expect(counter(1, { type: 'DECREMENT' })).toBe(0);
    })

    it('should handle RESET action', () => {
      expect(counter(99, { type: 'RESET' })).toBe(0);
    })

    it('should ignore unknown actions', () => {
      expect(counter(9, { type: 'unknown' })).toBe(9);
    })
  })
})