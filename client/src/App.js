import './App.css';
import Navbar from "./components/Navbar"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"
import backgroundImage from './wild-forest-food-seamless-random-pattern-with-orange-mushroom-doodle-elements-pink-background-vector.jpg';

function App() {
  return (
    <div className="App">
        < Navbar/>
        <div style={{
            backgroundImage: `url(${backgroundImage})`
        }}>
        </div>
            <div className = "forms-wrapper">
                <LoginForm />
                <RegisterForm />
            </div>

    </div>
  );
}
//I want to add login and register to the nav bar as functional links but so far what ive tried was non functional
//Im also having an issue with the background image rendering- Ive tried referencing it a couple different ways and neither will render it?
//so everything looks pretty boring right now 
export default App;
