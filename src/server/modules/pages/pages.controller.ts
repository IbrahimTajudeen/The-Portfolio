/* eslint-disable prettier/prettier */
import { Controller, Get, Render } from '@nestjs/common';
import { PagesService } from './pages.service';


@Controller()
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Render('app')
  @Get()
  home(){
    return {
        page: 'index',
        title: 'Home',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Code Lux',
          image: '/img/profile/profile-img.jpg',
          typo: {
            caption: 'Creative',
            items: 'Full-Stack Developer, Tech Innovator, Developer & Problem Solver, Systems Builder, Software Engineer, Developer of Scalable & Secure Applications'
          },
          intro: `a passionate full-stack developer, problem solver, and creator of innovative systems that make real-world impact.
I build fast, secure, and scalable applications using modern technologies like Node.js, NestJS, Express, MongoDB, C#, Xamarin.Forms, SQL Server etc., and I enjoy transforming ideas into fully functional digital solutions.`,
          socials: [
            {
              icon: 'bi bi-twitter-x',
              link: 'a.link',
              text: 'a Text' 
            },{
              icon: 'bi bi-linkedin',
              link: 'a.link',
              text: 'linkedIn' 
            },
            {
              icon: 'bi bi-github',
              link: 'https://www.github.com/ibrahimtajudeen',
              text: 'Github' 
            },
            {
              icon: 'bi bi-dribbble',
              link: 'a.link',
              text: 'dribbble' 
            },
            {
              icon: 'bi bi-facebook',
              link: 'a.link',
              text: 'facebook' 
            },
            {
              icon: 'bi bi-instagram',
              link: 'a.link',
              text: 'instagram' 
            },
          ],
          tags: [
            {
              icon: 'bi-lightbulb',
              text: 'Innovate',
            },
            {
              icon: 'bi-tools',
              text: 'Build',
            },
            {
              icon: 'bi-binoculars',
              text: 'Visionary',
            }
          ]
      }
    }
  }

  @Render('app')
  @Get('about')
  about(){
    return {
        page: 'about',
        title: 'About',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Code Lux',    
          image: '/img/profile/profile-square.jpg',      
          socials: [
            {
              icon: 'bi bi-twitter-x',
              link: 'a.link',
              text: 'a Text'
            }
          ],
          punch_line: 'Crafting tomorrow with every line of code.',
          full_intro: `a full-stack developer and tech innovator. I build scalable, secure, and creative digital solutions — from web apps and backend systems to custom tools like KalmScript. I turn ideas into impactful, high-performance software.`,
          goal: `My goal is simple: To build powerful solutions, learn continuously, and create technology that truly matters`,
          craft: [
            {
              icon: 'bi bi-code-slash',
              text: 'UI/UX Design',
              note: 'Crafting intuitive and engaging user interfaces for seamless digital experiences.'
            },
            {
              icon: 'bi bi-server',
              text: 'Backend Development',
              note: 'Building robust and scalable server-side applications to power modern web experiences.'
            },
            {
              icon: 'bi bi-hammer',
              text: 'Compiler Design',
              note: 'Designing efficient compilers to translate high-level code into optimized machine instructions.'
            },
            {
              icon: 'bi bi-phone',
              text: 'Mobile Development',
              note: 'Creating responsive and user-friendly mobile applications for iOS and Android platforms.'
            },
            {
              icon: 'bi bi-window',
              text: 'Desktop Applications',
              note: 'Developing cross-platform desktop applications with seamless performance and user experience.'
            },
            {
              icon: 'bi bi-diagram-3',
              text: 'DevOps',
              note: 'Implementing CI/CD pipelines and automating deployments for seamless software delivery.'
            },
            {
              icon: 'bi bi-shield-lock',
              text: 'API Development',
              note: 'Designing secure and scalable APIs to enable seamless integration and data exchange.'
            },
            {
              icon: 'bi bi-cloud',
              text: 'Cloud Computing',
              note: 'Leveraging cloud platforms to build scalable and resilient applications.'
            }
          ],
          journey: [
            {
              year: 2020,
              title: 'Diploma in Programming',
              note: 'Completed a diploma in programming, laying the foundation for my software development journey.'
            },
            {
              year: 2021,
              title: 'Freelance Developer',
              note: 'Started working as a freelance developer, gaining practical experience and building a diverse portfolio.'
            },
            {
              year: 2022,
              title: 'Open Source Contributor',
              note: 'Contributed to various open-source projects, collaborating with developers worldwide and enhancing my coding skills.'
            },
            {
              year: 2023,
              title: 'Junior Backend Developer at Zas Resources',
              note: 'Joined Zas Resources as a Junior Backend Developer, working on building and maintaining web applications.'
            },
            {
              year: 2023,
              title: 'Full-Stack Developer at TechNova',
              note: 'Transitioned to TechNova as a Full-Stack Developer, taking on more responsibilities and working on end-to-end solutions.'
            },
            {
              year: 2024,
              title: 'Lead Backend',
              note: 'Took on the role of Lead Backend Developer for a major project, overseeing architecture and implementation.'
            },
            {
              year: 2025,
              title: 'Internship at StoneTech',
              note: 'Completed an internship at StoneTech Solutions, contributing to real-world projects and honing my skills.'
            },
            {
              year: 2025,
              title: 'Scorche Pay',
              note: 'Joined Scorche Pay as a Senior Backend Developer, working on payment processing systems and enhancing my expertise in fintech solutions.'
            }
          ],
          skills: {
            caption: 'My skillset is where creativity meets engineering. From frontend experiences to backend architecture. I build solutions that are smart, scalable, and secure',
            skill_set: [
              {
                title: 'Full-Stack Development',
                note: 'Building end-to-end applications with clean architecture and scalable systems.',
                progress: 90
              },
              {
                title: 'Web Development(HTML, CSS, Bootstrap, JavaScript)',
                note: 'Crafting responsive, modern, and visually appealing interfaces.',
                progress: 85
              },
              {
                title: 'Backend Development(Node.js, Express, NestJS, C#)',
                note: 'Designing and implementing robust backend systems and APIs.',
                progress: 80
              },
              {
                title: 'Database Management(MongoDB, SQL Server)',
                note: 'Efficient data modeling, querying, and optimization for performance.',
                progress: 75
              },
              {
                title: 'Mobile Development(Xamarin, .NET MAUI)',
                note: 'Creating cross-platform mobile applications with native performance.',
                progress: 70
              },
              {
                title: 'EF Core & LINQ',
                note: 'Leveraging Entity Framework Core and LINQ for efficient data access and manipulation in .NET applications.',
                progress: 85
              },
              {
                title: 'Compiler Design & Development',
                note: 'Creating custom programming languages, lexers, parsers, ASTs, and sandbox systems.',
                progress: 70
              },
              {
                title: 'ASP.NET Core(Blazor, MVC, Razor Pages)',
                note: 'Building dynamic web applications and APIs using ASP.NET Core framework.',
                progress: 75
              },
              {
                title: 'System Architecture & Software Design',
                note: 'Designing scalable, maintainable, and efficient software systems using best practices and design patterns.',
                progress: 80
              },
              {
                title: 'Auth & Security (JWT, bcryptjs)',
                note: 'Implementing secure authentication mechanisms and protecting applications from vulnerabilities.',
                progress: 85
              }
            ]
          },
          hobby: [
            {
              icon: 'bi bi-magic',
              text: 'Minimalism'
            },
            {
              icon: 'bi bi-code-slash',
              text: 'Code' 
            },
            { icon: 'bi bi-book',
              text: 'Reading' 
            },
            {
              icon: 'bi bi-geo-alt',
              text: 'Travel'
            },
            {
              icon: 'bi bi-brush',
              text: 'Sketching'
            }
          ],
          stats: [
            {
              text: 'Statisfied Clients',
              amount: '100',
              symbol: '%'
            },
            {
              text: 'Projects Completed',
              amount: '20',
              symbol: '+'
            },
            {
              text: 'Years of Experience',
              amount: (new Date().getFullYear() - 2019).toString(),
              symbol: '+'
            }
          ],
          testmonial_caption: 'The impact of my work, told by those who’ve experienced it.',
          testimonials: [
            {
              name: 'Dr. Bode Awofeso Olatunde',
              position: 'Hospital Administrator',
              text: 'Ibrahim delivered our entire Hospital Management System exactly the way we envisioned it. The multi-branch structure, security levels, and user roles were implemented flawlessly. Reliable, fast, and extremely professional.',
              stars: 5,
              image: '/img/person/person-m-9.webp'
            },
            {
              name: 'Grace Okon',
              position: 'Product Manager, PayFlex Services',
              text: 'Our VAS and airtime billing platform became 10x more efficient after Ibrahim rebuilt it. The API integrations, virtual account system, and security features were top-notch. He’s one of the best developers we’ve worked with.',
              stars: 5,
              image: ''
            },
            {
              name: 'Samuel Adeyemi,',
              position: 'CEO, SafeBuild Constructions',
              text: `The website Ibrahim built for our company exceeded expectations. Clean UI, fast loading, mobile-friendly, and professionally designed. He communicates well and delivers on time.`,
              stars: 5,
              image: ''
            },
            {
              name: 'Fatimah Lawal',
              position: 'Lead Engineer, NexaTech',
              text: `Ibrahim created a secure backend API for our internal tools, and it has been running flawlessly. His understanding of NestJS, authentication, and architecture is outstanding. Highly recommended.`,
              stars: 5,
              image: ''
            },
            {
              name: 'Micheal Johnson',
              position: 'Operations Manager, Vortex Systems',
              text: `We approached Ibrahim to build a custom software solution, and he went beyond the requirements. His creativity, problem-solving skills, and attention to detail made the project a huge success. A true full-stack professional.`,
              stars: 5,
              image: ''
            }
          ],
          image_stack: [
            '/img/person/person-m-2.webp', '/img/person/person-m-2.webp', '/img/person/person-m-2.webp', '/img/person/person-m-2.webp'
          ]



      }
    }
  }

  @Render('app')
  @Get('resume')
  resume(){
    return {
        page: 'resume',
        title: 'Resume',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Code Lux',          
          socials: [
            {
              icon: 'bi bi-twitter-x',
              link: 'a.link',
              text: 'a Text'
            }
          ],
          caption: 'A concise overview of my skills, experience, and accomplishments in the world of full-stack development and tech innovation.',
          pro_skills: [
            {
              title: 'Full-Stack Development',
              percent: 85,
            },
            {
              title: 'Backend Deveploment',
              percent: 95,
            },
            {
              title: 'Frontend Development',
              percent: 80,
            },
            {
              title: 'Mobile Development',
              percent: 75
            },
            {
              title: 'Database Systems',
              percent: 85
            },
            {
              title: 'Security & Authentication',
              percent: 90
            },
            {
              title: 'API Integration',
              percent: 95
            },
            {
              title: 'System Architecture',
              percent: 90
            },
            {
              title: 'Compiler & Language Design',
              percent: 65
            },
            {
              title: 'Dev Tools & Versioning',
              percent: 70
            }
          ],
          pro_exp: [
            {
              title: 'Junior Backend Engineer',
              year: '2025 - Present',
              place: 'StoneTech, Unguwan Sarki Kaduna',
              roles: [
                'API Integrations and Managing of small projects',
                'Managing Database and Integrations',
                'Building Backend Systems'
              ]
            },
            {
              title: 'Lead Backend Engineer',
              year: '2025 - Present',
              place: 'Scorche Pay',
              roles: [
                'Backend Implementation and Integrations',
                'Third Party API Integration (like PayStack etc)',
                'Building Payment Getways and Webhooks',
                'Building scalable backend systems'
              ]
            },
            {
              title: 'Freelance Developer',
              year: '2021 - Present',
              place: 'Upwork, LinkedIn',
              roles: [
                'Work on various web and mobile projects',
                'Upgrading and Re-write exisiting systems',
                'Help Architect Large Systems'
              ]
            }
          ]

      }
    }
  }

  @Render('app')
  @Get('services')
  service(){
    return {
        page: 'service',
        title: 'Services',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Code Lux',          
          socials: [
            {
              icon: 'bi bi-twitter-x',
              link: 'a.link',
              text: 'a Text'
            }
          ],
          caption: 'Full-stack expertise meets innovative design. Discover the services I provide to transform your vision into reality',
          services: [
            {
              icon: 'bi bi-layers',
              title: 'Full-Stack Web Development',
              note: 'End-to-end development of modern, scalable web applications using clean architecture and best practices. From responsive frontends to secure backends, I build systems optimized for performance and growth.',
              service_id: 1
            },
            {
              icon: 'bi bi-hdd-network',
              title: 'API & Backend Engineering',
              note: 'Designing and implementing robust RESTful and GraphQL APIs with strong authentication, efficient data handling, and production-ready backend logic using ASP.NET Core, Node.js, ExpressJs, and NestJS.',
              service_id: 2
            },
            {
              icon: 'bi bi-phone',
              title: 'Mobile App Development',
              note: 'Building high-performance cross-platform mobile applications with Xamarin.Forms, .NET MAUI and C#, featuring intuitive UI, smooth navigation, and seamless integration with backend services.',
              service_id: 3
            },
            {
              icon: 'bi bi-database-check',
              title: 'Database Design & Management',
              note: 'Creating reliable, optimized databases using MongoDB, SQL Server, and SQLite. I ensure clean schemas, secure data flow, and efficient queries for high-volume applications.',
              service_id: 4
            },
            {
              icon: 'bi bi-shield-lock',
              title: 'Authentication & Security Integration',
              note: 'Implementing secure user authentication systems with JWT, bcrypt, role-based access, and advanced permission structures. I build systems designed to protect user data and maintain trust.',
              service_id: 5
            },
            {
              icon: 'bi bi-diagram-3',
              title: 'Software Architecture & System Design',
              note: 'Crafting well-structured, scalable system architecture for web and mobile applications. I focus on modularity, speed, maintainability, and long-term growth across all project layers.',
              service_id: 6
            }
          ]

      }
    }
  }

  @Render('app')
  @Get('service-details')
  serviceDetails(){
    return {
        page: 'service-view',
        title: 'service-details',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Code Lux',          
          socials: [
            {
              icon: 'bi bi-twitter-x',
              link: 'a.link',
              text: 'a Text'
            }
          ]

      }
    }
  }

  @Render('app')
  @Get('portfolio')
  portfolio(){
    return {
        page: 'portfolio',
        title: 'Portfolio',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Code Lux',          
          socials: [
            {
              icon: 'bi bi-twitter-x',
              link: 'a.link',
              text: 'a Text'
            }
          ],
          projects: [
            {
              image: '/img/portfolio/portfolio-1.webp',
              link: 'https:www.github.com/ibrahimtajudeen/easy-access-backend',
              title: 'Easy Access',
              note: 'A digital market platform',
              tags: [
                'Nestjs', 'Supabase', 'API', 'Backend', 'pending', 'private'
              ],
              category: 'filter-project filter-api filter-backend'
            },
            {
              image: '/img/portfolio/portfolio-1.webp',
              link: 'https:www.github.com/ibrahimtajudeen/event-booking',
              title: 'Event Booking',
              note: 'An event booking platform',
              tags: [
                'Nestjs', 'Postgres', 'API', 'Backend', '⏸'
              ],
              category: 'filter-api filter-backend'
            },
            {
              image: '/img/portfolio/portfolio-1.webp',
              link: 'https://www.github.com/ibrahimtajudeen/auth-folio',
              title: 'Auth Folio',
              note: 'Authentication & Authorization',
              tags: [
                'NestJs', 'JSON', 'API', 'jwt', 'bcrybt', 'finished', 'contributed'
              ],
              category: 'filter-api filter-backend filter-auth'
            },
            {
              image: '/img/portfolio/portfolio-1.webp',
              link: 'https://www.github.com/ibrahimtajudeen/hospital-management-system',
              title: 'Hospital Management System',
              note: 'a site that manage hospital day-to-day operations',
              tags: [
                'C#', 'Asp.Net', 'SQL Server', 'EF Core', 'jQuery', '🔃', 'private'
              ],
              category: 'filter-health filter-fullstack'
            },
            {
              image: '/img/portfolio/portfolio-1.webp',
              link: 'https://www.github.com/ibrahimtajudeen/quickrun-frontend',
              title: 'Quick Run',
              note: 'Freelancing Platform',
              tags: [
                'C#', '.Net MAUI', 'Nextjs', 'Supabase', 'Typescript', 'Tailwind', '⏸'
              ],
              category: 'filter-frontend'
            },
            {
              image: '/img/portfolio/portfolio-1.webp',
              link: 'https://github.com/ibrahimtajudeen/isql',
              title: 'inner Structured Query Language',
              note: 'A custom sql language build with C# (iSql)',
              tags: [
                'C#', 'dev tools', 'meta programming', 'interpreter', 'lexer', 'parser'
              ],
              category: 'filter-compiler filter-dev-tools filter-project'
            },
            {
              image: '/img/portfolio/portfolio-1.webp',
              link: 'https://github.com/ibrahimtajudeen/sms',
              title: 'School Management System',
              note: 'A site that manage school full operations',
              tags: [
                'C#', 'iSql','SQL Server', 'jQuery', '⏸ 90%'
              ],
              category: 'filter-fullstack filter-project'
            },
            {
              image: '/img/portfolio/portfolio-1.webp',
              link: 'https://github.com/ibrahimtajudeen/policecrimediary',
              title: 'Police Crime Diary',
              note: 'A police crime diary report',
              tags: [
                'C#', '🕸 forms', 'Bootstrap', 'SQL Server', '✔'
              ],
              category: 'filter-fullstack filter-project'
            }
            // filter-dev-tools filter-frontend filter-project filter-compiler filter-health filter-fullstack filter-api filter-backend filter-auth
          ]

      }
    }
  }

  @Render('app')
  @Get('portfolio-view')
  portfolioView(){
    return {
        page: 'portfolio-view',
        title: 'portfolio-details',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Code Lux',          
          socials: [
            {
              icon: 'bi bi-twitter-x',
              link: 'a.link',
              text: 'a Text'
            }
          ]

      }
    }
  }

  @Render('app')
  @Get('contact')
  contact(){
    return {
        page: 'contact',
        title: 'Contact',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Code Lux',          
          socials: [
            {
              icon: 'bi bi-twitter-x',
              link: 'a.link',
              text: 'a Text'
            }
          ],
          caption: `I believe great products begin with great conversations. If you have a concept, a plan, or even just a question, feel free to reach out — I’d love to hear from you.`,
          info: [
            {
              icon: 'bi bi-geo-alt',
              title: 'Location',
              line1: 'L13 Abubakar Kigo Road New Extension',
              line2: 'Stadium, Kaduna, Nigeria'
            },
            {
              icon: 'bi bi-phone',
              title: 'Phone Number',
              line1: '+234 81 321 66 576',
              line2: '+234 70 830 64 737'
            },
            {
            icon: 'bi bi-envelope',
            title: 'Email Address',
            line1: 'donslice6@gmail.com',
            line2: 'nexocode10@gmail.com'
          }
          ]

      }
    }
  }
}


