import React from 'react'
import Root from './pages/root'
import NetworkStatus from './components/network-status/NetworkStatus'

const App = () => {
  return (
    <div >
        <NetworkStatus/>
        <Root/>
    </div>
  )
}

export default App