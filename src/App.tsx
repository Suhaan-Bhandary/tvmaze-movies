import { Toaster } from 'react-hot-toast';
import Router from './Router/Router';

function App() {
  return (
    <>
      <Router />
      <Toaster position="top-right" containerStyle={{ zIndex: 100000 }} />
    </>
  );
}

export default App;
