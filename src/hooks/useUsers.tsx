import { useState, useEffect } from 'react';
import { TUser } from '../types/types';
import { api } from '../dal/Api';

export type TUseUsers = {
    loading: boolean;
    users: TUser[];
};

export const useUsers = (): TUseUsers => {
    const [users, setUsers] = useState<TUser[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const data = await api.getUsers();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { loading, users };
};
