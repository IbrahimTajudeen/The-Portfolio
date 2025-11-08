/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

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
          nickname: 'Nexo code',
          typo: {
            caption: 'Creative',
            items: 'Full-stack Developer, Web Developer, Mobile Developer, Compiler Designer'
          },
          intro: `am a passionate software developer and language designer. I love building complex programms and services for companies, individuals and even for myself....
                In my mean time doing nothing, i Like to explore the compiler world and also compression algorithms, maybe because am also obssesed with them.`,
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
              icon: '',
              text: '',
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
