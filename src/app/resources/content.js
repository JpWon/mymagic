import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Jerrold',
    lastName:  'Primus',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Business Intelligence Engineer',
    avatar:    '/images/jp.jpeg',
    location:  'America/New_York',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>"I specialize in transforming complex datasets into clear, actionable insights that empower organizations to make data-driven, strategic decisions, driving measurable business outcomes."</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/JpWon',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/jprimus1/',
    },
    
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:jmprimus1@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Business Intelligence Engineer, Data Analyst, and Entrepreneur</>,
    subline: <> Jerrold (J.P.) Primus – Driving innovation through data insights and strategic solutions."</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/de-primus1/30min'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am an experienced data professional specializing in data analysis, system integration, and process automation. Through recent independent projects with startups, I have enhanced my expertise in SQL, AWS architecture, and Tableau, creating customized solutions that boost operational efficiency and foster business growth. As a Google-certified Business Intelligence Professional, I stay at the forefront of industry standards, combining technical proficiency with a commitment to delivering impactful insights.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: (
                    <>
                        <img 
                            src="/images/DA.jpeg" 
                            alt="Direct Audio Logo" 
                            style={{ verticalAlign: 'middle', marginRight: '8px', width: '24px', height: '24px' }}
                        />
                        Direct Audio™ Inc.
                    </>
                ),
                timeframe: 'Feb 2014 - Dec 2023',
                role: 'Founder & CEO',
                achievements: [
                    <>Developed mobile applications compatible with major platforms, achieving a US Patent for innovative live audio multicasting technology.</>,
                    <>Led a team of six developers, fostering a collaborative and efficient work environment.</>,
                    <>Drove user adoption of applications, resulting in a user base expansion to over 50,000 individuals.</>
                ]
            },
            {
                company: 'Travel & Leisure Co.',
                timeframe: 'Nov 2022 - Mar 2023',
                role: 'Senior System Integrations Analyst',
                achievements: [
                    <>Identified and corrected data inaccuracies in Global Rental Operations portfolio tables using SQL, merging and updating database tables to establish a consistent and reliable source for accurate reporting.</>,
                    <>Managed integration projects to align a global property portfolio with major online travel agency platforms, enhancing business revenue.</>,
                    <>Increased operational efficiency by automating essential tasks using Microsoft Automate.</>,
                    <>Ensured seamless integration for newly onboarded OTAs by configuring and maintaining channel management systems.</>
                ],
                images: []
            },
            {
                company: 'Trajector',
                timeframe: 'Jul 2021 - Dec 2021',
                role: 'KPI Analyst',
                achievements: [
                    <>Analyzed business productivity and database systems, proposing architecture solutions compliant with AWS standards.</>,
                    <>Investigated report discrepancies using SQL, identified naming inaccuracies, and created a validation formula revealing $1 million in actionable invoices.</>,
                    <>Collaborated with department heads to develop a standardized reporting system, resulting in increased productivity.</>,
                    <>Improved data accuracy and user experience by implementing user-friendly dashboards for error reduction.</>
                ],
                images: []
            },
            {
                company: 'Amazon.com',
                timeframe: 'Sep 2016 - Jun 2021',
                role: 'ACES Operations Analyst',
                achievements: [
                    <>Developed and launched a KPI leadership application, resulting in a weekly time saving of 15,000 hours.</>,
                    <>Led project teams in automating workflow processes with custom VBA scripts, enhancing efficiency in KPI reporting.</>,
                    <>Utilized SQL and MicroStrategy for research and analysis, delivering over 10 weekly reports to identify and address operational inefficiencies.</>,
                    <>Executed a detailed inventory analysis on return SKUs with QR codes, culminating in a global report that offered solutions for supply chain improvement.</>,
                    <>Created an Excel-based shift planning tool to manage over 170,000 data points, optimizing resource allocation and shift operations.</>
                ],
                images: []
            }            
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Florida Gulf Coast University',
                description: <>Bachelor of Science, Business Management (Entrepreneurship Concentration)</>,
            },
            {
                name: 'Seminole State College of Florida',
                description: <>Bachelor of Science in Information Systems Technology (B.S.I.S.T.)

                Specializations: Cyber Security </>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };