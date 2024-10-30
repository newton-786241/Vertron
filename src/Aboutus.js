import Banner from "./banner";
import Group from "./group";
import Header from "./header";
import Navbar from "./navbar";
import stats from './Group 215.png'
import Group2 from "./group2";
import Group4 from "./group4";
import Group3 from "./group3";
import Whyvertron from "./Whyvertron";
import Brandsab from "./brandsab";
import Vertrust from "./vertrust";
import Testimonials from "./testimonials";
import Blogs from "./blogs";
import Footer from "./footer";

function Aboutus(){

    const grp3style2={
        display:'flex',
        alignItems:'center',
        width:'1920px',
        position:'relative',
        top:'320px'
    }

    return(
        <div>
           <Header/>
           <Navbar/>
           <Brandsab/>
           <Vertrust/>
                <img src={stats} alt="" style={{position:"absolute", right:"0px", zIndex:"1", top:'71vw', height:"11vw"}}/>
            <Whyvertron/>
            <Group3/>
            <Testimonials/>
            <Blogs/>
            <Footer/>
        </div>
    )
}
export default Aboutus