import AnnualM from "./AM"
import Button from "./button"
import CarD from "./CD"


function Servicelist(){
    return(
        <div style={{display:"flex", width:'100%',justifyContent:"space-around", height:"94vw"}}>
            <div className="servicelist" style={{width:"25%", display:"flex", flexDirection:'column', justifyContent:'space-around', height:'90vw' }}>
                <h1 style={{fontSize:"2vw"}}>SERVICE LIST</h1>
                <button className="annualmanagement"  style={{fontSize:"1.3vw", height:"4.5vw"}}>
                    <span>ANNUAL MANAGEMENT</span>
                    <span> + </span>
                </button>
                <button className="annualmanagement" style={{fontSize:"1.3vw", height:"4.5vw"}}>
                    <span>CAR DIAGNOSTICS</span>
                    <span>+</span>
                </button>
                <button className="annualmanagement" style={{fontSize:"1.3vw", height:"4.5vw"}}>
                    <span>GENERAL CHEKCUP</span>
                    <span>+</span>
                </button>
                <button className="annualmanagement" style={{fontSize:"1.3vw", height:"4.5vw"}}>
                    <span>CAR REPAIRS</span>
                    <span>+</span>
                </button>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', height:'15%', backgroundColor:"black", padding:'1vw 2vw'}}>
                    <h1 style={{fontSize:"2vw", color:"white"}}>CONTACT US</h1>
                    <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHQUVvcmO1FrG9b_9EwezMOOn4zuNyerJzg&s" alt=""  style={{width:'1.5vw', height:"1.5vw"}}/><a href="#" style={{fontSize:'1vw'}}>info@vertronmtor.com</a></p>
                    <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOJ3WtKLTu3rtKSF0-G_7hFUx_45NNmqKlQ&s" alt=""  style={{width:'1.5vw', height:"1.5vw"}}/><a href="#" style={{fontSize:'1vw'}}>6:00 AM - 9:00 PM</a></p>
                    <p style={{fontSize:'1vw', color:'white'}}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06v9ek_sXce0EvHkOLivwJ2VN8-tVnCaZ0w&s' alt=""  style={{width:'1.5vw', height:"1.5vw",}}/>D-9, 4th St, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058
                    </p>
                </div>
                <div style={{display:"flex", flexDirection:'column', justifyContent:'space-around', backgroundColor:'black', alignItems:'center', height:'38vw'}}>
                    <h1 style={{fontSize:'1.5vw', color:"white"}}>BOOK AN APPOINTMENT</h1>
                    <input type="text" name="Name" placeholder="Name" id="" style={{height:"10%", fontSize:"1vw"}}/>
                    <input type="text" placeholder="Phone Number" style={{height:"10%", fontSize:"1vw"}}/>
                    <input type="text" placeholder="Email Address" style={{height:"10%", fontSize:"1vw"}}/>
                    <input type="text" placeholder="Car Model" style={{height:"10%", fontSize:"1vw"}}/>
                    <span style={{fontSize:"1vw", color:'white'}}><input type="checkbox" name="" id="" style={{height:'1vw'}}/> I agree to Vertron Privacy Policy and Terms of Use</span>
                    <Button buttonText={'SUBMIT'}/>
                </div>
            </div>
            <div style={{width:'65%', display:"flex", flexDirection:"column", height:"100%"}}>
                <AnnualM/>
            </div>
        </div>
    )
}
export default Servicelist