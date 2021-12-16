import React, {useEffect} from 'react';
import './style/App.css';
import Routers from "./Routers";



function App() {

    useEffect(()=> {
        window.location.pathname === '/'
            && window.history.pushState(null, '', '/main')
    }, [])

  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
