import { useState, useEffect, useMemo } from 'react';
import { DecodedJWT, LoginResponseDto, User } from '@/api/auth/auth.dto'
import decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';
import {NavigationSubItem} from "@/shared/types/navigation";

const useAuth = (loginDto?: LoginResponseDto) => {

    const [token, setToken] = useState<string | null>(null);
    const [userData, setUserDataState] = useState<User | null>(null)
    const isLoggedIn = useMemo(() => !!token, [token]);
    const navigate = useNavigate()

    // Function to set user data in localStorage
    const Initialize = (access_token: string, userData: User) => {
        setAccessToken(access_token);
        setUserData(userData)
    };



    const setAccessToken = (tk: string) => {
        localStorage.setItem('access_token', tk);
        setToken(tk)

    }


    const setUserData = (data: User) => {
        localStorage.setItem('user_data', JSON.stringify(data))
        setUserDataState(data)
    }


    // Function to sync user data from localStorage
    const syncUserData = () => {

        const user_data = localStorage.getItem('user_data');
        const access_token = localStorage.getItem('access_token')

        if (user_data && access_token) {
            setToken(access_token)
            setUserDataState(JSON.parse(user_data))
        }

    };



    const getTokenExpiration = () => getDecodedJwt()?.exp
    const getUserPermissons = () => getDecodedJwt()?.permissions;


    // Function to check if JWT has expired
    const isExpired = () => {
        const exp = getTokenExpiration();

        const currentTime = Math.floor(Date.now() / 1000);
        if (exp)
            return exp < currentTime;

        else return true
    };


    const canAccess = (permission: string) => getUserPermissons()?.some(r => {
        // console.log(r, permission, getUserPermissons());
        return r.toLocaleLowerCase() == permission.toLocaleLowerCase()
    })

    const haveAnyChildAccess = (children: NavigationSubItem[]) => children.some(({ module: childModule, subModule: childSubModule }) => {
        if (!childModule || !childSubModule) {
            return true;  // No permission needed for this child route
        }
        const childPermissionKey = `${childModule}:${childSubModule}`;
        return canAccess(childPermissionKey);
    });

    const logOut = () => {
        removeAuthData();
        setUserDataState(null)
        setToken(null);
        navigate('/login')
    }



    // Initialize user data if provided
    useEffect(() => {
        // if (!isExpired()) {
        syncUserData()
        // }


    }, [loginDto]);

    return { isLoggedIn, token, userData, Initialize, isExpired, getDecodedJwt, getUserPermissons, logOut, canAccess, haveAnyChildAccess };
};


export const getAccessToken = () => localStorage.getItem('access_token');
const getDecodedJwt = () => {
    const token = getAccessToken()
    if (token)
        return decode<DecodedJWT>(token)
    else return null
};
export const getTokenExpiration = () => getDecodedJwt()?.exp
export const getUserPermissons = () => getDecodedJwt()?.permissions;
export const removeAuthData = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_data')
}
export default useAuth;
