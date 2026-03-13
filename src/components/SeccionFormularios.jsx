import React, { useState } from 'react';
import { 
  Box, Typography, TextField, Stack, MenuItem, 
  FormControlLabel, Checkbox, Button, Paper 
} from '@mui/material';

export default function SeccionFormularios() {
  const [categoria, setCategoria] = useState('');

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Formularios e Inputs</Typography>
      
      {/* Usamos Paper para crear una superficie con un poco de relieve */}
      <Paper sx={{ p: 4, maxWidth: 600 }}>
        <Stack spacing={3}>
          
          <Typography variant="h6">Datos del Componente</Typography>

          <TextField 
            label="Nombre del componente" 
            variant="outlined" 
            fullWidth 
            placeholder="Ej: Botón Pro"
          />

          <TextField 
            label="Descripción" 
            variant="filled" 
            multiline 
            rows={4} 
            fullWidth 
          />

          <TextField
            select
            label="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            fullWidth
          >
            <MenuItem value="layout">Layout</MenuItem>
            <MenuItem value="input">Input</MenuItem>
            <MenuItem value="data">Data Display</MenuItem>
          </TextField>

          <FormControlLabel 
            control={<Checkbox defaultChecked color="success" />} 
            label="¿Es un componente reutilizable?" 
          />

          <Button variant="contained" size="large" fullWidth>
            Guardar en Repositorio
          </Button>

        </Stack>
      </Paper>
    </Box>
  );
}