import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/index.css"
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './rudex/index'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider, useQuery, } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,

)
