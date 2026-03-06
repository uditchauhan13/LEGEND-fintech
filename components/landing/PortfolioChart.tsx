"use client"

import { motion } from "framer-motion"

const data=[20,40,35,60,80,120]

export default function PortfolioChart(){

return(

<div className="flex items-end gap-2 h-32 mt-10">

{data.map((value,i)=>(

<motion.div
key={i}
initial={{height:0}}
animate={{height:value}}
transition={{delay:i*0.2,duration:0.6}}
className="w-4 bg-[#D4A017] rounded"
/>

))}

</div>

)

}
