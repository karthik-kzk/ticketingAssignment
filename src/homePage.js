import React from 'react';
// import SignIn from './components/login';
import ActionOverriding from './components/table';
import MenuAppBar from './components/appBar';


export default function Homepage (){
    return(
        <div>
            <MenuAppBar/>
            <ActionOverriding/>
        </div>
    )
}