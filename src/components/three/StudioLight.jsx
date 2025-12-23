import React from "react"
import { Environment,Lightformer,SpotLight} from "@react-three/drei"
 

const StudioLight = ()=>{
    return (
        <group name="lights">
        <Environment resolution={256}>

        <group>

        <Lightformer form="rect"
        intensity={10}
        position={[10,5,-5]}
        scale={10}
        rotateY={Math.PI/2}
        
        />
        
        {/*we can create a another light source also*/}

        </group>
        </Environment>

            <SpotLight
            position={[-2,10,5]}
            angle={0.15} 
            decay={0} 
            intensity={Math.PI*3}
            />
            {/* same as lightformer we can use it multiple time in multiple postions */}

        </group>


    )
}

export default StudioLight;