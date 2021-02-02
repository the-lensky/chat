import React, {useContext} from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import {privateRoutes, publicRoutes} from '../routes'
import {CHAT_ROUTE, LOGIN_ROUTE} from '../utils'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../index'
import Loader from './Loader'


const AppRouter = () => {


    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if(loading){
        return <Loader />
    }

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={CHAT_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
}

export default AppRouter
