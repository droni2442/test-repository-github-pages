import React from 'react';
import { TUseUsers, useUsers } from '../../hooks/useUsers';
import UserListItem from '../userListItem/UserListItem';
import styles from './UserList.module.scss';

type TUserListProps = {
    selectedUserId?: number;
    selectUser: (id: number) => void;
};

const UserList = ({ selectUser, selectedUserId }: TUserListProps) => {
    const { loading, users } = useUsers();

    if (loading) {
        return 'Loading...';
    }

    return (
        <ul>
            {users.map((user) => {
                return (
                    <div
                        className={
                            selectedUserId === user.id
                                ? styles.selectedItem || 'selectedItem' // подстраховка строкой
                                : undefined
                        }
                        onClick={() => {
                            selectUser(user.id);
                        }}
                        key={user.id}
                    >
                        <UserListItem user={user} />
                    </div>
                );
            })}
        </ul>
    );
};

export default UserList;
