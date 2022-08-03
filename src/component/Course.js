import React from 'react'
import './Course.css'
import {BsFillCalendar3WeekFill} from 'react-icons/bs'
import {BiTimeFive,BiLike} from 'react-icons/bi'
import {FaFreeCodeCamp,FaRupeeSign,FaCcVisa,FaCcMastercard} from 'react-icons/fa'
import{FcRating} from 'react-icons/fc'
import {AiOutlineArrowRight,AiFillUnlock} from 'react-icons/ai'
import { Heading,Text ,Box} from '@chakra-ui/react'

export const Course = () => {
  return (
    <>
         <div className='container-course'>
            <div className='first-course'>
            <h2 className='heading-course'>Big Data Hadoop certification training</h2>
            <video className='video-course' width="70%" height="340" controls>
<source src='' type='mp4'></source>
            </video>
           <div className='likes-course'><p className='likeicon-course'><BiLike className='likeicon'/>160k+</p> 
           <p><FcRating/>rating</p>
           <p>read reviews</p></div>
            </div>
            <div className='second-course'>
        <Box mt={"30px"}  display={"flex"} justifyContent={"space-around"} justifyItems={"center"}>
           <Heading display={"flex"}><FaRupeeSign/>23300</Heading><Text mt={"10px"}
           color={"grey"} textDecoration={"line-through"}>price rs:23400</Text></Box><br/>
   
<br></br>
<Box display={"flex"} justifyContent={"space-around"}>
  <Text>15% off save 1544</Text>
  <Text color={"grey"}>enter the coupon code</Text>
</Box><br/>
<Box display={"flex"} gap={"3px"} justifyContent={"space-around"}>
  <Text color={"red"}>No cost emi</Text>
  <Text>start at 1699/month </Text><Text color={"blue"}>View details</Text>
</Box><br></br>


<button className='button-course'>Enroll  Now</button>
<Box display={"flex"} justifyItems={"center"} p={"1rem"} ml={"8rem"}><AiFillUnlock/>secure transaction</Box>
<Box display={"flex"}
justifyContent={"space-evenly"}><Text fontSize={"5em"}  color="red"><FaCcMastercard/></Text>
<Text color={"blue"} fontSize={"30px"} mt={"0.9em"}>VISA</Text></Box>
            </div>
        
          
         </div>
    </>
  )
}
