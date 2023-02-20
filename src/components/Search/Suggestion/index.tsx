import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../../store/fetchWeather';
import { AppStore } from '../../../store/store';
import { getCurrentTheme } from '../../../utils/storeUtils';
import { ISuggestionProps } from './interface';
import './styles.css';


const Suggestion: React.FC<ISuggestionProps
> = (props) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: AppStore) => state.app.darkMode);
  const [isHover, setIsHover] = React.useState(false);

  const onClick = () => {
    dispatch(fetchWeather(props.label.split(',')[0]));
    setTimeout(() => {
      props.hideSuggestionFn();
    }, 400);
  };

//   const handleMouseEnter = () => {
//     setIsHover(true);
//  };
//  const handleMouseLeave = () => {
//     setIsHover(false);
//  };

  return <a 

  className='suggestion-item'
  style={{
    backgroundColor: isHover ? getCurrentTheme(darkMode).searchSuggestion.hoverBackgroundColor : 'none',
    borderBottom:`1px dotted ${getCurrentTheme(darkMode).searchSuggestion.seperatorLineColor}`,
  }}
  onClick={onClick}>{props.label}</a>;
};

export default Suggestion;
