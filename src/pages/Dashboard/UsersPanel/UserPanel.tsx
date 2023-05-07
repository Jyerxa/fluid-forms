import React from 'react';
import Title from '../../../components/Title';

export interface UserPanelProps {
    userList: string[];
}

const UserPanel = ({userList}: UserPanelProps) => {
    return (
        <div className='w-24'>
            <Title title='Users'/>
            {userList && userList.map((user, index) =>  <div key={index}>{user}</div>)}
        </div>
    );
};

export default UserPanel;
