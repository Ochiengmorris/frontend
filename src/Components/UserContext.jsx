import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await axios.get('/user/profile', { withCredentials: true });
                setUser(data);
            } catch (error) {
                console.log("Error fetching user data:", error)
                // Log out user if failed
            } finally {
                setReady(true);
            }
        }
        if (!user) {
            fetchProfile();
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>

    )
}
