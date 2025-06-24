import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Divider } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useAuth } from '../contexts/AuthContext'; // Relative path to AuthContext

const metrics = [
  {
    label: 'Cases Today',
    value: 0,
    icon: <CalendarTodayIcon sx={{ color: '#1976d2', fontSize: 32 }} />,
    change: '+8.2%',
    sub: 'from yesterday',
    color: '#1976d2',
  },
  {
    label: 'SOAP Notes Generated',
    value: 0,
    icon: <DescriptionIcon sx={{ color: '#43b97f', fontSize: 32 }} />,
    change: '+12.5%',
    sub: 'this month',
    color: '#43b97f',
  },
  {
    label: 'AI Confidence Avg',
    value: '0%',
    icon: <PsychologyIcon sx={{ color: '#7e8cfb', fontSize: 32 }} />,
    change: '+2.1%',
    sub: 'improvement',
    color: '#7e8cfb',
  },
  {
    label: 'Files Processed',
    value: 0,
    icon: <CloudUploadIcon sx={{ color: '#b47aff', fontSize: 32 }} />,
    change: '+5.7%',
    sub: 'this week',
    color: '#b47aff',
  },
];

const quickActions = [
  {
    label: 'Generate SOAP Note',
    desc: 'AI-powered documentation',
    color: '#e3f0ff',
    border: '#b3d4fc',
    action: 'soap',
  },
  {
    label: 'New Case',
    desc: 'Start patient evaluation',
    color: '#e6f7f1',
    border: '#b2e5d6',
    action: 'cases',
  },
  {
    label: 'Upload Files',
    desc: 'Lab reports & images',
    color: '#f3eaff',
    border: '#d1c4e9',
    action: 'upload',
  },
];

/**
 * Dashboard component for authenticated users.
 * Displays a welcome message and links to other sections.
 * @param {object} props - Component props.
 * @param {function} props.onNavigate - Callback function to navigate to different pages.
 */
function Dashboard({ onNavigate }) {
  const { user } = useAuth(); // Get user from AuthContext

  const handleQuickAction = (action) => {
    if (onNavigate) onNavigate(action);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Welcome to your Dashboard, {user?.name || user?.email}!
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" mb={4}>
        This is your central hub for managing clinical insights.
      </Typography>
      <Grid container spacing={3} mb={2}>
        {metrics.map((m) => (
          <Grid item xs={12} sm={6} md={3} key={m.label}>
            <Card sx={{ borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {m.icon}
                  <Typography variant="h6" fontWeight={600} sx={{ ml: 1 }}>
                    {m.value}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>
                  {m.label}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Typography variant="caption" color="success.main" fontWeight={600}>
                    {m.change}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                    {m.sub}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, minHeight: 220 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} mb={2}>
                Recent Cases
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ textAlign: 'center', color: '#b0b0b0', py: 6 }}>
                <Typography variant="body1" fontWeight={500}>
                  No recent cases found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Create your first case to get started
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3, minHeight: 220 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} mb={2}>
                Quick Actions
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {quickActions.map((a) => (
                  <Button
                    key={a.label}
                    variant="outlined"
                    sx={{
                      bgcolor: a.color,
                      borderColor: a.border,
                      color: '#222',
                      borderRadius: 2,
                      textAlign: 'left',
                      fontWeight: 600,
                      justifyContent: 'flex-start',
                    }}
                    fullWidth
                    onClick={() => handleQuickAction(a.action)}
                  >
                    <Box>
                      {a.label}
                      <Typography variant="caption" color="text.secondary" display="block">
                        {a.desc}
                      </Typography>
                    </Box>
                  </Button>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard; 