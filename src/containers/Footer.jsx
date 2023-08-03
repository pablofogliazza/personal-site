'use client'
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [commit, setCommit] = useState([])
  const fetchCommitData = () => {
    fetch(
      'https://api.github.com/repos/pablofogliazza/personal-site/commits?per_page=1'
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const dateCommit = new Date(data[0].commit.committer.date)
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
        const date = dateCommit.toLocaleDateString('en-US', options)

        const lastCommit = {
          date: date,
          message: data[0].commit.message,
        }
        setCommit(lastCommit)
      })
  }

  useEffect(() => {
    fetchCommitData()
  }, [])

  return (
    <div className="px-5 py-12 w-100 bg-cdark text-clight">
      <div className="container flex items-center justify-between mx-auto">
        <p className="text-sm font-semibold text-shark-500">
          &copy; 2006 &mdash; 2023 &middot; Working for the better web.
        </p>

        <p
          className="text-sm font-semibold text-right text-shark-500"
          key={commit.date}
        >
          Last update: {commit.date}.<br />
          {commit.message}
        </p>
      </div>
    </div>
  )
}

export default Footer
