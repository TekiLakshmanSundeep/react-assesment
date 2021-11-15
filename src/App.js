import logo from './logo.svg';
import LoginComponent from './components/login_component';
import { useContext } from 'react';
import  AuthContext  from './store/auth-context'
import  HomeComponent  from './components/home_component';
import './App.css';

function App() {
  const ctx = useContext(AuthContext);
  return (
    <div className="App">
     {!ctx.isLoggedin && <LoginComponent />}
     {ctx.isLoggedin && <HomeComponent />}
    </div>
  );
}

export default App;
