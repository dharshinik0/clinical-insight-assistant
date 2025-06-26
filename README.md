🏥 Clinical Insight Assistant
A comprehensive healthcare application designed to assist medical professionals with clinical documentation, SOAP note generation, and case management.

📋 Table of Contents
Features
Tech Stack
Project Structure
Installation & Setup
Deployment
API Documentation
Contributing
License

✨ Features
Frontend Features
Dashboard: Overview of cases, analytics, and recent activity
SOAP Note Generator: AI-powered generation of structured clinical notes
Case Management: Organize and track patient cases
Analytics: Visual insights into clinical data and trends
File Upload: Support for medical documents and images
Responsive Design: Works seamlessly on desktop and mobile devices

Backend Features
RESTful API: FastAPI-powered backend with automatic documentation
SOAP Note Generation: Intelligent clinical note structuring
Analytics Engine: Data processing and insights generation
Health Monitoring: Built-in health checks and monitoring
CORS Support: Configured for secure cross-origin requests

🛠 Tech Stack
Frontend
React.js - Modern JavaScript framework
TypeScript - Type-safe development
CSS3 - Custom styling and responsive design
React Router - Client-side routing

Backend
FastAPI - High-performance Python web framework
Uvicorn - ASGI server for production deployment
Python 3.9+ - Core backend language
Pydantic - Data validation and serialization

Deployment
Frontend: Netlify (Static hosting)
Backend: Render (Container deployment)
Docker: Containerized deployment support

📁 Project Structure
clinical-insight-assistant/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── Layout/      # Layout components (Sidebar, Topbar)
│   │   ├── contexts/        # React contexts (Auth, etc.)
│   │   ├── pages/           # Application pages
│   │   │   ├── Dashboard.js
│   │   │   ├── SOAPNotes.js
│   │   │   ├── Cases.js
│   │   │   ├── Analytics.js
│   │   │   └── ...
│   │   ├── services/        # API service layer
│   │   └── App.js          # Main application component
│   ├── Dockerfile          # Frontend containerization
│   └── package.json        # Frontend dependencies
│
├── backend/                 # Python FastAPI backend
│   ├── app/                # Application modules
│   ├── uploads/            # File upload storage
│   ├── simple_api.py       # Main API application
│   ├── test_api.py         # API tests
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile         # Backend containerization
│   └── venv/              # Virtual environment
│
└── README.md              # Project documentation

🚀 Installation & Setup

Prerequisites
Node.js (v16 or higher)
Python (3.9 or higher)
Git
Frontend Setup
Clone the repository
bash
git clone https://github.com/dharshinik0/clinical-insight-assistant.git
cd clinical-insight-assistant/frontend
Install dependencies
bash
npm install
Set up environment variables
bash
# Create .env file in frontend directory
REACT_APP_API_URL=http://localhost:8000
Start development server
bash
npm start
The frontend will be available at http://localhost:3000
Backend Setup
Navigate to backend directory
bash
cd ../backend
Create virtual environment
bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install dependencies
bash
pip install -r requirements.txt
Start the API server
bash
python simple_api.py
The API will be available at http://localhost:8000 API Documentation: http://localhost:8000/docs (Swagger UI)

🌐 Deployment
Frontend Deployment (Netlify)
Build the project
bash
cd frontend
npm run build
Deploy to Netlify
Connect your GitHub repository to Netlify
Set build command: npm run build
Set publish directory: build
Add environment variable: REACT_APP_API_URL=https://your-backend-url.onrender.com
Backend Deployment (Render)
Create new Web Service on Render
Connect your GitHub repository
Set root directory: backend
Set build command: pip install -r requirements.txt
Set start command: uvicorn simple_api:app --host 0.0.0.0 --port $PORT
Environment Variables
PYTHON_VERSION=3.9
PORT=8000
Docker Deployment

Frontend:
bash
cd frontend
docker build -t clinical-frontend .
docker run -p 3000:80 clinical-frontend
Backend:
bash
cd backend
docker build -t clinical-backend .
docker run -p 8000:8000 clinical-backend

📚 API Documentation
Base URL
Development: http://localhost:8000
Production: https://your-backend.onrender.com
Endpoints
Health Check
http
GET /health
Returns the health status of the API.
SOAP Note Generation
http
POST /api/soap/generate
Content-Type: application/json

{
  "case_description": "Patient presents with chest pain and shortness of breath"
}
Response:
json
{
  "soap_note": {
    "subjective": "Patient presents with: chest pain and shortness of breath",
    "objective": "Vital signs: BP 120/80, HR 72, RR 16, O2 98%. Patient appears in no acute distress.",
    "assessment": "Working diagnosis based on clinical presentation...",
    "plan": "1. Continue monitoring vital signs..."
  },
  "confidence_score": 88,
  "differential_diagnoses": [...],
  "recommendations": [...]
}
Analytics
http
GET /api/analytics
Returns analytics data including case counts and recent activity.
Interactive Documentation
Visit /docs on your API URL for full Swagger documentation.

🔧 Configuration
Frontend Environment Variables
env
REACT_APP_API_URL=http://localhost:8000  # Backend API URL
Backend Configuration
The backend automatically configures CORS for:
Local development (http://localhost:3000)
Netlify deployments (https://*.netlify.app)

🧪 Testing
Frontend Tests
bash
cd frontend
npm test
Backend Tests
bash
cd backend
python test_api.py

🤝 Contributing
Fork the repository
Create a feature branch
bash
git checkout -b feature/your-feature-name
Make your changes
Commit your changes
bash
git commit -m "Add your feature description"
Push to your branch
bash
git push origin feature/your-feature-name
Create a Pull Request

📝 Development Notes
Common Issues & Solutions
TypeScript Version Conflict (Docker)
Solution: Use --legacy-peer-deps flag in Dockerfile
Or downgrade TypeScript to ^4.9.5
CORS Issues
Ensure backend CORS configuration includes your frontend URL
Check that API URL in frontend environment variables is correct
Port Conflicts
Frontend default: 3000
Backend default: 8000
Modify ports in respective start commands if needed

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🔗 Links
Frontend (Netlify): [Your Netlify URL]
Backend (Render): [Your Render URL]
Repository: https://github.com/dharshinik0/clinical-insight-assistant
📞 Support
For questions or support, please:
Open an issue on GitHub
Contact: [your-email@domain.com]
