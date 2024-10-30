import phone from './Huge-icon.png'
import compimg from './48b3e5ba-9ebf-4539-8940-46688f94cb66 1.png'
import Button from './button'

function Footer(){
    return(
        <div>
            <section className="footer" style={{width:'100%', height:'30vw'}}>
                <div style={{display:'flex',justifyContent:"space-around"}}>
                    <div style={{width:"20%"}}>
                        <img src={compimg} style={{width: '6vw', height: '6vw'}} alt=""/>
                    </div>
                    <div style={{width:'60vw', display:'flex', height:'5vw', alignItems:"center", justifyContent:"space-around"}}>
                        <h1 style={{fontSize:"1.4vw"}}>Sign Up For Newsletter</h1>
                        <input type="text" placeholder="Your Email" style={{width: '40%', height:"2.8vw", paddingLeft:"1vw"}}/>
                        <div style={{width:"20%", height:"100%", alignItems:"center", display:'flex'}}><Button buttonText="SUBSCRIBE"/></div>
                    </div>
                </div>
                <div style={{margin:'2vw 5vw', display:'flex', justifyContent:'space-between'}}>
                    <div className="company" style={{display:'flex', width:'35%', flexDirection:'column', justifyContent:'space-around', height:'15vw'}}>
                    <h2 style={{fontSize:"1.8vw"}}>COMPANY</h2><br />
                    <p style={{textAlign:'justify', fontSize:"1vw"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque reprehenderit ab qui sapiente sunt aliquam fugiat officiis voluptatem omnis assumenda?</p>
                    <br />
                    <h1 style={{fontSize:"1.7vw"}}>
                        SOCIAL MEDIA
                    </h1>
                    <div style={{display:'flex', width:'9vw', justifyContent:'space-between'}}>
                    <img src="https://toppng.com/uploads/preview/free-round-youtube-icon-vector-logo-11553541445tohp89dd6v.png" alt="" style={{width:"2vw", height:"2vw"}}/>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="" style={{width:"2vw", height:"2vw"}}/>
                    <img src="https://w7.pngwing.com/pngs/877/705/png-transparent-instagram-photo-picture-social-brands-and-logos-icon.png" alt="" style={{width:"2vw", height:"2vw"}}/>
                    </div>
                    </div>
                    <div className="navigation" style={{width:'20%', display:'flex', flexDirection:"column", alignItems:'flex-start', justifyContent:'space-between'}}>
                        <h1 style={{fontSize:"1.8vw"}}>NAVIGATION</h1>
                        <a href="/" style={{fontSize:"1vw", color:"black"}}>Home</a>
                        <a href="/Services" style={{fontSize:"1vw", color:"black"}}>Services</a>
                        <a href="/Parts" style={{fontSize:"1vw", color:"black"}}>Parts</a>
                        <a href="/Blogspage" style={{fontSize:"1vw", color:"black"}}>Blog</a>
                        <a href="/contactpage" style={{fontSize:"1vw", color:"black"}}>Contact Us</a> 
                    </div>
                    <div class="contactus" style={{width:'20%',display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                        <h1 style={{fontSize:"1.8vw"}}>CONTACT US</h1>
                        <p style={{fontSize:"1vw"}}> <img src={phone} alt="" style={{width:"1.2vw" , height:'1.2vw'}}/>+91-89398 54430</p>
                        <p style={{fontSize:"1vw"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHQUVvcmO1FrG9b_9EwezMOOn4zuNyerJzg&s" alt="" style={{width:'1.2vw', height:'1.2vw'}}/>info@vertronmotor.com</p>
                        <p style={{fontSize:"1vw"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOJ3WtKLTu3rtKSF0-G_7hFUx_45NNmqKlQ&s" alt="" style={{width:'1.2vw', height:'1.2vw'}}/>06:00 AM - 09:00 PM</p>
                        <p style={{fontSize:"1vw"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06v9ek_sXce0EvHkOLivwJ2VN8-tVnCaZ0w&s" alt="" style={{width:'1.2vw', height:'1.2vw'}}/>D-9, 4th St, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Footer