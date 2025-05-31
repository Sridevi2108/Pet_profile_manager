#### Pet Profile Manager
A web application to manage pet profiles, built using Flask, MongoDB, and Docker.

🐾 Overview
The Pet Profile Manager allows users to create, view, and manage pet profiles. Each profile contains essential information about a pet, making it easier to keep track of multiple pets.

🚀 Features
Add new pet profiles with details such as name, age, breed, and owner information.

View a list of all pet profiles.

Update existing pet profiles.

Delete pet profiles that are no longer needed.

Responsive user interface for seamless interaction.

🛠️ Technologies Used
Backend: Flask (Python)

Database: MongoDB

Frontend: HTML, CSS, JavaScript

Containerization: Docker & Docker Compose

📦 Installation
Prerequisites
Docker installed on your machine.

Docker Compose installed.

Steps
1.Clone the repository
git clone https://github.com/Sridevi2108/Pet_profile_manager.git
cd Pet_profile_manager

2.Build and run the containers
docker-compose up --build

3.Access the application
Open your browser and navigate to http://localhost:5000 to start using the Pet Profile Manager.

📁 Project Structure

Pet_profile_manager/
├── static/                 # Static files (CSS, JS, images)
├── templates/              # HTML templates
├── server.py               # Main Flask application
├── Dockerfile              # Docker configuration for Flask app
├── docker-compose.yml      # Docker Compose configuration
├── requirements.txt        # Python dependencies
└── README.md               # Project documentation

🐳 Docker Configuration
Dockerfile: Defines the environment for the Flask application.

docker-compose.yml: Sets up the Flask app and MongoDB services, allowing them to communicate seamlessly.

📄 API Endpoints
Method	Endpoint	Description
GET	/pets	Retrieve all pet profiles
POST	/pets	Create a new pet profile
GET	/pets/<id>	Retrieve a specific pet profile
PUT	/pets/<id>	Update a specific pet profile
DELETE	/pets/<id>	Delete a specific pet profile

Screenshots:
![image](https://github.com/user-attachments/assets/c24702b6-7de5-4fdd-b673-a3e1db83bdf6)
![image](https://github.com/user-attachments/assets/a80352fb-74a2-4fe7-8014-3bd033f0a95b)
![image](https://github.com/user-attachments/assets/454fdca8-b123-4442-a51f-8282341ffcb4)
![image](https://github.com/user-attachments/assets/758f4f2b-c777-4750-b416-624a6535243a)

📬 Contact

Created by Sridevi — [GitHub Profile](https://github.com/Sridevi2108)
