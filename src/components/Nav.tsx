import React from 'react'

const Nav = () => {
  interface Navegation {
    name: string
    url: string
  }

  const nav: Navegation[] = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About Me',
      url: '/about',
    },
    {
      name: 'Portfolio',
      url: '/portfolio',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Contact Me',
      url: '/contact',
    },
  ]

  return (
    <div className="flex gap-4">
      {nav.map((item, index) => (
        <a
          key={index}
          href={item.url}
          className="py-8 lowercase text-[15px] border-b-2 border-transparent"
        >
          {item.name}
        </a>
      ))}
    </div>
  )
}

export default Nav
