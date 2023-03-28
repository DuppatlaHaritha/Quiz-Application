import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link,navigate, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import { fontSize } from '@mui/system';

const pages = ['HOME'];
const settings = ['Profile', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElSubUser, setAnchorElSubUser] = React.useState(null);
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenSubUserMenu = (event) => {
    setAnchorElSubUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    <Link to="/home"></Link>
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseSubUserMenu = () => {
    setAnchorElSubUser(null);
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              component="a"
              href='/home'
            >
              <HomeIcon
              sx={{fontSize:".px",color:"secondary"}}
              />
            </IconButton>
            
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            QUIZ
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar  src="D:\reac\reactfirst\src\images\ml.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '40px' }}
              id=""
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
                <MenuItem href='#login' key="Profile" onClick={handleOpenSubUserMenu}>
                  <Typography textAlign="center">Profile</Typography>
                  <Menu
                  sx={{ mt: '46px',ml:'0px' }}
                  id="menu-appbar"
                  anchorEl={anchorElSubUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElSubUser)}
                  onClose={handleCloseSubUserMenu}
                  >
                    <MenuItem href='#login' key="Profile"  >Narendra Karri</MenuItem>
                    <MenuItem href='#login' key="close" onClick={handleCloseSubUserMenu} onClose={handleCloseSubUserMenu}
                    component="a"
                    href="/home"
                    >close  
                    <CloseIcon />
                    </MenuItem>
                  </Menu>
                  
                </MenuItem>
                <MenuItem href='#login' key="log" 
                 component="a"
                 href="/subject"
                >
                  
                  <Typography textAlign="center">
                    Add Question
                  </Typography>
                  
                </MenuItem>
                <MenuItem href='#login' key="log" onClick={handleCloseUserMenu}
                 component="a"
                 href="/login"
                >
                  <Typography textAlign="center">Logout  </Typography>
                  <LogoutIcon />
                  
                </MenuItem>
              
              
            </Menu>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;