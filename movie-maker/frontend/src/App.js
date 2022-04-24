import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Movies from './containers/Movies'
import AddMovie from './components/AddMovie'

const App = () => {
  return (
    <div>
      <Header/>
      <Movies/>
      <AddMovie/>
      <Footer/>
    </div>
  )
}

export default App;
