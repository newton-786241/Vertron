import testimg1 from './unsplash_sgZX15Da8YE.png'
import testimg2 from './unsplash_sgZX15Da8YE2.png'

function Testimonials(){
    return(
        <div>
        <section class="testimonialsbox" style={{width:'100%', height:'45vw', backgroundColor:'#C4C4C4', position:'relative', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <h1 style={{fontSize:'2.6vw', fontWeight:"bold", alignSelf:"center"}}>TESTIMONIALS</h1>
                <div class="testimonials" style={{display:"flex", justifyContent:'space-evenly', width:'100%'}}>
                    <div class="testimonial" style={{height: '26vw', width: '48%'}}>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', backgroundColor:'white', width:'40%'}}>
                            <h1 style={{fontSize:'1.5vw', alignSelf:'center'}}>JAIDEEP SINGH</h1>
                            <p style={{padding:"1.2vw", lineHeight:'3vw  ', fontSize:'1.1vw', textAlign:"justify"}}>Fantastic service, superb punctuality. Availed their service twice and truly most satisfying. The response of coordinator is prompt and she was greatly supportive.
                            Thanks a lot..!!</p>
                        </div>
                        <img src={testimg1} style={{width: '55%', height: '26vw'}} alt=""/>
                    </div>
                    <div class="testimonial" style={{height:'26vw', width:"48%"}}>
                        <div style={{display:'flex', flexDirection:'column', alignItems:"center", justifyContent:'center', width:'40%', backgroundColor:'white', alignItems:'baseline'}}>
                            <h1 style={{fontSize:'1.5vw', alignSelf:'center'}}>VISHAL BABBAR</h1>
                            <p style={{padding:"1.2vw", fontSize:'1.1vw', lineHeight:'3vw',  textAlign:"justify"}}>I love the service. They handle your car very carefully and make sure that the car owner is satisfied or not.
                            I will recommend it to anyone. Just try at least once</p>
                        </div>
                        <img src={testimg2} style={{width: '55%', height: '26vw'}} alt=""/>
                    </div>
                </div>
        </section>
        </div>
    )
}
export default Testimonials