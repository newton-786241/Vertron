import Button from './button'
import rim  from './Rectangle 6750.png'
function Rim(){
    return(
        <div style={{display:'flex', justifyContent:'space-around', width:'100%',height:"40vw", alignItems:'center'}}>
            <div style={{display:'flex', flexDirection:"column", justifyContent:'space-around', height:"80%", width:'40%'}}>
                <h1 style={{fontSize:'3vw'}}>WE SOURCE GENUINE CAR PARTS FROM ACROSS THE GLOBE</h1>
                <p style={{fontSize:'2.1vw'}}>DOESN'T MATTER IF IT IS TOO SMALL OR TOO BIG TO BE SHIPPED</p>
                <p style={{fontSize:'1.15vw'}}>Exclusive Luxury Car Parts are Rare - But Not Anymore! From Europe to America and beyond, our global sourcing network enables us to procure original luxury car parts from various regions worldwide. Whether it's a rare component or a specialized part, trust us to deliver authenticity and quality for your cherished vehicle.</p>
                <Button buttonText={'GET IN TOUCH'}/>
            </div>
            <div>
                <img src={rim} alt="" style={{width:"40vw", height:"30vw"}}/>
            </div>
        </div>
    )
}
export default Rim