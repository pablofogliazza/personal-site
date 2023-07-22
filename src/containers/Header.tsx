import Brand from '@/components/Brand'
import Nav from '@/components/Nav'
import OptionNav from '@/components/OptionNav'
import React from 'react'

const Header = () => {
    return (
        <div className="w-100 border-b bg-cdark text-clight border-caccent/[.10]">
            <div className='mx-auto container flex items-center justify-between'>
                <Brand />
                <Nav />
                <OptionNav />
            </div>
        </div>
  )
}

export default Header