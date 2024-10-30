import audi from './Audi.png'
import skoda from './skoda-6 logo.png'
import rollsroyce from './Rolls-Royce logo.png'
import jaguar from './Jaguar.png'
import bmw from './BMW logo.png'
import volvo from './Volvo logo.png'
import land from './Land logo.png'
import merc from './Mercedes-Benz logo.png'
import volks from './Volkswagen logo.png'

function Brands(){
    return(
        <div>
        <div class="brands" style={{width:"100%", height:"10vw"}}>
        <img src={volks} alt="" style={{width:'6vw',height:'6vw'}}/>
        <img src={merc} alt="" style={{width:'6vw',height:'6vw'}}/>
        <img src={land} style={{width:'9vw',height:'5vw'}} alt=""/>      
        <img src={volvo} alt="" style={{width:'6vw',height:'6vw'}}/>
        <img src={bmw} alt="" style={{width:'6vw',height:'6vw'}}/>
        <img src={jaguar} style={{width:'10vw',height:'4.5vw'}} alt=""/>
        <img src={rollsroyce} style={{width:'3.5vw',height:'6vw'}} alt=""/>
        <img src={skoda} alt="" style={{width:'6vw',height:'6vw'}}/>
        <img src={audi} style={{width:'13vw',height:'5vw'}} alt=""/>
    </div>
        </div>
    )
}
 export default Brands;