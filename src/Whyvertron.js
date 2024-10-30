import wvimg from './Rectangle 6745.png'
import carinner from './car inner 1.png'

function Whyvertron(){
    return(
        <div>
             <section class="whyvertron"  style={{ width: '100%', height: '90vw', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'black', position: 'relative', top: '0px',}}>
        <h1 style={{ color: 'white', fontSize: '2.5vw', position: 'relative', top: '10.5vw' }}>WHY VERTRON</h1>
        <div  style={{ display: 'flex', width: '100%', justifyContent: 'space-around', position: 'relative', top: '15vw' }}>
            <div style={{ color: 'white', display: 'flex', textAlign: 'end', justifyContent: 'space-between', flexDirection: 'column', height: '55vw', width: '28vw' }}>
                <div style={{ height: '15vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <img src={wvimg} style={{ width: '4vw', height: '4vw', alignSelf: 'flex-end' }}/>
                    <h1 style={{fontSize:"1.5vw"}}>FITNESS CHECKING FACILITY</h1>
                    <p style={{fontSize:"1vw"}}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
                </div>
                <div style={{ height: '15vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <img src={wvimg} style={{ width: '4vw', height: '4vw', alignSelf: 'flex-end' }} alt=""/>
                    <h1 style={{fontSize:"1.5vw"}}>EXPERT ENGINE AND BALANCING</h1>
                    <p style={{fontSize:"1vw"}}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
                </div>
                <div style={{ height: '15vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <img src={wvimg} style={{ width: '4vw', height: '4vw', alignSelf: 'flex-end' }} alt=""/>
                    <h1 style={{fontSize:"1.5vw"}}>CAR WASH FACILITY</h1>
                    <p style={{fontSize:"1vw"}}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
                </div>
            </div>
            <div>
                <img src={carinner} style={{ width: '26vw', height: '60vw' }} alt=""/>
            </div>
            <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '55vw', width: '28vw' }}>
                <div style={{ height: '15vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <img src={wvimg} style={{ width: '4vw', height: '4vw' }} alt=""/>
                    <h1 style={{fontSize:'1.5vw'}}>FITNESS CHECKING FACILITY</h1>
                    <p style={{fontSize:"1vw"}}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
                </div>
                <div style={{ height: '15vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <img src={wvimg} style={{ width: '4vw', height: '4vw' }} alt=""/>
                    <h1 style={{fontSize:'1.5vw'}}>FITNESS CHECKING FACILITY</h1>
                    <p style={{fontSize:"1vw"}}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
                </div>
                <div style={{ height: '15vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <img src={wvimg} style={{ width: '4vw', height: '4vw' }} alt=""/>
                    <h1 style={{fontSize:'1.5vw'}}>FITNESS CHECKING FACILITY</h1>
                    <p style={{fontSize:"1vw"}}>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, </p>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}
export default Whyvertron