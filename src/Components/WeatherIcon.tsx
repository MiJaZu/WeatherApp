import { Box, Button } from '@mui/material';

import CloudBackground from './../images/Cloud-background.png';
import Clear from './../images/Clear.png';
import Hail from './../images/Hail.png';
import HeavyCloud from './../images/HeavyCloud.png';
import HeavyRain from './../images/HeavyRain.png';
import LightCloud from './../images/LightCloud.png';
import LightRain from './../images/LightRain.png';
import Shower from './../images/Shower.png';
import Sleet from './../images/Sleet.png';
import Snow from './../images/Snow.png';
import Thunderstorm from './../images/Thunderstorm.png';

export default function WeatherIcon(): JSX.Element {
    return (
        <Box 
            sx={{
                width:'100%', 
                height:'300px',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'                              
            }}
        >
           <img src={CloudBackground} alt="Cloud background" style={{
                position: 'absolute',
                width: '40%',
                height: 'auto',
                opacity: 0.3,
             }} />
            <img src={Shower} alt="Shower" />
        </Box>
    )
}