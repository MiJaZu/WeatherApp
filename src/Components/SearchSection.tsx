import { Box, Button, IconButton  } from '@mui/material';
import { MyLocationRounded } from '@mui/icons-material';

export default function SearchSection(): JSX.Element {
    return (
        <Box sx={{ padding:"30px", display:"flex", justifyContent:"space-between", height:"5%"}}>
            <Button variant='contained' sx={{ background:'#6E707A' }} disableRipple>
                Search for places 
            </Button>
            <IconButton sx={{ borderRadius:'20px', background:'#6E707A', color:'#FFF' }}>
                <MyLocationRounded />
            </IconButton>
        </Box>
    )
}