import Image from 'next/image'
import React from 'react'

const Skills = () => {
  interface Skill {
    id: number
    title: string
    description: string
    stack: string[]
  }

  const skill: Skill[] = [
    {
      id: 1,
      title: 'HTML',
      description:
        'Proficiency for creating semantic structure and content of web pages.',
      stack: ['HTML'],
    },
    {
      id: 2,
      title: 'CSS',
      description:
        'Designing and styling web pages, ensuring both responsiveness and accessibility.',
      stack: ['CSS', 'SASS', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      id: 3,
      title: 'JavaScript',
      description:
        'Programming language for interactive and dynamic web development.',
      stack: ['JavaScript', 'TypeScript', 'React', 'Next.js'],
    },
    {
      id: 4,
      title: 'UI Design',
      description: 'Familiarity and extensive experience with design tools.',
      stack: ['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Illustrator'],
    },
  ]

  return (
    <div className="w-100 border-b bg-cdark text-clight border-caccent/[.10]">
      <div className="container py-12 mx-auto">
        <p className="uppercase font-bold text-puerto-rico-400 text-[15px] tracking-widest">
          Hard &amp; Soft Skills
        </p>
        <div className="grid grid-cols-4 gap-4 py-4">
          {skill.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start gap-2 p-5 bg-clight/5 rounded-[30px] border border-clight/5"
            >
              <p className="font-serif text-puerto-rico-50 text-[21px] font-black leading-[1.2]">
                {item.title}
              </p>
              <p className="font-sans text-puerto-rico-50 text-shark-300 text-[18px] leading-[1.35] mb-4">
                {item.description}
              </p>
              <div className="flex-grow"></div>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((item) => (
                  <div key={item} className="text-shark-500">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
