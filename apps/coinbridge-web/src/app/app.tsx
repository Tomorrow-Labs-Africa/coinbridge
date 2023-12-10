// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createTheme, ThemeProvider } from '@mui/material';
import Airtime from './Views/Airtime';
import Menu from './Views/Menu';
import OffRamp from './Views/OffRamp';
import OnRamp from './Views/OnRamp';
import styles from './app.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import { QueryClient, QueryClientProvider } from "react-query";
import Success from './Views/Success';
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';


const theme = createTheme({
  shape: {
    borderRadius: 20, // your value
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#357074', 
          },
        },
      }
    }}
  
});

export function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <div>
          <Router>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/offramp" element={<OffRamp />} />
              <Route path="/onramp" element={<OnRamp />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </Router>
          </div>
          <ToastContainer />
      </ThemeProvider>

    </QueryClientProvider>

  );
}

export default App;
