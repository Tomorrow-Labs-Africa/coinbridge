import { transaction } from './transaction';

describe('transaction', () => {
  it('should work', () => {
    expect(transaction()).toEqual('transaction');
  });
});
