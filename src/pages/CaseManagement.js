import React from 'react';
import { Box, Typography, Card, CardContent, TextField, InputAdornment, IconButton, Button, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const CaseManagement: React.FC = () => (
  <Box>
    <Typography variant="h5" fontWeight={700} mb={3}>
      Case Management
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" mb={4}>
      Manage patient cases and medical documentation
    </Typography>
    <Card sx={{ borderRadius: 3, maxWidth: 900, mx: 'auto', mb: 4 }}>
      <CardContent>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            placeholder="Search cases by complaint or description..."
            fullWidth
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="outlined" startIcon={<FilterListIcon />} sx={{ borderRadius: 2, fontWeight: 600 }}>
            All Status
          </Button>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ textAlign: 'center', color: '#b0b0b0', py: 6 }}>
          <Typography variant="body1" fontWeight={500}>
            No cases found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Create your first case to get started
          </Typography>
          <Button variant="contained" sx={{ mt: 2, bgcolor: '#1976d2', borderRadius: 2, fontWeight: 600 }}>
            + Create First Case
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default CaseManagement; 