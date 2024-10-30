import ContactUs from "./contact"

function FormText(){
    return(
        <div style={{width:'40vw', height:'18vw', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
            <h1 style={{fontSize:'2.3vw', color:'white'}}>WE CARE FOR YOUR CAR JUST LIKE <br/> YOU DO</h1>
            <p style={{textAlign:'justify', lineHeight:'30px', fontSize:'1.1vw', color:'white'}}>When you bring your vehicle to Vertron Motor Company, you can rest easy knowing that your vehicle is in professional hands. We take every possible step to ensure that your experience with us is pleasant and efficient.</p>
            <div class="contact" style={{display:'flex', justifyContent:'flex-start', color:"white"}}>
                    <ContactUs/>
                </div>
        </div>
    )
}
export default FormText