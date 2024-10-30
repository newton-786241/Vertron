import Button from "./button";
import group4img from './Group 228.png'

function Group4(){
    return(
        <div>
            <section class="group4" style={{position:'relative', backgroundColor:'black', width:"100%", height:'50vw', alignItems:'center', display:'flex', justifyContent:'space-around'}}>
        <div class="grouop4text" style={{color:'white', display:'flex', flexDirection:'column', justifyContent:'space-around', width:'45vw', height:'27vw'}}>
            <h1 style={{fontSize: '3vw', fontWeight: 'bold'}}>LOOKING FOR A RARE LUXURY CAR PART?</h1>
            <h2 style={{fontSize:'1.5vw'}}>WE UNDERSTAND - YOUR CAR IS YOUR BABY</h2>
            <p style={{fontSize: '1.2vw', textAlign:'justify', width: '40vw',}}>Whether it's from Europe or anywhere worldwide, we procure original luxury car parts, guaranteeing authenticity and quality for your cherished vehicle, no matter how intricate or rare.</p>
            <div style={{display:'flex'}}>
                <Button buttonText='GET IN TOUCH'/>
            </div>
            </div>
        <div class="group4img">
            <img src={group4img} style={{width:'45vw', height:'40vw'}} alt=""/>
        </div>
    </section>
        </div>
    )
}
export default Group4