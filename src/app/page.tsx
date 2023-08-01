import Header from '@/containers/Header'
import Hero from '@/containers/home/Hero'
import Skills from '@/containers/home/Skills'
import WorkExperiencie from '@/containers/home/WorkExperiencie'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WorkExperiencie />
      <Skills />
    </>
  )
}
