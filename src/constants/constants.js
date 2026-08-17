export const projects = [
  {
    title: 'Healthcare Revenue Cycle & Patient Flow',
    description: "An end-to-end PostgreSQL analytics platform over 5.5 million synthetic hospital billing records across 3,847 facilities and 4 time zones. Covers generation, bulk load, validation, dimensional modelling and reporting — with a 15-check data-quality gate that halts the pipeline on real defects, time-zone-correct reporting that proves naive UTC bucketing misfiles 20–37% of records onto the wrong date, and execution-plan-driven index tuning that cut a key query 43.6× (646ms → 15ms). The failed experiments are documented too, including a BRIN index 332× smaller that was slower than no index at all.",
    image: '/images/healthcare-rcm.svg',
    tags: ['PostgreSQL', 'SQL', 'Data Engineering', 'ETL', 'Query Optimization'],
    source: 'https://github.com/SheraazKhan/healthcare-rcm-platform',
    visit: 'https://github.com/SheraazKhan/healthcare-rcm-platform',
    id: 4,
  },
  {
    title: 'Aurora Streaming',
    description: "A Netflix-inspired streaming platform built with Next.js. Browse movies and TV shows powered by the TMDB API, with Firebase authentication, personalized user profiles, an HLS-powered video player, mood-based recommendations, a personal watchlist, and viewing stats — installable as a PWA.",
    image: '/images/projects.jpeg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'TMDB API'],
    source: 'https://github.com/SheraazKhan/Aurora-streaming',
    visit: 'https://aurora-streaming.vercel.app/',
    id: 3,
  },
  {
    title: 'LocalReply AI',
    description: "A full-stack SaaS platform that helps local business owners manage and reply to Google reviews. Uses Google's Gemini AI to generate three tone-adapted reply drafts per review (empathetic for negative reviews, SEO-keyword-optimized for positive ones), with Stripe subscription billing, secure OAuth authentication, and a Google Business Profile integration.",
    image: '/images/LocalReplyAI.png',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Gemini AI', 'Stripe'],
    source: 'https://github.com/SheraazKhan/localreply-ai',
    visit: 'https://github.com/SheraazKhan/localreply-ai',
    id: 2,
  },
  {
    title: 'PacketSniffer',
    description: "A real-time network packet sniffer with a modern graphical user interface (GUI) built using Python, Scapy, and ttkbootstrap. It captures and displays UDP, DNS, TCP, ARP, and ICMP packets on your network interface, with live filtering, logging, and export capabilities.",
    image: '/images/Packetsniffer1.png',
    tags: ['Python'],
    source: 'https://github.com/SheraazKhan',
    visit: 'https://github.com/SheraazKhan',
    id: 0,
  },
  {
    title: 'QuickCart',
    description: "QuickCart is a fully functional eCommerce web application. It allows users to browse, add, and purchase products while giving administrators full control over product management.",
    image: '/images/Quickcart.png',
    tags: ['React', 'JavaScript', 'MongoDB', 'Node', 'Express'],
    source: 'https://github.com/SheraazKhan',
    visit: 'https://quickcart-frontend-dn9d.onrender.com',
    id: 1,
  },
];

export const TimeLineData = [];
