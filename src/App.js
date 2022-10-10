import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Component/router/Router';


function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
