import ButtonComponent from './component_button'
import { useContext } from 'react';
import  AuthContext  from '../store/auth-context' 
import './home_component.css';
const HomeComponent = () => {
    const authCtx = useContext(AuthContext);
    return (
        <div className="home_container_parent">
        <h1>Your Quiz Starts here</h1>
        <div className="label_home_container ">
        <label>Hai {authCtx.username}, This is the quiz home page</label>
        </div>
        <br />
        <ButtonComponent buttonTitle="Logout" onbuttonClick={authCtx.onLogout}></ButtonComponent>
        </div>
    );
}

export default HomeComponent;