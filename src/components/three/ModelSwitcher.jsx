import { FaceLandmarkerDefaults, PresentationControls } from "@react-three/drei";
import React, { useRef } from "react";
import { MacbookModel16 } from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
//handle the transition b/w the model, detecting the size and animating model using gsap and use presentation control
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
//use gsap (custon hook)
const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5; //how far one model move when offscreen


//move
const fadMess = (group,opacity)=>{
    if(!group)  return;
    group.traverse((child)=>{
        if (child.isMesh){
            child.material.transparent = true;
            gsap.to(child.material,{opacity,duration:ANIMATION_DURATION});
        }
        
    })
}
const moveGroup = (group,x)=>{
    if(!group) return;

    gsap.to(group.position, {x,ANIMATION_DURATION})
}
const ModelSwitcher = ({scale ,isMob}) => {

    //helper funtion


    const smallMacref = useRef();
    const largeMacref = useRef();
    const SMALL_SCALE = 0.05;
    const LARGE_SCALE = 0.08
    const showLMac = scale === LARGE_SCALE || scale ===SMALL_SCALE;
    
    useGSAP(()=>{

        if(showLMac){

            moveGroup(smallMacref.current,-OFFSET_DISTANCE)
            moveGroup(largeMacref.current,0)
            
            fadMess(smallMacref.current,0)
            fadMess(largeMacref.current,1)
        }
        else{
            moveGroup(smallMacref.current,0)
            moveGroup(largeMacref.current,-OFFSET_DISTANCE)
            
            fadMess(smallMacref.current,1)
            fadMess(largeMacref.current,0)
        }
    },[scale])
    
    const controlConfi = {
        snap:true,
        speed:2,
        zoom:1,
        polar:[-Math.PI,Math.PI],
        azimuth:[-Infinity,Infinity],
        config:{mass:1,tension:0,friction:26}
    }




    return (
        <>
        <PresentationControls {...controlConfi}>
            <group ref={largeMacref}>
            <MacbookModel16 scale={isMob?0.05:0.08}>

            </MacbookModel16>
            </group>
        </PresentationControls>

        <PresentationControls {...controlConfi}>
            <group ref={smallMacref}>
            <MacbookModel14 scale={isMob?0.03:0.06}>

            </MacbookModel14>
            </group>
        </PresentationControls>
        
        </>

    )



}
export default ModelSwitcher;