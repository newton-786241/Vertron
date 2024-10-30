import Form from "./form";
import rectangle6503 from './Rectangle 6503 (1).png'

function Enquire(){
    return(
        <div className="enquirybg" style={{display:"flex", justifyContent:'space-around', alignItems:'center', height:"47.5vw"}}>
            <img src={rectangle6503} alt="" style={{position:"absolute", zIndex:"0", height:"47.5vw", width:'100%'}} />
            <div style={{height:"24vw", zIndex:'1', display:'flex', flexDirection:'column', background:"none", justifyContent:'space-around',width:'45%'}}>
                <div><h1 style={{fontSize:'3vw', color:'white'}}>NEED A GENERAL OR ROUTINE CAR PART?</h1></div>
                <p style={{fontSize:'1.2vw', color:'white'}}>Our services extend beyond rare luxury car parts – we specialize in sourcing and fixing all types of components, ensuring your vehicle receives top-notch care and quality solutions, no matter the size or complexity of the part needed</p>
            </div>
            <div style={{width:'50%', maxHeight:"100%", zIndex:'1',}}>
                <Form formheading={'Enquire for Custom Parts'}/>
            </div>
        </div>
    )
}
export default Enquire