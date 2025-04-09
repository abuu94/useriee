// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './components/MyComponent';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes >
        <Route path="/" element={<LandingPage />}>

        </Route>
        {/* <Route path="/">
          <h1>Welcome to My React App</h1>
        </Route> */}
      </Routes>
    </Router>
    // <div className="App">
    //   <h1>Welcome to My React App</h1>
    //   <MyComponent />
    // </div>

  );
}

export default App
