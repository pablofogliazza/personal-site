import Image from 'next/image'
import React from 'react'

const WorkExperiencie = () => {
  interface Work {
    id: number
    company: string
    position: string
    dateStart: string
    dateEnd: string
    image: string
  }

  const work: Work[] = [
    // {
    //   id: 1,
    //   company: 'Estudio Árbol',
    //   position: 'Co-founder',
    //   dateStart: 'January 2013',
    //   dateEnd: 'December 2016',
    //   image: '/arbol.jpg',
    // },
    {
      id: 2,
      company: 'Freelance',
      position: 'Web Developer',
      dateStart: 'January 2006',
      dateEnd: 'October 2021',
      image: '/freelance.jpg',
    },
    {
      id: 3,
      company: 'Forma',
      position: 'Front-end Developer',
      dateStart: 'October 2021',
      dateEnd: 'Present',
      image: '/forma.jpg',
    },
  ]

  return (
    <div className="border-b w-100 bg-shark-950 text-puerto-rico-50 border-shark-900">
      <div className="container py-12 mx-auto">
        <p className="uppercase font-bold text-puerto-rico-400 text-[15px] tracking-widest">
          work experience
        </p>
        <div className="grid grid-cols-2 gap-4 py-4">
          {work
            .map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-5 bg-shark-900/50 rounded-[30px] border border-shark-800"
              >
                <div className="w-[115px] rounded-[15px] overflow-hidden flex-shrink-0 shadow">
                  <Image src={item.image} alt="" width={115} height={115} />
                </div>
                <div className="flex flex-col flex-grow gap-3">
                  <div className="flex items-center gap-1 font-sans text-shark-500 font-medium text-[14px] tracking-wide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      className="flex-shrink-0 stroke-shark-500"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={1.5}
                        d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
                      />
                    </svg>
                    {item.dateStart} &mdash; {item.dateEnd}
                  </div>
                  <div className="font-serif text-puerto-rico-50 pl-1 text-[26px] font-black leading-[1.2]">
                    {item.position}{' '}
                    <span className="font-light">
                      <br />
                      at
                    </span>{' '}
                    {item.company}
                    <span className="text-puerto-rico-400">.</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={14}
                    fill="none"
                    className="flex-shrink-0 stroke-shark-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit={10}
                      strokeWidth={1.5}
                      d="M12.43.93 18.5 7l-6.07 6.07M1.5 7h16.83"
                    />
                  </svg>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  )
}

export default WorkExperiencie
