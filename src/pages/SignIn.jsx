import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';
import routes from '~/Routes/routes';

function SignIn() {
    const [form, setForm] = useState({ username: '', password: '' });
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((u) => u.username === form.username && u.password === form.password);

        if (user) {
            dispatch({ type: 'LOGIN', payload: user });

            // Lưu thông tin người dùng vào localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));

            navigate(routes.dashboard);
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Sign In</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                    className="w-full mb-4 px-4 py-2 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    className="w-full mb-4 px-4 py-2 border rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Sign In
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link to={routes.signup} className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default SignIn;
