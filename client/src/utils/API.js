export const getMe = (token) => {
    return fetch('/api/user/me', {
        headers: {
            'Content-Type' : 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Conent-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    });
};
