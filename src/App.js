import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes';



function App() {
  return (
    <div className="App min-h-screen" data-theme= 'light'>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
