import React from 'react';
import { Button, Stack, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function SeccionBotones() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Mis Botones</Typography>
      
      {/* Stack es genial para alinear cosas con espacio entre ellas */}
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button variant="text">Texto</Button>
        <Button variant="contained">Relleno</Button>
        <Button variant="outlined">Borde</Button>
      </Stack>

      <Typography variant="h6" gutterBottom>Con Iconos y Colores</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
          Eliminar
        </Button>
        <Button variant="contained" color="success" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </Stack>
    </Box>
  );
}