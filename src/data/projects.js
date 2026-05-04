const projects = [
  {
    id: 'whatsapp-crm-automation',
    title: 'WhatsApp CRM Automation System',
    description: 'Automated lead management and student communication pipeline processing 500+ messages weekly with zero manual intervention. Improved counsellor response time by 90% through intelligent workflow automation.',
    longDescription: `Problem: Sales team was managing leads manually, resulting in inconsistent follow-ups and poor student experience.

Approach: Built a fully automated, event-driven communication system using Google Apps Script and Meta WhatsApp Cloud API. The system intelligently routes messages based on lead status changes, handles inbound student messages with keyword-based replies, and manages multi-stage demo lecture funnels.

Key Features:
- Automated message dispatch triggered by lead status changes
- Webhook-based inbound message handling with intelligent routing
- Multi-stage demo funnel with automated follow-ups and nudges
- Bulk campaign messaging with delivery failure tracking
- Real-time message status monitoring

Outcome: Sales team adopted the system immediately. Leads now receive follow-ups within seconds instead of days. Standardized communication improved professional reputation. System processed 500+ automated messages weekly with zero failures.

Business Impact: Reduced manual workload by 80%, improved lead conversion through faster response times, and standardized communication across all counsellors.`,
    technologies: ['Google Apps Script', 'Google Sheets', 'Meta WhatsApp Cloud API', 'JavaScript', 'Webhook Integration', 'Automation'],
    image: '/projects/crm-automation.jpg',
    screenshots: [
      '/projects/screenshots/crm-1.jpg',
      '/projects/screenshots/crm-2.jpg',
      '/projects/screenshots/crm-3.jpg'
    ],
    github: 'https://github.com/NotMustxfa/acumen-whatsapp-crm',
    featured: true
  },
  {
    id: 'qr-attendance-tracking',
    title: 'QR-Code Attendance Tracking System',
    description: 'Multi-role attendance management system with concurrent-safe QR scanning, OTP authentication, and real-time dashboards. Eliminated manual attendance recording for 300+ students.',
    longDescription: `Problem: Manual attendance recording was time-consuming, error-prone, and provided no real-time visibility into student attendance patterns.

Approach: Built a complete attendance ecosystem with three distinct user interfaces: QR-based check-in for students, OTP-authenticated student portal for self-service analytics, and comprehensive teacher/admin dashboard with institutional KPIs.

Technical Highlights:
- Concurrent-safe attendance processing using LockService for thread safety
- Optimized phone index caching for O(1) student lookup
- 13-sheet database schema with normalized data structures
- Two-phase read strategy for minimizing lock contention
- Real-time cache management across Faculty, Student, and Attendance cache sheets

Key Features:
- QR code scanning with automatic class detection
- OTP-authenticated student portal with 365-day attendance heatmap
- Comprehensive teacher dashboard with batch analytics
- Automated WhatsApp alerts for low attendance and consecutive absences
- Daily re-check triggers for late submissions

Outcome: System operated without a single data integrity failure since deployment. Processed 10,000+ scans with 100% accuracy. Automated alert system prompted timely interventions for at-risk students.

Business Impact: Replaced manual registers, provided real-time attendance visibility, and enabled data-driven student interventions.`,
    technologies: ['Google Apps Script', 'Google Sheets', 'JavaScript', 'HTML/CSS', 'Chart.js', 'Meta WhatsApp API', 'Database Design', 'Concurrency Management'],
    image: '/projects/attendance-system.jpg',
    screenshots: [
      '/projects/screenshots/attendance-1.jpg',
      '/projects/screenshots/attendance-2.jpg',
      '/projects/screenshots/attendance-3.jpg'
    ],
    github: 'https://github.com/NotMustxfa/qr-attendance-system',
    featured: true
  },
  {
    id: 'ai-sales-intelligence',
    title: 'AI Sales Intelligence System',
    description: 'End-to-end pipeline transforming sales call recordings into structured intelligence. Analyzes 100+ calls with GPT-4 to provide actionable sales team insights and performance metrics.',
    longDescription: `Problem: Recorded sales calls were never reviewed due to volume. Management had no visibility into call quality, objection patterns, or salesperson performance.

Approach: Built an automated 4-step pipeline: (1) Google Drive trigger, (2) Whisper audio transcription, (3) GPT-4 structured analysis with custom schema, (4) Google Sheets persistence. Designed 6-tab analytics dashboard for management review.

Pipeline Architecture:
- Automatic trigger on call recording upload
- Whisper multilingual transcription (handles Gujarati, Hindi, Hinglish)
- GPT-4 analysis with 20-field structured output schema
- Pabbly Connect for no-code workflow orchestration

Analysis Fields:
- Call type, lead intent, primary/secondary objections
- Salesperson performance score (0-10 with rubric)
- Fee quoted, student background, next actions
- Call quality flags for urgent, at-risk, strong calls

Dashboard Features:
- Overview KPIs (total calls, hot leads, team avg score)
- Searchable call log with expandable detail views
- Per-salesperson performance breakdown with trend sparklines
- Objection heatmap by salesperson
- Student journey tracker by phone number
- CSV export for offline analysis

Outcome: Management now reviews calls weekly. Identified 3 major patterns driving coaching interventions. Sales team conversion improved measurably after targeted coaching based on insights.

Business Impact: Transformed invisible call data into actionable intelligence. Enabled data-driven coaching and measurably improved sales performance.`,
    technologies: ['Google Apps Script', 'Google Sheets', 'Pabbly Connect', 'OpenAI Whisper', 'GPT-4', 'JavaScript', 'Chart.js', 'GitHub Pages', 'Prompt Engineering', 'Structured Output'],
    image: '/projects/sales-intelligence.jpg',
    screenshots: [
      '/projects/screenshots/sales-intel-1.jpg',
      '/projects/screenshots/sales-intel-2.jpg',
      '/projects/screenshots/sales-intel-3.jpg'
    ],
    github: 'https://github.com/NotMustxfa/ai-sales-intelligence',
    featured: true
  },
  {
    id: 'fee-management-system',
    title: 'Fee Management System',
    description: 'Automated 3-phase fee lifecycle system: student onboarding with unique token generation, self-registration via Google Form, and systematic monthly reminders. Achieved 99% accuracy in fee tracking.',
    longDescription: `Problem: Manual fee management was fragmented across multiple documents. No audit trail, inconsistent communication, and high administrative burden on accounts team.

Approach: Built a complete 3-phase system: (1) Counsellor-initiated onboarding with token generation, (2) Student self-registration with dynamic installment schedule calculation, (3) Automated monthly reminders via WhatsApp and email.

Phase 1: Fee Setup
- Counsellor enters fee details in single spreadsheet row
- System generates unique GATE-YYYY-NNN token
- Calculates per-month installment amount
- Sends intake WhatsApp notification and detailed email with fee breakdown

Phase 2: Student Registration
- Student receives email with unique token
- Completes Google Form enrollment
- System validates token against Fee_Setup sheet
- Creates comprehensive record in Sales_Master with 24-month installment tracking
- Dynamic column generation for flexible installment periods
- Auto-populated Pend formulas for automatic balance calculation

Phase 3: Monthly Reminders
- Daily trigger checks designated reminder dates (26th, 1st, 6th)
- Scans all students with outstanding balances
- Sends WhatsApp nudge + email with specific financial details
- Tracks all sends in audit log with delivery status
- Respects Defer, Cancel, and Dropped status flags

Key Features:
- Formula-based auto-updating financial calculations
- Duplicate payment prevention
- Late submission detection and flagging
- Complete audit trail for all transactions
- Flexible 24-month installment column generation

Outcome: Eliminated manual fee tracking. Created single source of truth. System processes monthly reminders with 100% accuracy. Reduced accounts team administrative burden by 70%.

Business Impact: Improved cash flow visibility, standardized student communication, and created auditable financial records.`,
    technologies: ['Google Apps Script', 'Google Sheets', 'Google Forms', 'Meta WhatsApp Cloud API', 'Gmail API', 'JavaScript', 'Formula Automation', 'Data Validation'],
    image: '/projects/fee-management.jpg',
    screenshots: [
      '/projects/screenshots/fee-1.jpg',
      '/projects/screenshots/fee-2.jpg',
      '/projects/screenshots/fee-3.jpg'
    ],
    github: 'https://github.com/NotMustxfa/fee-management-system',
    featured: true
  },
  {
    id: 'reimbursement-tracker',
    title: 'Employee Reimbursement Tracker',
    description: 'Structured 3-actor approval workflow for expense reimbursement. Replaced ad hoc process with color-coded status tracking, automated late-flag detection, and role-based permissions.',
    longDescription: `Problem: Reimbursement process was informal and undocumented. No tracking of submissions, no formal approval, and inconsistent payment timelines.

Approach: Built a minimal, well-designed single-sheet system with three roles: employee (submit), manager (approve/decline), accounts team (mark paid). Focused on simplicity while addressing all real workflow requirements.

System Design:
- Google Form for structured submission
- Single-sheet interface with 10 columns (A-J)
- Color-coded status tracking at a glance
- Automated late-flag detection (submissions after 2 days flagged)
- Role-based dropdown validation

Workflow:
1. Employee submits form with expense date and amount
2. Script auto-detects late submission and applies orange flag
3. Manager views color-coded list and selects Approve/Decline
4. If declined, Payment Status column auto-locks to prevent editing
5. Accounts team marks as Paid when transaction complete
6. Daily re-check trigger updates late flags for pending requests

Features:
- On-time indicator (green) vs late submission flag (orange)
- Row color priority: Paid (green) > Declined (red) > Approved (blue) > Pending (white)
- Dropdown validation creates soft access control
- Idempotent trigger design ensures no duplicate sends
- Daily re-check catches requests that become late after submission

Outcome: Replaced informal process with transparent, trackable workflow. Improved team morale through clear process visibility. Reduced administrative friction around reimbursements.

Business Impact: Standardized internal process, improved employee satisfaction, and created audit trail for financial records.`,
    technologies: ['Google Apps Script', 'Google Sheets', 'Google Forms', 'JavaScript', 'Data Validation', 'Trigger Management'],
    image: '/projects/reimbursement.jpg',
    screenshots: [
      '/projects/screenshots/reimbursement-1.jpg',
      '/projects/screenshots/reimbursement-2.jpg'
    ],
    github: 'https://github.com/NotMustxfa/reimbursement-tracker',
    featured: true
  },
  {
    id: 'wealthwise-allocator',
    title: 'WealthWise Allocator',
    description: 'Data-driven portfolio optimization tool using Modern Portfolio Theory. Empowers investors to make informed decisions with real-time analysis and risk optimization.',
    longDescription: `Problem: Individual investors lack tools to optimize their portfolio allocation based on risk-return profiles.

Approach: Built a comprehensive platform that combines real-time financial data, advanced analytics, and Modern Portfolio Theory algorithms to help investors make data-driven investment decisions.

Outcome: Users can analyze NIFTY 50 stocks, visualize historical trends, and receive optimized portfolio recommendations based on their risk appetite.

Business Value: Democratizes sophisticated portfolio management, enabling informed decision-making and reducing investment risk through data-driven insights.`,
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Chart.js', 'FastAPI', 'Python', 'yfinance', 'PyPortfolioOpt', 'Pandas', 'NumPy'],
    image: '/projects/wealthwise-allocator.jpg',
    screenshots: [
      '/projects/screenshots/Screenshot 2025-07-24 152302.png', 
      '/projects/screenshots/Screenshot 2025-07-24 152212.png',
      '/projects/screenshots/Screenshot 2025-06-04 115657.png'
    ],
    github: 'https://github.com/NotMustxfa/WealthWiseAllocator',
    featured: true
  },
  {
    id: 'student-services-portal',
    title: 'Student Services Portal',
    description: 'Operational platform improving student-admin communication and assignment management workflows.',
    longDescription: `Problem: Students lack a centralized platform to submit assignments and communicate with administrators about lab-related concerns.

Approach: Built a web-based portal enabling streamlined assignment submissions and direct communication channels between students and administrative staff.

Outcome: Simplified assignment submission process and created transparent communication channels for student inquiries.

Business Value: Improves institutional operational efficiency, reduces support bottlenecks, and enhances student experience through organized communication.`,
    technologies: ['Web Development', 'Database Management', 'Communication Systems'],
    image: '/projects/student-portal.jpg',
    screenshots: [
      '/projects/screenshots/student-portal-1.jpg',
      '/projects/screenshots/student-portal-2.jpg',
      '/projects/screenshots/student-portal-3.jpg'
    ],
    github: 'https://github.com/NotMustafa/student-services-portal',
    featured: false
  },
  {
    id: 'college-fees-portal',
    title: 'College Fees Management Portal',
    description: 'Operations & analytics solution for institutional fee management, tracking, and comprehensive reporting.',
    longDescription: `Problem: Educational institutions struggle with manual fee management, tracking, and generating insights on payment status and revenue.

Approach: Designed an admin-side platform with comprehensive fee tracking, search functionality, and analytics dashboards for institutional decision-making.

Outcome: Streamlined fee management process, enabling admins to quickly track student payments, identify outstanding payments, and generate financial reports.

Business Value: Reduces administrative overhead, improves financial visibility, and enables data-driven decisions on revenue management and student engagement.`,
    technologies: ['Database Management', 'Analytics', 'Web Development', 'Reporting'],
    image: '/projects/fees-portal.jpg',
    screenshots: [
      '/projects/screenshots/fees-portal-1.jpg',
      '/projects/screenshots/fees-portal-2.jpg'
    ],
    github: 'https://github.com/NotMustafa/college-fees-portal',
    featured: false
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Platform',
    description: 'User-centric responsive e-commerce solution with dynamic product catalog and seamless shopping experience.',
    longDescription: `Problem: Retailers need an engaging platform to showcase products and facilitate online sales with modern UX.

Approach: Designed and developed a responsive e-commerce platform with real-time product listings, pricing integration, and intuitive user interface.

Outcome: Delivers a modern, fast, and accessible shopping experience across all devices.

Business Value: Enables retailers to reach customers digitally, improve conversion through better UX, and manage product inventory dynamically.`,
    technologies: ['React', 'TypeScript', 'API Integration', 'Responsive Design'],
    image: '/projects/screenshots/Screenshot 2025-04-14 195612.png',
    screenshots: [
      '/projects/screenshots/Screenshot 2025-04-14 195612.png',
      '/projects/screenshots/Screenshot 2025-04-14 195559.png',
    ],
    github: 'https://github.com/NotMustxfa/E-Commerce-site',
    featured: false
  },
  {
    id: 'profile-mapping-app',
    title: 'Profile Mapping & Tracking App',
    description: 'Location-based profile management system enabling real-time tracking and administrative oversight.',
    longDescription: `Problem: Organizations need a centralized system to manage user profiles and track locations for operational oversight.

Approach: Built an app with profile CRUD operations, admin access controls, and real-time map-based location tracking via geolocation APIs.

Outcome: Provides admins with comprehensive profile management and real-time visibility into user locations.

Business Value: Enables better resource allocation, operational oversight, and data-driven decision-making for location-dependent services.`,
    technologies: ['React', 'TypeScript', 'Location API', 'Real-time Tracking'],
    image: '/projects/screenshots/Screenshot 2025-04-14 195428.png',
    screenshots: [
      '/projects/screenshots/Screenshot 2025-04-14 195501.png',
      '/projects/screenshots/Screenshot 2025-04-14 195443.png',
      '/projects/screenshots/Screenshot 2025-04-14 195428.png',
      '/projects/screenshots/Screenshot 2025-04-14 195418.png',
      '/projects/screenshots/Screenshot 2025-04-14 195405.png'
    ],
    github: 'https://github.com/NotMustxfa/profile-map-app',
    featured: false
  },
  {
    id: 'movie-browsing-website',
    title: 'Movie Discovery Platform',
    description: 'Interactive movie discovery platform improving user engagement through personalized browsing and recommendations.',
    longDescription: `Problem: Movie enthusiasts need an intuitive platform to discover and track their favorite movies.

Approach: Created a responsive platform with real-time movie data integration, favorites functionality, and detailed movie information.

Outcome: Users can easily browse, discover, and save favorite movies with detailed information and recommendations.

Business Value: Enhances user engagement through better discovery features, potentially supporting movie recommendations and personalized content experiences.`,
    technologies: ['React', 'JavaScript', 'API Integration', 'User Engagement'],
    image: '/projects/movie-browser.jpg',
    screenshots: [
      '/projects/screenshots/Screenshot 2025-04-14 192744.png',
      '/projects/screenshots/Screenshot 2025-04-14 192827.png',
      '/projects/Screenshot 2025-04-14 175620.png'
    ],
    github: 'https://github.com/NotMustxfa/MovieBrowsingWebsite',
    featured: false
  },
  {
    id: 'game-collection',
    title: 'Classic Games Collection',
    description: 'Portfolio of interactive games demonstrating game design principles and user engagement strategies.',
    longDescription: `Problem: Developers need to demonstrate proficiency in creating engaging, interactive user experiences and game mechanics.

Approach: Developed a suite of classic games (Tic-Tac-Toe, Snake, Tetris) with intuitive controls and engaging mechanics.

Outcome: Created games that demonstrate solid understanding of user interaction design and game mechanics.

Business Value: Showcases ability to design engaging user experiences and implement complex game logic for entertainment applications.`,
    technologies: ['C#', 'Game Development', 'User Interaction Design'],
    image: '/projects/games.jpg',
    screenshots: [
      '/projects/screenshots/games-1.jpg',
      '/projects/screenshots/games-2.jpg',
      '/projects/screenshots/games-3.jpg'
    ],
    github: 'https://github.com/NotMustxfa/Games-from-Csharp',
    featured: false
  },
];

export default projects; 