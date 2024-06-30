import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Experiences from '../components/Experiences'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { sanityClient } from '../sanity'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchExperience } from '../utils/fetchExperience'

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  experiences: Experience[];
  socials: Social[];
  skills: Skill[];
}

const Home = ({pageInfo, experiences, skills, socials,  projects}: Props) => {

  return (
    <div className='bg-[rgb(36,36,36)]  text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Hussain Rampurawala</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
        <Header/>

      {/* Hero */}
      <section id='hero-section' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id='about-section' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience */}
      <section id="experience-section" className='snap-center'>
        <Experiences experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id='skills-section' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='project-section' className='snap-start '>
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id='contact-section' className='snap-start'>
        <Contact/>
      </section>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async() => {
  try {
    const pageInfo: PageInfo = await fetchPageInfo();
    const skills: Skill[] = await fetchSkills();
    const socials: Social[] = await fetchSocials();
    const projects: Project[] = await fetchProjects();
    const experiences: Experience[] = await fetchExperience();

    return {
      props: {
        pageInfo,
        skills,
        socials,
        projects,
        experiences
      },
      revalidate: 100
    }
  } catch (error) {
    // Handle errors gracefully
    console.error('Error fetching data');
    
    // Optionally return a notFound flag or an empty props object
    return {
        notFound: true  // This will cause a 404 page to be rendered
    };
}
}