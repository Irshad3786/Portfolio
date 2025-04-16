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
      <div className='w-full min-h-screen bg-black'>
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

        <div >
          <div className=' mx-14 mt-4 '> 
            <p className='font-Barlow text-white text-xl'>I am a versatile full-stack developer with expertise in the <span className='bg-gradient-to-br from-green-400 to-neutral-700 text-transparent bg-clip-text'>M</span>  <span className='bg-gradient-to-br from-yellow-300 to-gray-300 text-transparent bg-clip-text'>E</span> <span className='bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text'>R</span> <span className='bg-gradient-to-b from-green-700 to-gray-300 text-transparent bg-clip-text'>N</span> stack (MongoDB, Express.js, React, Node.js) and a strong focus on front-end development. I specialize in building highly interactive, fast, and responsive user interfaces using React.js, ensuring seamless user experiences.</p>
          </div>
          
          <div className='mx-14 mt-8 flex flex-wrap justify-center items-center gap-5 pb-5 middlethree:gap-20'>
  

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
          <div className=' mx-14 mt-4 '> 
            <p className='font-Barlow text-white text-xl'>I have a solid understanding of programming concepts in <span className='bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text'>Python</span>, <span className='bg-gradient-to-r from-orange-500 to-blue-400 text-transparent bg-clip-text'>Java</span>  and <span className='bg-gradient-to-r from-yellow-500 to-amber-900 text-transparent bg-clip-text'>JavaScript</span>. I'm familiar with the fundamentals of each language and enjoy applying my knowledge to solve coding challenges and enhance my skills.</p>
          </div>
          
          <div className='mx-14 mt-8 flex flex-wrap justify-center items-center gap-5 pb-5 middlethree:gap-20'>
  

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
          <div className=' mx-14 mt-4 '> 
            <p className='font-Barlow text-white text-xl'>I have a solid understanding of <span className='bg-gradient-to-r from-slate-500 to-white text-transparent bg-clip-text'>GitHub</span>, <span className='bg-gradient-to-r from-green-500 to-green-300 text-transparent bg-clip-text'>Nginx</span>, <span className='bg-gradient-to-r from-amber-500 to-slate-500 text-transparent bg-clip-text'>AWS</span>, and <span className='bg-gradient-to-r from-amber-700 to-white text-transparent bg-clip-text'>Ubuntu</span>. I'm comfortable with using GitHub for version control, including creating repositories, committing changes, and collaborating with others. With Nginx, I can configure it as a web server on Ubuntu systems. I have experience managing AWS EC2 instances and performing routine tasks such as software installation and system updates on Ubuntu. I continuously enhance my skills by exploring these technologies and their applications.</p>
          </div>
          
          <div className='mx-14 mt-8 flex flex-wrap justify-center items-center gap-5 pb-5 middlethree:gap-20'>
  

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
          <div className=' mx-14 mt-4 '> 
            <p className='font-Barlow text-white text-xl'>I have a solid understanding of UI/UX design principles and am proficient in using <span className='bg-gradient-to-r from-pink-500 to-cyan-400 text-transparent bg-clip-text'>Figma</span> to create intuitive and visually appealing user interfaces. Additionally, I am skilled in <span className='bg-gradient-to-r from-slate-600 to-sky-500 text-transparent bg-clip-text'>Adobe Photoshop</span> for graphic design tasks and <span className='bg-gradient-to-r from-slate-600 to-indigo-600 text-transparent bg-clip-text'>Adobe Premiere Pro</span> for video editing, enabling me to produce engaging visual content across various media platforms.​

          </p>
          </div>
          
          <div className='mx-14 mt-8 flex flex-wrap justify-center items-center gap-5 pb-5 middlethree:gap-20'>
  

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

        <div className=' mt-36 mb-20'>
          <h1 className='font-Playwrite text-white text-2xl text-center  middlethree:text-3xl'>Projects</h1>
        </div>

        <div className=' mx-14 mt-4 '>
          
          <div>
              <div className='w-[100%] flex justify-center items-center border-white '>
                <img src={nutricare} alt=""  className='w-[100%] middleone:w-[90%] middletwo:w-[80%] middlethree:w-[70%] border-dotted'/>
              </div>
            <p className='font-Barlow text-white text-lg mt-7 middleone:text-xl '>The <span className='text-green-300'>Hospital Food Management System</span> is a full-stack web application built to improve the food distribution process in hospitals. It helps manage patient dietary requirements efficiently and supports the kitchen staff with real-time meal tracking and inventory management.</p>
          </div>
        </div>
        
      </div>
    </> 
  )
}

export default App
