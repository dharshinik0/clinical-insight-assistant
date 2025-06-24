import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';

const Topbar: React.FC = () => (
  <AppBar position="static" elevation={0} sx={{ bgcolor: '#fff', color: '#222', borderBottom: '1px solid #f0f1f3' }}>
    <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" fontWeight={700} color="#1976d2" sx={{ mr: 2 }}>
          Clinical Insight
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Medical Assistant
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton>
          <Badge color="error" variant="dot">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: '#1976d2',
            color: '#fff',
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            boxShadow: 'none',
            '&:hover': { bgcolor: '#1565c0' },
          }}
        >
          New SOAP Note
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Topbar; 