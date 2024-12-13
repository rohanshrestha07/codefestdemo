
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import AppRoutes from './components/Routes/AppRoutes';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <AppRoutes/>
    </BrowserRouter>
    </>
  );
};

export default App;
