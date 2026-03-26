import {
  javascript,
  tailwind,
  nodejs,
  git,
  arduino,
  blender3d,
  django,
  react,
  unity3d,
  model3d,
  calibration,
  gamedev,
  mobiledev,
  webdev,
  pcb,
  investa,
  smt,
  free,
  moog,
  tipi,
  python,
  tipiP,
  thesisP,
  spandaP,
  qrcodeP,
  pointsP,
  moogP,
  isnP,
  investaP,
  gamesP,
  freeP
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "MobileAppDev", icon: mobiledev },
  { title: "WebAppDev", icon: webdev },
  { title: "GameDev", icon: gamedev },
  { title: "Calibration", icon: calibration },
  { title: "3D-Modeling", icon: model3d },
  { title: "PCB-Drafting", icon: pcb },
];

export const technologies = [
  { name: "ReactJS", icon: react },
  { name: "Django", icon: django },
  { name: "Unity3D", icon: unity3d },
  { name: "Blender3D", icon: blender3d },
  { name: "Arduino", icon: arduino },
  // { name: "JavaScript", icon: javascript },
  // { name: "Python", icon: python },
  // { name: "Tailwind CSS", icon: tailwind },
  // { name: "Node JS", icon: nodejs },
  // { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Mobile Application Developer",
    company_name: "Investagrams Inc.",
    icon: investa,
    iconBg: "#161329",
    date: "Mar 2023 - Current",
    points: [
      "Developed and maintained mobile applications (Investa, InvestaFunds, and InvestaTrade) using React Native.",
      "Implemented new features and enhancements to improve user experience, performance, and scalability.",
      "Collaborated with designers, product managers, and backend developers to deliver high-quality solutions.",
      "Diagnosed, debugged, and resolved issues to ensure application stability and reliability.",
      "Wrote clean, maintainable, and efficient code following best practices in mobile development.",
      "Participated in code reviews and contributed to continuous improvement of development processes.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Sun Moon Technologies",
    icon: smt,
    iconBg: "#161329",
    date: "Oct 2020 - Dec 2022",
    points: [
      "Developed mobile applications from scratch using React Native, including Idol Shopping Network (e-commerce) and Spanda (massage therapist booking platform).",
      "Built responsive, user-friendly interfaces focused on performance and seamless user experience.",
      "Integrated APIs and backend services to enable core functionalities such as product browsing, booking, and user interactions.",
      "Collaborated with cross-functional teams to define requirements and deliver scalable mobile solutions.",
      "Ensured code quality, maintainability, and adherence to best practices throughout the development lifecycle.",
      "Participated in testing, debugging, and optimization to improve app stability and performance.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Freelance",
    icon: free,
    iconBg: "#161329",
    date: "Nov 2019 - Oct 2020",
    points: [
      "Developed cross-platform applications for web and mobile using React and React Native.",
      "Built and maintained backend services using Python (Django), including API development and database management.",
      "Designed and delivered full-stack solutions, ensuring seamless integration between frontend and backend systems.",
      "Created three endless runner games using Unity 3D, focusing on gameplay mechanics, performance optimization, and user engagement.",
      "Managed end-to-end development lifecycle, from concept and design to deployment and maintenance.",
      "Collaborated with clients to gather requirements and deliver customized, high-quality solutions.",
    ],
  },
  {
    title: "Assistant Retention Manager",
    company_name: "Moog (Baguio)",
    icon: moog,
    iconBg: "#161329",
    date: "Feb 2019 - Nov 2019",
    points: [
      "Managed and maintained file retention systems across multiple departments, ensuring accurate organization and accessibility of records.",
      "Implemented and monitored retention policies in compliance with company standards and regulatory requirements.",
      "Coordinated with various teams to streamline document storage, retrieval, and archiving processes.",
      "Ensured data integrity and confidentiality of sensitive information.",
      "Supported process improvements to enhance efficiency in records management.",
    ],
  },
  {
    title: "Calibration Technician",
    company_name: "Texas Instruments (Baguio)",
    icon: tipi,
    iconBg: "#161329",
    date: "Jan 2018 - Feb 2019",
    points: [
      "Performed calibration of production equipment and machinery to ensure accuracy and compliance with quality standards.",
      "Conducted routine inspections, testing, and adjustments to maintain optimal equipment performance.",
      "Identified and troubleshot calibration issues, minimizing downtime in the production line.",
      "Maintained detailed calibration records and documentation in accordance with company and industry requirements.",
      "Collaborated with engineering and production teams to support continuous improvement and operational efficiency.",
     
    ],
  },
];

export const projects = [
  {
      id:1,
      title:'Investa, InvestaFunds, and InvestaTrade',
      desc:`Responsible for developing and maintaining 
      key application features, including the Portfolio 
      module and Sponsor/Ads integration, ensuring functionality, 
      performance, and user engagement. Handled bug identification 
      and resolution to improve system stability and user experience. 
      Additionally, managed application deployment processes, ensuring 
      smooth releases and reliable production performance.`,
      image:investaP,
      tags:['React Native', 'Typescript', 'Node.js', 'Azure', 'Firebase', 'Android', 'iOS', 'Huawei'],
      company:'Investagrams Inc.',
  },
  {
      id:2,
      title:'Idol Shopping Network',
      desc:`Designed and developed a full-featured e-commerce 
      mobile application from the ground up, covering all core 
      functionalities including product browsing, user authentication, 
      cart management, and checkout flow. Led the end-to-end development 
      lifecycle, from initial architecture and implementation to testing 
      and optimization. Successfully deployed the application to production, 
      ensuring scalability, performance, and a seamless user experience.`,
      image:isnP,
      tags:['React Native', 'Node.js', 'Firebase', 'Android', 'iOS', 'Huawei'],
      company:'SunMoonTec',
  },
  {
      id:3,
      title:'Spanda',
      desc:`Developed an online massage service booking platform, 
      contributing to key user-facing and booking workflow features. 
      Implemented address pinning for precise location selection, along with 
      secure login and registration functionality. Built an efficient therapist 
      search system and an auto-selection feature to streamline booking. 
      Designed a dynamic service price computation module and a seamless 
      booking confirmation process, enhancing overall user experience and 
      operational efficiency.`,
      image:spandaP,
      tags:['React Native', 'Node.js', 'Firebase', 'MapBox', 'Android', 'iOS', 'Huawei'],
      company:'SunMoonTec',
  },
  {
      id:4,
      title:'Endless Runner Games',
      desc:`Developed three engaging endless runner games using Unity 3D, 
      showcasing strong skills in game design, optimization, and interactive 
      gameplay systems. Successfully published one title on the 
      Google Play Console, managing the full deployment pipeline including 
      testing, optimization, and store compliance. Delivered two additional 
      games as commissioned projects, collaborating with clients to meet 
      specific requirements, implement custom features, and ensure high-quality 
      user experiences.`,
      image:gamesP,
      tags:['Unity 3D', 'C#', 'Android'],
      company:'Freelance',
  },
  {
      id:5,
      title:'Music Player, Unit Converter, and Pedometer',
      desc:`Developed and deployed three independent mobile applications
      —a Music Player, a Pedometer, and a Unit Converter—each built as a 
      standalone product with its own functionality and user experience. 
      Demonstrated versatility in creating both utility and lifestyle apps, 
      focusing on performance, usability, and clean interface design. 
      Successfully published each application on the Google Play Console, 
      managing the full deployment lifecycle including testing, optimization, 
      and compliance with platform guidelines.`,
      image:freeP,
      tags:['React Native', 'Node.js', 'Firebase', 'Android'],
      company:'Freelance',
  },
  {
      id:6,
      title:'Tool Management',
      desc:`Designed and developed a locally hosted web-based 
      Tool Management Inventory System for laboratory equipment and gauges. 
      Implemented features for asset tracking, inventory monitoring, 
      and efficient data management, improving organization and accessibility 
      of tools. Focused on usability, reliability, and streamlined workflows 
      to support day-to-day laboratory operations.`,
      image:moogP,
      tags:['Python', 'Django', 'Bootstrap', ],
      company:'MOOG Baguio',
  },
  {
      id:7,
      title:'Equipment Logbook',
      desc:`Designed and developed a locally hosted Equipment Logbook System 
      for laboratory assets. Built to reduce the risk of equipment loss. 
      Implemented features to display real-time status queues for calibration 
      and release, improving visibility, accountability, and workflow efficiency 
      within laboratory operations.`,
      image:tipiP,
      tags:['Python', 'Django', 'Bootstrap', ],
      company:'TIPI Baguio',
  },
  {
      id:8,
      title:'Customer Store Credit',
      desc:`Designed and developed a Customer Store Credits system consisting 
      of a web and mobile application. Built a web-based admin platform for 
      efficient store credit management, monitoring, and updates. Developed a 
      cross-platform mobile app using React Native, enabling customers to 
      securely view and track their available credits in real time. Leveraged 
      Python and Django for backend services, ensuring reliable data handling, 
      scalability, and seamless integration between platforms.`,
      image:pointsP,
      tags:['React Native', 'Python', 'Django', 'Bootstrap', 'Android'],
      company:'Freelance',
  },
  {
      id:9,
      title:'Contact Tracing Logbook',
      desc:`Developed a Contact Tracing Logbook system with QR code scanning 
      capabilities, delivered as an integrated web and mobile solution. Built 
      a web-based administration platform for managing user records, logs, and 
      schedules. Created a cross-platform mobile application using React Native, 
      enabling users to scan or input QR codes to access real-time schedules, 
      activity logs, and member information. Powered by Python and Django 
      on the backend, ensuring secure data processing, efficient tracking, 
      and seamless synchronization across platforms.`,
      image:qrcodeP,
      tags:['React Native', 'Python', 'Django', 'Bootstrap', 'Android'],
      company:'Freelance',
  },
  {
      id:10,
      title:'Integrating Augmented Reality for Baguio Museum Audio Guide System',
      desc:`Developed an innovative thesis project titled 
      “Integrating Augmented Reality for Baguio Museum Audio Guide System,” 
      focused on enhancing visitor engagement through immersive technology. 
      Designed and implemented an AR-based mobile experience featuring 
      interactive 3D models, synchronized audio guides, and embedded video 
      content to enrich museum tours. Utilized Unity for application 
      development and Blender 3D for creating and optimizing digital assets, 
      delivering an engaging and educational platform for cultural exploration.`,
      image:thesisP,
      tags:['Unity 3D', 'C#', 'Blender 3D', 'Android'],
      company:'Thesis',
  },
];
