# Port Emissions and Energy Management System

### Overview
The **Port Emissions and Energy Management System** is a real-time monitoring and AI-driven solution designed to optimize energy consumption and reduce carbon emissions in port operations. By integrating IoT sensors, machine learning models, and an interactive dashboard, this system provides actionable insights into energy usage and recommends strategies to reduce environmental impact while maintaining operational efficiency.

## Installation

### Prerequisites
- **Python 3.9+**
- **Node.js 14+**
- **Docker** (for local containerization)
- **PostgreSQL** or **MongoDB** (for database setup)

### Clone the Repository
```bash
git clone https://github.com/your-repo/port-energy-management-system.git
cd port-energy-management-system
```

### Environment Variables
Create a `.env` file in the root directory to store your environment variables:
```bash
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
```


## Backend Setup

### Install Python Dependencies
Navigate to the `/backend` directory and install the required dependencies:
```bash
cd backend
pip install -r requirements.txt
```

### Initialize the Database
Ensure your database is running and initialize it:
```bash
python database/init_db.py
```

### Run the Backend Server
```bash
python api/app.py
```
The API should now be running at `http://localhost:5000`.



## Frontend Setup

### Install Frontend Dependencies
Navigate to the `/frontend` directory and install the required dependencies:
```bash
cd frontend
npm install
```

### Run the Frontend
```bash
npm start
```
The frontend should now be running at `http://localhost:3000`.

---

## AI Model

### Training the AI Model
Ensure your historical energy data is stored in the `/data` folder. Train the AI model with the following command:
```bash
python ai_model/train.py
```

### Running Predictions
You can use the trained model to predict future energy usage:
```bash
python ai_model/predict.py
```

---

## Deployment

### Docker Compose (Local Deployment)
You can run the entire system (backend, frontend, and database) locally using Docker Compose:
```bash
docker-compose up --build
```

### Cloud Deployment
For cloud deployment, use Kubernetes or Google Cloud Run. Follow the instructions in the `infrastructure/` folder:
- **Kubernetes Deployment:** Use the `k8s-deployment.yaml` for Kubernetes.
- **Google Cloud Run:** Use the `cloud_run_deploy.sh` script for Google Cloud deployment.


### Features
- **Real-time Energy and Emissions Monitoring:** Track energy consumption and emissions across port machinery and operations.
- **Energy Efficiency Recommendations:** AI-based suggestions for reducing energy usage and optimizing machinery schedules.
- **Carbon Emissions Forecasting:** Predict future emissions based on operational data and external factors.
- **Interactive Dashboard:** Visualize real-time energy usage, emissions, and system-generated recommendations.
- **Cloud-Ready Deployment:** Scalable infrastructure designed for cloud deployment on Google Cloud Platform (GCP).

### Frontend
- **React** (for building the dashboard)
- **Plotly** and **D3.js** (for data visualization)
- **Material UI** and **Tailwind CSS** (for frontend styling)

### AI Model
- **TensorFlow** and **PyTorch** (for energy forecasting)
- **Pandas**, **Scikit-learn**, **NumPy** (for data preprocessing and analysis)

### Infrastructure
- **Docker** (for containerization)
- **Google Cloud Platform (GCP)** (for deployment)
- **Kubernetes** (for cloud hosting)



## Usage

### Real-Time Monitoring
1. Access the dashboard via `http://localhost:3000`.
2. View real-time energy consumption and emissions data.
3. Receive AI-driven recommendations for optimizing energy usage.

### Forecasting Emissions
- Use the AI model to forecast future energy usage and carbon emissions.
- Visualize predicted trends in the dashboard.

### AI Recommendations
- Access energy-saving recommendations in the dashboard.
- Apply suggestions to reduce energy consumption during peak operational hours.




### **Tech Stack**

#### **Backend**
- **Python 3.9+**: Programming language.
- **FastAPI**: Web framework for building REST APIs.
- **PostgreSQL**: Relational database.
- **SQLAlchemy**: ORM for database interactions.
- **Redis & Celery**: Task queue management for background tasks.
- **Docker**: Containerization for easy deployment.
- **Google Kubernetes Engine (GKE)**: Kubernetes for orchestration on Google Cloud.

#### **Frontend**
- **React**: JavaScript library for building user interfaces.
- **Plotly.js**: Data visualization library for charts.
- **npm & Webpack**: Package management and build tools.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Docker**: Containerization for frontend deployment.

#### **Machine Learning**
- **TensorFlow/Keras**: For building energy forecasting models.
- **Scikit-learn, Pandas, NumPy**: For data preprocessing and analysis.

#### **Cloud & Deployment**
- **Google Cloud Platform (GCP)**: Hosting and infrastructure.
- **Google Container Registry (GCR)**: Container image storage.
- **Google Cloud Build**: CI/CD pipeline for building and deploying containers.
- **Kubernetes Secrets**: Secure management of environment variables.




