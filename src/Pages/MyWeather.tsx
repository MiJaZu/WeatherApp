import { Box } from '@mui/material';

import SearchSection from '../Components/SearchSection';
import WeatherIcon from '../Components/WeatherIcon';
import WeatherData from '../Components/WeatherData';

export default function MyWeather(): JSX.Element {
    return (
        <Box sx={{ color:'#FFF', height:'100%', width:{ sm:'100%', md: '40%'}, display:'flex', flexDirection:'column'}}>
            <SearchSection></SearchSection>
            <WeatherIcon></WeatherIcon>
            <WeatherData></WeatherData>
        </Box>
    )
}