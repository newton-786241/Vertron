import logo from './48b3e5ba-9ebf-4539-8940-46688f94cb66 1.png'
import ContactUs from './contact.js'
import aboutus from './Aboutus.js'
import Aboutus from './Aboutus.js'

function Navbar(){
    return(
        <div style={{display:'flex', padding: '0px 0px', width:'100%', height:'4vw', alignItems:'center', justifyContent:'space-between', backgroundColor:'white'}}>
            <div class="img">
                <img src={logo} alt="" style={{position:'absolute', zIndex:'2', left:'5vw', top:'4vw', width:"6vw"}}/>
            </div>
            <div class="navigation">
                <a href="/" style={{fontSize:'1vw', color:'black'}}>Home</a>
                <a href="/Aboutus" style={{fontSize:'1vw', color:'black'}}>About us</a>
                <a href="/Services" style={{fontSize:'1vw', color:'black'}}>Services</a>
                <a href="/Parts" style={{fontSize:'1vw', color:'black'}}>Parts</a>
                <a href="/Blogspage" style={{fontSize:'1vw', color:'black'}}>Blogs</a>
                <a href="/contactpage" style={{fontSize:'1vw', color:'black'}}>Contact us</a>
            </div>
            <div style={{paddingRight:'80px'}}>
            <ContactUs/>  
            </div>         
        </div>
    )
}
export default Navbar