/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { flushCompileCache } from 'module';
import { title } from 'process';
import { not } from 'rxjs/internal/util/not';

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
          }


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
          nickname: 'Nexo code',          
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
  @Get('services')
  service(){
    return {
        page: 'service',
        title: 'Services',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Nexo code',          
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
  @Get('service-details')
  serviceDetails(){
    return {
        page: 'service-view',
        title: 'service-details',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Nexo code',          
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
          nickname: 'Nexo code',          
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
  @Get('portfolio-view')
  portfolioView(){
    return {
        page: 'portfolio-view',
        title: 'portfolio-details',
        data: {
          name: 'Ibrahim Tajudeen',
          nickname: 'Nexo code',          
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
          nickname: 'Nexo code',          
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
}


