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
    {
      id: 1,
      company: 'Estudio Árbol',
      position: 'Co-founder',
      dateStart: 'January 2013',
      dateEnd: 'December 2016',
      image: '/arbol.jpg',
    },
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
    <div className="w-100 border-b bg-cdark text-clight border-caccent/[.10]">
      <div className="container py-12 mx-auto">
        <p className="uppercase font-bold text-caccent text-[15px] tracking-widest">
          work experience
        </p>
        <div className="grid grid-cols-3 gap-4 py-4">
          {work
            .map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-5 bg-clight/5 rounded-[30px] border border-clight/5"
              >
                <div className="w-[115px] rounded-[15px] overflow-hidden flex-shrink-0 shadow-lg shadow-cdark">
                  <Image src={item.image} alt="" width={115} height={115} />
                </div>
                <div className="flex flex-col flex-grow gap-3">
                  <div className="flex items-center gap-1 font-sans text-clight/50 text-[14px] tracking-wide">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      className="stroke-clight/50"
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
                  <div className="font-serif text-clight text-[24px] font-black leading-[1.2]">
                    {item.position}{' '}
                    <span className="font-light">
                      <br />
                      at
                    </span>{' '}
                    {item.company}
                    <span className="text-caccent">.</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g opacity="0.7">
                      <path
                        d="M14.43 5.92999L20.5 12L14.43 18.07"
                        stroke="#F3F8F9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.5 12H20.33"
                        stroke="#F3F8F9"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
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
