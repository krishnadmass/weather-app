import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../../store/store';
import { celciusToFahrenheit, TempUnit } from '../../../utils/unitConversion';
import { ITemperatureProps } from './interface';


const Temperature: React.FC<ITemperatureProps> = (props) => {
  const { degreeType } = useSelector((state: AppStore) => ({
    degreeType: state.app.tempUnit,
  }));

  if (degreeType === TempUnit.FAHRENHEIT) {
    return <>{celciusToFahrenheit(props.value)}</>;
  }
  return <>{props.value}</>;
};

export default Temperature;
