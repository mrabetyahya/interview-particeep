import Router from './routes/Routes';
import './App.css';
import { ThemeProvider, useTheme } from '@mui/material';

function App() {
  const theme = useTheme();

  return (
    <div style={{ padding: 0, margin: 0, width: '100%', height: '100%' }}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
