import API from '../Api';
import { list, approve, reject, get } from './index';
import MockAdapter from 'axios-mock-adapter';
import { Deposit } from './types';

const mock = new MockAdapter(API);

describe('Deposit service', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should fetch the list of deposits', async () => {
        const mockData = {
            data: {
                data: [
                    { id: 1, amount: 1000 },
                    { id: 2, amount: 2000 }
                ]
            }
        };

        mock.onGet('/deposit').reply(200, mockData);

        const result = await list();

        expect(result).toEqual(mockData.data.data);
    });

    it('should fetch a single deposit by id', async () => {
        const mockDeposit: Deposit = {
            id: 1,
            image: 'http://image.url',
            amount: 1000,
            status: 'waiting_approval',
            user_id: 1,
            user: {
                id: 1,
                name: 'Jest Unit',
                email: 'jest@example.com',
                email_verified_at: null,
                created_at: '2022-01-01 00:00:00',
                updated_at: '2022-01-01 00:00:00'
            },
            created_at: '2022-01-01 00:00:00',
            updated_at: '2022-01-01 00:00:00'
        };

        mock.onGet('/deposit/1').reply(200, { data: mockDeposit });

        const result = await get(1);

        expect(result).toEqual(mockDeposit);
    });

    it('should approve a deposit by id', async () => {
        mock.onPatch('/deposit/approve/1').reply(200);

        const result = await approve(1);

        expect(result).toBe(true);
    });

    it('should reject a deposit by id', async () => {
        mock.onPatch('/deposit/reject/1').reply(200);

        const result = await reject(1);

        expect(result).toBe(true);
    });
});
