// Application State
const BASE_URL = 'http://localhost:8082/api';
let currentUser = null;
let currentSection = 'dashboard';
let alumni = [];
let mentors = [];
let jobs = [];
let events = [];
let forumTopics = [];
let notifications = [];
let filteredNotifications = [];
let currentNotificationFilter = 'all';

let pendingVerifications = [
    { id: 101, name: 'Siddhant Kadam', year: 2025, document: 'marksheet_sid.pdf' },
    { id: 102, name: 'Anjali Sharma', year: 2025, document: 'degree_anjali.pdf' },
    { id: 103, name: 'Rohan Desai', year: 2024, document: 'provisional_rohan.pdf' },
];

// Sample Data with Names
const sampleData = {
    alumni: [
        {
            id: 1,
            name: 'Trisha Mahagore',
            title: 'Senior Software Engineer at Google',
            company: 'Google',
            location: 'Bangalore',
            branch: 'Computer Engineering',
            year: 2019,
            skills: ['Python', 'Machine Learning', 'TensorFlow', 'Kubernetes'],
            initials: 'TM',
            about: 'Passionate about AI/ML and scalable systems. Love mentoring juniors.',
            email: 'arjun.malhotra@gmail.com'
        },
        {
            id: 2,
            name: 'Dhanushree Karve',
            title: 'Product Manager at Microsoft',
            company: 'Microsoft',
            location: 'Hyderabad',
            branch: 'Information Technology',
            year: 2018,
            skills: ['Product Strategy', 'Data Analysis', 'Agile', 'Leadership'],
            initials: 'DK',
            about: 'Product enthusiast with 6+ years experience in tech products.',
            email: 'priya.sharma@outlook.com'
        },
        {
            id: 3,
            name: 'Sandeep Maheswari',
            title: 'Data Scientist at Amazon',
            company: 'Amazon',
            location: 'Mumbai',
            branch: 'Computer Engineering',
            year: 2020,
            skills: ['Data Science', 'Python', 'AWS', 'SQL', 'Statistics'],
            initials: 'SM',
            about: 'Data science expert specializing in recommendation systems.',
            email: 'vikash.kumar@amazon.com'
        },
        {
            id: 4,
            name: 'Sneha Patel',
            title: 'Frontend Developer at Flipkart',
            company: 'Flipkart',
            location: 'Bangalore',
            branch: 'Computer Engineering',
            year: 2021,
            skills: ['React', 'JavaScript', 'CSS', 'Node.js', 'MongoDB'],
            initials: 'SP',
            about: 'Frontend specialist with expertise in React and modern web technologies.',
            email: 'sneha.patel@flipkart.com'
        },
        {
            id: 5,
            name: 'Rahul Gupta',
            title: 'DevOps Engineer at Zomato',
            company: 'Zomato',
            location: 'Gurgaon',
            branch: 'Information Technology',
            year: 2019,
            skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Python'],
            initials: 'RG',
            about: 'DevOps expert focused on scalable infrastructure and automation.',
            email: 'rahul.gupta@zomato.com'
        },
        {
            id: 6,
            name: 'Kavya Reddy',
            title: 'UX Designer at Paytm',
            company: 'Paytm',
            location: 'Noida',
            branch: 'Computer Engineering',
            year: 2022,
            skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
            initials: 'KR',
            about: 'UX designer passionate about creating intuitive digital experiences.',
            email: 'kavya.reddy@paytm.com'
        },
        {
            id: 7,
            name: 'Amit Shetty',
            title: 'Startup Founder - EdTech',
            company: 'LearnWise',
            location: 'Pune',
            branch: 'Computer Engineering',
            year: 2017,
            skills: ['Entrepreneurship', 'Product Development', 'Team Leadership'],
            initials: 'AS',
            about: 'Entrepreneur building the future of education through technology.',
            email: 'amit@learnwise.in'
        },
        {
            id: 8,
            name: 'Pooja Agarwal',
            title: 'Software Engineer at TCS',
            company: 'TCS',
            location: 'Chennai',
            branch: 'Information Technology',
            year: 2023,
            skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs'],
            initials: 'PA',
            about: 'Backend developer with expertise in Java ecosystem.',
            email: 'pooja.agarwal@tcs.com'
        }
    ],
    mentors: [
        {
            id: 1,
            name: 'Tanushree Gabhane',
            title: 'Tech Lead at Google',
            company: 'Google',
            expertise: ['Software Development', 'System Design', 'Career Guidance'],
            experience: '8 years',
            initials: 'TG',
            rating: 4.9,
            sessions: 156,
            mentorshipPoints: 1560,
            badges: ['Top Mentor', 'Gold']
        },
        {
            id: 2,
            name: 'Atharva Khamkar',
            title: 'Senior Data Scientist at Microsoft',
            company: 'Microsoft',
            expertise: ['Data Science', 'Machine Learning', 'Higher Studies'],
            experience: '7 years',
            initials: 'AK',
            rating: 4.8,
            sessions: 89,
            mentorshipPoints: 950,
            badges: ['Silver']
        },
        {
            id: 3,
            name: 'Om Pandey',
            title: 'Startup Founder',
            company: 'Drama Company',
            expertise: ['Entrepreneurship', 'Call Center', 'Fundraising'],
            experience: '10 years',
            initials: 'OP',
            rating: 3.2,
            sessions: 234,
            mentorshipPoints: 850,
            badges: ['Silver']
        },
        {
            id: 4,
            name: 'Prisha Jain',
            title: 'Product Manager at Amazon',
            company: 'Amazon',
            expertise: ['Product Management', 'Strategy', 'Leadership'],
            experience: '6 years',
            initials: 'PJ',
            rating: 4.7,
            sessions: 67,
            mentorshipPoints: 670,
            badges: ['Rising Star']
        }
    ],
    jobs: [
        {
            id: 1,
            title: 'Software Development Engineer',
            company: 'Infosys',
            location: 'Pune',
            type: 'Full Time',
            description: 'We are looking for a skilled software engineer to join our development team. Work on cutting-edge projects using modern technologies.',
            requirements: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'React'],
            postedBy: 'Amit Joshi',
            postedDate: '2 days ago',
            applicants: 45,
            salary: '₹8-12 LPA'
        },
        {
            id: 2,
            title: 'Data Analyst Intern',
            company: 'Flipkart',
            location: 'Thane',
            type: 'Internship',
            description: 'Join our analytics team as an intern. Gain hands-on experience with data analysis, visualization, and business insights.',
            requirements: ['Python', 'SQL', 'Tableau', 'Statistics', 'Excel'],
            postedBy: 'Priya Sharma',
            postedDate: '1 week ago',
            applicants: 78,
            salary: '₹25,000/month'
        },
        {
            id: 3,
            title: 'Frontend Developer',
            company: 'Zomato',
            location: 'Airoli',
            type: 'Full Time',
            description: 'Looking for a creative frontend developer to build responsive web applications using React and modern JavaScript.',
            requirements: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Redux'],
            postedBy: 'Sneha Patel',
            postedDate: '3 days ago',
            applicants: 32,
            salary: '₹6-10 LPA'
        },
        {
            id: 4,
            title: 'Product Manager',
            company: 'Paytm',
            location: 'BKC',
            type: 'Full Time',
            description: 'Drive product strategy and execution for our fintech products. Work with cross-functional teams to deliver impactful solutions.',
            requirements: ['Product Strategy', 'Analytics', 'SQL', 'User Research'],
            postedBy: 'Kavya Reddy',
            postedDate: '5 days ago',
            applicants: 23,
            salary: '₹15-25 LPA'
        }
    ],
    events: [
        {
            id: 1,
            title: 'APSIT Tech Meetup 2025',
            date: '2025-09-25',
            time: '18:00',
            location: 'Mumbai',
            type: 'Meetup',
            description: 'Join us for an evening of networking, tech talks, and knowledge sharing. Special focus on AI/ML trends and career opportunities.',
            organizer: 'Bhavesh Bisht',
            attendees: 156,
            registered: true
        },
        {
            id: 2,
            title: 'Career Guidance Webinar',
            date: '2025-09-18',
            time: '19:00',
            location: 'Online',
            type: 'Webinar',
            description: 'Comprehensive session on career planning, interview preparation, and industry insights for students and recent graduates.',
            organizer: 'Career Development Committee',
            attendees: 289,
            registered: false
        },
        {
            id: 3,
            title: 'Annual Alumni Reunion',
            date: '2025-10-15',
            time: '16:00',
            location: 'APSIT Campus, Thane',
            type: 'Reunion',
            description: 'Come back to campus and reconnect with batch mates, faculty, and the APSIT community. Cultural programs and networking sessions.',
            organizer: 'APSIT Alumni Association',
            attendees: 445,
            registered: false
        },
        {
            id: 4,
            title: 'Startup Pitch Workshop',
            date: '2025-09-30',
            time: '14:00',
            location: 'Pune',
            type: 'Workshop',
            description: 'Learn how to pitch your startup ideas effectively. Hands-on workshop with successful entrepreneurs and investors.',
            organizer: 'Entrepreneurship Cell',
            attendees: 78,
            registered: true
        }
    ],
    notifications: [
        {
            id: 1,
            type: 'job',
            title: 'New Job Posted',
            message: 'Software Engineer position at Infosys - Perfect match for your skills!',
            time: '2 hours ago',
            read: false,
            icon: 'fas fa-briefcase',
            color: '#28a745'
        },
        {
            id: 2,
            type: 'connection',
            title: 'New Connection Request',
            message: 'Saish Jagtap wants to connect with you',
            time: '5 hours ago',
            read: false,
            icon: 'fas fa-user-plus',
            color: '#007bff'
        },
        {
            id: 3,
            type: 'event',
            title: 'Event Reminder',
            message: 'APSIT Tech Meetup is tomorrow at 6 PM',
            time: '1 day ago',
            read: true,
            icon: 'fas fa-calendar',
            color: '#fd7e14'
        },
        {
            id: 4,
            type: 'mentorship',
            title: 'Mentorship Request',
            message: 'A student Soham Kale requested mentorship in Data Science',
            time: '2 days ago',
            read: false,
            icon: 'fas fa-graduation-cap',
            color: '#dc3545'
        },
        {
            id: 5,
            type: 'achievement',
            title: 'Achievement Unlocked',
            message: 'Congratulations! You completed 10 mentorship sessions',
            time: '3 days ago',
            read: true,
            icon: 'fas fa-trophy',
            color: '#6f42c1'
        },
        {
            id: 6,
            type: 'message',
            title: 'New Message',
            message: 'Mahi Katre sent you a message: "Hi Bhavesh, great profile!"',
            time: '3 days ago',
            read: true,
            icon: 'fas fa-comment',
            color: '#17a2b8'
        },
        {
            id: 7,
            type: 'profile',
            title: 'Profile View',
            message: 'An alumni from Google viewed your profile.',
            time: '4 days ago',
            read: true,
            icon: 'fas fa-eye',
            color: '#6c757d'
        },
        {
            id: 8,
            type: 'event',
            title: 'Event Update',
            message: 'The location for "Annual Alumni Reunion" has been updated.',
            time: '5 days ago',
            read: false,
            icon: 'fas fa-map-marker-alt',
            color: '#ffc107'
        }
    ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const res = await fetch(`${BASE_URL}/users/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                currentUser = await res.json();
                updateProfileUI();
                showMainApp();
                await loadSampleData();
            } else {
                localStorage.removeItem('token');
                showLoginScreen();
            }
        } catch {
            showLoginScreen();
        }
    } else {
        showLoginScreen();
    }
    
    setupEventListeners();
    setupLoginRoleSelection();
    setupPasswordToggles();
}

function setupEventListeners() {
    // Login/Register functionality
    document.getElementById('loginBtn').addEventListener('click', function() {
        const selectedRole = document.querySelector('.role-option.selected');
        if (!selectedRole) {
            showAlert('Please select your role', 'warning');
            return;
        }
        const role = selectedRole.dataset.role;
        handleLoginWithRole(role);
    });
    
    document.getElementById('registerBtn').addEventListener('click', handleRegister);
    document.getElementById('showRegister').addEventListener('click', showRegisterScreen);
    document.getElementById('showLogin').addEventListener('click', showLoginScreen);

    // Search functionality
    document.addEventListener('keypress', function(e) {
        if (e.target.id === 'alumniSearch' && e.key === 'Enter') {
            searchAlumni();
        }
        if (e.target.id === 'mentorSearch' && e.key === 'Enter') {
            searchMentors();
        }
    });

    // Modal close functionality
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Setup notification filter listeners
    setupNotificationFilters();
    
    // Setup events filter listeners
    setupEventsFilters();

    // Verification Modal Listeners
    document.getElementById('verificationForm').addEventListener('submit', handleVerificationSubmit);
    document.querySelector('#verificationModal .close').addEventListener('click', () => {
        document.getElementById('verificationModal').style.display = 'none';
    });
}

async function loadSampleData() {
    const token = localStorage.getItem('token');
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
    
    try {
        // Try to fetch alumni data from backend
        try {
            const res = await fetch(`${BASE_URL}/users/alumni`, {headers});
            if (res.ok) {
                alumni = await res.json();
                console.log('Alumni loaded from backend:', alumni);
            } else {
                throw new Error('Backend not available');
            }
        } catch (e) {
            console.log('Using sample alumni data');
            alumni = sampleData.alumni;
        }

        // Try to fetch jobs data from backend
        try {
            const res = await fetch(`${BASE_URL}/jobs`, {headers});
            if (res.ok) {
                jobs = await res.json();
                console.log('Jobs loaded from backend:', jobs);
            } else {
                throw new Error('Backend not available');
            }
        } catch (e) {
            console.log('Using sample jobs data');
            jobs = sampleData.jobs;
        }

        // Try to fetch events data from backend
        try {
            const res = await fetch(`${BASE_URL}/events`, {headers});
            if (res.ok) {
                events = await res.json();
                console.log('Events loaded from backend:', events);
            } else {
                throw new Error('Backend not available');
            }
        } catch (e) {
            console.log('Using sample events data');
            events = sampleData.events;
        }

        // Try to fetch notifications data from backend
        try {
            const res = await fetch(`${BASE_URL}/notifications/${currentUser.id}`, {headers});
            if (res.ok) {
                notifications = await res.json();
                console.log('Notifications loaded from backend:', notifications);
            } else {
                throw new Error('Backend not available');
            }
        } catch (e) {
            console.log('Using sample notifications data');
            notifications = sampleData.notifications;
        }
        filteredNotifications = [...notifications];

        // Try to fetch mentors data from backend
        try {
            const res = await fetch(`${BASE_URL}/users/mentors`, {headers});
            if (res.ok) {
                mentors = await res.json();
                console.log('Mentors loaded from backend:', mentors);
            } else {
                throw new Error('Backend not available');
            }
        } catch (e) {
            console.log('Using sample mentors data');
            mentors = sampleData.mentors;
        }

        console.log('Data loading completed successfully');
    } catch (e) {
        console.error('Error in loadSampleData:', e);
        // Fallback to all sample data if there's a general error
        alumni = sampleData.alumni;
        jobs = sampleData.jobs;
        events = sampleData.events;
        notifications = sampleData.notifications;
        mentors = sampleData.mentors;
        filteredNotifications = [...notifications];
        console.log('Using all sample data as fallback');
    }
}

// Authentication Functions
function setupLoginRoleSelection() {
    const roleOptions = document.querySelectorAll('.role-option');
    
    roleOptions.forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.role-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

async function handleLoginWithRole(role) {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        showAlert('Please fill in all fields', 'warning');
        return;
    }

    try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, role})
        });
        
        const data = await res.json();
        
        if (res.ok) {
            localStorage.setItem('token', data.token);
            // Fetch fresh profile from backend using token
            try {
                const meRes = await fetch(`${BASE_URL}/users/me`, {
                    headers: { 'Authorization': `Bearer ${data.token}` }
                });
                if (meRes.ok) {
                    currentUser = await meRes.json();
                    updateProfileUI();
                } else {
                    currentUser = data.user || null;
                }
            } catch {
                currentUser = data.user || null;
            }
            showAlert(`Welcome back, ${currentUser?.name?.split(' ')[0] || 'User'}! 👋`, 'success');
            showMainApp();
        } else {
            showAlert(data.message || 'Login failed', 'error');
        }
    } catch (e) {
        showAlert('Error connecting to server', 'error');
    }
}

async function handleRegister() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const role = document.getElementById('regRole').value;
    const branch = document.getElementById('regBranch').value;
    const year = document.getElementById('regYear').value;

    if (password !== confirmPassword) {
        showAlert('Passwords do not match. Please try again.', 'warning');
        return;
    }

    if (!name || !email || !password || !branch || !year) {
        showAlert('Please fill in all fields', 'warning');
        return;
    }

    try {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password, role, branch, year: parseInt(year)})
        });
        
        const data = await res.json();
        
        if (res.ok) {
            // Show confirmation message
            document.getElementById('registerScreen').classList.add('hidden');
            document.getElementById('signupConfirmation').classList.remove('hidden');
            
            // Reset form
            document.getElementById('regName').value = '';
            document.getElementById('regEmail').value = '';
            document.getElementById('regPassword').value = '';
            document.getElementById('regConfirmPassword').value = '';
            document.getElementById('regRole').value = '';
            document.getElementById('regBranch').value = '';
            document.getElementById('regYear').value = '';
        } else {
            // Backend may return a map of field -> message (validation errors)
            // or a { message: '...' } error. Normalize and display useful info.
            let displayMsg = 'Registration failed';
            try {
                if (data) {
                    if (typeof data === 'string') {
                        displayMsg = data;
                    } else if (data.message) {
                        displayMsg = data.message;
                    } else {
                        const vals = Object.values(data).flat().filter(Boolean);
                        if (vals.length > 0) displayMsg = vals.join('; ');
                    }
                }
            } catch (e) {
                // fallback
            }
            showAlert(displayMsg, 'error');
        }
    } catch (e) {
        showAlert('Error connecting to server', 'error');
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    showLoginScreen();
    showAlert('Logged out successfully', 'info');
    
    // Reset role selection
    document.querySelectorAll('.role-option').forEach(opt => opt.classList.remove('selected'));
}

function showRegisterScreen(e) {
    e.preventDefault();
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('registerScreen').classList.remove('hidden');
}

function showLoginScreen() {
    document.getElementById('registerScreen').classList.add('hidden');
    document.getElementById('signupConfirmation').classList.add('hidden');
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    
    // Reset role selection
    document.querySelectorAll('.role-option').forEach(opt => opt.classList.remove('selected'));
}

function showMainApp() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('registerScreen').classList.add('hidden');
    document.getElementById('signupConfirmation').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');

    // Ensure we have the latest profile if not loaded yet
    if (!currentUser) {
        const token = localStorage.getItem('token');
        if (token) {
            fetch(`${BASE_URL}/users/me`, { headers: { 'Authorization': `Bearer ${token}` }})
                .then(r => r.ok ? r.json() : null)
                .then(user => { if (user) { currentUser = user; updateProfileUI(); } });
        }
    } else {
        updateProfileUI();
    }

    // Update user info in sidebar
    const userNameElement = document.querySelector('.sidebar-footer .user-name');
    const userRoleElement = document.querySelector('.sidebar-footer .user-role');
    const userAvatar = document.querySelector('.sidebar-footer .avatar-placeholder');
    
    if (userNameElement && currentUser) {
        userNameElement.textContent = currentUser.name;
        userRoleElement.textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);
        userAvatar.textContent = currentUser.initials;
    }

    // Update welcome message
    const welcomeElements = document.querySelectorAll('.welcome-banner h2');
    welcomeElements.forEach(el => {
        el.textContent = `Welcome back, ${currentUser.name.split(' ')[0]}! 👋`;
    });

    // Show/hide role-specific elements
    if (currentUser.role === 'admin') {
        document.getElementById('adminPanelLink').classList.remove('hidden');
        showSection('admin');
    } else if (currentUser.role === 'alumni') {
        document.getElementById('adminPanelLink').classList.add('hidden');
        document.getElementById('upgradeToAlumniBtn').classList.add('hidden');
        showSection('dashboard');
        updateDashboardForAlumni();
        updateProfileForAlumni();
    } else {
        document.getElementById('adminPanelLink').classList.add('hidden');
        
        const currentYear = new Date().getFullYear();
        if (currentUser.role === 'student' && currentYear >= currentUser.year) {
            document.getElementById('upgradeToAlumniBtn').classList.remove('hidden');
        } else {
            document.getElementById('upgradeToAlumniBtn').classList.add('hidden');
        }
        showSection('dashboard');
    }

    populateAllSections();
}

// Profile UI updater
function updateProfileUI() {
    const profileSection = document.getElementById('profile');
    if (profileSection && currentUser) {
        const profileDetails = profileSection.querySelector('.profile-details');
        if (profileDetails) {
            profileDetails.innerHTML = `<h2>${currentUser.name}</h2><p>${currentUser.title || 'No title'}</p><p><i class="fas fa-map-marker-alt"></i> ${currentUser.location || 'No location'}</p><div class="profile-stats-row"><span><i class="fas fa-graduation-cap"></i>${currentUser.branch || 'No branch'}</span><span><i class="fas fa-calendar"></i> ${currentUser.role === 'alumni' ? 'Graduated ' : 'Expected '}${currentUser.year || 'N/A'}</span><span><i class="fas fa-users"></i> ${currentUser.connections || 0} Connections</span></div><button class="edit-profile-btn"><i class="fas fa-edit"></i> Edit Profile</button>`;
        }
        const about = profileSection.querySelector('.profile-about p') || profileSection.querySelector('.editable-content p');
        if (about) about.textContent = currentUser.about || 'No about info';
        const skills = profileSection.querySelector('.skill-tags') || profileSection.querySelector('.skills-container');
        if (skills) skills.innerHTML = (currentUser.skills || []).map(s => `<span class="skill-tag">${s}</span>`).join('');
        const experienceList = profileSection.querySelector('.experience-list');
        if (experienceList) experienceList.innerHTML = (currentUser.experience || []).map(exp => `<div class="experience-item"><div class="experience-logo"><i class="fas fa-briefcase"></i></div><div class="experience-details"><h4>${exp.title}</h4><div class="company">${exp.company}</div><div class="duration">${exp.duration}</div><div class="description">${exp.description}</div></div></div>`).join('');
        const educationList = profileSection.querySelector('.education-list');
        if (educationList) educationList.innerHTML = `<div class="education-item"><div class="education-logo"><i class="fas fa-university"></i></div><div class="education-details"><h4>${currentUser.branch || 'Bachelor of Engineering'}</h4><div class="institution">A.P. Shah Institute of Technology</div><div class="duration">${currentUser.year ? `${currentUser.year - 4} - ${currentUser.year}` : 'N/A'}</div><div class="description">CGPA: ${currentUser.cgpa || 'N/A'}</div></div></div>`;
    }
}

// Sidebar Toggle Functions
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const mainContent = document.getElementById('mainContent');

    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    } else {
        if (sidebar.style.transform === 'translateX(-280px)') {
            sidebar.style.transform = 'translateX(0)';
            mainContent.style.marginLeft = '280px';
        } else {
            sidebar.style.transform = 'translateX(-280px)';
            mainContent.style.marginLeft = '0';
        }
    }
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeSidebar();
        document.getElementById('sidebar').style.transform = '';
        document.getElementById('mainContent').style.marginLeft = '280px';
    } else {
        document.getElementById('mainContent').style.marginLeft = '0';
    }
});

// Navigation Functions
function showSection(sectionName) {
    document.querySelectorAll('.section-content').forEach(section => section.classList.add('hidden'));
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));

    document.getElementById(sectionName).classList.remove('hidden');
    const activeItem = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }

    const titles = {
        dashboard: 'Dashboard',
        profile: 'My Profile',
        mentorship: 'Mentorship',
        networking: 'Alumni Network',
        events: 'Events',
        analytics: 'Analytics',
        notifications: 'Notifications',
        admin: 'Admin Panel'
    };

    document.getElementById('pageTitle').textContent = titles[sectionName] || 'APSIT Connect';
    currentSection = sectionName;

    if (window.innerWidth <= 768) {
        closeSidebar();
    }
}

function populateAllSections() {
    populateAlumniGrid();
    populateMentorsGrid();
    populateEventsGrid();
    populateNotifications();
    updateNotificationCount();
    populateMentorLeaderboard();
    populateAdminDashboard();
}

// Alumni/Networking Functions
function populateAlumniGrid() {
    const grid = document.getElementById('alumniGrid');
    if (!grid) return;
    grid.innerHTML = alumni.map(createAlumniCardHTML).join('');
}

function createAlumniCardHTML(person) {
    return `
        <div class="alumni-card" onclick="showProfile(${person.id})">
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <div class="avatar-placeholder">${person.initials}</div>
                <div>
                    <h3 style="margin: 0; font-size: 18px; color: var(--text-dark);">${person.name}</h3>
                    <p style="margin: 5px 0; color: var(--text-light); font-size: 14px;">${person.title}</p>
                </div>
            </div>
            <p style="color: var(--text-light); margin-bottom: 10px;"><i class="fas fa-map-marker-alt"></i> ${person.location}</p>
            <p style="color: var(--text-light); margin-bottom: 15px;"><i class="fas fa-graduation-cap"></i> ${person.branch}, ${person.year}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                ${person.skills.slice(0, 3).map(skill => `<span style="background: var(--peach-light); color: var(--primary-color); padding: 4px 8px; border-radius: 12px; font-size: 12px;">${skill}</span>`).join('')}
                ${person.skills.length > 3 ? `<span style="color: var(--text-light); font-size: 12px;">+${person.skills.length - 3} more</span>` : ''}
            </div>
            <button class="btn-primary" style="width: 100%; padding: 10px; font-size: 14px;" onclick="event.stopPropagation(); connectWithAlumni(${person.id})">
                <i class="fas fa-user-plus"></i> Connect
            </button>
        </div>
    `;
}

function populateJobsGrid() {
    const grid = document.getElementById('jobsGrid');
    if (!grid) return;
    if (jobs.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);"><i class="fas fa-briefcase" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>No jobs available at the moment</div>';
        return;
    }
    grid.innerHTML = jobs.map(createJobCardHTML).join('');
}

function createJobCardHTML(job) {
    return `
        <div class="job-card">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                <h3 style="margin: 0; font-size: 18px; color: var(--text-dark);">${job.title}</h3>
                <span style="background: var(--peach-light); color: var(--primary-color); padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 600;">${job.type}</span>
            </div>
            <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 8px;">${job.company}</p>
            <p style="color: var(--text-light); margin-bottom: 8px;"><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
            <p style="color: var(--text-light); margin-bottom: 15px; font-size: 14px; line-height: 1.4;">${job.description}</p>
            <div style="margin-bottom: 15px;">
                <p style="font-size: 12px; color: var(--text-light); margin-bottom: 8px;">Required Skills:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${job.requirements.map(req => `<span style="background: var(--light-bg); color: var(--text-dark); padding: 2px 8px; border-radius: 10px; font-size: 11px;">${req}</span>`).join('')}
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 15px; border-top: 1px solid var(--light-bg);">
                <div>
                    <p style="font-size: 12px; color: var(--text-light); margin: 0;">Salary: ${job.salary}</p>
                    <p style="font-size: 12px; color: var(--text-light); margin: 0;">${job.applicants} applicants</p>
                </div>
                <button class="btn-primary" style="padding: 8px 16px; font-size: 12px;" onclick="applyForJob(${job.id})">Apply Now</button>
            </div>
        </div>
    `;
}

// Mentorship Functions
function populateMentorsGrid() {
    const grid = document.getElementById('mentorsGrid');
    if (!grid) return;
    if (mentors.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);"><i class="fas fa-graduation-cap" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>No mentors available at the moment</div>';
        return;
    }
    grid.innerHTML = mentors.map(createMentorCardHTML).join('');
}

function createMentorCardHTML(mentor) {
    const badgeColors = { 'Top Mentor': 'gold', 'Gold': 'gold', 'Silver': 'silver', 'Rising Star': 'rising-star' };
    return `
        <div class="mentor-card" style="position: relative;">
            <div class="mentor-badges">
                ${mentor.badges.map(badge => `<div class="mentor-badge ${badgeColors[badge] || ''}"><i class="fas ${badge === 'Top Mentor' ? 'fa-crown' : 'fa-star'}"></i> ${badge}</div>`).join('')}
            </div>
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px; margin-top: 30px;">
                <div class="avatar-placeholder">${mentor.initials}</div>
                <div>
                    <h3 style="margin: 0; font-size: 18px; color: var(--text-dark);">${mentor.name}</h3>
                    <p style="margin: 5px 0; color: var(--text-light); font-size: 14px;">${mentor.title}</p>
                </div>
            </div>
            <p style="color: var(--primary-color); font-weight: 600; margin-bottom: 10px;">${mentor.company} • ${mentor.experience}</p>
            <div style="margin-bottom: 15px;">
                <p style="font-size: 12px; color: var(--text-light); margin-bottom: 8px;">Expertise:</p>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    ${mentor.expertise.map(exp => `<span style="background: var(--peach-light); color: var(--primary-color); padding: 4px 8px; border-radius: 12px; font-size: 11px;">${exp}</span>`).join('')}
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <div style="display: flex; align-items: center; gap: 5px;">
                    <span style="color: #ffc107;">⭐</span>
                    <span style="font-size: 14px; font-weight: 600;">${mentor.rating}</span>
                </div>
                <span style="font-size: 12px; color: var(--text-light);">${mentor.sessions} sessions</span>
            </div>
            <button class="btn-primary" style="width: 100%; padding: 10px; font-size: 14px;" onclick="requestMentorship(${mentor.id})">
                <i class="fas fa-handshake"></i> Request Mentorship
            </button>
        </div>
    `;
}

// Events Functions
function populateEventsGrid() {
    const grid = document.getElementById('eventsGrid');
    if (!grid) return;
    if (events.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-light);"><i class="fas fa-calendar-alt" style="font-size: 48px; margin-bottom: 15px; display: block; color: var(--border-color);"></i><h3 style="margin-bottom: 10px;">No events scheduled</h3><p>Check back later for upcoming events and activities</p></div>`;
        return;
    }
    grid.innerHTML = events.map(createEventCardHTML).join('');
}

function createEventCardHTML(event) {
    const eventDate = new Date(event.date);
    const formattedDate = eventDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    const formattedTime = event.time;
    return `
        <div class="event-card">
            <div class="event-card-header">
                <div class="event-type-badge">${event.type}</div>
                <h3>${event.title}</h3>
                <div class="event-date-time">
                    <span><i class="fas fa-calendar"></i> ${formattedDate}</span>
                    <span><i class="fas fa-clock"></i> ${formattedTime}</span>
                </div>
            </div>
            <div class="event-card-body">
                <div class="event-location"><i class="fas fa-map-marker-alt"></i><span>${event.location}</span></div>
                <div class="event-description">${event.description}</div>
                <div class="event-organizer"><i class="fas fa-user"></i> Organized by ${event.organizer}</div>
                <div class="event-card-footer">
                    <div class="event-attendees"><i class="fas fa-users"></i><span>${event.attendees} attending</span></div>
                    <button class="event-register-btn ${event.registered ? 'registered' : ''}" onclick="toggleEventRegistration(${event.id})">${event.registered ? 'Registered' : 'Register'}</button>
                </div>
            </div>
        </div>
    `;
}

function toggleEventRegistration(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        event.registered = !event.registered;
        event.attendees += event.registered ? 1 : -1;
        showAlert(event.registered ? 'Successfully registered for the event! 🎉' : 'Registration cancelled', event.registered ? 'success' : 'info');
        populateEventsGrid();
    }
}

function setupEventsFilters() {
    document.querySelector('.events-search')?.addEventListener('input', filterEvents);
    document.querySelector('.event-type-filter')?.addEventListener('change', filterEvents);
    document.querySelector('.event-time-filter')?.addEventListener('change', filterEvents);
}

function filterEvents() {
    const searchTerm = document.querySelector('.events-search')?.value.toLowerCase() || '';
    const typeFilter = document.querySelector('.event-type-filter')?.value || '';
    const timeFilter = document.querySelector('.event-time-filter')?.value || '';
    let filteredEvents = events.filter(event => 
        (event.title.toLowerCase().includes(searchTerm) || event.description.toLowerCase().includes(searchTerm) || event.organizer.toLowerCase().includes(searchTerm)) &&
        (!typeFilter || event.type === typeFilter)
    );
    if (timeFilter) {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        filteredEvents = filteredEvents.filter(event => {
            const eventDate = new Date(event.date);
            if (timeFilter === 'today') return eventDate.toDateString() === today.toDateString();
            if (timeFilter === 'week') return eventDate >= today && eventDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
            if (timeFilter === 'month') return eventDate >= today && eventDate <= new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
            return true;
        });
    }
    const grid = document.getElementById('eventsGrid');
    if (grid) {
        if (filteredEvents.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-light);"><i class="fas fa-search" style="font-size: 48px; margin-bottom: 15px; display: block; color: var(--border-color);"></i><h3 style="margin-bottom: 10px;">No events found</h3><p>Try adjusting your search criteria</p></div>`;
        } else {
            grid.innerHTML = filteredEvents.map(createEventCardHTML).join('');
        }
    }
}

// Notifications Functions
function populateNotifications() {
    const list = document.getElementById('notificationsList');
    if (!list) return;
    updateNotificationCount();
    if (filteredNotifications.length === 0) {
        list.innerHTML = `<div class="no-notifications"><i class="fas fa-bell-slash"></i><h3>No notifications</h3><p>You have no new notifications.</p></div>`;
        return;
    }
    list.innerHTML = filteredNotifications.map(createNotificationHTML).join('');
}

function createNotificationHTML(notification) {
    return `
        <div class="notification-item ${!notification.read ? 'unread' : ''}" data-id="${notification.id}">
            <div class="notification-icon" style="background-color: ${notification.color};"><i class="${notification.icon}"></i></div>
            <div class="notification-content">
                <div class="notification-title">${notification.title}</div>
                <div class="notification-message">${notification.message}</div>
                <div class="notification-time">${notification.time}</div>
            </div>
            <div class="notification-actions">
                ${!notification.read ? `<button class="notification-action-btn" onclick="markAsRead(${notification.id})"><i class="fas fa-check"></i></button>` : ''}
                <button class="notification-action-btn" onclick="deleteNotification(${notification.id})"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `;
}

function setupNotificationFilters() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentNotificationFilter = this.getAttribute('data-filter');
            applyNotificationFilter(currentNotificationFilter);
        });
    });
    document.querySelector('.mark-all-read')?.addEventListener('click', markAllNotificationsRead);
    document.querySelector('.clear-read')?.addEventListener('click', clearReadNotifications);
}

function applyNotificationFilter(filterType) {
    if (filterType === 'all') filteredNotifications = [...notifications];
    else if (filterType === 'unread') filteredNotifications = notifications.filter(n => !n.read);
    else filteredNotifications = notifications.filter(n => n.type === filterType);
    populateNotifications();
    updateUnreadCount();
}

function markAsRead(notificationId) {
    const notification = notifications.find(n => n.id === notificationId);
    if (notification) {
        notification.read = true;
        applyNotificationFilter(currentNotificationFilter);
        showAlert('Notification marked as read', 'info');
    }
}

function deleteNotification(notificationId) {
    const index = notifications.findIndex(n => n.id === notificationId);
    if (index > -1) {
        notifications.splice(index, 1);
        applyNotificationFilter(currentNotificationFilter);
        showAlert('Notification deleted', 'info');
    }
}

function markAllNotificationsRead() {
    notifications.forEach(n => n.read = true);
    applyNotificationFilter(currentNotificationFilter);
    showAlert('All notifications marked as read', 'success');
}

function clearReadNotifications() {
    const readCount = notifications.filter(n => n.read).length;
    notifications = notifications.filter(n => !n.read);
    applyNotificationFilter(currentNotificationFilter);
    showAlert(readCount > 0 ? `${readCount} read notifications cleared` : 'No read notifications to clear', readCount > 0 ? 'info' : 'warning');
}

function updateNotificationCount() {
    const unreadCount = notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notificationBadge');
    if (badge) {
        badge.textContent = unreadCount;
        badge.style.display = unreadCount > 0 ? 'block' : 'none';
    }
    const topBarCount = document.getElementById('notificationCount');
    if (topBarCount) {
        topBarCount.textContent = unreadCount;
        topBarCount.style.display = unreadCount > 0 ? 'block' : 'none';
    }
}

function updateUnreadCount() {
    const unreadCount = filteredNotifications.filter(n => !n.read).length;
    const unreadCountElement = document.querySelector('.unread-count');
    if (unreadCountElement) {
        unreadCountElement.textContent = `${unreadCount} unread`;
        unreadCountElement.style.display = unreadCount > 0 ? 'inline' : 'none';
    }
}

// Tab switching
function switchTab(tabId, buttonElement) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.remove('hidden');
    buttonElement.classList.add('active');
    if (tabId === 'jobs-tab') populateJobsGrid();
}

// Search/Filter
function searchAlumni() {
    const searchTerm = document.getElementById('alumniSearch').value.toLowerCase();
    const branchFilter = document.getElementById('branchFilter').value;
    const locationFilter = document.getElementById('locationFilter').value;
    const filtered = alumni.filter(person => 
        (!searchTerm || person.name.toLowerCase().includes(searchTerm) || person.company.toLowerCase().includes(searchTerm) || person.skills.some(s => s.toLowerCase().includes(searchTerm))) &&
        (!branchFilter || person.branch === branchFilter) &&
        (!locationFilter || person.location.includes(locationFilter))
    );
    const grid = document.getElementById('alumniGrid');
    if (filtered.length === 0) grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);"><i class="fas fa-search" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>No alumni found<br><small>Try adjusting your search criteria</small></div>';
    else grid.innerHTML = filtered.map(createAlumniCardHTML).join('');
}

async function searchMentors() {
    const searchTerm = document.getElementById('mentorSearch').value.toLowerCase();
    const expertise = document.getElementById('expertiseFilter').value;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    const res = await fetch(`${BASE_URL}/users/mentors/search?term=${encodeURIComponent(searchTerm)}&expertise=${encodeURIComponent(expertise)}`, { headers });
    const filtered = await res.json();
    const grid = document.getElementById('mentorsGrid');
    grid.innerHTML = filtered.length === 0 ? '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);"><i class="fas fa-search" style="font-size: 48px; margin-bottom: 15px; display: block;"></i>No mentors found<br><small>Try adjusting your search criteria</small></div>' : filtered.map(createMentorCardHTML).join('');
}

// Actions
function connectWithAlumni(id) {
    const person = alumni.find(p => p.id === id);
    if (person) showAlert(`Connection request sent to ${person.name}! 🤝`, 'success');
}
function requestMentorship(id) {
    const mentor = mentors.find(m => m.id === id);
    if (mentor) showAlert(`Mentorship request sent to ${mentor.name}! 🎓`, 'success');
}
function applyForJob(id) {
    const job = jobs.find(j => j.id === id);
    if (job) showAlert(`Applied for ${job.title} at ${job.company}! 🚀`, 'success');
}
function showProfile(id) {
    const person = alumni.find(p => p.id === id);
    if (person) {
        const modal = document.getElementById('profileModal');
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px;">
                <div class="avatar-placeholder-large">${person.initials}</div>
                <h2 style="margin: 15px 0 5px;">${person.name}</h2>
                <p style="color: var(--text-light);">${person.title}</p>
                <p style="color: var(--text-light);"><i class="fas fa-map-marker-alt"></i> ${person.location}</p>
            </div>
            <div style="margin-bottom: 20px;"><h4>About</h4><p style="color: var(--text-light); line-height: 1.6;">${person.about}</p></div>
            <div style="margin-bottom: 20px;"><h4>Skills</h4><div style="display: flex; flex-wrap: wrap; gap: 8px;">${person.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}</div></div>
            <button class="btn-primary" style="width: 100%;" onclick="connectWithAlumni(${person.id}); document.getElementById('profileModal').style.display='none';"><i class="fas fa-user-plus"></i> Connect with ${person.name.split(' ')[0]}</button>
        `;
        modal.style.display = 'block';
    }
}

// Alert System
function showAlert(message, type = 'info') {
    const alertContainer = document.getElementById('alertContainer');
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;
    alert.innerHTML = `<div style="display: flex; align-items: center; gap: 10px;"><i class="fas ${getAlertIcon(type)}"></i><span>${message}</span></div>`;
    alertContainer.appendChild(alert);
    setTimeout(() => { if (alert.parentNode) alert.parentNode.removeChild(alert); }, 4000);
}

function getAlertIcon(type) {
    switch(type) { case 'success': return 'fa-check-circle'; case 'warning': return 'fa-exclamation-triangle'; case 'error': return 'fa-times-circle'; default: return 'fa-info-circle'; }
}

// --- NEW FUNCTIONS FOR ADDED FEATURES ---

// Role-specific Dashboard Updates
function updateDashboardForAlumni() {
    const dashboardSection = document.getElementById('dashboard');
    
    // Update welcome banner
    const welcomeBanner = dashboardSection.querySelector('.welcome-banner');
    welcomeBanner.innerHTML = `
        <h2>Welcome back, ${currentUser.name.split(' ')[0]}! 👋</h2>
        <p>Stay connected with your APSIT community and help guide the next generation</p>
    `;
    
    // Update stats grid
    const statsGrid = dashboardSection.querySelector('.stats-grid');
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-icon blue">
                <i class="fas fa-users"></i>
            </div>
            <div class="stat-info">
                <h3>2,847</h3>
                <p>Alumni Connected</p>
                <span class="stat-change">+12% this month</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon green">
                <i class="fas fa-handshake"></i>
            </div>
            <div class="stat-info">
                <h3>24</h3>
                <p>Mentees Guided</p>
                <span class="stat-change">+3 this month</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon orange">
                <i class="fas fa-calendar-check"></i>
            </div>
            <div class="stat-info">
                <h3>5</h3>
                <p>Events Hosted</p>
                <span class="stat-change">Next: Next Week</span>
            </div>
        </div>
        <div class="stat-card">
            <div class="stat-icon purple">
                <i class="fas fa-award"></i>
            </div>
            <div class="stat-info">
                <h3>Gold</h3>
                <p>Mentor Status</p>
                <span class="stat-change">Top 5% this year</span>
            </div>
        </div>
    `;
    
    // Update quick actions
    const quickActions = dashboardSection.querySelector('.quick-actions');
    quickActions.innerHTML = `
        <div class="action-btn" onclick="showSection('networking')">
            <i class="fas fa-search"></i>
            <span>Find Alumni</span>
        </div>
        <div class="action-btn" onclick="showSection('mentorship')">
            <i class="fas fa-user-graduate"></i>
            <span>Mentor Students</span>
        </div>
        <div class="action-btn" onclick="showSection('events')">
            <i class="fas fa-calendar-plus"></i>
            <span>Host Event</span>
        </div>
        <div class="action-btn" onclick="showSection('profile')">
            <i class="fas fa-user-edit"></i>
            <span>Update Profile</span>
        </div>
    `;
}

// Role-specific Profile Updates
function updateProfileForAlumni() {
    const profileSection = document.getElementById('profile');
    
    // Update profile header
    const profileDetails = profileSection.querySelector('.profile-details');
    profileDetails.innerHTML = `
        <h2>${currentUser.name}</h2>
        <p>${currentUser.title}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${currentUser.location}</p>
        
        <div id="verificationStatus" class="hidden"></div>

        <div class="profile-stats-row">
            <span><i class="fas fa-graduation-cap"></i>${currentUser.branch}</span>
            <span><i class="fas fa-calendar"></i> Graduated ${currentUser.year}</span>
            <span><i class="fas fa-users"></i> 245 Connections</span>
            <span><i class="fas fa-handshake"></i> 24 Mentees</span>
        </div>
        <button class="edit-profile-btn">
            <i class="fas fa-edit"></i> Edit Profile
        </button>
    `;
    
    // Update experience section
    const experienceList = profileSection.querySelector('.experience-list');
    if (currentUser.experience && currentUser.experience.length > 0) {
        experienceList.innerHTML = currentUser.experience.map(exp => `
            <div class="experience-item">
                <div class="experience-logo">
                    <i class="fas fa-briefcase"></i>
                </div>
                <div class="experience-details">
                    <h4>${exp.title}</h4>
                    <div class="company">${exp.company}</div>
                    <div class="duration">${exp.duration}</div>
                    <div class="description">${exp.description}</div>
                </div>
            </div>
        `).join('');
    }
}

// Mentor Incentive Functions
async function populateMentorLeaderboard() {
    const list = document.getElementById('leaderboardList');
    if (!list) return;
    try {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };
        const res = await fetch(`${BASE_URL}/users/mentors?sort=points%20desc&limit=3`, { headers });
        const topMentors = await res.json();
        if (!Array.isArray(topMentors) || topMentors.length === 0) {
            list.innerHTML = '';
            return;
        }
    list.innerHTML = topMentors.map((mentor, index) => `
        <div class="leaderboard-item">
            <div class="leaderboard-rank">${index + 1}</div>
            <div class="avatar-placeholder-small">${mentor.initials}</div>
            <div class="leaderboard-details"><h4>${mentor.name}</h4><p>${mentor.title}</p></div>
            <div class="leaderboard-points">${mentor.mentorshipPoints} pts</div>
        </div>
    `).join('');
    } catch {
        list.innerHTML = '';
    }
}

// Alumni Verification Functions
function showVerificationModal() {
    document.getElementById('verificationModal').style.display = 'block';
}

function handleVerificationSubmit(e) {
    e.preventDefault();
    const fileInput = document.getElementById('degreeUpload');
    if (fileInput.files.length === 0) {
        showAlert('Please select a file to upload.', 'warning');
        return;
    }
    document.getElementById('verificationModal').style.display = 'none';
    document.getElementById('upgradeToAlumniBtn').classList.add('hidden');
    const statusDiv = document.getElementById('verificationStatus');
    statusDiv.innerHTML = '<i class="fas fa-clock"></i> Verification Pending';
    statusDiv.classList.remove('hidden');
    showAlert('Document submitted for verification!', 'success');
    document.getElementById('verificationForm').reset();
    
    // Add to pending verifications for admin to review
    const newVerification = {
        id: Date.now(),
        name: currentUser.name,
        year: currentUser.year,
        document: fileInput.files[0].name
    };
    pendingVerifications.push(newVerification);
}

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('degreeUpload');
    if(fileInput) {
        fileInput.addEventListener('change', (e) => {
            const fileName = e.target.files[0]?.name;
            const label = document.querySelector('.file-upload-wrapper label span');
            if (fileName && label) label.textContent = fileName;
            else if (label) label.textContent = 'Choose a file...';
        });
    }
});

// Admin Panel Functions
function populateAdminDashboard() {
    const tableBody = document.getElementById('verificationTableBody');
    if (!tableBody) return;
    
    if (pendingVerifications.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align: center; padding: 40px; color: var(--text-light);">No pending verifications.</td></tr>`;
        return;
    }
    
    tableBody.innerHTML = pendingVerifications.map(req => `
        <tr data-id="${req.id}">
            <td>${req.name}</td>
            <td>${req.year}</td>
            <td><button class="btn-admin btn-view-doc" onclick="viewDocument('${req.document}')"><i class="fas fa-file-alt"></i> View</button></td>
            <td class="action-buttons">
                <button class="btn-admin btn-approve" onclick="approveVerification(${req.id})"><i class="fas fa-check"></i> Approve</button>
                <button class="btn-admin btn-reject" onclick="rejectVerification(${req.id})"><i class="fas fa-times"></i> Reject</button>
            </td>
        </tr>
    `).join('');
}

function viewDocument(docName) {
    // Create a modal to show the document
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <div class="modal-header">
                <h3>Document: ${docName}</h3>
                <span class="close" onclick="this.closest('.modal').style.display='none'">&times;</span>
            </div>
            <div class="modal-body" style="text-align: center; padding: 40px;">
                <div style="background: var(--light-bg); padding: 40px; border-radius: 10px; margin-bottom: 20px;">
                    <i class="fas fa-file-pdf" style="font-size: 64px; color: var(--danger-color); margin-bottom: 15px;"></i>
                    <p style="margin: 0; font-weight: 600;">${docName}</p>
                </div>
                <p style="color: var(--text-light); margin-bottom: 20px;">This is a preview of the uploaded document. In a real application, this would display the actual document content.</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button class="btn-primary" onclick="this.closest('.modal').style.display='none'">Close</button>
                    <button class="btn-secondary" onclick="downloadDocument('${docName}')"><i class="fas fa-download"></i> Download</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function downloadDocument(docName) {
    showAlert(`Downloading ${docName}...`, 'info');
    // In a real app, this would trigger a download of the actual document
}

function approveVerification(studentId) {
    const student = pendingVerifications.find(req => req.id === studentId);
    const index = pendingVerifications.findIndex(req => req.id === studentId);
    
    if (index > -1) {
        // Remove from pending verifications
        pendingVerifications.splice(index, 1);
        
        // Update user role in localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const userIndex = users.findIndex(u => u.id === studentId);
        
        if (userIndex > -1) {
            users[userIndex].role = 'alumni';
            localStorage.setItem('users', JSON.stringify(users));
        }
        
        showAlert(`Approved ${student.name}'s request to become an Alumnus!`, 'success');
        populateAdminDashboard();
    }
}

function rejectVerification(studentId) {
    const student = pendingVerifications.find(req => req.id === studentId);
    const index = pendingVerifications.findIndex(req => req.id === studentId);
    
    if (index > -1) {
        // Remove from pending verifications
        pendingVerifications.splice(index, 1);
        
        showAlert(`Rejected ${student.name}'s verification request.`, 'warning');
        populateAdminDashboard();
    }
}

// Password visibility toggles for login and register forms
function setupPasswordToggles() {
    // Attach click handlers to any .password-toggle buttons
    document.querySelectorAll('.password-toggle').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const targetId = this.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;

            const icon = this.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                if (icon) {
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                }
            } else {
                input.type = 'password';
                if (icon) {
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            }

            // keep focus on the input after toggling
            input.focus();
        });
    });
}