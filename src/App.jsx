import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function App() {
  return (
    <Button variant="contained" color="primary" endIcon={<SendIcon />}>
      Enviar mensaje
    </Button>
  );
}

export default App;
