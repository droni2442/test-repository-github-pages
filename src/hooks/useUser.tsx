import { useState, useEffect } from 'react';
import { TUser } from '../types/types';
import { api } from '../dal/Api';

export type TUseUser = {
    loading: boolean;
    user: TUser | null;
    fetchUser: (userId: number) => void;
};

export const useUser = (): TUseUser => {
    const [user, setUser] = useState<TUser | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchUser = async (userId: number) => {
        try {
            setLoading(true);
            const data = await api.getUser(userId);
            setUser(data);
        } catch (error) {
            console.error('Failed to fetch user:', error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, fetchUser, user };
};
