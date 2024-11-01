import { Box, Grid2, IconButton, InputBase, useTheme} from '@mui/material'
import React, { useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {ColorModeContext} from "../../theme";
import { useStyles } from './styles';
import { useAppSelector } from '../../utils/hook';

const  TopBarComponent = () => {
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const user = useAppSelector((state)=> state.auth.user)

  return (
    <Box className={classes.root}>
        <Grid2>Welcome Alex</Grid2>
    <Box display='flex'>
        <Grid2 onClick={colorMode.toggleColorMode} className={classes.iconBlock}>
        <IconButton className={classes.themeIcon}>
            {theme.palette.mode === 'dark' ? (<DarkModeIcon />) : (<LightModeIcon />)}
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        </Grid2>
        <Grid2 className = {classes.searchBlock}  
                >
          <IconButton className = {classes.searchIcon}>
            <SearchIcon/>
          </IconButton>
          <InputBase className={classes.searchInput} placeholder = 'Поиск'/>
        </Grid2>

    </Box>
    </Box>
  )
}

export default TopBarComponent