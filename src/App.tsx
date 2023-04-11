import { Stack } from '@mui/material';
import './App.css';
import MyWeather from './Pages/MyWeather';
import DetailedWeather from './Pages/DetailedWeather';

function App(): JSX.Element {
  return (
    <Stack  direction={{ sm:'column', md:'row' }} >
        <MyWeather></MyWeather>
        <DetailedWeather></DetailedWeather>
    </Stack>
  );
}

export default App;
