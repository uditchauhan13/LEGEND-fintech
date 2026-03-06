"use client"

import HeroScene from "./HeroScene"

export default function LandingHero({children}:{children:React.ReactNode}){

return(

<section className="relative h-screen w-full overflow-hidden">

<div className="absolute inset-0 -z-10">

<HeroScene/>

</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8F6F2]"/>

<div className="relative z-10 flex items-center justify-center h-full text-center px-6">

{children}

</div>

</section>

)

}
