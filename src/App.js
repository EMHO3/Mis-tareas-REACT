import './App.css';
import freecodecamplogo from './imagen/FreeCodeCamp_logo.png'
import ListadeTareas from './Componentess/ListadeTareas';


/**
 * hacer un cd mis-tareas y luego npm start
 */

function App() {
  return (
    <div className="App-tareas">
      <div className='frecodecamp-logo-contenedor'>
        <img 
        src={freecodecamplogo} 
        className='freecode-camp-logo'/>
      </div>
      <div className='tarea-lista-principal'>
        <h1>Mis tareas</h1>
        <ListadeTareas/>
      </div>
    </div>
  );
}

export default App;
