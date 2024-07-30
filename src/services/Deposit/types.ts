interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface Deposit {
    id: number;
    image: string;
    amount: number;
    status: 'rejected' | 'approved' | 'waiting_approval';
    user_id: number;
    user: User;
    created_at: string;
    updated_at: string;
}
