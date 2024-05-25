import { useEffect, useRef } from "react"
import Navbar from "../components/Navbar"
import { Spotlight } from "../components/ui/Spotlight"
import Typed from 'typed.js';
const Topsection = () => {
  const el=useRef(null);
  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ['Full Stack Web-Developer', 'Passionate Software Engineer' ,'Learner' ,'Coding Enthusiast'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  },[])
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white relative flex flex-col">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="mt-8 w-full">
        <Navbar/>
      </div>
      <div className="h-full text-white flex justify-center align-middle mt-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl">Hi There,I'm</h2>
          <h1 className="text-8xl">Arijit Das</h1>
          <h3 className="text-5xl">A <span ref={el}/></h3>
        </div>
      </div>
  </div>
  )
}
export default Topsection
