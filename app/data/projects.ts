export const projectsData = [
    {
        id: 1,
        slug: "kozura",
        title: "Kozura",
        description: "An e-commerce platform giving business owners free personalized store links with built in WhatsApp order notifications removing the cost barrier to going online.",
        tags: ["Online Store", "Fullstack Web"],
        image: "/Kozura-Project.png",
        problemStatement: "Small business owners run their entire business through WhatsApp and Instagram DMs, sending price lists manually and losing track of who ordered what. Without a dedicated storefront they look less credible next to sellers who have one, but existing store builder platforms charge fees many sellers at this scale can't justify, and most require technical setup sellers don't have time for.",
        solution: "Built a platform where any seller creates a branded, personalized store link in minutes with no developer involved. Every order lands straight in the seller's WhatsApp the moment it happens, so there's no dashboard to check and no missed sale. \n\n Sellers manage products, prices, photos, and variants like size and color from one dashboard, set their own shipping rules (pickup, fixed fee, or free above a threshold), and give every customer a tracking link so they stop sending \"where is my order\" messages. Payment stays flexible too, supporting cash on delivery, bank transfer, or whatever already works for that seller's customers.",
        duration: "3",
        toolsUsed: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Vercel"],
        liveSiteUrl: "https://kozura.ng",
        longDescription: "A storefront platform helping small business owners move off scattered price lists and DMs into a real online store, while keeping the WhatsApp channel their customers already trust."
    },
    {
        id: 2,
        slug: "campora",
        title: "Campora",
        description: "A campus super app bringing scattered university systems into one mobile first platform, currently in private alpha with 500+ students on the waitlist.",
        tags: ["Education", "Frontend Web", "App Development"],
        image: "/Campora-Project.png",
        problemStatement: "Campus life runs across too many disconnected tools, legacy web portals not built for mobile, five different apps just to check grades or find a room, and important announcements buried in cluttered inboxes until deadlines are already missed.",
        solution: "Built a single platform that unifies academic resources, real time updates, campus navigation, and emergency assistance into one student first mobile dashboard. \n\nStudents verify their university and student status to unlock tailored resources, then get notes, past questions, and course materials in a curated library, push notifications for deadlines and events, wayfinding across sprawling campuses, and one tap emergency location sharing when they need help fast.",
        duration: "6",
        toolsUsed: ["React Native", "TypeScript", "Clerk", "Supabase", "Redis"],
        liveSiteUrl: "https://camporar.vercel.app",
        longDescription: "A smart campus platform unifying academic resources, updates, navigation, and emergency support into one mobile experience for students."
    },
    {
        id: 3,
        slug: "kadix-technologies",
        title: "Kadix Technologies",
        description: "A venture studio building AI powered platforms, web and mobile applications, and internal SaaS products that solve real problems at scale.",
        tags: ["Venture Studio", "Fullstack Web"],
        image: "/Kadix-Project.png",
        problemStatement: "Most small and growing businesses want to use AI and automation to run leaner, but they don't have in house engineering teams to design, build, and maintain these systems. Hiring a full team is too expensive at their stage, and generic no code tools rarely handle the specific, messy workflows a real business actually runs on.",
        solution: "Built as a venture studio that acts as an embedded technical team for its clients and its own ventures, taking a business problem from first conversation through to a live, working system. This spans AI powered platforms, full web and mobile applications, and internal SaaS tools, with the studio owning architecture, integration, and delivery end to end rather than handing off a template and walking away.",
        duration: "1",
        toolsUsed: ["Next", "Tailwind", "Postgres"],
        liveSiteUrl: "https://kadix.org",
        longDescription: "A venture studio building and shipping AI powered products for real businesses, from first idea to live platform."
    },
    {
        id: 4,
        slug: "consis",
        title: "Consis",
        description: "A personal accountability app that pairs data driven AI coaching with social accountability groups, helping users build habits and track consistency across mobile platforms.",
        tags: ["Wellness", "App Development", "Fullstack Web"],
        image: "/Consis-Project.png",
        problemStatement: "Most habit trackers either overload users with complicated tools or fall back on generic motivational messages that don't reflect a person's actual behavior. Users also tend to lose consistency once accountability is purely personal, without any social pressure or shared goals to keep them engaged.",
        solution: "Built a habit tracking app centered on a personalized AI coach that gives advice based on the user's real logged data rather than generic tips, alongside social accountability groups where users compete on streaks and celebrate milestones together. \n\nUsers set custom habits and tracking frequencies, log progress with one tap logging, and get smart notifications including automated midnight streak resets and real time group alerts. Authentication and sync run through Supabase for secure cross platform access, with premium subscriptions handled through Paystack.",
        duration: "3",
        toolsUsed: ["React Native", "Supabase", "Paystack", "ChatGPT"],
        liveSiteUrl: "https://consis-nine.vercel.app",
        longDescription: "A habit tracking app pairing an AI coach with social accountability groups to help users build and keep daily streaks."
    },
    {
        id: 5,
        slug: "healthmr",
        title: "HealthMR",
        description: "A secure electronic medical records platform designed for Nigerian healthcare facilities, managing patient care from registration through pharmacy in one integrated system, built as a personal startup project during a hackathon.",
        tags: ["Medical Database", "AI Search", "Fullstack Web", "AI", "Database"],
        image: "/HealthMR-Project.png",
        problemStatement: "Nigerian healthcare facilities often manage patient records across disconnected systems or paper, making it hard to verify patient identity reliably, track care from registration to pharmacy, and stay compliant with data protection requirements like NDPR. Patients also have no consistent way to access their own medical history across providers.",
        solution: "Built an integrated EMR system with NIN based patient identity verification, giving both patients and healthcare providers a secure portal covering registration, provider records, and an admin layer for facility management. All data is encrypted with AES 256 (bank level encryption), stored in compliance with NDPR, and only accessible to authorized providers, with 24/7 access for patients and staff alike.",
        duration: "1",
        toolsUsed: ["", "", "", "", "", ""],
        liveSiteUrl: "https://healthmr-five.vercel.app",
        longDescription: "An integrated electronic medical records system built for Nigerian healthcare facilities, from patient registration through pharmacy."
    },
    {
        id: 6,
        slug: "doomslug",
        title: "DoomSlug",
        description: "A complete memecoin launch site for $DOOMSLUG, a Solana based token, covering the brand, tokenomics, roadmap, and team pages a crypto project needs to launch.",
        tags: ["Web3", "Crypto", "Fullstack Web"],
        image: "/DoomSlug-Project.png",
        problemStatement: "Memecoin projects live or die on their launch site since it's usually the first thing a potential holder sees before deciding to buy in. The site needs to build trust fast, through clear tokenomics, a visible roadmap, and an active team, while still matching the fun, high energy tone the memecoin space runs on.",
        solution: "Built a single page site structured around the sections holders actually check before buying, tokenomics breakdown, phased roadmap, team, and FAQ, with a scrolling ticker and playful copy that keeps the meme energy without hiding the real numbers (supply, allocation splits, lock terms). Buy links, socials, and DEX links are surfaced directly instead of buried in menus.",
        duration: "1",
        toolsUsed: ["React", "Typescript", "Tailwind CSS", "Framer Motion"],
        liveSiteUrl: "https://doomslug.vercel.app",
        longDescription: "A full memecoin site built with tokenomics, roadmap, and community sections, showing frontend and Web3 landing page work outside pure automation."
    }
];

export const aiAutomationData = [
    {
        id: 1,
        title: "AI Call Center",
        problem: "Fintech clients needed 24/7 multilingual support for scheduling and lead capture, but hiring round-the-clock human agents wasn't feasible.",
        solution: "Built a voice AI call center using Retell AI, Twilio, Zoho CRM/Desk, and ElevenLabs handling calls in English, Arabic, and Hindi/Urdu, with automated calendar booking via Google Calendar/Sheets.",
        aiPrompt: '"Hi, I saw you were interested in our service do you have 5 minutes this week for a quick call?"'
    },
    {
        id: 2,
        title: "PR Automation",
        problem: "A fintech client needed consistent media/press outreach but had no team to track opportunities, verify contacts, or send pitches manually.",
        solution: "Built an autonomous PR system using n8n, Airtable, Claude API, ZeroBounce, and Google Alerts RSS surfacing press opportunities and managing outreach end-to-end with zero manual input.",
        aiPrompt: '"Found 3 new press opportunities matching your niche. Outreach drafted and contacts verified ready to send"'
    },
    {
        id: 3,
        title: "Onboarding System",
        problem: "Manual staff onboarding meant repetitive check-ins, scattered documents, and no consistent tracking across new hires.",
        solution: "Built a staff onboarding and check-in workflow with n8n, Google Drive, Google Sheets, Slack, and Form Triggers automating document collection and status updates.",
        aiPrompt: '"New hire submitted their onboarding form. Documents filed, Slack notified, checklist updated."'
    },
    {
        id: 4,
        title: "AI Sales Assistant",
        problem: "A fashion business was losing sales to slow WhatsApp response times and manual payment follow-ups.",
        solution: "Built a 49-node n8n workflow integrating Claude API, Paystack, and the WhatsApp Cloud API running live conversational sales, from product inquiry to payment, with zero human handoff.",
        aiPrompt: '"Hi! That dress comes in black, red, and navy. Want me to send a payment link for the black one?"'
    },
    {
        id: 5,
        title: "AI Financial Co-Pilot for Sellers",
        problem: "Small business owners needed a simple way to track sales, expenses, and cash flow without learning bookkeeping software.",
        solution: "Built an AI financial co-pilot over WhatsApp using n8n, business owners just message updates in plain language, and it handles the tracking (built for Hackathon).",
        aiPrompt: '"Recorded ₦12,000 sale and ₦3,000 restock expense. Todays net: ₦9,000"'
    }
];
