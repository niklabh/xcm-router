import { describe, expect, it } from 'vitest';
import { type TTransferOptionsModified } from '../../types';
import MangataExchangeNode from './MangataDex';
import { MOCK_TRANSFER_OPTIONS } from '../../utils/utils.test';

describe('MangataDex', () => {
  it('should build a transfer extrinsic without error', async () => {
    const options: TTransferOptionsModified = {
      ...MOCK_TRANSFER_OPTIONS,
      currencyFrom: 'KSM',
      currencyTo: 'BNC',
      amount: '1401830652183',
    };
    const dex = new MangataExchangeNode();
    const api = await dex.createApiInstance();
    const tx = await dex.swapCurrency(api, options);
    expect(tx).toBeDefined();
  });
});
