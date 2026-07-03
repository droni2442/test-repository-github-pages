import React from 'react';
import { TUseUsers, useUsers } from '../../hooks/useUsers';
import UserListItem from '../userListItem/UserListItem';

const UserList = () => {
    const { loading, users } = useUsers();

    if (loading) {
        return 'Loading...';
    }

    return (
        <ul>
            {users.map((user) => {
                return <UserListItem user={user} />;
            })}
        </ul>
    );
};

export default UserList;
