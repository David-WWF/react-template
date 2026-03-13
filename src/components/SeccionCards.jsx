import React from 'react';
import { 
  Card, CardContent, CardMedia, Typography, 
  Button, CardActions, Box, Grid 
} from '@mui/material';

export default function SeccionCards() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Tarjetas (Cards)</Typography>
      
      {/* Grid nos ayuda a poner varias tarjetas en fila */}
      <Grid container spacing={3}>
        
        {/* Tarjeta 1: Ejemplo con imagen */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400"
              title="Tecnología"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Proyecto Retro
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Este es un ejemplo de cómo una Card de MUI organiza el contenido visual y textual de forma elegante.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Compartir</Button>
              <Button size="small" variant="contained">Leer más</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Tarjeta 2: Solo texto (más simple) */}
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Nota rápida
              </Typography>
              <Typography variant="h5" component="div">
                Estilo Outlined
              </Typography>
              <Typography variant="body2">
                A diferencia de la anterior, esta usa variant="outlined" para un diseño más plano y minimalista.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Ver detalles</Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
}