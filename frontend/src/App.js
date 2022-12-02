import React from 'react'
import {Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import ChatPage from './Pages/ChatPage'


const App = () => {
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact/>
      <Route path='/chat' component={ChatPage}/>
    </div>
    )
}

export default App