# 🎓 APSIT Alumni Connect

A comprehensive web-based alumni networking platform built for A.P. Shah Institute of Technology (APSIT) to connect students, alumni, and faculty members. This full-stack application facilitates networking, mentorship, job opportunities, and event management within the APSIT community.

## ✨ Features

### 🔐 **Authentication & Authorization**
- **Multi-role authentication** (Student, Alumni, Admin)
- **JWT-based security** with role-based access control
- **Secure password hashing** using BCrypt
- **Email-based user registration** and login

### 👥 **User Management**
- **Profile management** with skills, experience, and contact information
- **Alumni verification system** for graduated students
- **Role-based dashboards** with personalized content
- **User search and filtering** by branch, year, location, and skills

### 🤝 **Networking & Mentorship**
- **Alumni directory** with advanced search capabilities
- **Mentorship program** connecting students with experienced alumni
- **Connection requests** and networking features
- **Mentor rating and feedback system**

### 💼 **Job Portal**
- **Job posting and management** by alumni and companies
- **Job application tracking** system
- **Skill-based job recommendations**
- **Company and salary information**

### 📅 **Event Management**
- **Event creation and management** (Meetups, Workshops, Reunions)
- **Event registration** and attendance tracking
- **Event notifications** and reminders
- **Location and time management**

### 🔔 **Notification System**
- **Real-time notifications** for jobs, events, and connections
- **Categorized notifications** (Jobs, Events, Messages, Achievements)
- **Notification filtering** and management
- **Email and in-app notifications**

### 👨‍💼 **Admin Panel**
- **User verification management**
- **Content moderation** and approval workflows
- **Analytics and reporting** dashboard
- **System configuration** and maintenance

## 🛠️ Technology Stack

### **Backend**
- **Java 17** with **Spring Boot 3.2.0**
- **Spring Security** for authentication and authorization
- **Spring Data JPA** for database operations
- **JWT (JSON Web Tokens)** for stateless authentication
- **MySQL** database for data persistence
- **Maven** for dependency management

### **Frontend**
- **Vanilla JavaScript** with modern ES6+ features
- **HTML5** and **CSS3** with responsive design
- **Bootstrap-inspired** custom CSS framework
- **Font Awesome** icons for UI elements
- **AJAX** for seamless API communication

### **Security**
- **BCrypt** password hashing
- **CORS** configuration for cross-origin requests
- **JWT** token-based authentication
- **Role-based access control** (RBAC)

## 🚀 Getting Started

### **Prerequisites**
- Java 17 or higher
- Maven 3.6+
- MySQL 8.0+
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/apsit-alumni-connect.git
   cd apsit-alumni-connect
   ```

2. **Database Setup**
   ```sql
   CREATE DATABASE alumnidb;
   ```

3. **Configure Database**
   Update [src/main/resources/application.properties](cci:7://file:///d:/APSITCONNECT/Backend/src/main/resources/application.properties:0:0-0:0):
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/alumnidb
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```

4. **Run the Application**
   ```bash
   cd Backend
   mvn spring-boot:run
   ```

5. **Access the Application**
   Open your browser and navigate to `http://localhost:8080`

### **Default Test Accounts**

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@apsit.edu | admin123 |
| Student | student@apsit.edu | student123 |
| Alumni | trisha.mahagore@gmail.com | pass123 |

## 📁 Project Structure

```
APSITCONNECT/
├── Backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/alumniconnect/
│   │   │   │   ├── config/          # Security & JWT configuration
│   │   │   │   ├── controller/      # REST API endpoints
│   │   │   │   ├── entity/          # JPA entities
│   │   │   │   ├── repository/      # Data access layer
│   │   │   │   ├── service/         # Business logic
│   │   │   │   └── DataInitializer.java
│   │   │   └── resources/
│   │   │       ├── static/          # Frontend files
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
└── README.md
```

## 🔧 API Endpoints

### **Authentication**
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### **Users**
- `GET /api/users/alumni` - Get all alumni
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/{id}` - Update user profile

### **Jobs**
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create new job posting
- `PUT /api/jobs/{id}` - Update job posting

### **Events**
- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `PUT /api/events/{id}` - Update event

### **Notifications**
- `GET /api/notifications/{userId}` - Get user notifications
- `POST /api/notifications` - Create notification

## 🎯 Key Features Implemented

- ✅ **Multi-role authentication system**
- ✅ **Alumni verification workflow**
- ✅ **Job posting and application system**
- ✅ **Event management with RSVP**
- ✅ **Real-time notification system**
- ✅ **Advanced search and filtering**
- ✅ **Responsive web design**
- ✅ **Admin dashboard and controls**
- ✅ **Mentorship program management**
- ✅ **Profile management system**

## 🔮 Future Enhancements

- 📱 **Mobile application** (React Native/Flutter)
- 💬 **Real-time chat system** using WebSockets
- 📊 **Advanced analytics** and reporting
- 🔗 **Social media integration**
- 📧 **Email notification system**
- 🌐 **Multi-language support**
- 📱 **Push notifications**
- 🎨 **Theme customization**

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@Bhavesh-Codes](https://github.com/Bhavesh-Codes)
- LinkedIn: [Bhavesh Jalalbisht](https://www.linkedin.com/in/bhavesh-jalalbisht/)

## 🙏 Acknowledgments

- **A.P. Shah Institute of Technology** for inspiration
- **Spring Boot Community** for excellent documentation
- **Bootstrap** for UI components inspiration
- **Font Awesome** for beautiful icons

---

⭐ **Star this repository if you found it helpful!**
