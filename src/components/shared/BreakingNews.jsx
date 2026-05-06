import React from 'react'
import Marquee from 'react-fast-marquee'


const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Bangladesh 2026"
  },
  {
    _id: "2",
    title: "Tech Industry Sees Huge Growth in Bangladesh"
  },
  {
    _id: "3",
    title: "National Cricket Team Wins Historic Series"
  },
  {
    _id: "4",
    title: "Dhaka Metro Rail Expansion Project Announced"
  },
  {
    _id: "5",
    title: "New Education Policy Introduced for Students"
  }
]

const BreakingNews = () => {
  return (
    <div className='flex items-center gap-4  py-4 bg-gray-200 container mx-auto px-2'>
        <button className='btn bg-red-600 text-white'>Latest</button>
        <Marquee speed={60} pauseOnHover={true}>
        {news.map((n)=>{
           return <span className="mr-10 " key={n.id}>{n.title}</span>
        })}
        </Marquee>
    </div>
  )
}

export default BreakingNews