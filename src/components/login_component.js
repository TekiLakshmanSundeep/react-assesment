import Header from './component_one';
import UserInput from './component_two';
import ButtonComponent from './component_button';
import { useContext, useState } from 'react';
import AuthContext from '../store/auth-context';
const LoginComponent = () => {
    const ctx = useContext(AuthContext);
    
    return (
        <div>
        <Header title="Welcome to quiz"></Header>
        <UserInput labelName="Enter username" onInputChange={ctx.onUserNameChange} type="text" placeholder="Eg: Lakshman"> </UserInput>
        <br />
        <UserInput labelName="Enter Password" type="password" placeholder=""> </UserInput>
        <br />

        <ButtonComponent buttonTitle="Take Quiz" onbuttonClick={ctx.onLogin}></ButtonComponent>
        </div>
        
    )

    
}


export default LoginComponent;