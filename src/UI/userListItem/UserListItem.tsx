import React from 'react';
import { TUser } from '../../types/types';

const UserListItem = ({ user }: { user: TUser }) => {
    const { id, name, email } = user;

    return (
        <li key={id} className=''>
            <div>
                <p>Name: {name}</p>
            </div>
            <p>Email: {email}</p>
        </li>
    );
};

export default UserListItem;
