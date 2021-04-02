import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {
    const {dispatch} = useContext(AuthContext);
    const lastPatch = localStorage.getItem('lastPath') || '/';
    const handleClick = () => {
        // history.push('/marvel') 
        // history.replace('/marvel')
        dispatch({
            type: types.login,
            payload: {
                name:'pepe'
            }
        });

        history.replace(lastPatch);

    }
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleClick }
            >
                Login
            </button>
        </div>
    )
}
