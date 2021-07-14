import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { isUserLogged } from '../../utils/accion'
import UserLogged from './UserLogged'
import UserGuest from './UserGuest'
import Loading from '../../components/Loading'


export default function Account() {
    const [login, setLogin] = useState(null)

    useEffect(() => {
        setLogin(isUserLogged())
    }, [])

    if (login == null) {
        return <Loading isVisible={true} text='Cargando...'></Loading>
    }

    return login ? <UserLogged /> : <UserGuest />
}

const styles = StyleSheet.create({})
