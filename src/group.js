import Button from './button'
import Cardbox from './cardbox'
import gear from './Group 1410520978.png'
import gear1 from './Group 1410520979 (1).png'
import carrepair from './Group 1410520979 (3).png'
import sourcing from './Group 1410520979 (4).png'
import GroupBox from './groupbox'

function Group(){
    return(
        <section className="greybackground" style={{backgroundColor:'aliceblue', width:'100%', height:'45vw', display:'flex', flexDirection:'column', justifyContent:'space-evenly',}}>
            <section className="fullrange" style={{backgroundColor:'aliceblue', fontSize:'2.4vw', fontWeight:'bold', width:'100%'}}>
                <p style={{padding:"0px 5vw"}}>FULL RANGE AUTO SERVICES</p>
            </section>
            <div style={{display:'flex', width:'100%', justifyContent:'space-around', marginBottom:"3vw", backgroundColor:"azure"}}>
                <Cardbox heading={'ANNUAL MAINTENANCE'} text={'ESSENTIAL ROUTINE CAR CARE FOR PEAK PERFORMANCE'} image={gear}/>
                <Cardbox heading={'CAR DIAGNOSTICS'} text={'Precision Analysis, Minimising Whole Part Changes'} image={gear1}/>
                <Cardbox heading={'GENERAL CHECKUP'} text={"Assessing Your Car's General Health, Viability and Life"} image={gear}/>
                <Cardbox heading={'CAR REPAIRS'} text={"Holistic Solutions for Your Car's needs"}image={carrepair}/>
                <Cardbox heading={'SOURCING PARTS'} text={"Rare Car Parts Sourced From Across the Globe"} image={sourcing}/>
            </div>
        </section>
    )
}
export default Group