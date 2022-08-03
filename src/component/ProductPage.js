import React from 'react'
import './ProductPage.css'
import {BsFillCalendar3WeekFill} from 'react-icons/bs'
import {BiTimeFive,BiLike} from 'react-icons/bi'
import {FaFreeCodeCamp} from 'react-icons/fa'
import{FcRating} from 'react-icons/fc'
import {AiOutlineArrowRight} from 'react-icons/ai'
export const ProductPage = () => {
  return (
    <>
         <div className='container'>
            <div className='first'>
            <h2 className='heading'>Big Data Hadoop certification training</h2>
            <video className='video' width="70%" height="340" controls>
<source src='' type='mp4'></source>
            </video>
           <div className='likes'><p className='likeicon'><BiLike className='likeicon'/>160k+</p> 
           <p><FcRating/>rating</p>
           <p>read reviews</p></div>
            </div>
            <div className='second'>
          <h1>lorem ipsum text</h1>
           <p>What is Lorem Ipsum?

   remaining essentially unchanged. It was popularised in the 1960s with the 
   
   release of Letraset sheets containing Lorem Ipsum passages, and more recently
    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    <p>Lorem Ipsum is simply dummy text of
 the printing and typesetting industry. Lorem Ipsum has been the industry's
  standard dummy text ever since the 1500s, when an unknown printer took a 
  galley of type and scrambled it to make a type specimen book. It has survived 
  not only five centuries, but also the leap into electronic typesetting,</p>

</p>
<br></br>

<p className='containit'> <BiTimeFive/>35 hours of live learnig</p> <br></br>
<p className='containit'><BsFillCalendar3WeekFill/>wednesday weekend class</p> <br></br>
<p className='containit'> <FaFreeCodeCamp/>4000 off four first 300 students</p> <br></br>

<button className='button'>Enroll  Now<AiOutlineArrowRight className='arrow'/></button>
            </div>
        
          
         </div>
    </>
  )
}
