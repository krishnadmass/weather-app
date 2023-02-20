import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './app.styled';
import Snackbar from './components/Snackbar';
import Home from './pages/Home';
import { AppStore } from './store/store';
import { darkTheme, lightTheme } from './theme';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Home setIsOpen={setIsOpen} />
      {isOpen && <Snackbar setIsOpen={setIsOpen} isOpen={isOpen} />}
    </ThemeProvider>
  );
};

export default App;
