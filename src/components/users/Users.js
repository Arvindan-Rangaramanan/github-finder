import React, { Component } from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types';

const Users = ({users, loading}) => {

    if(loading) { 
        return <Spinner />
    }
    else {

    }
        return (
            <div style={userStyle}>
                {users.map(users => (
                    <UserItem key={users.id} user={users} />
                ))}
                
            </div>
        );
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users


