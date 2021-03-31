import React from 'react'

export const LoginScreen = ({ history }) => {
    const handleClick = () => {
        // history.push('/marvel')

        history.replace('/marvel')
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
