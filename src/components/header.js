import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import './home.css';
import Fade from 'react-reveal/Fade'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Model 3', 'Model X', 'Model Y','Model Z','Solar Panels','Solar Roof'];
// const settings = ['Blog', 'Nearby Stores', 'Login'];
const morepages = ['Shop', 'Account', 'Menu'];
const  Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // <Wrap bgImage = {backgroundImg}>

    <AppBar position="static" color="transparent" id="nav" >
         
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Toolbar>
        
        <Box
            component="img"
            sx={{
            height: 64,
            }}
            alt="Your logo."
            src="/images/images.png"
        />
      </Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
         
          
          <Box id = "navtext" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',alignItems: 'center' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                
                sx={{ my: 2, color: 'black', display: 'block',alignItems: 'center'}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box id = "navtext2" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',alignItems: 'center' } }}>
            {morepages.map((morepage) => (
              <Button
                key={morepage}
                onClick={handleCloseNavMenu}
                
                sx={{ my: 2, color: 'black', display: 'block',alignItems: 'center'}}
              >
                {morepage}
              </Button>
            ))}
          </Box>
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;