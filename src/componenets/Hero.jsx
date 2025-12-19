import React, { useEffect, useRef } from "react";

const Hero = ()=>{
    //now modifying video property
    const vidRef = useRef();
    useEffect(()=>{
        //checking if video ref is attached to any elemnt
        if(vidRef.current) vidRef.current.playbackRate = 2.5;},[]) //microanimation

return (
    <section id="hero">
        <div>
            <h1>
                MacBook Pro
            </h1>
            <img src="./title.png" alt="Macbook Title"></img>
        </div>
            <video ref={vidRef} src="./videos/hero.mp4" autoPlay muted playsInline>

            </video>
            <button>
                Buy
            </button>
            <p>
                from $1/mon for 200 months
            </p>
    </section>
       

)
}

export default Hero;