import React from 'react'

const Hero = () => {
  return (
    <div className="border-b w-100 bg-shark-950 text-puerto-rico-50 border-shark-900">
      <div className="container grid grid-cols-2 gap-4 py-24 mx-auto">
        <div className="flex flex-col gap-7">
          <p className="uppercase font-bold text-puerto-rico-400 text-[15px] tracking-widest">
            Hello, my name is Pablo
          </p>
          <p className="font-serif text-5xl font-black leading-none">
            UI Designer & <br />
            Front-end Developer
            <span className="text-puerto-rico-400">.</span>
          </p>
          <p className="text-[21px] leading-snug text-shark-300 max-w-[40ch]">
            Web developer with 17+ years of experience specializing in
            converting design into code.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/resume-pablo-fogliazza.pdf"
              title="Download Resume as .pdf"
              className="inline-block py-4 px-8 rounded-full bg-puerto-rico-50 text-[14px] leading-none font-bold tracking-wide uppercase text-shark-950 hover:bg-puerto-rico-400"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/pablofogliazza/"
              className="fill-puerto-rico-50 hover:fill-puerto-rico-400"
              title="Contact me on LinkedIn"
            >
              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455l-.001 6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>
            <a
              href="https://github.com/pablofogliazza"
              title="View my projects on GitHub"
              className="fill-puerto-rico-50 hover:fill-puerto-rico-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12Z" />
              </svg>
            </a>
            <a
              href="https://www.threads.net/@pablofogliazza"
              className="fill-puerto-rico-50 hover:fill-puerto-rico-400"
              title="Follow me on Threads"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={21} height={24}>
                <path d="M16.067 11.123a8.467 8.467 0 0 0-.315-.142c-.185-3.414-2.05-5.368-5.182-5.388h-.042c-1.874 0-3.431.8-4.39 2.255L7.86 9.029C8.576 7.942 9.7 7.71 10.529 7.71h.028c1.031.007 1.81.307 2.313.892.367.425.612 1.014.733 1.756a13.177 13.177 0 0 0-2.96-.143c-2.977.172-4.892 1.908-4.763 4.321.065 1.224.675 2.277 1.717 2.965.88.582 2.015.866 3.195.802 1.557-.086 2.778-.68 3.63-1.766.648-.825 1.057-1.894 1.238-3.241.742.448 1.292 1.037 1.596 1.745.517 1.205.547 3.184-1.068 4.797-1.415 1.414-3.116 2.025-5.686 2.044-2.851-.02-5.008-.935-6.41-2.717-1.313-1.67-1.991-4.08-2.016-7.165.025-3.085.703-5.496 2.016-7.165 1.402-1.782 3.558-2.696 6.41-2.717 2.871.02 5.065.94 6.521 2.73.714.879 1.252 1.983 1.607 3.27l2.018-.538c-.43-1.585-1.107-2.95-2.027-4.083C16.754 1.2 14.024.024 10.509 0h-.014C6.984.024 4.287 1.205 2.474 3.51.86 5.56.028 8.415 0 11.992v.016c.028 3.578.86 6.431 2.473 8.482 1.813 2.305 4.512 3.486 8.022 3.51h.014c3.12-.022 5.319-.839 7.13-2.649 2.371-2.368 2.3-5.336 1.518-7.158-.56-1.307-1.629-2.368-3.09-3.07Zm-5.387 5.065c-1.305.074-2.66-.512-2.728-1.766-.05-.93.662-1.969 2.808-2.092.246-.015.487-.021.724-.021.78 0 1.508.075 2.171.22-.247 3.088-1.697 3.589-2.975 3.659Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
