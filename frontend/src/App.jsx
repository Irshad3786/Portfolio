import { useReducer, useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css'
import { useEffect } from 'react';
import profile from '../src/assets/profile.png'
import react from '../src/assets/react.png'
import nodejs from '../src/assets/nodejs.png'
import svgone from '../src/assets/shapes/01.svg'
import svgtwo from '../src/assets/shapes/02.svg'
import svgthree from '../src/assets/shapes/03.svg'
import svgfour from '../src/assets/shapes/04.svg'
import svgfive from '../src/assets/shapes/05.svg'
import svgsix from '../src/assets/shapes/06.svg'
import svgseven from '../src/assets/shapes/07.svg'
import svgeight from '../src/assets/shapes/08.svg'
import svgnine from '../src/assets/shapes/09.svg'
import svgten from '../src/assets/shapes/10.svg'
import svgeleven from '../src/assets/shapes/11.svg'
import express from '../src/assets/express.png'
import mongodb from '../src/assets/mongodb.png'
import python from '../src/assets/python.png'
import java from '../src/assets/java.png'
import js from '../src/assets/js.png'
import github from '../src/assets/github.png'
import aws from '../src/assets/aws.png'
import ubuntu from '../src/assets/ubuntu.png'
import nginx from '../src/assets/nginx.png'
import figma from '../src/assets/figma.png'
import ps from '../src/assets/ps.png'
import nutricare from '../src/assets/nutricare.png'
import project2 from '../src/assets/project2.png'
import pr from '../src/assets/pr.png'



import { useLayoutEffect } from 'react';

function App() {
 

  const [shuffledSvgs, setShuffledSvgs] = useState([]);
  const [shuffledSvgs01, setShuffledSvgs01] = useState([]);
  const [shuffledSvgs02, setShuffledSvgs02] = useState([]);
  const [shuffledSvgs03, setShuffledSvgs03] = useState([]);
  const [shuffledSvgs04, setShuffledSvgs04] = useState([]);
  const [direction , setDirection] = useState("right")
  

  const svgs = [
    svgone, svgtwo, svgthree, svgfour, svgfive, svgsix,
    svgseven, svgeight, svgnine, svgten, svgeleven,svgone, svgtwo, svgthree, svgfour, svgfive, svgsix,
    svgseven, svgeight, svgnine, svgten, svgeleven,svgone, svgtwo, svgthree, svgfour, svgfive, svgsix,
    svgseven, svgeight, svgnine,svgeight, svgnine, svgten, svgeleven,svgone, svgtwo, svgthree, svgfour, svgfive, svgsix,
    svgseven, svgeight, svgnine,svgeight, svgnine, svgten, svgeleven,svgone, svgtwo, svgthree, svgfour, svgfive, svgsix,
    svgseven, svgeight, svgnine,
  ];


  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  

  

  useEffect(() => {
    setShuffledSvgs(shuffleArray([...svgs]));
    setShuffledSvgs01(shuffleArray([...svgs]));
    setShuffledSvgs02(shuffleArray([...svgs]));
    setShuffledSvgs03(shuffleArray([...svgs]));
    setShuffledSvgs04(shuffleArray([...svgs]));

  }, []);


  useLayoutEffect(() => {
    if (!scrollRef.current) return; 

    gsap.killTweensOf(scrollRef.current);

    gsap.to(scrollRef.current, {
      x: direction === "left" ? "0%" : "-200%",
      duration: direction === "left" ? 5 : 20,
      ease: "none",
      repeat: -1,
      pointerEvents: "auto"
    }); 
  }, [direction]);
  

  
  const menu = useRef()
  const textone = useRef()
  const texttwo = useRef()
  const textthree = useRef()
  const textfour = useRef()
  const textfive = useRef()
  const scrollRef = useRef();
  const imagebox = useRef(null);



  const tl = gsap.timeline();

  useGSAP(()=>{
    tl.from(textone.current,{
      duration:0.8,
      delay:0.4,
      opacity:0,
      stagger: 0.2,
      ease: "power2.out",
      pointerEvents: "auto"
    })

    tl.from(texttwo.current,{
      duration:1,
      y:-100,
      opacity:0,
      stagger: 0.2,
      ease: "elastic.out(1,0.3)",
      pointerEvents: "auto"
    })

    tl.from(textthree.current,{
      duration:1,
      x:-200,
      opacity:0,
      stagger: 0.2,
      ease:  "back.out(1.7)",
      pointerEvents: "auto"
    })

    tl.from(textfour.current,{
      duration:1,
      x : 200,
      opacity:0,
      stagger: 0.2,
      ease: "back.out(1.7)",
      pointerEvents: "auto"
    })

    tl.from(textfive.current,{
      duration:0.5,
     
      opacity:0,
      stagger: 0.2,
      ease: "power2.out",
      pointerEvents: "auto"
    })
  })

  

  useGSAP(()=>{
    gsap.from(menu.current.children,{
      duration: 1, 
      delay: 0.5,
      opacity: 0,
      y: 20, 
      stagger: 0.2, 
      ease: "power2.out",
      pointerEvents: "auto"
    })
  })

  



  

  
  
    
 

  return (
    <>
      <div className='w-full min-h-screen bg-black '>
        <div className='flex  px-3 middletwo:px-10  justify-between'>
          <div className='p-4 flex justify-center  items-center h-28 px-3 middleone:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#fff" d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"/></g></svg>
          </div>
          <div className='pt-8 sm:justify-start ' >
              <div>
                <div className='bg-colorone flex space-x-2 w-fit p-2 px-4 absolute space-y-1'>
                  <div>
                    <h1 className='text-3xl middletwo:text-4xl'>|</h1>
                  </div>
                  <div>
                    <h1 className='font-rocko text-xs middletwo:text-base'>IRSHAD </h1>
                    <h1 className='font-rocko text-xs middletwo:text-base' >MOHAMMAD </h1>
                  </div>
                </div>
              </div>

              <div className='p-3'>
                <div className='bg-colortwo flex space-x-2  p-2 px-4 h-12 w-[115px] middletwo:h-[65px] middletwo:w-[145px]'>
                
                </div>
              </div>

          </div>

          <div className='hidden middleone:flex text-white justify-between gap-4 font-rocko items-center p-3 middletwo:text-xl middletwo:gap-7' ref={menu}>
            <h1 >Home</h1>
            <h1>Why Me</h1>
            <h1>Projects</h1>
            <h1>Contact</h1>
          </div>


          <div className='pt-8 sm:justify-start ' >
              <div>
                <div className='bg-colorone flex space-x-2 w-fit p-2 px-4 rounded-3xl absolute '>
                  
                  <div>
                   
                    <h1 className='font-rocko flex justify-center items-center gap-2 text-xs middletwo:text-lg'>Resume<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z" stroke-width="0.5" stroke="#000"/></svg></h1>
                  </div>
                </div>
              </div>

              <div className='p-3'>
                <div className='bg-colortwo flex space-x-2  p-2 px-4 h-9 w-[100px] middletwo:h-10 middletwo:w-[125px] rounded-3xl'>
                
                </div>
              </div>

          </div>
        </div> 
        <div className='flex flex-col justify-center items-center gap-16 middleone:flex-row middletwo:flex-row  middletwo:justify-between middleone:px-20 middletwo:px-32 middlethree:px-52 middleone:pt-12'>
          <div>
            <h1 className='font-Barlow text-colorone flex items-center gap-2 text-4xl middletwo:text-5xl middlethree:text-6xl'  ref={textone}>Crafting <h1 className='font-caveat text-colorone text-2xl  middletwo:text-3xl middlethree:text-4xl ' ref={texttwo}>Ideas ,</h1></h1>
            <h1 className='font-Barlow text-colorone text-4xl  middletwo:text-5xl middlethree:text-6xl' ref={textthree}>Designing</h1>
            <h1 className='font-Barlow text-colorone text-4xl l middletwo:text-5xl middlethree:text-6xl ' ref={textfour}>Futures <span ref={textfive}>.</span></h1>
          </div>
          <div>
            <div className='h-64 w-64 bg-colorone middleone:h-72 middleone:w-72 middletwo:h-80 middletwo:w-80 middlethree:h-96 middlethree:w-96 flex items-end relative overflow-hidden '   ref={imagebox}>
                <div className='flex flex-col gap-3 transform translate-x-[0%]' ref={scrollRef}>
                  <div className='flex gap-2' >
                  {shuffledSvgs.map((value,index)=>(
                    <img src={value} alt="" srcset="" key={index} className='h-16' />
                  ))}
                  </div>
 
                  <div className='flex gap-2' >
                  {shuffledSvgs01.map((value,index)=>(
                    <img src={value} alt="" srcset="" key={index} className='h-16' />
                  ))}
                  </div>

                  <div className='flex gap-2' >
                  {shuffledSvgs02.map((value,index)=>(
                    <img src={value} alt="" srcset="" key={index} className='h-16' />
                  ))}
                  </div>

                  <div className='flex gap-2' >
                  {shuffledSvgs03.map((value,index)=>(
                    <img src={value} alt="" srcset="" key={index} className='h-16' />
                  ))}
                  </div>

                  <div className='flex gap-2' >
                  {shuffledSvgs04.map((value,index)=>(
                    <img src={value} alt="" srcset="" key={index} className='h-16' />
                  ))}
                  </div>
               
                </div>

                
                <img src={profile} className='w-[100%]  absolute' />
            </div>
          </div>
        </div>

        <div className=' mt-36 mb-20'>
          <h1 className='font-Playwrite text-white text-2xl text-center  middlethree:text-3xl'>Why Me</h1>
        </div>
        
      <div className='relative z-20'>
        <div >
          <div className=' mx-14 mt-4 z-10 relative'> 
            <p className='font-Barlow text-white text-xl'>I am a versatile full-stack developer with expertise in the <span className='bg-gradient-to-br from-green-400 to-neutral-700 text-transparent bg-clip-text'>M</span>  <span className='bg-gradient-to-br from-yellow-300 to-gray-300 text-transparent bg-clip-text'>E</span> <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text'>R</span> <span className='bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text'>N</span> stack (MongoDB, Express.js, React, Node.js) and a strong focus on front-end development. I specialize in building highly interactive, fast, and responsive user interfaces using React.js, ensuring seamless user experiences.</p>
          </div>
          
          <div className='mx-14 mt-8 flex flex-wrap justify-center items-center gap-5 pb-5 middlethree:gap-20 z-10 relative'>
  

              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 opacity-30 blur-xl rounded-2xl z-0'></div>
                  <img src={react} className='h-20 z-10' />
                </div>
              </div>

            
              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={nodejs} className='h-14 z-10' />
                </div>
              </div>

              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-500 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-slate-200 to-slate-500 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={express} className='h-[60px] z-10' />
                </div>
              </div>

              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-green-400 to-amber-700 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-green-400 to-amber-700 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={mongodb} className='h-[60px] z-10' />
                </div>
              </div>

          </div>
          

        </div>
        

        <div >
          <div className=' mx-14 mt-4 z-10 relative'> 
            <p className='font-Barlow text-white text-xl'>I have a solid understanding of programming concepts in <span className='bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text'>Python</span>, <span className='bg-gradient-to-r from-orange-500 to-blue-400 text-transparent bg-clip-text'>Java</span>  and <span className='bg-gradient-to-r from-yellow-500 to-amber-900 text-transparent bg-clip-text'>JavaScript</span>. I'm familiar with the fundamentals of each language and enjoy applying my knowledge to solve coding challenges and enhance my skills.</p>
          </div>
          
          <div className='mx-14 mt-8 flex flex-wrap justify-center items-center gap-5 pb-5 middlethree:gap-20 z-10 relative'>
  

              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-600 to-yellow-400 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-24 h-24 bg-gradient-to-br from-blue-600 to-yellow-400 opacity-30 blur-xl rounded-2xl z-0'></div>
                  <img src={python} className='h-20 z-10' />
                </div>
              </div>

            
              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-blue-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-yellow-400 to-blue-600 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={java} className='h-14 z-10' />
                </div>
              </div>

              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={js} className='h-[60px] z-10' />
                </div>
              </div>

              

          </div>

        </div>


        <div >
          <div className=' mx-14 mt-4 z-10 relative'> 
            <p className='font-Barlow text-white text-xl'>I have a solid understanding of <span className='bg-gradient-to-r from-slate-500 to-white text-transparent bg-clip-text'>GitHub</span>, <span className='bg-gradient-to-r from-green-500 to-green-300 text-transparent bg-clip-text'>Nginx</span>, <span className='bg-gradient-to-r from-amber-500 to-slate-500 text-transparent bg-clip-text'>AWS</span>, and <span className='bg-gradient-to-r from-amber-700 to-white text-transparent bg-clip-text'>Ubuntu</span>. I'm comfortable with using GitHub for version control, including creating repositories, committing changes, and collaborating with others. With Nginx, I can configure it as a web server on Ubuntu systems. I have experience managing AWS EC2 instances and performing routine tasks such as software installation and system updates on Ubuntu. I continuously enhance my skills by exploring these technologies and their applications.</p>
          </div>
          
          <div className='mx-14 mt-8 flex flex-wrap justify-center items-center gap-5 pb-5 middlethree:gap-20 z-10 relative'>
  

              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-white to-slate-500 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-24 h-24 bg-gradient-to-br from-white to-slate-500 opacity-30 blur-xl rounded-2xl z-0'></div>
                  <img src={github} className='h-20 z-10' />
                </div>
              </div>

            
              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={nginx} className='h-14 z-10' />
                </div>
              </div>

              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-amber-200 to-gray-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-black to-yellow-500 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={aws} className='h-[60px] z-10' />
                </div>
              </div>


              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-red-400 to-yellow-500 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-red-400 to-yellow-500 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={ubuntu} className='h-[60px] z-10' />
                </div>
              </div>

              

          </div>

        </div>


        <div >
          <div className=' mx-14 mt-4 z-10 relative '> 
            <p className='font-Barlow text-white text-xl'>I have a solid understanding of UI/UX design principles and am proficient in using <span className='bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text'>Figma</span> to create intuitive and visually appealing user interfaces. Additionally, I am skilled in <span className='bg-gradient-to-r from-slate-600 to-sky-500 text-transparent bg-clip-text'>Adobe Photoshop</span> for graphic design tasks and <span className='bg-gradient-to-r from-slate-600 to-indigo-600 text-transparent bg-clip-text'>Adobe Premiere Pro</span> for video editing, enabling me to produce engaging visual content across various media platforms.​

          </p>
          </div>
          
          <div className='mx-14 mt-8 flex flex-wrap justify-center items-center gap-5 pb-5 middlethree:gap-20 z-10 relative'>
  

              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-pink-500 to-cyan-400 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-24 h-24 bg-gradient-to-br from-pink-500 to-cyan-400 opacity-30 blur-xl rounded-2xl z-0'></div>
                  <img src={figma} className='h-20 z-10' />
                </div>
              </div>

            
              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-slate-600 to-sky-500 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-slate-600 to-sky-500 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={ps} className='h-14 z-10' />
                </div>
              </div>

              <div className='group relative w-28 h-28 flex justify-center items-center'>
                <div className='absolute -inset-3 rounded-2xl bg-gradient-to-br from-slate-500 to-indigo-600 opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-300 z-0 pointer-events-none'></div>
                <div className='relative w-28 h-28 bg-[#1e1d1c] border-[3px] border-zinc-600 rounded-2xl flex justify-center items-center z-10'>
                  <div className='absolute w-14 h-14 bg-gradient-to-br from-slate-500 to-indigo-600 opacity-30 blur-xl rounded-full z-0'></div>
                  <img src={pr} className='h-[60px] z-10' />
                </div>
              </div>
              

          </div>

        </div>


        <div className='overflow-hidden absolute z-0 top-0 left-0 w-full h-full '>
          <div className='overflow-hidden absolute top-0 left-0 w-full h-full z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="800" viewBox="0 0 1600 800 " opacity="0.3"><rect fill="#000000" width="1600"  height="800"/><path fill="#E9FF09" d="M1102.5 734.8c2.5-1.2 24.8-8.6 25.6-7.5.5.7-3.9 23.8-4.6 24.5C1123.3 752.1 1107.5 739.5 1102.5 734.8zM1226.3 229.1c0-.1-4.9-9.4-7-14.2-.1-.3-.3-1.1-.4-1.6-.1-.4-.3-.7-.6-.9-.3-.2-.6-.1-.8.1l-13.1 12.3c0 0 0 0 0 0-.2.2-.3.5-.4.8 0 .3 0 .7.2 1 .1.1 1.4 2.5 2.1 3.6 2.4 3.7 6.5 12.1 6.5 12.2.2.3.4.5.7.6.3 0 .5-.1.7-.3 0 0 1.8-2.5 2.7-3.6 1.5-1.6 3-3.2 4.6-4.7 1.2-1.2 1.6-1.4 2.1-1.6.5-.3 1.1-.5 2.5-1.9C1226.5 230.4 1226.6 229.6 1226.3 229.1zM33 770.3C33 770.3 33 770.3 33 770.3c0-.7-.5-1.2-1.2-1.2-.1 0-.3 0-.4.1-1.6.2-14.3.1-22.2 0-.3 0-.6.1-.9.4-.2.2-.4.5-.4.9 0 .2 0 4.9.1 5.9l.4 13.6c0 .3.2.6.4.9.2.2.5.3.8.3 0 0 .1 0 .1 0 7.3-.7 14.7-.9 22-.6.3 0 .7-.1.9-.3.2-.2.4-.6.4-.9C32.9 783.3 32.9 776.2 33 770.3z"/><path fill="#E9FF09" d="M171.1 383.4c1.3-2.5 14.3-22 15.6-21.6.8.3 11.5 21.2 11.5 22.1C198.1 384.2 177.9 384 171.1 383.4zM596.4 711.8c-.1-.1-6.7-8.2-9.7-12.5-.2-.3-.5-1-.7-1.5-.2-.4-.4-.7-.7-.8-.3-.1-.6 0-.8.3L574 712c0 0 0 0 0 0-.2.2-.2.5-.2.9 0 .3.2.7.4.9.1.1 1.8 2.2 2.8 3.1 3.1 3.1 8.8 10.5 8.9 10.6.2.3.5.4.8.4.3 0 .5-.2.6-.5 0 0 1.2-2.8 2-4.1 1.1-1.9 2.3-3.7 3.5-5.5.9-1.4 1.3-1.7 1.7-2 .5-.4 1-.7 2.1-2.4C596.9 713.1 596.8 712.3 596.4 711.8zM727.5 179.9C727.5 179.9 727.5 179.9 727.5 179.9c.6.2 1.3-.2 1.4-.8 0-.1 0-.2 0-.4.2-1.4 2.8-12.6 4.5-19.5.1-.3 0-.6-.2-.8-.2-.3-.5-.4-.8-.5-.2 0-4.7-1.1-5.7-1.3l-13.4-2.7c-.3-.1-.7 0-.9.2-.2.2-.4.4-.5.6 0 0 0 .1 0 .1-.8 6.5-2.2 13.1-3.9 19.4-.1.3 0 .6.2.9.2.3.5.4.8.5C714.8 176.9 721.7 178.5 727.5 179.9zM728.5 178.1c-.1-.1-.2-.2-.4-.2C728.3 177.9 728.4 178 728.5 178.1z"/><g fill-opacity="1" fill="#FFF"><path d="M699.6 472.7c-1.5 0-2.8-.8-3.5-2.3-.8-1.9 0-4.2 1.9-5 3.7-1.6 6.8-4.7 8.4-8.5 1.6-3.8 1.7-8.1.2-11.9-.3-.9-.8-1.8-1.2-2.8-.8-1.7-1.8-3.7-2.3-5.9-.9-4.1-.2-8.6 2-12.8 1.7-3.1 4.1-6.1 7.6-9.1 1.6-1.4 4-1.2 5.3.4 1.4 1.6 1.2 4-.4 5.3-2.8 2.5-4.7 4.7-5.9 7-1.4 2.6-1.9 5.3-1.3 7.6.3 1.4 1 2.8 1.7 4.3.5 1.1 1 2.2 1.5 3.3 2.1 5.6 2 12-.3 17.6-2.3 5.5-6.8 10.1-12.3 12.5C700.6 472.6 700.1 472.7 699.6 472.7zM740.4 421.4c1.5-.2 3 .5 3.8 1.9 1.1 1.8.4 4.2-1.4 5.3-3.7 2.1-6.4 5.6-7.6 9.5-1.2 4-.8 8.4 1.1 12.1.4.9 1 1.7 1.6 2.7 1 1.7 2.2 3.5 3 5.7 1.4 4 1.2 8.7-.6 13.2-1.4 3.4-3.5 6.6-6.8 10.1-1.5 1.6-3.9 1.7-5.5.2-1.6-1.4-1.7-3.9-.2-5.4 2.6-2.8 4.3-5.3 5.3-7.7 1.1-2.8 1.3-5.6.5-7.9-.5-1.3-1.3-2.7-2.2-4.1-.6-1-1.3-2.1-1.9-3.2-2.8-5.4-3.4-11.9-1.7-17.8 1.8-5.9 5.8-11 11.2-14C739.4 421.6 739.9 421.4 740.4 421.4zM261.3 590.9c5.7 6.8 9 15.7 9.4 22.4.5 7.3-2.4 16.4-10.2 20.4-3 1.5-6.7 2.2-11.2 2.2-7.9-.1-12.9-2.9-15.4-8.4-2.1-4.7-2.3-11.4 1.8-15.9 3.2-3.5 7.8-4.1 11.2-1.6 1.2.9 1.5 2.7.6 3.9-.9 1.2-2.7 1.5-3.9.6-1.8-1.3-3.6.6-3.8.8-2.4 2.6-2.1 7-.8 9.9 1.5 3.4 4.7 5 10.4 5.1 3.6 0 6.4-.5 8.6-1.6 4.7-2.4 7.7-8.6 7.2-15-.5-7.3-5.3-18.2-13-23.9-4.2-3.1-8.5-4.1-12.9-3.1-3.1.7-6.2 2.4-9.7 5-6.6 5.1-11.7 11.8-14.2 19-2.7 7.7-2.1 15.8 1.9 23.9.7 1.4.1 3.1-1.3 3.7-1.4.7-3.1.1-3.7-1.3-4.6-9.4-5.4-19.2-2.2-28.2 2.9-8.2 8.6-15.9 16.1-21.6 4.1-3.1 8-5.1 11.8-6 6-1.4 12 0 17.5 4C257.6 586.9 259.6 588.8 261.3 590.9z"/><circle cx="1013.7" cy="153.9" r="7.1"/><circle cx="1024.3" cy="132.1" r="7.1"/><circle cx="1037.3" cy="148.9" r="7.1"/><path d="M1508.7 297.2c-4.8-5.4-9.7-10.8-14.8-16.2 5.6-5.6 11.1-11.5 15.6-18.2 1.2-1.7.7-4.1-1-5.2-1.7-1.2-4.1-.7-5.2 1-4.2 6.2-9.1 11.6-14.5 16.9-4.8-5-9.7-10-14.7-14.9-1.5-1.5-3.9-1.5-5.3 0-1.5 1.5-1.5 3.9 0 5.3 4.9 4.8 9.7 9.8 14.5 14.8-1.1 1.1-2.3 2.2-3.5 3.2-4.1 3.8-8.4 7.8-12.4 12-1.4 1.5-1.4 3.8 0 5.3 0 0 0 0 0 0 1.5 1.4 3.9 1.4 5.3-.1 3.9-4 8.1-7.9 12.1-11.7 1.2-1.1 2.3-2.2 3.5-3.3 4.9 5.3 9.8 10.6 14.6 15.9.1.1.1.1.2.2 1.4 1.4 3.7 1.5 5.2.2C1510 301.2 1510.1 298.8 1508.7 297.2zM327.6 248.6l-.4-2.6c-1.5-11.1-2.2-23.2-2.3-37 0-5.5 0-11.5.2-18.5 0-.7 0-1.5 0-2.3 0-5 0-11.2 3.9-13.5 2.2-1.3 5.1-1 8.5.9 5.7 3.1 13.2 8.7 17.5 14.9 5.5 7.8 7.3 16.9 5 25.7-3.2 12.3-15 31-30 32.1L327.6 248.6zM332.1 179.2c-.2 0-.3 0-.4.1-.1.1-.7.5-1.1 2.7-.3 1.9-.3 4.2-.3 6.3 0 .8 0 1.7 0 2.4-.2 6.9-.2 12.8-.2 18.3.1 12.5.7 23.5 2 33.7 11-2.7 20.4-18.1 23-27.8 1.9-7.2.4-14.8-4.2-21.3l0 0C347 188.1 340 183 335 180.3 333.6 179.5 332.6 179.2 332.1 179.2zM516.3 60.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C517.3 60.4 516.8 60.8 516.3 60.8zM506.1 70.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C506.4 70.5 506.2 70.5 506.1 70.5zM494.1 64.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C494.7 64.3 494.4 64.4 494.1 64.4zM500.5 55.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C500.9 55.3 500.7 55.3 500.5 55.3zM506.7 55c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C507.4 54.8 507.1 55 506.7 55zM1029.3 382.8c-.1 0-.2 0-.4-.1-2.4-.7-4-.9-6.7-.7-.7 0-1.3-.5-1.4-1.2 0-.7.5-1.3 1.2-1.4 3.1-.2 4.9 0 7.6.8.7.2 1.1.9.9 1.6C1030.3 382.4 1029.8 382.8 1029.3 382.8zM1019.1 392.5c-.5 0-1-.3-1.2-.8-.8-2.1-1.2-4.3-1.3-6.6 0-.7.5-1.3 1.2-1.3.7 0 1.3.5 1.3 1.2.1 2 .5 3.9 1.1 5.8.2.7-.1 1.4-.8 1.6C1019.4 392.5 1019.2 392.5 1019.1 392.5zM1007.1 386.4c-.4 0-.8-.2-1-.5-.4-.6-.3-1.4.2-1.8 1.8-1.4 3.7-2.6 5.8-3.6.6-.3 1.4 0 1.7.6.3.6 0 1.4-.6 1.7-1.9.9-3.7 2-5.3 3.3C1007.7 386.3 1007.4 386.4 1007.1 386.4zM1013.5 377.3c-.5 0-.9-.3-1.2-.7-.5-1-1.2-1.9-2.4-3.4-.3-.4-.7-.9-1.1-1.4-.4-.6-.3-1.4.2-1.8.6-.4 1.4-.3 1.8.2.4.5.8 1 1.1 1.4 1.3 1.6 2.1 2.6 2.7 3.9.3.6 0 1.4-.6 1.7C1013.9 377.3 1013.7 377.3 1013.5 377.3zM1019.7 377c-.3 0-.5-.1-.8-.2-.6-.4-.7-1.2-.3-1.8 1.2-1.7 2.3-3.4 3.3-5.2.3-.6 1.1-.9 1.7-.5.6.3.9 1.1.5 1.7-1 1.9-2.2 3.8-3.5 5.6C1020.4 376.8 1020.1 377 1019.7 377zM1329.7 573.4c-1.4 0-2.9-.2-4.5-.7-8.4-2.7-16.6-12.7-18.7-20-.4-1.4-.7-2.9-.9-4.4-8.1 3.3-15.5 10.6-15.4 21 0 1.5-1.2 2.7-2.7 2.8 0 0 0 0 0 0-1.5 0-2.7-1.2-2.7-2.7-.1-6.7 2.4-12.9 7-18 3.6-4 8.4-7.1 13.7-8.8.5-6.5 3.1-12.9 7.4-17.4 7-7.4 18.2-8.9 27.3-10.1l.7-.1c1.5-.2 2.9.9 3.1 2.3.2 1.5-.9 2.9-2.3 3.1l-.7.1c-8.6 1.2-18.4 2.5-24 8.4-3 3.2-5 7.7-5.7 12.4 7.9-1 17.7 1.3 24.3 5.7 4.3 2.9 7.1 7.8 7.2 12.7.2 4.3-1.7 8.3-5.2 11.1C1335.2 572.4 1332.6 573.4 1329.7 573.4zM1311 546.7c.1 1.5.4 3 .8 4.4 1.7 5.8 8.7 14.2 15.1 16.3 2.8.9 5.1.5 7.2-1.1 2.7-2.1 3.2-4.8 3.1-6.6-.1-3.2-2-6.4-4.8-8.3C1326.7 547.5 1317.7 545.6 1311 546.7z"/></g></svg>
          </div>
      </div>


        </div>
        <div className='relative '>

        <div className=' mt-36 mb-20'>
          <h1 className='font-Playwrite text-white text-2xl text-center  middlethree:text-3xl relative z-10'>Projects</h1>
        </div>

       

          <div className=' mx-14 mt-4 relative z-10'>
          
          <div >
              <div className='w-[100%] flex justify-center items-center '>
                <a href="https://hospital-food-delivery-omega.vercel.app" target="_blank" rel="noopener noreferrer " className='flex justify-center items-center'>
                <img src={nutricare} alt=""  className='w-full middleone:w-[90%] middleone:rounded-2xl middletwo:rounded-3xl middletwo:w-[80%] middlethree:w-[70%] rounded-xl cursor-pointer bg-green-400 shadow-[0_4px_20px_0_rgba(74,222,128,0.7)] transition-shadow duration-800'/>
                </a>
              </div>
              
              <p className='font-Barlow text-white text-lg mt-7 middleone:text-xl '><span className='text-green-300 flex justify-center items-center gap-2 pb-2'>Hospital Food Management System <a href="https://github.com/Irshad3786/HospitalFoodDelivery" target="_blank" rel="noopener noreferrer "><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#fff" d="M12 1C5.923 1 1 5.923 1 12c0 4.868 3.149 8.979 7.521 10.436c.55.096.756-.233.756-.522c0-.262-.013-1.128-.013-2.049c-2.764.509-3.479-.674-3.699-1.292c-.124-.317-.66-1.293-1.128-1.554c-.385-.206-.935-.715-.013-.729c.866-.014 1.485.797 1.691 1.128c.99 1.663 2.571 1.196 3.204.907c.096-.715.385-1.196.701-1.471c-2.447-.275-5.005-1.224-5.005-5.431c0-1.197.426-2.187 1.128-2.957c-.11-.275-.495-1.402.11-2.915c0 0 .92-.288 3.024 1.128c.88-.248 1.816-.372 2.75-.372c.936 0 1.87.124 2.75.372c2.104-1.43 3.025-1.128 3.025-1.128c.605 1.513.22 2.64.11 2.915c.702.77 1.128 1.747 1.128 2.957c0 4.22-2.571 5.156-5.019 5.43c.399.345.743 1.005.743 2.036c0 1.471-.014 2.654-.014 3.025c0 .288.206.632.756.522A11.02 11.02 0 0 0 23 12c0-6.077-4.922-11-11-11"/></svg></a></span> The Nutricare is a full-stack web application built to improve the food distribution process in hospitals. It helps manage patient dietary requirements efficiently and supports the kitchen staff with real-time meal tracking and inventory management.</p>
              <ul className='text-white font-Barlow list-disc pl-6 mt-2 custom-list'>
                  <li>Patient meal scheduling based on doctor's dietary advice</li>
                  <li>Custom meal plans for various dietary restrictions</li>
                  <li>Admin dashboard for monitoring meal plans and kitchen inventory</li>
                  <li>Secure login system using JWT authentication</li>
                  <li>Fully responsive design for smooth usage on all devices</li>
                  <li>Instant communication between admin, pantry, and delivery staff to reflect status changes</li>
                  <li>Separate dashboards for Admin, Pantry Staff, and Delivery Personnel</li>
                  <li>Separate login for pantry staff to view, prepare, and manage orders</li>
                  <li>Dedicated login for delivery staff to view meal orders, mark deliveries, and update status in real-time</li>
              </ul>
              <div className='font-Barlow mt-5 text-white'>
                <h1 className='text-[#4ade80]  text-2xl mb-4'>Tech Stack</h1>
                <div className='mx-14 mt-8 flex flex-wrap items-center gap-10 pb-5 middlethree:gap-20 '>
                  <div>
                    <h3 className='text-[#4ade80] text-xl'>Frontend</h3>
                    <ul className='list-disc custom-list'>
                      <li>React.js</li>
                      <li>Tailwind</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-[#4ade80] text-xl'>Backend</h3>
                    <ul className='list-disc custom-list'>
                      <li>Node.js</li>
                      <li>Express.js</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-[#4ade80] text-xl'>Database</h3>
                    <ul className='list-disc custom-list'>
                      <li>MongoDB</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-[#4ade80] text-xl'>Authentication</h3>
                    <ul className='list-disc custom-list'>
                      <li>JWT - JSON Web Tokens </li>
                    </ul>
                  </div>
                  
                </div>
              </div>



              <div className='font-Barlow mt-5 text-white'>
                <h1 className='text-[#4ade80] text-2xl mb-4'>Deployment </h1>
                <div className='mx-14 mt-8 flex flex-wrap  items-center gap-10 pb-5 middlethree:gap-20 '>
                  <div>
                    <h3 className='text-[#4ade80] text-xl'>Frontend Deployment</h3>
                    <ul className='list-disc custom-list'>
                      <li>Vercel</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-[#4ade80] text-xl'>Backend Deployment</h3>
                    <ul className='list-disc custom-list'>
                      <li>AWS EC2 - Elastic Compute Cloud</li>
                      
                    </ul>
                  </div>

                 
                </div>
              </div>
          </div>
          </div>



          <div className=' mx-14 mt-36 relative z-10'>
          
            <div >
              <div className='w-[100%] flex justify-center items-center '>
                <a href="https://healchat.vercel.app" target="_blank" rel="noopener noreferrer " className='flex justify-center items-center'>
                <img src={project2} alt=""  className='w-full middleone:w-[90%] middleone:rounded-2xl middletwo:rounded-3xl middletwo:w-[80%] middlethree:w-[70%] rounded-xl cursor-pointer bg-fuchsia-600 shadow-[0_4px_20px_0_rgba(232,121,249,0.7)] transition-shadow duration-800'/>
                </a>
              </div>
              
              <p className='font-Barlow text-white text-lg mt-7 middleone:text-xl '><span className='text-fuchsia-600 flex justify-center items-center gap-2 pb-2'>Real-time chat and image sharing System <a href="https://github.com/Irshad3786/healchatapp" target="_blank" rel="noopener noreferrer "><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#fff" d="M12 1C5.923 1 1 5.923 1 12c0 4.868 3.149 8.979 7.521 10.436c.55.096.756-.233.756-.522c0-.262-.013-1.128-.013-2.049c-2.764.509-3.479-.674-3.699-1.292c-.124-.317-.66-1.293-1.128-1.554c-.385-.206-.935-.715-.013-.729c.866-.014 1.485.797 1.691 1.128c.99 1.663 2.571 1.196 3.204.907c.096-.715.385-1.196.701-1.471c-2.447-.275-5.005-1.224-5.005-5.431c0-1.197.426-2.187 1.128-2.957c-.11-.275-.495-1.402.11-2.915c0 0 .92-.288 3.024 1.128c.88-.248 1.816-.372 2.75-.372c.936 0 1.87.124 2.75.372c2.104-1.43 3.025-1.128 3.025-1.128c.605 1.513.22 2.64.11 2.915c.702.77 1.128 1.747 1.128 2.957c0 4.22-2.571 5.156-5.019 5.43c.399.345.743 1.005.743 2.036c0 1.471-.014 2.654-.014 3.025c0 .288.206.632.756.522A11.02 11.02 0 0 0 23 12c0-6.077-4.922-11-11-11"/></svg></a></span> HealChat is a modern web-based communication platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It enables real-time chat between patients and doctors, making healthcare more accessible and efficient. Users can send and receive text messages, as well as share medical images securely for better diagnosis and support.

              The platform is designed with a user-friendly interface and focuses on providing a seamless communication experience, ensuring privacy and ease of use for both patients and healthcare professionals.</p>
              <ul className='text-white font-Barlow list-disc pl-6 mt-2 custom-list-2'>
                  <li>Real-time chat between patients and doctors for quick consultations</li>
                  <li>Secure login system for patients and doctors using JWT authentication</li>
                  <li>Separate dashboards for Doctors and Patients with role-specific features</li>
                  <li>Chat history stored securely for future reference and follow-ups</li>
                  <li>Easy onboarding process for doctors and patients with profile management</li>
                  <li>Option for doctors to manage consultation hours and chat preferences</li>
                  <li>One-on-one private chat rooms for personalized medical guidance</li>
                  <li>Doctor verification system for platform trust and authenticity</li>
                  
              </ul>
              <div className='font-Barlow mt-5 text-white'>
                <h1 className='text-fuchsia-600  text-2xl mb-4'>Tech Stack</h1>
                <div className='mx-14 mt-8 flex flex-wrap items-center gap-10 pb-5 middlethree:gap-20 '>
                  <div>
                    <h3 className='text-fuchsia-600 text-xl'>Frontend</h3>
                    <ul className='list-disc custom-list-2'>
                      <li>React.js</li>
                      <li>Tailwind</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-fuchsia-600 text-xl'>Backend</h3>
                    <ul className='list-disc custom-list-2'>
                      <li>Node.js</li>
                      <li>Express.js</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-fuchsia-600 text-xl'>Database</h3>
                    <ul className='list-disc custom-list-2'>
                      <li>MongoDB</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-fuchsia-600 text-xl'>Authentication</h3>
                    <ul className='list-disc custom-list-2'>
                      <li>JWT - JSON Web Tokens </li>
                    </ul>
                  </div>
                  
                </div>
              </div>



              <div className='font-Barlow mt-5 text-white'>
                <h1 className='text-fuchsia-600 text-2xl mb-4'>Deployment </h1>
                <div className='mx-14 mt-8 flex flex-wrap  items-center gap-10 pb-5 middlethree:gap-20 '>
                  <div>
                    <h3 className='text-fuchsia-600 text-xl'>Frontend Deployment</h3>
                    <ul className='list-disc custom-list-2'>
                      <li>Vercel</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className='text-fuchsia-600 text-xl'>Backend Deployment</h3>
                    <ul className='list-disc custom-list-2'>
                      <li>Netlify</li>
                      
                    </ul>
                  </div>

                 
                </div>
              </div>
            </div>
          </div>

          <div className='overflow-hidden absolute z-0 top-0 left-0 w-full h-full middleone:w-full middletwo:w-full middlethree:w-full'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500" opacity="0.2" ><rect fill="#000000" width="2000" height="1500"/><defs><rect stroke="#000000" stroke-width=".5" width="1" height="1" id="s"/><pattern id="a" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><use fill="#242424" href="#s" y="2"/><use fill="#242424" href="#s" x="1" y="2"/><use fill="#333333" href="#s" x="2" y="2"/><use fill="#333333" href="#s"/><use fill="#3e3e3e" href="#s" x="2"/><use fill="#3e3e3e" href="#s" x="1" y="1"/></pattern><pattern id="b" width="7" height="11" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#484848"><use href="#s"/><use href="#s" y="5"/><use href="#s" x="1" y="10"/><use href="#s" x="2" y="1"/><use href="#s" x="2" y="4"/><use href="#s" x="3" y="8"/><use href="#s" x="4" y="3"/><use href="#s" x="4" y="7"/><use href="#s" x="5" y="2"/><use href="#s" x="5" y="6"/><use href="#s" x="6" y="9"/></g></pattern><pattern id="h" width="5" height="13" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#484848"><use href="#s" y="5"/><use href="#s" y="8"/><use href="#s" x="1" y="1"/><use href="#s" x="1" y="9"/><use href="#s" x="1" y="12"/><use href="#s" x="2"/><use href="#s" x="2" y="4"/><use href="#s" x="3" y="2"/><use href="#s" x="3" y="6"/><use href="#s" x="3" y="11"/><use href="#s" x="4" y="3"/><use href="#s" x="4" y="7"/><use href="#s" x="4" y="10"/></g></pattern><pattern id="c" width="17" height="13" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#515151"><use href="#s" y="11"/><use href="#s" x="2" y="9"/><use href="#s" x="5" y="12"/><use href="#s" x="9" y="4"/><use href="#s" x="12" y="1"/><use href="#s" x="16" y="6"/></g></pattern><pattern id="d" width="19" height="17" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#000000"><use href="#s" y="9"/><use href="#s" x="16" y="5"/><use href="#s" x="14" y="2"/><use href="#s" x="11" y="11"/><use href="#s" x="6" y="14"/></g><g fill="#585858"><use href="#s" x="3" y="13"/><use href="#s" x="9" y="7"/><use href="#s" x="13" y="10"/><use href="#s" x="15" y="4"/><use href="#s" x="18" y="1"/></g></pattern><pattern id="e" width="47" height="53" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#E9FF09"><use href="#s" x="2" y="5"/><use href="#s" x="16" y="38"/><use href="#s" x="46" y="42"/><use href="#s" x="29" y="20"/></g></pattern><pattern id="f" width="59" height="71" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#E9FF09"><use href="#s" x="33" y="13"/><use href="#s" x="27" y="54"/><use href="#s" x="55" y="55"/></g></pattern><pattern id="g" width="139" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#E9FF09"><use href="#s" x="11" y="8"/><use href="#s" x="51" y="13"/><use href="#s" x="17" y="73"/><use href="#s" x="99" y="57"/></g></pattern></defs><rect fill="url(#a)" width="100%" height="100%"/><rect fill="url(#b)" width="100%" height="100%"/><rect fill="url(#h)" width="100%" height="100%"/><rect fill="url(#c)" width="100%" height="100%"/><rect fill="url(#d)" width="100%" height="100%"/><rect fill="url(#e)" width="100%" height="100%"/><rect fill="url(#f)" width="100%" height="100%"/><rect fill="url(#g)" width="100%" height="100%"/></svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500 " opacity="0.2"><rect fill="#000000" width="2000" height="1500"/><defs><rect stroke="#000000" stroke-width=".5" width="1" height="1" id="s"/><pattern id="a" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><use fill="#242424" href="#s" y="2"/><use fill="#242424" href="#s" x="1" y="2"/><use fill="#333333" href="#s" x="2" y="2"/><use fill="#333333" href="#s"/><use fill="#3e3e3e" href="#s" x="2"/><use fill="#3e3e3e" href="#s" x="1" y="1"/></pattern><pattern id="b" width="7" height="11" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#484848"><use href="#s"/><use href="#s" y="5"/><use href="#s" x="1" y="10"/><use href="#s" x="2" y="1"/><use href="#s" x="2" y="4"/><use href="#s" x="3" y="8"/><use href="#s" x="4" y="3"/><use href="#s" x="4" y="7"/><use href="#s" x="5" y="2"/><use href="#s" x="5" y="6"/><use href="#s" x="6" y="9"/></g></pattern><pattern id="h" width="5" height="13" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#484848"><use href="#s" y="5"/><use href="#s" y="8"/><use href="#s" x="1" y="1"/><use href="#s" x="1" y="9"/><use href="#s" x="1" y="12"/><use href="#s" x="2"/><use href="#s" x="2" y="4"/><use href="#s" x="3" y="2"/><use href="#s" x="3" y="6"/><use href="#s" x="3" y="11"/><use href="#s" x="4" y="3"/><use href="#s" x="4" y="7"/><use href="#s" x="4" y="10"/></g></pattern><pattern id="c" width="17" height="13" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#515151"><use href="#s" y="11"/><use href="#s" x="2" y="9"/><use href="#s" x="5" y="12"/><use href="#s" x="9" y="4"/><use href="#s" x="12" y="1"/><use href="#s" x="16" y="6"/></g></pattern><pattern id="d" width="19" height="17" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#000000"><use href="#s" y="9"/><use href="#s" x="16" y="5"/><use href="#s" x="14" y="2"/><use href="#s" x="11" y="11"/><use href="#s" x="6" y="14"/></g><g fill="#585858"><use href="#s" x="3" y="13"/><use href="#s" x="9" y="7"/><use href="#s" x="13" y="10"/><use href="#s" x="15" y="4"/><use href="#s" x="18" y="1"/></g></pattern><pattern id="e" width="47" height="53" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#E9FF09"><use href="#s" x="2" y="5"/><use href="#s" x="16" y="38"/><use href="#s" x="46" y="42"/><use href="#s" x="29" y="20"/></g></pattern><pattern id="f" width="59" height="71" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#E9FF09"><use href="#s" x="33" y="13"/><use href="#s" x="27" y="54"/><use href="#s" x="55" y="55"/></g></pattern><pattern id="g" width="139" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#E9FF09"><use href="#s" x="11" y="8"/><use href="#s" x="51" y="13"/><use href="#s" x="17" y="73"/><use href="#s" x="99" y="57"/></g></pattern></defs><rect fill="url(#a)" width="100%" height="100%"/><rect fill="url(#b)" width="100%" height="100%"/><rect fill="url(#h)" width="100%" height="100%"/><rect fill="url(#c)" width="100%" height="100%"/><rect fill="url(#d)" width="100%" height="100%"/><rect fill="url(#e)" width="100%" height="100%"/><rect fill="url(#f)" width="100%" height="100%"/><rect fill="url(#g)" width="100%" height="100%"/></svg>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500 " opacity="0.2"><rect fill="#000000" width="2000" height="800"/><defs><rect stroke="#000000" stroke-width=".5" width="1" height="1" id="s"/><pattern id="a" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><use fill="#242424" href="#s" y="2"/><use fill="#242424" href="#s" x="1" y="2"/><use fill="#333333" href="#s" x="2" y="2"/><use fill="#333333" href="#s"/><use fill="#3e3e3e" href="#s" x="2"/><use fill="#3e3e3e" href="#s" x="1" y="1"/></pattern><pattern id="b" width="7" height="11" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#484848"><use href="#s"/><use href="#s" y="5"/><use href="#s" x="1" y="10"/><use href="#s" x="2" y="1"/><use href="#s" x="2" y="4"/><use href="#s" x="3" y="8"/><use href="#s" x="4" y="3"/><use href="#s" x="4" y="7"/><use href="#s" x="5" y="2"/><use href="#s" x="5" y="6"/><use href="#s" x="6" y="9"/></g></pattern><pattern id="h" width="5" height="13" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#484848"><use href="#s" y="5"/><use href="#s" y="8"/><use href="#s" x="1" y="1"/><use href="#s" x="1" y="9"/><use href="#s" x="1" y="12"/><use href="#s" x="2"/><use href="#s" x="2" y="4"/><use href="#s" x="3" y="2"/><use href="#s" x="3" y="6"/><use href="#s" x="3" y="11"/><use href="#s" x="4" y="3"/><use href="#s" x="4" y="7"/><use href="#s" x="4" y="10"/></g></pattern><pattern id="c" width="17" height="13" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#515151"><use href="#s" y="11"/><use href="#s" x="2" y="9"/><use href="#s" x="5" y="12"/><use href="#s" x="9" y="4"/><use href="#s" x="12" y="1"/><use href="#s" x="16" y="6"/></g></pattern><pattern id="d" width="19" height="17" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#000000"><use href="#s" y="9"/><use href="#s" x="16" y="5"/><use href="#s" x="14" y="2"/><use href="#s" x="11" y="11"/><use href="#s" x="6" y="14"/></g><g fill="#585858"><use href="#s" x="3" y="13"/><use href="#s" x="9" y="7"/><use href="#s" x="13" y="10"/><use href="#s" x="15" y="4"/><use href="#s" x="18" y="1"/></g></pattern><pattern id="e" width="47" height="53" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#E9FF09"><use href="#s" x="2" y="5"/><use href="#s" x="16" y="38"/><use href="#s" x="46" y="42"/><use href="#s" x="29" y="20"/></g></pattern><pattern id="f" width="59" height="71" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#E9FF09"><use href="#s" x="33" y="13"/><use href="#s" x="27" y="54"/><use href="#s" x="55" y="55"/></g></pattern><pattern id="g" width="139" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(50) translate(-980 -735)"><g fill="#E9FF09"><use href="#s" x="11" y="8"/><use href="#s" x="51" y="13"/><use href="#s" x="17" y="73"/><use href="#s" x="99" y="57"/></g></pattern></defs><rect fill="url(#a)" width="100%" height="100%"/><rect fill="url(#b)" width="100%" height="100%"/><rect fill="url(#h)" width="100%" height="100%"/><rect fill="url(#c)" width="100%" height="100%"/><rect fill="url(#d)" width="100%" height="100%"/><rect fill="url(#e)" width="100%" height="100%"/><rect fill="url(#f)" width="100%" height="100%"/><rect fill="url(#g)" width="100%" height="100%"/></svg>
            
            </div>
        </div>

        <div>

          <div className=' mt-36 mb-14'>
            <h1 className='font-Playwrite text-white text-2xl text-center  middlethree:text-3xl'>Contact</h1>

          </div>

          <div className='flex flex-col justify-center items-center gap-5 h-full w-full pb-7 middleone:flex-row middleone:gap-40 middletwo:flex-row middletwo:gap-48  middlethree:justify-around'>
            <div className='text-white'>
                  <h1>Email</h1>
                  <h1>Linked</h1>
                  <h1>Phone</h1>
                  <h1>Github</h1>
                  <h1>Instagram</h1>
                  <h1>Twitter</h1>
            </div>

            <div className='w-[280px] h-[450px] bg-colorone rounded-2xl middletwo:w-[400px]  middletwo:h-[500px] middlethree:w-[550px] middlethree:h-[600px] '>
                  <div className='font-Barlow font-semibold flex justify-center items-center mt-9'>
                    <h1 className='text-4xl middlethree:text-5xl'>Let's Talk</h1>
                  </div>
                  <div className='flex justify-center items-center flex-col gap-3 pt-6'>
                
                <div className='flex justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><g fill="none" stroke="#040404" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><circle cx="24" cy="11" r="7"/><path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4z"/></g></svg>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="p-2 rounded-xl placeholder:font-rocko placeholder:text-sm border border-gray-400 middlethree:w-[350px]"
                />


                </div>  
                <div className='flex justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#040404" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"/></svg>
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  className="p-2 rounded-xl placeholder:font-rocko placeholder:text-sm border border-gray-400 middlethree:w-[350px]"
                />
                </div>

                <div className='flex justify-center items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453l-1.058-1.064l-.455.453zm1.985-.643l1.91 1.039l.716-1.318l-1.91-1.038zm2.278 3.103l-1.42 1.413l1.057 1.063l1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899l1.26 1.684zM5.733 2.043l-1.57 1.56l1.058 1.064l1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692c-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01l-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242c.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045l.007-.006l.003-.003l.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002l.002-.002l.006-.005l.01-.01l.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01c-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"/></svg>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="p-2 rounded-xl placeholder:font-rocko placeholder:text-sm border border-gray-400 middlethree:w-[350px]"
                />
                </div>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="p-2 h-32 w-64 rounded-xl placeholder:font-rocko placeholder:text-sm border border-gray-400 resize-none middlethree:w-[450px] middlethree:h-[250px]"
                />
                <button className='bg-black rounded-lg text-white font-rocko px-4 py-1 flex justify-center items-center gap-3'> Submit <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 15 16"><path fill="#fff" d="M12.49 7.14L3.44 2.27c-.76-.41-1.64.3-1.4 1.13l1.24 4.34q.075.27 0 .54l-1.24 4.34c-.24.83.64 1.54 1.4 1.13l9.05-4.87a.98.98 0 0 0 0-1.72Z"/></svg></button>
              </div>


            </div>

          </div>

        </div>


      </div>
    </> 
  )
}

export default App
