import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { scroller } from 'react-scroll';

const Navbar = ({ toggleTheme, themeMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { label: 'Education & Experience', id: 'work' },
    { label: 'Projects', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    if (id === 'contact') {
      // Scrolls directly to the bottom contact section with 0 offset
      scroller.scrollTo('contact', {
        duration: 500,
        smooth: true,
        offset: 0,
      });
    } else {
      scroller.scrollTo(id, {
        duration: 500,
        smooth: true,
        offset: -64,
      });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar disableGutters sx={{ px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component="h1"
              sx={{ fontWeight: 600, cursor: 'pointer' }}
              onClick={() => scroller.scrollTo('header', { smooth: true, duration: 500 })}
            >
              Matthew Rost
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {isMobile ? (
                <IconButton color="inherit" aria-label="open menu" onClick={() => setDrawerOpen(true)} edge="end">
                  <MenuIcon />
                </IconButton>
              ) : (
                <>
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      color="inherit"
                      sx={{ textTransform: 'none', fontWeight: 500 }}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <IconButton onClick={toggleTheme} color="inherit" aria-label="toggle theme" sx={{ ml: 1 }}>
                    {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250, pt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.id)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={toggleTheme}>
              <ListItemText primary={themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'} />
              {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;