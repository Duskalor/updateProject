import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
