import React, { useEffect, useState } from 'react';
import UserList from '../UI/userList/UserList';
import UserDetails from '../UI/userDetails/UserDetails';

const useUserSelection = () => {
    const [userId, setUserId] = useState<number | undefined>(undefined);

    const selectUser = (userId: number) => {
        setUserId(userId);
    };

    return { userId, selectUser };
};

function UsersPage(): React.ReactNode {
    const { userId, selectUser } = useUserSelection();

    return (
        <section>
            <div>
                <UserList selectUser={selectUser} selectedUserId={userId}/>
                {userId && <UserDetails userId={userId} />}
            </div>
        </section>
    );
}

export default UsersPage;
