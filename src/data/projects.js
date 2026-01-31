const projects = [
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