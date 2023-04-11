import { Container, Box, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

export default function WeatherData(): JSX.Element {
    return (
        <Box sx={{ height:"50%", display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Typography variant="h2">
                15°C
            </Typography>
            <Typography variant="h5" gutterBottom>
                Shower
            </Typography>
            <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                <p>Today - Fri, 5 Jun</p>
                <Typography variant="h6" gutterBottom>
                    <LocationOn />
                    Heilsinki
                </Typography> 
            </Box>
        </Box>
    )
}