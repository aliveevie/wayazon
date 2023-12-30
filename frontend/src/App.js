import { useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { MobileHeader } from './components/mobileHeader';

function App() {

  const [mobile, setMobile] = useState(false);

  const handleMobile = () => {
        setMobile(!mobile)
  }

  return (
    <>
    <Header  mobile={mobile} handleMobile={handleMobile} />
    
    {mobile && <MobileHeader  />}
    </>
   
  );
}

export default App;
