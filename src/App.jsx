import Hero from "./componenets/Hero"
import NavBar from "./componenets/Navbar"
//registring the gsap
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

import ProductViewer from "./componenets/ProductViewer.jsx"
gsap.registerPlugin(ScrollTrigger) //should be globally accessible

const App = () =>
{
    return (<main>
        <NavBar />
        <Hero/>
        <ProductViewer/>

    </main> )
}
export default App