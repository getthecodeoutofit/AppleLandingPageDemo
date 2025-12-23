import Hero from "./components/Hero"
import NavBar from './components/Navbar.jsx'
//registring the gsap
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"

import ProductViewer from "./components/ProductViewer.jsx"
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