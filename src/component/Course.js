import React, { useEffect, useState } from 'react'
import './Course.css'
import {BsFillCalendar3WeekFill} from 'react-icons/bs'
import {BiTimeFive,BiLike} from 'react-icons/bi'
import {FaFreeCodeCamp,FaRupeeSign,FaCcVisa,FaCcMastercard} from 'react-icons/fa'
import{FcRating} from 'react-icons/fc'
import {AiOutlineArrowRight,AiFillUnlock} from 'react-icons/ai'
import { Heading,Text ,Box,Radio,Checkbox} from '@chakra-ui/react'
import axios from 'axios'

export const Course = () => {
  const [data,setdata]=useState([])
  const getData=()=>{
    axios.get(`http://localhost:8080/course`)
    .then((res)=>setdata(res.data))
  }
  useEffect(()=>{
    getData()
  },[])
  console.log(data,)

  return (
    <>
         <div className='container-course'>
         <div className='first-course'>
{
  data?.map((el)=>
  <div className='course-choose'>
  <Checkbox mb={"22px"}></Checkbox>
   <Text>{el.date}</Text>
   <Text>{el.week}</Text>
   <Text>{el.time}</Text>
   <hr></hr>
  </div>
  )
 
}
{/* <div className='course-choose'>1</div>
<hr></hr>
<div className='course-choose'>1</div>
<hr></hr>
<div className='course-choose'>1</div>
<div className='course-choose'>1</div> */}
          
          
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
