import API from '../Api';
import { Deposit } from './types';

export const list = async (): Promise<Deposit[]> => {
    const { data: response } = await API.get('/deposit');

    return response.data.data;
}

export const get = async (id: number): Promise<Deposit> => {
    const { data: response } = await API.get(`/deposit/${id}`);

    return response.data;
}

export const approve = async (id: number): Promise<boolean> => {
    await API.patch(`/deposit/approve/${id}`);

    return true;
}

export const reject = async (id: number): Promise<boolean> => {
    await API.patch(`/deposit/reject/${id}`);

    return true;
}
