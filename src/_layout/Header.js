import React from 'react';
import 'mdb-ui-kit/css/mdb.min.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


function LoginStatus(){
    const {
        user,
        isAuthenticated,
        logout,
        loginWithRedirect
    }=useAuth0();
if(isAuthenticated){
    return(
        <div>
            <span className="text-white">Login done! {user.name}</span>
            <button className="btn btn-danger" onClick={()=>logout()}>Log Out!!! </button>
        </div>
    )
}
else if(!isAuthenticated){
    return(
        <div>
        <button className="text-white btn btn-info" onClick={()=>loginWithRedirect()}>MyAccount</button> 
        </div>
    )
}
else{
    return (
        <div>
            Loading...?
        </div>
    )
}

}
function Header(){
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
            <span className="navbar-brand">
            ACKLENAPPLICATION
            </span>
            <div className="collapse navbar-collapse">
            <BrowserRouter>
            <ul className="navbar-nav">
            <li className="nav-item">
            <a href="/" className="nav-link">Books</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/create">Create</a>
            </li>
            </ul>
            <div className="w-100">

            </div>

            </BrowserRouter>
            <LoginStatus></LoginStatus>
            </div>
            </div>

        </nav>
    )
}
export default Header
