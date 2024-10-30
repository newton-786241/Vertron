import rectangle6495 from './Rectangle 6495 (4).png'
import tire from './1700545267558 1.png'

function PartsBanner(){
    return(
        <div style={{maxWidth:"100%", height:"30vw", display:'flex', justifyContent:'space-between',}} className='Partsbanner'>
            <div style={{display:'flex', alignSelf:"center", flexDirection:'column',padding:"0px 4vw"}}>
                <h1 style={{fontSize:'3vw', color:'white'}}>DISCOVER RARE PARTS</h1>
                <h1 style={{fontSize:'3vw', color:'white'}}>MADE JUST FOR YOU</h1>
            </div>
            <div style={{display:'flex', alignSelf:'center'}}>
                <img src={tire} alt="" style={{width:"90%", height:'25vw'}}/>
            </div>
        </div>
    )
}
export default PartsBanner