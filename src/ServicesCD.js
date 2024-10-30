import Button from "./button";
import CarD from "./CD";

function ServiceCD(){
    return(
        <div style={{display:"flex", justifyContent:"space-around", height:"2000px"}}>
            <div className="servicelist" style={{width:"25%", display:"flex", flexDirection:'column', justifyContent:'space-around', height:'1500px' }}>
                <h1>SERVICE LIST</h1>
                <button className="annualmanagement" >
                    <span><a href='/CD'>ANNUAL MANAGEMENT</a></span>
                    <span> + </span>
                </button>
                <button className="annualmanagement">
                    <span>CAR DIAGNOSTICS</span>
                    <span>+</span>
                </button>
                <button className="annualmanagement">
                    <span>GENERAL CHEKCUP</span>
                    <span>+</span>
                </button>
                <button className="annualmanagement">
                    <span>CAR REPAIRS</span>
                    <span>+</span>
                </button>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', height:'15%', backgroundColor:"black", padding:'10px 20px'}}>
                    <h1>CONTACT US</h1>
                    <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvHQUVvcmO1FrG9b_9EwezMOOn4zuNyerJzg&s" alt="" /><a href="#">info@vertronmtor.com</a></p>
                    <p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOJ3WtKLTu3rtKSF0-G_7hFUx_45NNmqKlQ&s" alt="" /><a href="#">6:00 AM - 9:00 PM</a></p>
                    <p>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06v9ek_sXce0EvHkOLivwJ2VN8-tVnCaZ0w&s' alt="" />D-9, 4th St, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058
                    </p>
                </div>
                <div style={{display:"flex", flexDirection:'column', justifyContent:'space-around', backgroundColor:'black', alignItems:'center', height:'660px'}}>
                    <h1 style={{fontSize:'24px'}}>BOOK AN APPOINTMENT</h1>
                    <input type="text" name="Name" placeholder="Name" id="" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Car Model" />
                    <span><input type="checkbox" name="" id="" style={{height:'20px'}}/> I agree to Vertron Privacy Policy and Terms of Use</span>
                    <Button buttonText={'SUBMIT'}/>
                </div>
            </div>
            <div style={{height:"100%", width:"65%"}}>
            <CarD/></div>
        </div>
    )
}
export default ServiceCD