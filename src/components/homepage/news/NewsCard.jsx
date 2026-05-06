import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci'
import { FaEye } from 'react-icons/fa'

const NewsCard = ({news}) => {
  return (
    <div>
        <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
    {/* Author info  */}
    <div className='flex bg-slate-200 items-center justify-between'>
        <div className='flex gap-1 items-center'>
        <div>
            <Image 
            src={news.author?.img} 
            alt={news.author?.name} 
            height={40} 
            width={40}
            className='rounded-full'
            />
        </div>
        <div>
            <h2 className='font-bold'>{news.author?.name}</h2>
            <h2>{news.author?.published_date}</h2>
        </div>
    </div>
        <div className='flex items-center gap-1'>
    <CiShare2 className='text-xl'/>
    <CiBookmark className='text-xl'/>
        </div>
    </div>

    <h2 className="card-title">{news.title}</h2>
   
  </div>
  <figure>
   <Image src={news?.image_url}
   alt={news.title}
   width={300}
   height={300}
   className='w-full'
   />
  </figure>

  <p className='line-clamp-3'>{news?.details}</p>

  <div className='flex items-center gap-2 justify-between'>
    <div className='flex items-center gap-2'>
       <h2 className='flex items-center gap-2'>
         <CiStar className='text-lg text-yellow-500  bg-yellow-200'/>
       <p>{news.total_view}</p> 
       </h2>

       <h2 className='flex items-center gap-2'>
         <FaEye/>
        <p>{news.rating.number}</p> 
       </h2>
      
    </div>
    <Link href={`/news/${news._id}`}>
    <button className='btn'>See details</button>
    </Link>
    
  </div>
</div>
    </div>
  )
}

export default NewsCard