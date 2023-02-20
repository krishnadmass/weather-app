import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../store/fetchWeather';
import { LocationIcon, SearchIcon } from './styled';
import './styles.css';
import { AppStore } from '../../store/store';
import { getCurrentTheme } from '../../utils/storeUtils';


// search component for searching sity and suggestions
const Search = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  const [searchTerm, setSearchTerm] = useState('');


  const onClick = () => {
    dispatch(fetchWeather(searchTerm));
  };


  const onSearchInputChanged = (e: any) => {
    setSearchTerm(e.target.value);
  };
  const showPosition = (position: any) => {
    dispatch(
      fetchWeather({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };
  return (
    <div
      style={{
        background: getCurrentTheme(darkMode).panelBgColor
      }}
      className='searchElement'>
      <SearchIcon />
          <input
            autoComplete='off'
            style={
              {
                backgroundColor: getCurrentTheme(darkMode).panelBgColor,
                color: getCurrentTheme(darkMode).searchInput.color
              }
            }
            onKeyDown={(e): void => {
              if (e.key === 'Enter') {
              onClick()
              }
            }}
            className='textField-input'
            type="text" name="name" value={searchTerm}
            onChange={onSearchInputChanged}
          />
      <button
        className='location-button'
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            alert('Geolocation is not supported by this browser.');
          }
        }}
      >
        <LocationIcon />
      </button>
    </div>
  );
};

export default Search;
