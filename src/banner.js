import bannerBg from './Bannerbackground.png'
import Button from './button'

function Banner(){
    return(
        <section class="banner" style={{width:'100%'}}>
        <div class="background" style={{width:'100%'}}>
            <img src={bannerBg} alt="" style={{width:"100%"}}/>
        </div>
        <div class="bannertext" style={{height:'33.5vw', display:'flex', alignItems:'flex-start', flexDirection:'column', justifyContent:'center', paddingLeft:'5vw'}}>
            <h1>SERVICE CENTER EXCLUSIVELY </h1> <h1>FOR LUXURY CARS</h1>
            <p style={{fontSize:'2vw'}}>CAR CARE WHERE PRECISION MEETS PAMPERING</p>
            <div class="btn">
               <Button buttonText={'GET IN TOUCH'}/>
            </div>
        </div>
    </section>
    )
}
export default Banner