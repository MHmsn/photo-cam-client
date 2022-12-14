import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes';
import 'react-photo-view/dist/react-photo-view.css';



function App() {
  return (
    <div className="App min-h-screen">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
