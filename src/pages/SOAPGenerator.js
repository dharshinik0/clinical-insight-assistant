import React from 'react';
import { Box, Card, CardContent, Typography, TextField, Grid, MenuItem, Button, Divider } from '@mui/material';

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const specialties = [
  { value: 'general', label: 'General Medicine' },
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'neurology', label: 'Neurology' },
  { value: 'pediatrics', label: 'Pediatrics' },
];

const detailLevels = [
  { value: 'standard', label: 'Standard Detail' },
  { value: 'high', label: 'High Detail' },
];

const SOAPGenerator: React.FC = () => (
  <Box>
    <Typography variant="h5" fontWeight={700} mb={3}>
      AI SOAP Note Generator
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" mb={4}>
      Generate comprehensive medical documentation with AI assistance
    </Typography>
    <Card sx={{ borderRadius: 3, maxWidth: 800, mx: 'auto' }}>
      <CardContent>
        <Typography variant="h6" fontWeight={700} mb={2}>
          Case Description
        </Typography>
        <TextField
          label="Describe the patient case including chief complaint, history of present illness, past medical history, medications, allergies, and physical examination findings..."
          multiline
          minRows={4}
          fullWidth
          required
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} sm={4}>
            <TextField label="Patient ID" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField label="Age" type="number" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField label="Gender" select fullWidth variant="outlined">
              {genders.map((g) => (
                <MenuItem key={g.value} value={g.value}>{g.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="subtitle1" fontWeight={600} mb={2}>
          AI Generation Settings
        </Typography>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="Specialty Focus" select fullWidth defaultValue="general">
              {specialties.map((s) => (
                <MenuItem key={s.value} value={s.value}>{s.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Detail Level" select fullWidth defaultValue="standard">
              {detailLevels.map((d) => (
                <MenuItem key={d.value} value={d.value}>{d.label}</MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'right' }}>
          <Button variant="contained" sx={{ bgcolor: '#1976d2', borderRadius: 2, fontWeight: 600 }}>
            Generate SOAP Note
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default SOAPGenerator; 