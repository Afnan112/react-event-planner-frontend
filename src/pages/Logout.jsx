import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

function Logout() {

    const navigate = useNavigate()

    useEffect(() => {

        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')

        navigate('/signup')
    }, [navigate])

    return <p>Loging out ....</p>
}
export default Logout
