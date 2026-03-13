import React, { useState } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Paper, Typography, Avatar, Box, Chip, 
  TextField, Stack, MenuItem, Select, FormControl, InputLabel 
} from '@mui/material';

// Importamos tu archivo JSON
import data from '../data/exhibitors_enriched.json';

export default function SeccionTablas() {
  // 1. ESTADOS PARA LOS FILTROS
  const [filtroNombre, setFiltroNombre] = useState('');
  const [filtroPrioridad, setFiltroPrioridad] = useState('Todas');
  const [ordenEmpleados, setOrdenEmpleados] = useState('none'); // 'asc', 'desc', 'none'
  const [minScore, setMinScore] = useState(0);

  // 2. LÓGICA DE FILTRADO (El embudo)
  const datosFiltrados = data.rows
    .filter((row) => {
      // Filtro por nombre (convertimos a minúsculas para que no importe si escribe "Adel" o "adel")
      const cumpleNombre = row.exhibitorName.toLowerCase().includes(filtroNombre.toLowerCase());
      
      // Filtro por prioridad
      const cumplePrioridad = filtroPrioridad === 'Todas' || row.priority === filtroPrioridad;
      
      // Filtro por Score mayor a...
      const cumpleScore = parseInt(row.total_score) >= minScore;

      return cumpleNombre && cumplePrioridad && cumpleScore;
    })
    .sort((a, b) => {
      // Lógica de ordenación por empleados
      if (ordenEmpleados === 'none') return 0;
      
      // Extraemos el número del string "Aprox. 50 empleados" usando regex
      const numA = parseInt(a.company_employees.replace(/\D/g, '')) || 0;
      const numB = parseInt(b.company_employees.replace(/\D/g, '')) || 0;

      return ordenEmpleados === 'asc' ? numA - numB : numB - numA;
    });

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Explorador de Expositores</Typography>

      {/* --- SECCIÓN DE FILTROS --- */}
      <Paper sx={{ p: 3, mb: 4, backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <Typography variant="h6" gutterBottom>Filtros de búsqueda</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          
          <TextField 
            label="Buscar por nombre" 
            variant="outlined" 
            size="small"
            value={filtroNombre}
            onChange={(e) => setFiltroNombre(e.target.value)}
            sx={{ flexGrow: 1 }}
          />

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Prioridad</InputLabel>
            <Select
              value={filtroPrioridad}
              label="Prioridad"
              onChange={(e) => setFiltroPrioridad(e.target.value)}
            >
              <MenuItem value="Todas">Todas</MenuItem>
              <MenuItem value="Prioridad A">Prioridad A</MenuItem>
              <MenuItem value="Prioridad B">Prioridad B</MenuItem>
              <MenuItem value="Prioridad C">Prioridad C</MenuItem>
            </Select>
          </FormControl>

          <TextField 
            label="Score mínimo" 
            type="number"
            variant="outlined" 
            size="small"
            value={minScore}
            onChange={(e) => setMinScore(Number(e.target.value))}
            sx={{ width: 120 }}
          />

          <FormControl size="small" sx={{ minWidth: 180 }}>
            <InputLabel>Orden Empleados</InputLabel>
            <Select
              value={ordenEmpleados}
              label="Orden Empleados"
              onChange={(e) => setOrdenEmpleados(e.target.value)}
            >
              <MenuItem value="none">Sin orden</MenuItem>
              <MenuItem value="asc">Menos a más</MenuItem>
              <MenuItem value="desc">Más a menos</MenuItem>
            </Select>
          </FormControl>

        </Stack>
      </Paper>

      {/* --- TABLA RESULTANTE --- */}
      <TableContainer component={Paper} sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Expositor</TableCell>
              <TableCell>Empleados</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">Prioridad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datosFiltrados.map((row) => (
              <TableRow key={row.entityId} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={row.mainImage} variant="rounded" />
                    {row.exhibitorName}
                  </Box>
                </TableCell>
                <TableCell>{row.company_employees}</TableCell>
                <TableCell align="center">{row.total_score}</TableCell>
                <TableCell align="center">
                  <Chip label={row.priority} size="small" variant="outlined" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
        Mostrando {datosFiltrados.length} de {data.count_total} expositores.
      </Typography>
    </Box>
  );
}