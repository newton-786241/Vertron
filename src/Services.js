import BannerS from "./BannerS";
import Blogs from "./blogs";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import Servicelist from "./Servicelist";
import Testimonials from "./testimonials";

function Services(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <BannerS/>
            <Servicelist/>
            <Testimonials/>
            <Blogs/>
            <Footer/>      
        </div>
    )
}
export default Services