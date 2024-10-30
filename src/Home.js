import Banner from "./banner";
import Brands from "./brands";
import Group from "./group";
import Group2 from "./group2";
import Group3 from "./group3";
import Group4 from "./group4";
import Header from "./header";
import Navbar from "./navbar";
import Testimonials from "./testimonials";
import stats from './Group 215.png'
import Blogs from "./blogs";
import Footer from "./footer";
import Tit from "./group3_2.0";
import Cardbox from "./cardbox";
import CarD from "./CD";

function Home(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <Banner/>
            <Brands/>
            <Group/>
            <img src={stats} alt="" style={{position:"absolute", right:"0px", zIndex:"1", top:'90vw', height:"11vw"}}/>
            <Group2/>
            <Group3/>
            <Group4/>
            <Testimonials/>
            <Blogs/>
            <Footer/>

        </div>
    )
}
export default Home