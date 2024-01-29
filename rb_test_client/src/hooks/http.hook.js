import { useState, useCallback } from 'react'

export const useHttp = () => {
    // States
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // Request callback function
    const request = useCallback(async (url, method='GET', body=null, headers={}) => {
        setLoading(true);
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, { method, body, headers });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Request error.');
            }

            setLoading(false);
            
            return JSON.parse(data);
        } catch (err) {
            setLoading(false);
            setError(err.message);
            throw err;
        }   
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
};