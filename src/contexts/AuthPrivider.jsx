import { useReducer, useEffect } from 'react';
import { AuthContext } from './AuthContext';

const initialState = {
    user: JSON.parse(localStorage.getItem('currentUser')) || null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('currentUser', JSON.stringify(action.payload));
            return { user: action.payload };
        case 'LOGOUT':
            localStorage.removeItem('currentUser');
            return { user: null };
        default:
            return state;
    }
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // Cập nhật lại localStorage khi state thay đổi nếu muốn
        localStorage.setItem('currentUser', JSON.stringify(state.user));
    }, [state.user]);

    return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}
