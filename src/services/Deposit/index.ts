import API from '../Api';
import { Deposit } from './types';

export const list = async (): Promise<Deposit[]> => {
    const { data: response } = await API.get('/deposit');

    return response.data.data;
}

export const approve = async ({ id }: Deposit): Promise<boolean> => {
    await API.patch(`/deposit/approve/${id}`);

    return true;
}

export const reject = async ({ id }: Deposit): Promise<boolean> => {
    await API.patch(`/deposit/reject/${id}`);

    return true;
}
