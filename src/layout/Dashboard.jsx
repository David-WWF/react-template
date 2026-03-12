import React, { useState } from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SeccionBotones from '../components/SeccionBotones';

const drawerWidth = 240;

export default function Dashboard(props) {
    const [mobileOpen, setMobileOpen] = useState(false);
    // Este estado guardará qué componente queremos ver
    const [view, setView] = useState('Inicio');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // 1. Lista de nombres de tus componentes
    const menuItems = ['Botones', 'Tarjetas', 'Formularios'];

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h6">MUI Repo</Typography>
            </Toolbar>
            <Divider />
            <List>
                {menuItems.map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => { setView(text); setMobileOpen(false); }}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" color="default" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Mi Catálogo: {view}</Typography>
                </Toolbar>
            </AppBar>

            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { width: drawerWidth } }}>
                    {drawer}
                </Drawer>
                <Drawer variant="permanent" sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { width: drawerWidth } }} open>
                    {drawer}
                </Drawer>
            </Box>

            {/* Busca esta sección en tu Dashboard.jsx y actualízala así: */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />

                {view === 'Inicio' && <Typography>Selecciona una sección para ver mis componentes.</Typography>}

                {/* Aquí llamamos a tu nuevo archivo cuando seleccionas 'Botones' */}
                {view === 'Botones' && <SeccionBotones />}

                {view === 'Tarjetas' && <Typography>Próximamente: Sección de Cards...</Typography>}
            </Box>
        </Box>
    );
}