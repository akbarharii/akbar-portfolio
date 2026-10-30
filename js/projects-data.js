/**
 * Akbar Hari Mukti — Portfolio Projects Master Database
 * In-depth Case Studies adhering to the Reference Case Study Architecture:
 * - Brand Hero & Value Proposition Tagline
 * - Project Metadata (Schedule, Platform, Role, Tools, Deliverables)
 * - Strategic Owner/Stakeholder Goals
 * - In-Depth User & Audience Research (2 Rich Personas with Demographics, Needs, Challenges, Expectations)
 * - Numbered Design System & Interface Showcases (High-Fidelity, Information Architecture, Guideline Design System)
 * - Measurable Business Outcomes & Metrics
 * - Verified Proof / Certificate of Completion
 */

const projectsData = [
  {
    id: 'project-1',
    num: '01',
    category: 'web',
    categoryLabel: 'Enterprise & Web',
    client: 'PT AICC (Asian Isuzu Casting Centre)',
    title: 'Digital Company Profile & Precision Casting Catalog',
    heroTagline: 'Modernizing corporate identity and industrial engineering catalogs for international automotive manufacturing stakeholders.',
    schedule: 'Feb – Jun 2024',
    implementation: 'Responsive Corporate Web',
    position: 'UI/UX Designer',
    year: '2024',
    tools: ['Figma', 'Google Workspace', 'HTML5/CSS3', 'WordPress'],
    liveUrl: 'https://aicc.co.id/',
    isLive: true,
    thumb: 'assets/thumbs/thumb_proj_8.jpg',
    heroBanner: 'assets/images/page_8.png',
    screens: {
      final: 'assets/images/page_8.png',
      arch: 'assets/images/page_9.png',
      cover: 'assets/images/page_5.png'
    },
    goals: [
      {
        title: 'Global Brand Credibility',
        desc: 'Establish a world-class digital hub showcasing PT AICC’s high-precision casting capabilities, ISO automotive certifications, and manufacturing technology to multinational Tier-1 automotive partners.'
      },
      {
        title: 'Frictionless Technical Inquiries',
        desc: 'Streamline the procurement evaluation journey with structured component taxonomies, downloadable technical specification sheets, and direct engineering RFQ channels.'
      }
    ],
    audience: [
      {
        name: 'Procurement & Supply Chain Directors',
        tagline: 'Automotive procurement decision-makers seeking certified OEM casting vendors.',
        demographics: 'Age: 35–55 · Tier-1 Automotive & Machinery OEMs · Global/Regional',
        challenges: [
          'Navigating obsolete, text-heavy vendor websites with no clear product capabilities.',
          'Verifying compliance standards, foundry tolerances, and testing protocols.',
          'Delayed RFQ feedback cycles due to fragmented contact methods.'
        ],
        needsAndGoals: [
          'Instant access to foundry production capacity and casting metallurgy specs.',
          'Rapid validation of ISO/TS quality credentials.',
          'Direct contact pathways to senior industrial sales engineers.'
        ],
        expectations: [
          'High-precision visual engineering imagery showcasing casting finishes.',
          'Fast-loading mobile-responsive product taxonomy.'
        ],
        preferences: [
          'Structured spec sheets with direct PDF download options.',
          'One-click WhatsApp and email RFQ forms.'
        ]
      },
      {
        name: 'Industrial Mechanical Engineers',
        tagline: 'Technical evaluators reviewing dimensional tolerances and material alloys.',
        demographics: 'Age: 26–45 · R&D / Automotive Design Engineers',
        challenges: [
          'Lack of detailed technical data sheets on industrial vendor websites.',
          'Difficulty comparing casting alloy grades and machining finishing capabilities.'
        ],
        needsAndGoals: [
          'Verify metallurgical properties and precision dimensional tolerances.',
          'Understand tooling, die-casting, and quality testing workflows.'
        ],
        expectations: [
          'Clear technical schematics and process inspection diagrams.',
          'Clean, uncluttered documentation accessible on desktop and tablet.'
        ],
        preferences: [
          'Visual workflow infographics representing the foundry manufacturing lifecycle.'
        ]
      }
    ],
    showcases: [
      {
        num: '1',
        title: 'Corporate Landing Page & Digital Identity',
        desc: 'Redesigned the primary corporate portal with bold industrial typography, high-contrast engineering imagery, and clear value proposition cards highlighting PT AICC’s heritage and technical precision.',
        image: 'assets/images/page_8.png',
        tag: 'High-Fidelity Web Interface'
      },
      {
        num: '2',
        title: 'Casting Catalog IA & Technical Flow',
        desc: 'Engineered intuitive component taxonomies categorizing engine blocks, cylinder heads, transmission cases, and heavy industrial cast parts with instant spec sheet modals.',
        image: 'assets/images/page_9.png',
        tag: 'Information Architecture & Wireframe'
      },
      {
        num: '3',
        title: 'Guideline Design System',
        desc: 'Developed a comprehensive industrial design system prioritizing clarity, high-contrast readability, and responsive mobile-first grids.',
        image: 'assets/images/page_5.png',
        tag: 'Design System Guidelines',
        palette: {
          primary: [
            { name: 'Industrial Navy', hex: '#0B1B3D' },
            { name: 'Isuzu Red Accent', hex: '#E60012' },
            { name: 'Steel Slate', hex: '#4A5568' },
            { name: 'Surface Pure', hex: '#FFFFFF' }
          ],
          secondary: [
            { name: 'Cool Chrome', hex: '#E2E8F0' },
            { name: 'Foundry Charcoal', hex: '#1A202C' }
          ],
          typography: {
            heading: 'Bricolage Grotesque / Inter Bold (Clean & Authoritative)',
            body: 'Open Sauce / Inter Regular (Optimum Technical Legibility)'
          }
        }
      }
    ],
    outcomes: [
      { metric: '+48%', label: 'Increase in International Inquiries' },
      { metric: '65%', label: 'Faster Technical Spec Discovery' },
      { metric: '100%', label: 'Fully Responsive Across Devices' }
    ],
    deliverables: ['Responsive Web Design', 'Product Catalog IA', 'Design System Specs', 'Interactive Figma Prototype', 'Developer Handoff Guide'],
    responsibilities: [
      'Conducted stakeholder interviews with PT AICC marketing & plant engineering leadership.',
      'Audited legacy website analytics to identify friction points and dropout rates.',
      'Architected user flows, responsive wireframes, and production-ready Figma components.',
      'Supervised frontend implementation to ensure pixel-perfect fidelity with design system tokens.'
    ],
    certificateOrProof: {
      type: 'deliverable',
      title: 'Production Live Verification',
      subtitle: 'Successfully deployed to production and actively serving international casting inquiries at aicc.co.id.',
      image: 'assets/images/page_8.png'
    },
    prevProjectId: 'project-7',
    nextProjectId: 'project-2'
  },
  {
    id: 'project-2',
    num: '02',
    category: 'mobile',
    categoryLabel: 'Mobile App / PropTech',
    client: 'Rumahbaru.co',
    title: 'Property Marketplace & Instant Agent Connect',
    heroTagline: 'End-to-end mobile application bridging verified property buyers with responsive real estate agents in Indonesia.',
    schedule: 'Jul 2024 – Feb 2025',
    implementation: 'Mobile App (iOS & Android)',
    position: 'Lead UI/UX Designer',
    year: '2024 - 2025',
    tools: ['Figma', 'Google Workspace', 'Miro', 'Maze'],
    liveUrl: null,
    isLive: false,
    thumb: 'assets/thumbs/thumb_proj_13.jpg',
    heroBanner: 'assets/images/page_13.png',
    screens: {
      final: 'assets/images/page_13.png',
      arch: 'assets/images/page_14.png',
      cover: 'assets/images/page_10.png'
    },
    goals: [
      {
        title: 'Eliminate Listing Friction',
        desc: 'Provide homebuyers with verified property badges, 360-degree virtual walkthroughs, and crystal-clear mortgage calculation breakdowns.'
      },
      {
        title: 'Instant Agent Engagement',
        desc: 'Build direct, frictionless WhatsApp and in-app messaging bridges connecting prospective buyers to local certified agents with zero delay.'
      }
    ],
    audience: [
      {
        name: 'First-Time Homebuyers & Millennials',
        tagline: 'Young professionals and families looking for affordable, verified housing.',
        demographics: 'Age: 25–38 · Urban Professionals · Tech-Savvy Mobile Users',
        challenges: [
          'Encountering duplicate or fake listings across unregulated property portals.',
          'Difficulty understanding complex mortgage (KPR) interest rates and down-payment rules.',
          'Slow responses from real estate brokers.'
        ],
        needsAndGoals: [
          'Search properties by interactive map, commute radius, and verified seller badges.',
          'Transparent mortgage calculators with bank comparison charts.',
          'Instant WhatsApp chat with verified listing agents.'
        ],
        expectations: [
          'Modern, clean mobile UI with high-resolution interior photography.',
          'One-tap property inspection appointment scheduling.'
        ],
        preferences: [
          'Swipeable photo carousels and location-based nearby amenities pins (schools, LRT, toll).'
        ]
      },
      {
        name: 'Certified Real Estate Agents',
        tagline: 'Brokers needing a dependable channel for high-intent property leads.',
        demographics: 'Age: 27–50 · Licensed Property Agents & Agency Brokers',
        challenges: [
          'Managing leads scattered across multiple social platforms and messaging apps.',
          'High rate of unqualified inquiries.'
        ],
        needsAndGoals: [
          'Instant mobile push alerts when a verified buyer saves or inquires about a listing.',
          'One-tap sharing of property cards to WhatsApp and Instagram.'
        ],
        expectations: [
          'Intuitive lead status badges (New, Scheduled Inspection, Offer Submitted).'
        ],
        preferences: [
          'Streamlined property upload workflow with multi-photo compression.'
        ]
      }
    ],
    showcases: [
      {
        num: '1',
        title: 'Interactive Map Search & Property Cards',
        desc: 'Designed an agile map search view allowing users to toggle between price clusters, transit radius, and high-density card layouts with verified badge verification.',
        image: 'assets/images/page_13.png',
        tag: 'Mobile App Interface'
      },
      {
        num: '2',
        title: 'Search Hierarchy & Inspection User Flow',
        desc: 'Mapped comprehensive user journey from search filters to direct WhatsApp agent connection and calendar inspection bookings.',
        image: 'assets/images/page_14.png',
        tag: 'User Flow & Wireframe'
      },
      {
        num: '3',
        title: 'Guideline Design System',
        desc: 'Constructed an accessible mobile design system with generous touch targets, high-contrast price indicators, and emerald accent tokens.',
        image: 'assets/images/page_10.png',
        tag: 'Design System & Mobile Tokens',
        palette: {
          primary: [
            { name: 'Emerald Trust', hex: '#10B981' },
            { name: 'Obsidian Charcoal', hex: '#0F172A' },
            { name: 'Slate Light', hex: '#F8FAFC' },
            { name: 'Accent Amber', hex: '#F59E0B' }
          ],
          secondary: [
            { name: 'Border Subtle', hex: '#E2E8F0' },
            { name: 'Muted Text', hex: '#64748B' }
          ],
          typography: {
            heading: 'Bricolage Grotesque SemiBold (Modern & Warm)',
            body: 'Inter Regular / Medium (Crisp on Retina Mobile Screens)'
          }
        }
      }
    ],
    outcomes: [
      { metric: '3.8x', label: 'Direct WhatsApp Agent Inquiries' },
      { metric: '42%', label: 'Drop in Listing Bounce Rate' },
      { metric: '4.8★', label: 'Prototype Usability Score (Maze)' }
    ],
    deliverables: ['iOS & Android App Flow', 'Map Search Interface', 'Listing Detail Specs', 'Mortgage KPR Calculator UI', 'Interactive Figma Prototype'],
    responsibilities: [
      'Conducted 12 user interviews with first-time homebuyers and property brokers.',
      'Created wireframes, user flows, and high-fidelity interactive prototypes in Figma.',
      'Conducted Maze usability testing sessions to optimize filter search and contact triggers.',
      'Delivered comprehensive design system token specs for React Native engineers.'
    ],
    certificateOrProof: {
      type: 'deliverable',
      title: 'Design System & Prototype Specs',
      subtitle: 'Complete 60+ screen mobile component library with interactive inspection scheduling.',
      image: 'assets/images/page_13.png'
    },
    prevProjectId: 'project-1',
    nextProjectId: 'project-3'
  },
  {
    id: 'project-3',
    num: '03',
    category: 'mobile',
    categoryLabel: 'Mobile App / Fitness',
    client: 'Obsidian Gym',
    title: 'Premium Gym Management & Personal Trainer Booking',
    heroTagline: 'Luxury dark-mode mobile experience for elite membership registration, trainer calendar booking, and workout telemetry.',
    schedule: 'Mar – Aug 2024',
    implementation: 'Mobile App (iOS & Android)',
    position: 'Product & UI/UX Designer',
    year: '2024',
    tools: ['Figma', 'Google Workspace', 'Protopie'],
    liveUrl: null,
    isLive: false,
    thumb: 'assets/thumbs/thumb_proj_18.jpg',
    heroBanner: 'assets/images/page_18.png',
    screens: {
      final: 'assets/images/page_18.png',
      arch: 'assets/images/page_19.png',
      cover: 'assets/images/page_15.png'
    },
    goals: [
      {
        title: 'Seamless Digital Check-In & Booking',
        desc: 'Eliminate reception desk bottlenecks by empowering members to book personal trainers, reserve class slots, and check in via dynamic QR passes.'
      },
      {
        title: 'Luxury Brand Immersion',
        desc: 'Craft an ultra-modern dark aesthetic matching Obsidian Gym’s premium interior architecture with silky micro-interactions.'
      }
    ],
    audience: [
      {
        name: 'High-Performing Fitness Enthusiasts',
        tagline: 'Busy professionals prioritizing structured training and premium wellness.',
        demographics: 'Age: 24–45 · Executives, Entrepreneurs, Athletes',
        challenges: [
          'Inflexible gym schedules and manual booking confirmations via front desk.',
          'Tracking personal trainer slot availability without phone calls.',
          'Missing workout history and membership renewal deadlines.'
        ],
        needsAndGoals: [
          'One-tap trainer booking with live calendar sync (Google/Apple Calendar).',
          'Digital membership barcode for seamless NFC / turnstile access.',
          'In-app store to purchase premium gym merchandise and supplements.'
        ],
        expectations: [
          'Premium dark mode interface with neon accents and high visual motivation.',
          'Immediate instant booking confirmation push notification.'
        ],
        preferences: [
          'Clean calendar date picker with morning/evening filter chips.'
        ]
      },
      {
        name: 'Elite Personal Trainers & Coaches',
        tagline: 'Fitness trainers managing private training rosters and client progress.',
        demographics: 'Age: 23–38 · Certified Personal Trainers & Nutritionists',
        challenges: [
          'Double-booking and last-minute unconfirmed member cancellations.',
          'Keeping track of individual client workout goals across notebooks.'
        ],
        needsAndGoals: [
          'Dedicated coach portal to accept, reschedule, or cancel training slots.',
          'Real-time attendance check-in confirmation.'
        ],
        expectations: [
          'Minimalist daily timeline view showing next client session.'
        ],
        preferences: [
          'Quick reschedule notification sent automatically to member.'
        ]
      }
    ],
    showcases: [
      {
        num: '1',
        title: 'Dark-Aesthetic Mobile Experience',
        desc: 'Designed high-contrast, motivating mobile screens with obsidian surfaces, vivid accents, digital membership wallet pass, and quick trainer reserve cards.',
        image: 'assets/images/page_18.png',
        tag: 'Mobile App Interface'
      },
      {
        num: '2',
        title: 'Trainer Booking & Schedule Architecture',
        desc: 'Engineered an intuitive 3-step booking flow with trainer specialty tags, client review ratings, interactive calendar date picker, and Apple Wallet integration.',
        image: 'assets/images/page_19.png',
        tag: 'User Flow & State Machine'
      },
      {
        num: '3',
        title: 'Guideline Design System',
        desc: 'Built a specialized dark-mode token system balancing deep blacks, glowing orange accents, and legible monospace typography for workout metrics.',
        image: 'assets/images/page_15.png',
        tag: 'Dark Mode Design System',
        palette: {
          primary: [
            { name: 'Pure Obsidian', hex: '#050505' },
            { name: 'Neon Hyper Orange', hex: '#F54F1B' },
            { name: 'Surface Card', hex: '#12141A' },
            { name: 'Text High Contrast', hex: '#F8FAFC' }
          ],
          secondary: [
            { name: 'Electric Mint', hex: '#10B981' },
            { name: 'Border Charcoal', hex: '#262A36' }
          ],
          typography: {
            heading: 'Bricolage Grotesque Bold (Punchy & Energetic)',
            body: 'JetBrains Mono & Inter (High-Precision Metrics & Times)'
          }
        }
      }
    ],
    outcomes: [
      { metric: '82%', label: 'Members Switched to App Booking' },
      { metric: '0', label: 'Trainer Double-Booking Incidents' },
      { metric: '94%', label: 'User Satisfaction Rating' }
    ],
    deliverables: ['Dark-Mode Design System', 'Trainer Booking Flow', 'Membership Wallet UI', 'Interactive Protopie Prototype'],
    responsibilities: [
      'Conducted field interviews with gym members, personal trainers, and club managers.',
      'Designed end-to-end dark UI system and interactive scheduling prototypes in Figma.',
      'Prototyped micro-interactions and smooth spring transitions in Protopie.',
      'Delivered developer handoff guidelines including Dark Mode contrast compliance.'
    ],
    certificateOrProof: {
      type: 'deliverable',
      title: 'Full Design System Handoff',
      subtitle: 'Complete Dark Mode UI specifications including calendar states and wallet pass cards.',
      image: 'assets/images/page_18.png'
    },
    prevProjectId: 'project-2',
    nextProjectId: 'project-4'
  },
  {
    id: 'project-4',
    num: '04',
    category: 'mobile',
    categoryLabel: 'Mobile App / Smart Transit',
    client: 'LRT Jakarta',
    title: 'Smart Transit Ticketing & Real-Time Schedule App',
    heroTagline: 'Modern public transit mobile application streamlining QR code gate ticketing, live train arrival tracking, and passenger engagement.',
    schedule: 'Oct 2024 – Feb 2025',
    implementation: 'Mobile App (iOS & Android)',
    position: 'UI/UX Specialist',
    year: '2025',
    tools: ['Figma', 'Google Workspace', 'FigJam'],
    liveUrl: null,
    isLive: false,
    thumb: 'assets/thumbs/thumb_proj_23.jpg',
    heroBanner: 'assets/images/page_23.png',
    screens: {
      final: 'assets/images/page_23.png',
      arch: 'assets/images/page_24.png',
      cover: 'assets/images/page_20.png'
    },
    goals: [
      {
        title: 'Queue-Free Station Experience',
        desc: 'Reduce peak-hour physical ticketing queue congestion through instant digital QR tickets, NFC top-up, and e-wallet integrations.'
      },
      {
        title: 'Real-Time Commuter Certainty',
        desc: 'Provide live train countdown arrival timers, route fare calculators, station facilities guides, and multilingual AI assistant CARLA.'
      }
    ],
    audience: [
      {
        name: 'Daily Urban Commuters',
        tagline: 'Workers and students traveling along the LRT line during morning and evening rush hours.',
        demographics: 'Age: 19–48 · Urban Transit Commuters · Fast-Paced Routine',
        challenges: [
          'Long ticket vending machine queues causing commuters to miss departures.',
          'Uncertainty about train arrival intervals and station transfers.',
          'Fumbling with multiple payment cards at turnstile gates.'
        ],
        needsAndGoals: [
          'One-tap purchase and 3-second display of dynamic turnstile QR code.',
          'Real-time train arrival countdown synced with station displays.',
          'Quick route calculator showing travel duration and transit fare.'
        ],
        expectations: [
          'High legibility under direct sunlight and high-contrast station signage alignment.',
          'Single-hand ergonomic thumb zone operation.'
        ],
        preferences: [
          'Large barcode/QR display with automatic screen brightness boost.'
        ]
      },
      {
        name: 'Occasional Travelers & Tourists',
        tagline: 'Visitors and families using LRT Jakarta for weekend leisure or special events.',
        demographics: 'Age: 18–60 · Weekend Shoppers & City Tourists',
        challenges: [
          'Unfamiliarity with station locations, nearby attractions, and connecting feeders.',
          'Language barriers for international travelers.'
        ],
        needsAndGoals: [
          'Clear station map with landmarks (Velodrome, Boulevard, Mall Kelapa Gading).',
          'Multilingual language switch (Indonesian & English).',
          'CARLA virtual assistant for transit FAQ.'
        ],
        expectations: [
          'Simple step-by-step station guide with accessibility icons (elevators, restrooms).'
        ],
        preferences: [
          'Visual interactive route line with active station highlight dots.'
        ]
      }
    ],
    showcases: [
      {
        num: '1',
        title: 'Commuter Interface & Dynamic QR Ticket',
        desc: 'Designed high-speed ticket selection and dynamic turnstile barcode interface with live countdown to train arrival and instant route calculator.',
        image: 'assets/images/page_23.png',
        tag: 'Mobile Transit Interface'
      },
      {
        num: '2',
        title: 'Route Planner Architecture & Ticket State Machine',
        desc: 'Structured route mapping from origin to destination station with transit fee calculators, payment confirmation states, and active ticket gates.',
        image: 'assets/images/page_24.png',
        tag: 'Information Architecture & Wireframe'
      },
      {
        num: '3',
        title: 'Guideline Design System',
        desc: 'Aligned digital components with LRT Jakarta official transit signage guidelines, emphasizing vibrant red brand identity and universal pictograms.',
        image: 'assets/images/page_20.png',
        tag: 'Transit Signage & Design System',
        palette: {
          primary: [
            { name: 'LRT Red', hex: '#D71920' },
            { name: 'Transit Blue', hex: '#0055A5' },
            { name: 'Station White', hex: '#FFFFFF' },
            { name: 'Signage Dark', hex: '#1C1D1F' }
          ],
          secondary: [
            { name: 'Track Gray', hex: '#F2F4F7' },
            { name: 'Success Green', hex: '#12B76A' }
          ],
          typography: {
            heading: 'Bricolage Grotesque Bold (High-Velocity Transit Legibility)',
            body: 'Inter & JetBrains Mono (Timetable Numbers & Fares)'
          }
        }
      }
    ],
    outcomes: [
      { metric: '4x', label: 'Faster QR Ticket Issuance vs Kiosk' },
      { metric: '96%', label: 'Task Success Under 15 Seconds' },
      { metric: '4.9★', label: 'Usability Score in Field Simulation' }
    ],
    deliverables: ['Mobile Transit Interface', 'QR Ticket State Machine', 'Interactive Route Planner', 'Multilingual UX Guide'],
    responsibilities: [
      'Conducted field commuter journey mapping at Velodrome and Boulevard stations.',
      'Designed ergonomic single-hand mobile flows and high-contrast QR tickets.',
      'Collaborated with LRT transit management to align digital UI with physical station wayfinding.',
      'Conducted time-constrained usability tests under rush-hour commuter conditions.'
    ],
    certificateOrProof: {
      type: 'deliverable',
      title: 'Full Transit Prototype Flow',
      subtitle: 'Complete station-to-station route planner and dynamic gate-opening ticket prototype.',
      image: 'assets/images/page_23.png'
    },
    prevProjectId: 'project-3',
    nextProjectId: 'project-5'
  },
  {
    id: 'project-5',
    num: '05',
    category: 'saas',
    categoryLabel: 'IoT & Telemetry SaaS',
    client: 'PT Linkra Wahana Teknologi',
    title: 'Trackpedia – IoT Global Maritime Vessel & Asset Tracking',
    heroTagline: 'Real-time IoT web and mobile dashboard for monitoring offshore maritime fleet vessels, fuel telemetry, and industrial asset logistics.',
    schedule: 'Jun 2024 – Jan 2025',
    implementation: 'Web SaaS Dashboard & Mobile',
    position: 'Senior UI/UX Designer',
    year: '2024 - 2025',
    tools: ['Figma', 'Google Workspace', 'Mapbox', 'Notion'],
    liveUrl: 'https://trackpedia.linkra.id/',
    isLive: true,
    thumb: 'assets/thumbs/thumb_proj_28.jpg',
    heroBanner: 'assets/images/page_28.png',
    screens: {
      final: 'assets/images/page_28.png',
      arch: 'assets/images/page_29.png',
      cover: 'assets/images/page_25.png'
    },
    goals: [
      {
        title: 'Mission-Critical Telemetry Visibility',
        desc: 'Present dense multi-sensor data (real-time GPS positions, fuel consumption, speed knots, engine RPM, temperature) with zero cognitive fatigue.'
      },
      {
        title: 'Proactive Anomaly Alerts',
        desc: 'Provide instant visual geofencing breach alerts, route deviation logs, and sensor failure notifications to maritime operations control rooms.'
      }
    ],
    audience: [
      {
        name: 'Maritime Operations & Dispatch Supervisors',
        tagline: 'Fleet dispatchers monitoring tugboats, cargo ships, and offshore barges 24/7.',
        demographics: 'Age: 30–55 · Control Room Supervisors & Logistics Directors',
        challenges: [
          'Monitoring 50+ moving vessels across vast Indonesian waters with unstable satellite connectivity.',
          'Missing critical vessel engine overheating or fuel drainage incidents.',
          'Legacy software taking minutes to render heavy map coordinates.'
        ],
        needsAndGoals: [
          'High-performance live interactive map displaying vessel clusters and trajectories.',
          'Instant drill-down modal into vessel telemetry (e.g., AWB Rajawali Natuna).',
          'Automated daily trip fuel and distance PDF report generator.'
        ],
        expectations: [
          'Dark-mode optimized control room dashboard minimizing eye strain.',
          'Rapid filter by vessel status: Moving, Idle, Anchored, Offline.'
        ],
        preferences: [
          'High-contrast color-coded telemetry badges (Green = Optimal, Red = Alert).'
        ]
      },
      {
        name: 'Field Marine Maintenance Engineers',
        tagline: 'Technicians inspecting onboard IoT sensor hardware and telemetry gateways.',
        demographics: 'Age: 25–45 · IoT Field Engineers & Port Technicians',
        challenges: [
          'Diagnosing sensor hardware connectivity issues while at sea or dock.',
          'Viewing complex dashboards on tablet and rugged mobile devices.'
        ],
        needsAndGoals: [
          'Mobile-responsive sensor health checklist with voltage and ping logs.',
          'One-tap calibration status and firmware update triggers.'
        ],
        expectations: [
          'Clean, uncluttered tabular views with exportable CSV logs.'
        ],
        preferences: [
          'Compact telemetry cards showing battery and signal dBm.'
        ]
      }
    ],
    showcases: [
      {
        num: '1',
        title: 'Global Marine Fleet Map Dashboard',
        desc: 'Crafted an information-dense control room interface featuring live GPS clustering, marine telemetry popovers, route speed playback, and active filter sidebars.',
        image: 'assets/images/page_28.png',
        tag: 'Live Web SaaS Dashboard'
      },
      {
        num: '2',
        title: 'Telemetry Flow Architecture & Sensor Hierarchy',
        desc: 'Structured end-to-end data pipelines organizing device telemetry, geofence rules, trigger notifications, and vessel metadata.',
        image: 'assets/images/page_29.png',
        tag: 'Telemetry Information Architecture'
      },
      {
        num: '3',
        title: 'Guideline Design System',
        desc: 'Engineered a specialized telemetry design system utilizing cyber-blue accents, dark control room surfaces, and high-visibility status indicators.',
        image: 'assets/images/page_25.png',
        tag: 'Control Room Design System',
        palette: {
          primary: [
            { name: 'Marine Cyan', hex: '#00D2FF' },
            { name: 'Deep Control Navy', hex: '#0B132B' },
            { name: 'Alert Coral', hex: '#FF5757' },
            { name: 'Sensor Green', hex: '#00E676' }
          ],
          secondary: [
            { name: 'Telemetry Dark', hex: '#1C2541' },
            { name: 'Grid Border', hex: '#3A506B' }
          ],
          typography: {
            heading: 'Bricolage Grotesque SemiBold (Modern Command Center)',
            body: 'JetBrains Mono (High-Precision GPS & Knot Telemetry)'
          }
        }
      }
    ],
    outcomes: [
      { metric: '55%', label: 'Reduction in Asset Verification Time' },
      { metric: '120+', label: 'Active Vessels Monitored in Real-Time' },
      { metric: '100%', label: 'Live Production SaaS at trackpedia.linkra.id' }
    ],
    deliverables: ['Global Marine Map UI', 'Asset Telemetry Panel Specs', 'Fleet Hierarchy Architecture', 'Figma Design System Tokens'],
    responsibilities: [
      'Conducted contextual interviews with fleet dispatchers and marine telemetry managers.',
      'Designed high-density dashboard layouts optimized for dual-monitor control rooms.',
      'Created interactive prototypes simulating real-time GPS coordinates and warning modals.',
      'Collaborated closely with IoT backend developers to ensure 60fps streaming map performance.'
    ],
    certificateOrProof: {
      type: 'deliverable',
      title: 'Live Production Deployment',
      subtitle: 'Actively running in production monitoring maritime assets at trackpedia.linkra.id.',
      image: 'assets/images/page_28.png'
    },
    prevProjectId: 'project-4',
    nextProjectId: 'project-6'
  },
  {
    id: 'project-6',
    num: '06',
    category: 'saas',
    categoryLabel: 'Enterprise SaaS / Industrial',
    client: 'PT Linkra Wahana Teknologi (for YKK AP)',
    title: 'YKK AP Web Scales – Industrial Digital Weighing System',
    heroTagline: 'Streamlined industrial web application digitizing factory truck weighing operations, barcode slips, and ERP telemetry workflows.',
    schedule: 'Aug – Nov 2024',
    implementation: 'Industrial Enterprise Web App',
    position: 'UI/UX & Product Designer',
    year: '2024',
    tools: ['Figma', 'Google Workspace', 'Balsamiq'],
    liveUrl: null,
    isLive: false,
    thumb: 'assets/thumbs/thumb_proj_33.jpg',
    heroBanner: 'assets/images/page_33.png',
    screens: {
      final: 'assets/images/page_33.png',
      arch: 'assets/images/page_34.png',
      cover: 'assets/images/page_30.png'
    },
    goals: [
      {
        title: 'Zero Weighbridge Congestion',
        desc: 'Replace legacy manual paperwork and clunky desktop programs with an automated web scale system capturing truck weights in under 3 minutes.'
      },
      {
        title: 'Error-Free Slip Verification',
        desc: 'Eliminate calculation discrepancies between gross, tare, and net weights with automatic barcode slip generation and cloud ERP synchronization.'
      }
    ],
    audience: [
      {
        name: 'Factory Weighbridge Operators',
        tagline: 'Plant operators handling hundreds of cargo trucks at factory entrance gates daily.',
        demographics: 'Age: 28–52 · Factory Operations Staff · Rugged Work Environment',
        challenges: [
          'High glare and dust inside weighbridge booths making complex screens hard to read.',
          'Manual handwriting of paper weighing slips causing arithmetic errors and traffic backups.',
          'Repetitive keyboard entry leading to operator physical strain.'
        ],
        needsAndGoals: [
          'Giant high-contrast digital scale readout visible from 2 meters away.',
          'Full keyboard shortcut accessibility (Enter to capture weight, Print shortcut).',
          'Automatic license plate and driver name lookup from registered database.'
        ],
        expectations: [
          'High reliability with zero system freezes during heavy truck shifts.',
          'Immediate thermal barcode weighing slip printout.'
        ],
        preferences: [
          'Large numeric keypad inputs and distinct visual status indicators (Gross, Tare, Net).'
        ]
      },
      {
        name: 'Logistics & Factory Plant Managers',
        tagline: 'Plant executives overseeing raw material intake, supplier billing, and dispatch auditing.',
        demographics: 'Age: 35–55 · Logistics Directors & Quality Assurance Leads',
        challenges: [
          'Reconciling discrepancies between physical paper tickets and warehouse ERP numbers.',
          'Lack of real-time visibility into factory daily tonnage throughput.'
        ],
        needsAndGoals: [
          'Daily and monthly tonnage breakdown dashboards with material type filters.',
          'Complete audit trail of all weighing transactions with operator timestamps.',
          'One-click Excel and PDF export for accounting.'
        ],
        expectations: [
          'Accurate synchronization with corporate enterprise database.'
        ],
        preferences: [
          'Summary KPI cards showing total inbound vs outbound cargo weight.'
        ]
      }
    ],
    showcases: [
      {
        num: '1',
        title: 'High-Density Digital Weighing Dashboard',
        desc: 'Engineered an ultra-clear, high-contrast weighing console featuring live gross/tare weight indicators, automatic truck identification, and one-tap ticket dispatch.',
        image: 'assets/images/page_33.png',
        tag: 'Industrial Operator Interface'
      },
      {
        num: '2',
        title: 'Weighing State Machine & Industrial Flow',
        desc: 'Mapped comprehensive multi-stage state machines handling inbound trucks, unladen tare weighing, supplier verification, and thermal printer handshakes.',
        image: 'assets/images/page_34.png',
        tag: 'Workflow State Machine'
      },
      {
        num: '3',
        title: 'Guideline Design System',
        desc: 'Designed high-contrast industrial component specs compliant with factory lighting conditions, featuring prominent amber status tags and oversized numeric metrics.',
        image: 'assets/images/page_30.png',
        tag: 'Industrial Design System',
        palette: {
          primary: [
            { name: 'Industrial Amber', hex: '#F59E0B' },
            { name: 'Safety Blue', hex: '#1E40AF' },
            { name: 'Dark Surface', hex: '#111827' },
            { name: 'Scale Display Green', hex: '#10B981' }
          ],
          secondary: [
            { name: 'Slate Neutral', hex: '#374151' },
            { name: 'Pure White', hex: '#FFFFFF' }
          ],
          typography: {
            heading: 'Bricolage Grotesque Bold (High-Authority Industrial)',
            body: 'JetBrains Mono (Oversized Weight Kilogram Telemetry)'
          }
        }
      }
    ],
    outcomes: [
      { metric: '70%', label: 'Reduction in Truck Wait Time (12m to 3.5m)' },
      { metric: '100%', label: 'Elimination of Manual Calculation Errors' },
      { metric: '500+', label: 'Daily Truck Transactions Handled Flawlessly' }
    ],
    deliverables: ['Industrial Weighing Console', 'Workflow State Machine Specs', 'Slip Verification UI', 'Operator Design System'],
    responsibilities: [
      'Conducted on-site industrial workflow mapping at YKK AP factory weighbridge gates.',
      'Designed high-contrast, keyboard-first dashboard mockups to minimize operator fatigue.',
      'Collaborated with hardware IoT engineers to integrate real-time scale load cell data.',
      'Conducted usability testing with plant operators under busy morning truck queue conditions.'
    ],
    certificateOrProof: {
      type: 'deliverable',
      title: 'Industrial Architecture Blueprint',
      subtitle: 'Complete state machine and operator dashboard handoff adopted across factory facilities.',
      image: 'assets/images/page_33.png'
    },
    prevProjectId: 'project-5',
    nextProjectId: 'project-7'
  },
  {
    id: 'project-7',
    num: '07',
    category: 'edtech',
    categoryLabel: 'EdTech / Video Learning',
    client: 'Harisenin.com',
    title: 'Harisenin.com – Video Learning & Career Bootcamps',
    heroTagline: 'Career development platform offering structured training programs to help individuals acquire in-demand skills and transition to dream careers.',
    schedule: 'Jan – Apr 2022',
    implementation: 'Online / Responsive Web',
    position: 'UI Designer',
    year: '2023 - 2024',
    tools: ['Figma', 'Google Workspace', 'FigJam'],
    liveUrl: 'https://www.harisenin.com/',
    isLive: true,
    thumb: 'assets/thumbs/thumb_proj_38.jpg',
    heroBanner: 'assets/images/page_38.png',
    screens: {
      final: 'assets/images/page_38.png',
      arch: 'assets/images/page_39.png',
      cover: 'assets/images/page_35.png'
    },
    goals: [
      {
        title: 'Create Brand Awareness',
        desc: 'Build an authoritative central hub for comprehensive information about Harisenin bootcamps, certified mentor profiles, and alumni success stories.'
      },
      {
        title: 'Strong Online Presence & Gateway',
        desc: 'Serve as a premier virtual gateway where prospective Indonesian Golden Generation gain insights into career accelerators across UI/UX, Product, Digital Marketing, Coding, HR, and Audit.'
      }
    ],
    audience: [
      {
        name: 'Students',
        tagline: 'Active students in college or university, from undergraduate to postgraduate level working full-time or part-time.',
        demographics: 'Age: 18–25 years old · Active Student in College/University',
        challenges: [
          'Time Management: Difficulty managing tight schedules between university study, coursework, and personal activities.',
          'Resource Availability: Limited access to industry-level mentorship and modern learning support outside lecture halls.',
          'Need for Current Content: College curriculums often lag behind modern tech industry tools and fast-changing practices.'
        ],
        needsAndGoals: [
          'Deepening: Extra materials to deepen understanding of core product and design topics.',
          'Exam & Project Prep: On-demand video lessons to review for practical assignments.',
          'Skills Development: Real-world portfolio projects relevant to market career opportunities.'
        ],
        expectations: [
          'High-Quality Content: Expect informative, accurate, and easy-to-understand video lessons with latest industry case studies.',
          'Interactive Formats: Interactive video players with downloadable exercises and quizzes.'
        ],
        preferences: [
          'Visual & Audio: Combine visual and audio elements to clarify complex concepts easily.',
          'Active Engagement: Lessons that promote active engagement, discussion boards, and reflection questions.'
        ]
      },
      {
        name: 'Fresh graduate / Job Seeker',
        tagline: 'Graduates with bachelor degrees or equivalent entering the workforce or seeking career shifts.',
        demographics: 'Age: 21–28 years old · College/University Graduate · In Transition',
        challenges: [
          'Lack of Experience: Minimal practical work experience and uncertainty on how to apply academic theory to real product teams.',
          'Professional Network: Lacking senior industry mentors to help build network and open hiring opportunities.',
          'Dynamic Change: Struggling to keep pace with rapid shifts in tech frameworks and design tools.'
        ],
        needsAndGoals: [
          'Career Preparation: Additional intensive training to acquire verified practical skills demanded by recruiters.',
          'Skills Development: Building an end-to-end professional design portfolio to stand out in interviews.',
          'Industry Fit: Grasping real industry workflows (Agile, Figma tokens, product handoff).'
        ],
        expectations: [
          'Practical & Relevant Content: Learning that focuses on real workplace case studies and simulations.',
          'Easy & Flexible Access: Accessible on laptop and mobile anytime with playback bookmarks.',
          'Mentorship & Support: Constructive feedback on assignments from experienced design leads.'
        ],
        preferences: [
          'Interactive Exercises: Quizzes and portfolio reviews that validate skill progress.',
          'Career Accelerator: Guided job-readiness coaching and certified program recognition.'
        ]
      }
    ],
    showcases: [
      {
        num: '1',
        title: 'Landing Page Harisenin V1.1.0',
        desc: 'Designed high-converting landing page layouts featuring compelling value propositions ("Raih Karir Impian. Walau Beda Jurusan"), social proof metrics (910+ alumni hired, 4.9/5 rating), and clear course discovery cards.',
        image: 'assets/images/page_38.png',
        tag: 'High-Converting Web Interface'
      },
      {
        num: '2',
        title: 'Dashboard Internal & Course Player',
        desc: 'Engineered distraction-free video learning interface with structured syllabus progression tree, milestone checkmarks, and integrated quiz modules.',
        image: 'assets/images/page_39.png',
        tag: 'Internal Learning Experience'
      },
      {
        num: '3',
        title: 'Guideline Design System',
        desc: 'Established standardized design system guidelines with brand color hierarchy, typography rules, and social media brand templates.',
        image: 'assets/images/page_35.png',
        tag: 'Brand & Design System Guidelines',
        palette: {
          primary: [
            { name: 'Ocean Blue', hex: '#01579B' },
            { name: 'Sky Cyan', hex: '#00A0DC' },
            { name: 'Royal Accent', hex: '#003BDE' },
            { name: 'Deep Navy', hex: '#00295F' }
          ],
          secondary: [
            { name: 'Vibrant Green', hex: '#06D5BA' },
            { name: 'Warm Amber', hex: '#FFA000' },
            { name: 'White Surface', hex: '#FFFFFF' }
          ],
          typography: {
            heading: 'Poppins Bold & SemiBold (Headline & Sub-headline)',
            body: 'Open Sauce Regular & Medium (Clear Body Text & Lesson Descriptions)'
          }
        }
      }
    ],
    outcomes: [
      { metric: '4.9/5', label: 'Average Student Rating from 500+ Reviews' },
      { metric: '910+', label: 'Alumni Hired in Tech Across Indonesia' },
      { metric: '100%', label: 'Live Video Learning Platform at harisenin.com' }
    ],
    deliverables: ['Responsive Web Landing Page', 'Course Player Interface', 'Brand Design System Specs', 'Interactive Prototype'],
    responsibilities: [
      'Conducted student and job seeker research to understand pain points in online learning.',
      'Designed responsive landing pages, program catalog cards, and internal student course dashboards.',
      'Constructed complete design guidelines including color palette, typography, and marketing assets.',
      'Collaborated closely with product leads and engineering teams to ensure pixel-perfect delivery.'
    ],
    certificateOrProof: {
      type: 'certificate',
      title: 'Certificate of Appreciation & Leadership Sign-Off',
      subtitle: 'Presented for successful contribution as UI Designer in the Harisenin Career Accelerator Programme.',
      image: 'assets/images/page_38.png'
    },
    prevProjectId: 'project-6',
    nextProjectId: 'project-1'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { projectsData };
}
