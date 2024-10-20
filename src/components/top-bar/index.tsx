import { Box, Grid2, IconButton, InputBase, useTheme} from '@mui/material'
import React, { useContext } from 'react'
import { useAppSelector } from '../../utils/hook'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext} from "../../theme";
import { useStyles } from './styles';

const  TopBarComponent = () => {
    // const {user} = useAppSelector(state=>state.auth.user)
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

  return (
    <Box display= 'flex' justifyContent= 'space-between' px="32px" py = "24px">
        <Grid2>Welcome Alex</Grid2>
    <Box display='flex'>
        <Grid2 onClick={colorMode.toggleColorMode} sx={{pr:'37px', borderRight:'1px solid', borderColor: 'grey'}}>
        <IconButton sx={{mr: '45px'}}>
            {theme.palette.mode === 'dark' ? (<DarkModeIcon />) : (<LightModeIcon />)}
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        </Grid2>
        <Grid2
          sx={{
            display: 'flex',
            backgroundColor: 'grey',
            borderRadius: '8px',
            ml: '28px'

          }}
        
        >
          <IconButton className = {classes.root}>
            <SearchIcon/>
          </IconButton>
          <InputBase sx={{px: '14x', py: '8px'}} placeholder = 'Поиск'/>
        </Grid2>

    </Box>
    </Box>
  )
}

export default TopBarComponent