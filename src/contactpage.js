import BlogsBanner from "./blogsbanner";
import Button from "./button";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

function Contactpage(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <BlogsBanner bannertext={'CONTACT US'}/>
            <div style={{width:'100%', display:'flex', justifyContent:'space-around'}}>
                <div style={{width:'30%', margin:'4vw 0px', display:'flex', flexDirection:'column', justifyContent:'space-around', backgroundColor:'black'}}>
                    <h1 style={{margin:"0.6vw 1vw", fontSize:'2vw', color:'white'}}>ADDRESS</h1>
                    <p style={{fontSize:'1.1vw', margin:'0.6vw 1vw', color:'white'}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06v9ek_sXce0EvHkOLivwJ2VN8-tVnCaZ0w&s" alt="" style={{width:'20px', height:'20px'}}/>
                    D-9, 4th St, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058</p>
                </div>
                <div style={{width:'30%', margin:'4vw 0px', display:'flex', flexDirection:'column', justifyContent:'space-around', backgroundColor:'black'}}>
                    <h1 style={{margin:'0.6vw 1vw', fontSize:'2vw', color:'white'}}>OPEN HOURS</h1>
                    <div style={{display:'flex', justifyContent:'space-between', margin:'0.6vw 1vw'}}>
                        <p style={{fontSize:'1.1vw', color:'white',}}>Monday - Saturday</p>
                        <p style={{fontSize:'1.1vw', color:'white'}}>8am - 8pm</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', margin:'0.6vw 1vw'}}>
                        <p style={{fontSize:'1.1vw', color:'white',}}>Sunday</p>
                        <p style={{fontSize:'1.1vw', color:'white'}}>Closed</p>
                    </div>
                </div>
                <div style={{width:'30%', margin:'4vw 0px', display:'flex', flexDirection:'column', justifyContent:'space-around', backgroundColor:'black'}}>
                    <h1 style={{margin:"0.6vw 1vw", fontSize:'2vw', color:"white"}}>CONTACT US</h1>
                    <p style={{margin:"0.6vw 1vw"}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHQUVvcmO1FrG9b_9EwezMOOn4zuNyerJzg&s" alt="" style={{width:"1.5   vw", height:'1.5vw'}}/><a href="#" style={{fontSize:'1.2vw'}}>info@vertronmtor.com</a>
                    </p>
                </div>
            </div>
            <div style={{display:"flex", height:"30vw", justifyContent:'space-around'}}>
                <div style={{width:"45%"}}>
                    <h1 style={{fontSize:'2vw'}}>ALL GOOD THINGS START WITH A SIMPLE CONVERSATION</h1>
                    <p style={{fontSize:'1.2vw'}}>Reach out to us for personalized solutions and professional support. We're here to make your car hassle-free for you</p>
                </div>
                <div style={{display:'flex', flexDirection:"column", justifyContent:'space-around', height:"24vw", width:"45%"}}>
                    <p style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
                        <input type="text" placeholder="Name"  style={{width:"45%", height:'2.5vw', fontSize:"1vw"}}/>
                        <input type="text" placeholder="Email address"  style={{width:"45%", height:'2.5vw', fontSize:"1vw"}}/>
                    </p>
                    <p style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
                        <input type="number" placeholder="Phone Number" style={{width:"45%", height:'2.5vw', fontSize:"1vw"}}/>
                        <input type="text" placeholder="Car Model"  style={{width:"45%", height:'2.5vw', fontSize:"1vw"}}/>
                    </p>
                    <p style={{display:'flex', justifyContent:'center'}}>
                        <textarea type="textarea" placeholder="Comments or Questions" style={{width:'95%', height:'5vw', fontSize:"1vw"}}/>
                    </p>
                    <p style={{paddingLeft:'1.2vw'}}>
                    <Button buttonText={'SUBMIT'}/></p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Contactpage