import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../store/fetchWeather';
import { fetchCities } from '../../api/placeSuggestion';
import { useClickOutside } from '../../hooks/useClickOutside';
import { LocationIcon, SearchIcon } from './styled';
import Suggestion from './Suggestion';
import './styles.css';
import { AppStore } from '../../store/store';
import { getCurrentTheme } from '../../utils/storeUtils';

const Search = () => {
  const dispatch = useDispatch();
  const suggestionRef = useRef(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    setShowSuggestions(true);
    setSuggestions([fetchCities(searchTerm)]);
  }, [searchTerm]);

  useClickOutside(suggestionRef, () => setShowSuggestions(false));

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
      <form className='textField-form'>
        <label>
          <input
          autoComplete='off'
            style={
              {
                backgroundColor: getCurrentTheme(darkMode).panelBgColor,
                color: getCurrentTheme(darkMode).searchInput.color
              }
            }
            className='textField-input'
            type="text" name="name" value={searchTerm}
            onChange={onSearchInputChanged}
          />
        </label>
      </form>
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
      {showSuggestions && (
        <div ref={suggestionRef}
          style={{
            backgroundColor: getCurrentTheme(darkMode).searchSuggestion.backgroundColor
          }}
          className="search-result"
        >
          {suggestions?.slice(0, 6)?.map((s, i) => (
            <Suggestion
              key={i}
              label={s}
              hideSuggestionFn={() => {
                setShowSuggestions(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
