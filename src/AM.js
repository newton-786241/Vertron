import serviceimg1 from './Rectangle 6741 (2).png'

function AnnualM(){
    return(
        <div>
            <div style={{display:'flex', flexDirection:'column', height:'140%', justifyContent:'space-around'}}>
                <h1 style={{fontSize:'2.5vw'}}>ANNUAL MAINTENACE</h1>
                <h1 style={{fontSize:'2.1vw', fontWeight:'normal'}}>ESSENTIAL ROUTINE CAR CARE FOR PEAK PERFORMANCE</h1>
                <p style={{fontSize:'1.4vw'}}>Annual maintenance is crucial for keeping your car in optimal condition, ensuring smooth performance, longevity, and safety on the road year after year.</p>
                <img src={serviceimg1} alt="" style={{width:"100%", height:'auto'}}/>
                <h1 style={{fontWeight:'normal', fontSize:'2.1vw'}}>WHAT WE DO</h1>
                <p style={{fontSize:'1.4vw'}}>Our service covers a comprehensive range of tasks including thorough fluid checks and changes, tire rotations, engine inspections, brake system inspections, battery testing and comprehensive vehicle diagnostics using advanced tools and technology.</p>
                <h1 style={{fontWeight:'normal', fontSize:'2.1vw'}}>WHY US</h1>
                <p style={{fontSize:'1.4vw'}}>Our team of experienced technicians is fully trained to handle luxury vehicles. We use high-quality parts and tools, combined with our expertise, to provide reliable and long-lasting solutions.</p>
            </div>
        </div>
    )
}
export default AnnualM