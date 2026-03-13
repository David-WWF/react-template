import React, { useState } from 'react';
import { 
  Box, Typography, Button, Dialog, DialogTitle, 
  DialogContent, DialogContentText, DialogActions, Paper 
} from '@mui/material';

export default function SeccionModales() {
  // 1. Estado para controlar si el modal está abierto o cerrado
  const [open, setOpen] = useState(false);

  // 2. Funciones para abrir y cerrar
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Modales y Diálogos</Typography>
      
      <Paper sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Haz clic en el botón para probar la ventana emergente.
        </Typography>

        <Button variant="contained" color="warning" onClick={handleClickOpen}>
          Eliminar Elemento
        </Button>
      </Paper>

      {/* COMPONENTE DIALOG (El Modal) */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Estás seguro de eliminar esto?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta acción no se puede deshacer. El componente se borrará permanentemente de tu repositorio local.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">Cancelar</Button>
          <Button onClick={handleClose} color="error" autoFocus variant="contained">
            Sí, eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}