import React from 'react';
import { Title } from './styed';
import { useDispatch, useSelector } from 'react-redux';
import DarkModeToggle from 'react-dark-mode-toggle';
import { AppStore } from '../../store/store';
import { toggleDarkMode } from '../../store/reducers/appReducer';
import './styles.css'

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);

  return (
    <header className='header-container'>
      <Title>Weather Application</Title>
      <div className='header-icons-container'>
        <DarkModeToggle checked={isDarkMode} onChange={() => dispatch(toggleDarkMode())} size={60} />
      </div>
    </header>
  );
};

export default Header;
