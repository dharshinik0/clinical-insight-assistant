import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Divider, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/BarChart';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LogoutIcon from '@mui/icons-material/Logout';

const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { label: 'SOAP Generator', icon: <NoteAddIcon />, path: '/soap-generator' },
  { label: 'Case Management', icon: <FolderOpenIcon />, path: '/cases' },
  { label: 'File Upload', icon: <CloudUploadIcon />, path: '/file-upload' },
  { label: 'Analytics', icon: <ShowChartIcon />, path: '/analytics' },
];

const Sidebar: React.FC = () => {
  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        bgcolor: '#fff',
        borderRight: '1px solid #f0f1f3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 100,
      }}
    >
      <Box>
        {/* Logo and App Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', p: 3, pb: 2 }}>
          <Avatar sx={{ bgcolor: '#1976d2', width: 40, height: 40, mr: 1 }}>
            {/* Medical stethoscope icon SVG */}
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M12 21c3.9 0 7-3.1 7-7V5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="2"/>
            </svg>
          </Avatar>
          <Box>
            <Typography variant="h6" fontWeight={700} color="#1976d2" lineHeight={1}>
              Clinical Insight
            </Typography>
            <Typography variant="caption" color="text.secondary">
              AI Medical Assistant
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mb: 1 }} />
        {/* Navigation */}
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              component={NavLink}
              to={item.path}
              sx={{
                '&.active, &:hover': {
                  bgcolor: '#f5f8ff',
                  color: '#1976d2',
                  '& .MuiListItemIcon-root': { color: '#1976d2' },
                },
                borderRadius: 2,
                mx: 1,
                my: 0.5,
              }}
            >
              <ListItemIcon sx={{ color: '#8a94a6', minWidth: 36 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 500 }} />
            </ListItem>
          ))}
        </List>
      </Box>
      {/* User Profile and Logout */}
      <Box sx={{ p: 3, pt: 0 }}>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar sx={{ width: 36, height: 36, bgcolor: '#e3eafc', color: '#1976d2', fontWeight: 700, mr: 1 }}>
            dk
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight={600} color="text.primary">
              d k
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Attending Physician
            </Typography>
          </Box>
        </Box>
        <Button
          variant="text"
          color="inherit"
          startIcon={<LogoutIcon />}
          sx={{ color: '#8a94a6', textTransform: 'none', fontWeight: 500, pl: 0 }}
          fullWidth
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar; 