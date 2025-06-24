import React from 'react';
import { Box, Typography, Card, CardContent, Button, Divider, Grid } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImageIcon from '@mui/icons-material/Image';

const fileTypes = [
  {
    icon: <InsertDriveFileIcon sx={{ color: '#43b97f', fontSize: 32 }} />,
    label: 'Lab Reports (CSV)',
    desc: 'Automatically parse and analyze laboratory test results with AI interpretation.',
    sub: 'Auto-detection of abnormal values',
  },
  {
    icon: <ImageIcon sx={{ color: '#7e8cfb', fontSize: 32 }} />,
    label: 'Medical Images',
    desc: 'AI-powered analysis of X-rays, CT scans, and other medical imaging.',
    sub: 'JPEG and PNG formats supported',
  },
  {
    icon: <InsertDriveFileIcon sx={{ color: '#ff8a65', fontSize: 32 }} />,
    label: 'PDF Documents',
    desc: 'Extract and analyze text from medical reports and documentation.',
    sub: 'Text extraction and analysis',
  },
];

const FileUpload: React.FC = () => (
  <Box>
    <Typography variant="h5" fontWeight={700} mb={3}>
      Medical File Upload
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" mb={4}>
      Upload and analyze medical documents, lab reports, and images
    </Typography>
    <Card sx={{ borderRadius: 3, maxWidth: 900, mx: 'auto', mb: 4 }}>
      <CardContent>
        <Box
          sx={{
            border: '2px dashed #b3d4fc',
            borderRadius: 3,
            p: 5,
            textAlign: 'center',
            bgcolor: '#f7fafd',
            mb: 2,
          }}
        >
          <CloudUploadIcon sx={{ color: '#1976d2', fontSize: 48, mb: 1 }} />
          <Typography variant="h6" fontWeight={600} mb={1}>
            Drop files here or click to upload
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Supports CSV lab reports, medical images (JPEG, PNG), and PDF documents<br />
            Maximum file size: 10MB per file
          </Typography>
          <Button variant="contained" sx={{ bgcolor: '#1976d2', borderRadius: 2, fontWeight: 600 }}>
            Select Files
          </Button>
        </Box>
        <Grid container spacing={3} mb={2}>
          {fileTypes.map((f) => (
            <Grid item xs={12} sm={4} key={f.label}>
              <Card sx={{ borderRadius: 3, minHeight: 120 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {f.icon}
                    <Typography variant="subtitle1" fontWeight={700} sx={{ ml: 1 }}>
                      {f.label}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {f.desc}
                  </Typography>
                  <Typography variant="caption" color="text.disabled">
                    {f.sub}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ mb: 2 }} />
        <Box>
          <Typography variant="h6" fontWeight={700} mb={2}>
            Recent Uploads
          </Typography>
          <Box sx={{ textAlign: 'center', color: '#b0b0b0', py: 4 }}>
            <CloudUploadIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="body1" fontWeight={500}>
              No files uploaded yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Upload your first medical file to get started with AI analysis
            </Typography>
            <Button variant="contained" sx={{ mt: 2, bgcolor: '#1976d2', borderRadius: 2, fontWeight: 600 }}>
              Upload First File
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  </Box>
);

export default FileUpload; 