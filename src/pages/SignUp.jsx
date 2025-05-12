import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import routes from '~/Routes/routes';

function SignUp() {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const existingUser = users.find((u) => u.username === form.username);

        if (existingUser) {
            alert('Username already exists. Please choose another one.');
        } else {
            users.push(form);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Sign Up successful! Please log in.');

            navigate(routes.signin);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-4">
                <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>

                <input
                    type="text"
                    placeholder="Enter username"
                    value={form.username}
                    onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                    required
                />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                    className="w-full px-4 py-2 border rounded focus:outline-none"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Sign Up
                </button>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Have an account?{' '}
                    <Link to={routes.signin} className="text-blue-500 hover:underline">
                        Sign In
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default SignUp;
