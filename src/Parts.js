import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import PartsBanner from "./Partsbanner";
import Testimonials from "./testimonials";
import Blogs from './blogs'
import Rim from "./Rim";
import Circle from "./Circle";
import Roar from "./Roar";
import Enquire from "./enquiry";

function Parts(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <PartsBanner/>
            <Rim/>
            <Circle/>
            <Roar/>
            <Enquire/>
            <Testimonials/>
            <Blogs/>
            <Footer/>
        </div>
    )
}
export default Parts