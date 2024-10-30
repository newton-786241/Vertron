import Actualblog from "./actualblog";
import Blogs from "./blogs";
import BlogsBanner from "./blogsbanner";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";
import Testimonials from "./testimonials";

function BlogsPage(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <BlogsBanner bannertext={'BLOG'}/>
            <Actualblog/>
            <Testimonials/>
            <Blogs/>
            <Footer/>
        </div>
    )
}
export default BlogsPage