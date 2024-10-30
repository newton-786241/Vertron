import Button from './button'
import ContactUs from './contact'
import rectangle6749 from './Rectangle 6749.png'
function Roar(){
    return(
        <div style={{display:"flex", height:'40vw', alignItems:'center',justifyContent:"space-around"}}>
            <div style={{display:"flex", flexDirection:'column', justifyContent:'space-around', height:"25vw", width:'42%'}}>
                <div><h1 style={{fontSize:'2.4vw'}}>ROARING ENGINES CAPTIVATE US & SMELL OF INTEIOR LEATHERS ENERGIZE US </h1>
                </div>
                <p style={{fontSize:'1.2vw'}}>As luxury cars are our world, our passion reflects in our work. 
                Book now for personalised car care solutions tailored to your needs and experience peace of mind and exceptional service.</p>
                <div style={{display:'flex'}}>
                    <Button buttonText={'GET IN TOUCH'}/>
                    <ContactUs/>
                </div>
            </div>
            <div>  
                <img src={rectangle6749} alt="" style={{width:"45vw", height:"28vw"}}/>
            </div>
        </div>
    )
}
export default Roar