import React from 'react'
import Header from './components/Header.jsx'
import AssociationFunctions from './components/AssociationFunctions.jsx';
import Founders from './components/Founders.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <div className="container">
        <Founders/>
        <AssociationFunctions />
      </div>
      <Footer/>
    </div>
  )
}

export default App