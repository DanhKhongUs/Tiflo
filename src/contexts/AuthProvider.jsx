import { useReducer, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const initialState = {
    user: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            sessionStorage.setItem('currentUser', JSON.stringify(action.payload));
            return { user: action.payload };
        case 'LOGOUT':
            sessionStorage.removeItem('currentUser');
            return { user: null };
        default:
            return state;
    }
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        if (user) {
            dispatch({ type: 'LOGIN', payload: user });
        }
        setLoading(false);
    }, []);

    return <AuthContext.Provider value={{ state, dispatch, loading }}>{children}</AuthContext.Provider>;
}
