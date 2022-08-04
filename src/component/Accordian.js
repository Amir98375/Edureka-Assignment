import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,Button,
    Heading,Text
  } from '@chakra-ui/react'
  import './Accordion.css'
  import {GrDocumentPdf} from 'react-icons/gr'
  import {MdOutlineAssignment,MdOutlineSubject} from 'react-icons/md'
  import {IoIosAddCircle} from 'react-icons/io'
import axios from 'axios'

export const Accordian = () => {
    const [page,setpage]=useState(1)
    const [lastpage,setlastpage]=useState(0)
    const [toggle,settoggle]=useState(false)
    const [data,setdata]=useState([])
    const [limit,setlimit]=useState(5)
    const getData=(limit)=>{
       console.log("limit",limit)
       axios.get(`http://localhost:8080/user`,{
             params:{
                
                _limit:limit
             }
       }) 
       .then((res)=>setdata(res.data))
    }
    useEffect(()=>{
        getData(limit)
        if(data){
            setlastpage(Math.ceil(data.length/5))
        }
    },[limit])
    console.log(data)
    const handlepage=()=>{
       if(page>=1){
        setpage(page+1)
        setlimit(limit+5)
       }
    }
    const showless=()=>{
            if(page>1){
              setpage(page-1)
              setlimit(limit-5)
            }
    }
  
  return (
   <Box bg={"#c2e1f2"} mt={"30px"}>
    <Text ml={"34em"} mt={"20px"}>Big data handoop curriculam</Text>
    <Heading  ml={'27rem'} mt={"20px"} >curriculam designed by expert</Heading>
   {data.map((el)=> <Accordion width={"80%"}  ml={"10%"} bg={"white"} >
  <AccordionItem>
  
  <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
       {el.subject}
        </Box>
       <Box display={"flex"} gap={"50px"} >
       <Box>
        <MdOutlineSubject/> {el.topic}:topic
        </Box>
        <Box ml={"100px"}>
       <MdOutlineAssignment/> {el.assignment}:assignment
        </Box>
       </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  

    <AccordionPanel pb={4} backgroundColor={"grey.400"}>
 <Box display={"flex"} justifyContent={"space-around"}>
    <Box> Topics<ul>
        <li>what is version control </li>
        <li>what is git </li>
        <li>why is git for your organization</li>
        <li>common commands with git </li>
        <li>what is git repository remote</li>
        </ul>
        <Button bg={"white"} color={"grey"}><GrDocumentPdf className='pdf'/>Download full syllabus</Button></Box>
        
    <Box>
        <IoIosAddCircle/>Hands on experience
    <ul className='unorder'>
  
        <li>what is git </li>
        <li>why is git for your organization</li>
        <li>common commands with git </li>
        <li>what is git repository remote</li>
       
        </ul> 
    </Box>
    <Box><p><IoIosAddCircle/><span>Skills you will learn</span></p>
    <ul>
  
        <li>what is git </li>
        <li>why is git for your organization</li>
        <li>common commands with git </li>
        <li>what is git repository remote</li>
        </ul>
    </Box> 
 </Box>
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>)}
<Button ml={"38em"} mt={"20px"} onClick={handlepage} disabled={page==lastpage}>Show more</Button>
{page>1?<Button onClick={showless} mt={"20px"}>show less</Button>:null}
  </Box>
  )
}
