export interface Deposit {
    id: number;
    image: string;
    amount: number;
    status: 'rejected' | 'approved' | 'waiting_approval';
    user_id: number;
    created_at: string;
    updated_at: string;
}
