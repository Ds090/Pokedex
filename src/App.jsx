import "./App.css";
import CustomRouts from "./routes/CustomRouter";
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1 className="text-4xl font-serif font-bold tracking-widest bg-gradient-to-tr from-green-400 to-white bg-clip-text text-transparent text-center">
        <Link to='/' >Pokedex</Link>
      </h1>
      <CustomRouts />
    </>
  );
}

export default App;
