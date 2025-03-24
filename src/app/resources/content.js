import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Qendrim',
    lastName: 'Beka',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'AI enthusiest, Competitor, and Builder',
    avatar: '/images/avatar.jpg',
    location: 'Canada',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'German', 'Albanian']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about my experiences and learnings.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/qbeka',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/qendrimbeka/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:beka.qendrim1@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>AI enthusiest, Competitor, and Builder</>,
    subline: <>Hi! I'm Qendrim, a 2nd Year Computer Science student at the University of Alberta. I'm passionate about AI, competitive programming, and building cool stuff. I've worked on projects like a sign language detection software, an AI team formation algorithm, and a personal website. I'm also a competitive programmer and have won hackathons and case competitions. I'm currently looking for internships and opportunities to learn and grow. Let's connect!</>
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
        link: 'https://calendly.com/beka-qendrim1'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Qendrim is a Canadian citizen with 5 years of experience in programming. He is passionate about building his engineering skills through personal projects, and winning competitions.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: "Index Competitive",
                timeframe: "2025 - Present",
                role: "Founder, President",
                achievements: [
                    <>Leading a high-performance student team by building systems for competitive success across tech, business, and design challenges.</>,
                ],
                images: [],
            }
        ]

    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Alberta',
                description: <>Bachelor of Science, Major in Computer Science.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Skills',
        skills: [
            // {
            //     title: 'Figma',
            //     description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
            //     images: [
            //         {
            //             src: '/images/projects/project-01/cover-02.jpg',
            //             alt: 'Project image',
            //             width: 16,
            //             height: 9
            //         },
            //         {
            //             src: '/images/projects/project-01/cover-03.jpg',
            //             alt: 'Project image',
            //             width: 16,
            //             height: 9
            //         },
            //     ]
            // },
            // {
            //     title: 'Next.js',
            //     description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
            //     images: [
            //         {
            //             src: '/images/projects/project-01/cover-04.jpg',
            //             alt: 'Project image',
            //             width: 16,
            //             height: 9
            //         },
            //     ]
            // }
            {
                title: 'Technical Skills',
                description: [
                  <>Python – pandas, NumPy, scikit-learn, OpenCV</>,
                  <>Machine Learning & AI – model training, evaluation, deployment</>,
                  <>Computer Vision – object detection, image processing</>,
                  <>R – data analysis, visualization</>,
                  <>Excel – modeling, cleaning, dashboards</>
                ],
                images: []
              },
              {
                title: 'Other Tools & Platforms',
                description: [
                  <>Jupyter Notebooks</>,
                  <>Google Colab</>,
                  <>Tableau</>,
                  <>Git & GitHub</>,
                  <>VS Code</>,
                  <>LaTeX</>,
                  <>Bash</>
                ],
                images: []
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

const testimonials = {
    label: "Testimonials",
    title: "Testimonials",
    description: `Read what others have to say about ${person.name}`
    // Create new testimonials posts by adding a new .mdx file to app/testimonials/testimonials
    // All posts will be listed on the /testimonials route
}

const contact = {
    label: "Contact",
    title: "Contact Qendrim",
    description: `Get in touch with Qendrim, or follow her on other social platforms`
    // Create new testimonials posts by adding a new .mdx file to app/testimonials/testimonials
    // All posts will be listed on the /testimonials route
}

const offerings = {
    offeringsList: [
        {
            title: "Consulting & Freelance",
            description:
                "I partner with startups, small businesses, and nonprofits to build impactful strategies, products, and tech solutions.",
            iconName: "microphone",
            ctaMessage: "Lets Build Together"
        },
        {
            title: "Hackathon Competitor",
            description: "I compete in hackathons, building fast, functional prototypes with small teams under pressure.",
            iconName: "rocket1",
            ctaMessage: "Lets Compete Together"
        }
    ]
};


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

export { person, social, newsletter, home, about, blog, work, gallery, testimonials, contact, offerings };