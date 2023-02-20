import React from 'react';
import { useSelector } from 'react-redux';
import Forecast from '../components/Forecast';
import Header from '../components/Header';
import Search from '../components/Search';
import Spinner from '../components/ui/Spinner/Spinner';
import CurrentWeather from '../components/CurrentWeather';
import { AppStore } from '../store/store';
import Snackbar from '../components/Snackbar';

// Home Page to get all the details by initial state
const Home = ({setIsOpen}: {setIsOpen: Function}) => {
  const { loading } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
  }));

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Search />
      <CurrentWeather  setIsOpen={setIsOpen}/>
      <Forecast />
    </>
  );
};

export default Home;
