import bosch from './Bosch logo.png'
import mann from './mann-filter logo.png'
import ebc from './ebc-brakes-1 logo.png'
import febi from './febi-bilstein logo.png'
import behr from './behr-paint logo.png'
import fag from './FAG logo.png'
import hella from './Hella logo.png'
import ina from './INA_logo logo.png'
import ate from './logo_ate.png'
import addinol from './addinol-logo.png'
import zf from './Zf logo.png'
import magneti from './magneti-marelli logo.png'
import circle from './Circle.png'

function Circle(){
    return(
        <div className="circlebg" style={{height:'47vw', backgroundColor:'black'}}>
            <img src={circle} alt="" style={{height:"47vw",width:"100%", zIndex:'0', position:"absolute"}}/>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', height:"100%"}}>
                <h1 style={{alignSelf:'center', zIndex:"1", fontSize:"2.5vw", color:'white'}}>OUR PARTNERS</h1>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <img src={bosch} alt="" style={{zIndex:"1", width:"16vw", height:"5vw"}}/>
                    <img src={mann} alt="" style={{zIndex:"1", width:"12vw", height:"5vw"}}/>
                    <img src={febi} alt="" style={{zIndex:"1", width:"7vw", height:"5vw"}}/>
                    <img src={ebc} alt="" style={{zIndex:"1", width:"10vw", height:"5vw"}}/>
                </div>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <img src={behr} alt="" style={{zIndex:"1", width:"15vw", height:"5vw"}}/>
                    <img src={fag} alt="" style={{zIndex:"1", width:"10vw", height:"5vw"}}/>
                    <img src={hella} alt="" style={{zIndex:"1", width:"7vw", height:"5vw"}}/>
                    <img src={ina} alt="" style={{zIndex:"1", width:"7vw", height:"5vw"}}/>
                </div>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                    <img src={ate} alt="" style={{zIndex:"1", width:"7vw", height:"5vw"}}/>
                    <img src={addinol} alt="" style={{zIndex:"1", width:"10vw", height:"3vw"}}/>
                    <img src={zf} alt="" style={{zIndex:"1", width:"8vw", height:"5vw"}}/>
                    <img src={magneti} alt="" style={{zIndex:"1", width:"10vw", height:"5vw"}}/>
                </div>
            </div>
        </div>
    )
}
export default Circle