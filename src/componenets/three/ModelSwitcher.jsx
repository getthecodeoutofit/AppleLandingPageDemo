import { PresentationControls } from "@react-three/drei";
import React, { useRef } from "react";
import { MacbookModel16 } from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";
//handle the transition b/w the model, detecting the size and animating model using gsap and use presentation control

const ModelSwitcher = ({scale ,isMob}) => {

    //helper funtion
    const ANIMATION_DURATION = 1;
    const OFFSET_DISTANCE = 5; //how far one model move when offscreen


    //move
    const fadMess = (group,opacity)=>{
        if(!group)  return;
        group.traverse((child.isMesh)=>{
            child 

        })
    }


    const smallMacref = useRef();
    const largeMacref = useRef();
    const showLMac = scale === 0.08 || scale ===0.05;
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