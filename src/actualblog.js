import Button from "./button"
import blogphoto1 from './Rectangle 6727.png'
import rectangle12 from './Rectangle 12.png'

function Actualblog(){
    return(
        <div style={{display:"flex", width:'100%', justifyContent:'space-around', height:'150vw'}}>
            <div style={{width:"60%", display:"flex", flexDirection:"column", justifyContent:'space-around', padding:'6vw 0px'}}>
                <img src={rectangle12} alt="" style={{width:"100%", height:"32vw"}} />
                <p style={{fontSize:"1vw"}}>November 20, 2020 - Vertron</p>
                <h1 style={{fontSize:'2.5vw'}}>LOREM IPSUM IS A DUMMY TEXT</h1>
                <p style={{fontSize:"1vw"}}>Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan
Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
              Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.</p>
                <a href="#" style={{textDecoration:'underline', color:"blue", fontSize:'0.9vw'}}>Read more</a>
                <img src={rectangle12} alt="" style={{width:"100%", height:'32vw'}} />
                <p style={{fontSize:"1vw"}}>November 20, 2020 - Vertron</p>
                <h1 style={{fontSize:"2.5vw"}}>LOREM IPSUM IS A DUMMY TEXT</h1>
                <p style={{fontSize:'1vw'}}>Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan
Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
              Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
              Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.</p>
                <a href="#" style={{textDecoration:'underline', color:"blue", fontSize:'1vw'}}>Read more</a>
            </div>
            <div style={{width:'25vw',padding:"7vw 0px", display:'flex', flexDirection:"column", justifyContent:"space-between", height:"44%"}}>
            <div style={{width:"100%", height:"23vw",borderRadius:"20px", backgroundColor:"grey", display:"flex", flexDirection:'column', justifyContent:"space-around",}}>
                <h1 style={{fontSize:'2.2vw'}}>RECENT POSTS</h1>
                <div style={{display:"flex", alignItems:'center', justifyContent:"space-around"}}>
                    <img src={blogphoto1} alt="" style={{height:'6vw', width:"6vw"}}/>
                    <p style={{fontSize:"1.2vw"}}>Lorem ipsum is a dummy text <br />February 10, 2024</p>
                </div>
                
                <div style={{display:'flex', alignItems:"center", justifyContent:"space-around"}}>
                    <img src={blogphoto1} alt="" style={{height:"6vw", width:"6vw"}}/>
                    <p style={{fontSize:"1.2vw"}}>Lorem ipsum is a dummy text <br />February 10, 2024</p>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:'column', justifyContent:'space-around', backgroundColor:'black', alignItems:'center', height:'40vw', width:"100%",}}>
                    <h1 style={{fontSize:'1.5vw',color:"white"}}>BOOK AN APPOINTMENT</h1>
                    <input type="text" name="Name" placeholder="Name" id="" style={{height:"2.5vw", width:"18vw", fontSize:"1vw"}}/>
                    <input type="text" placeholder="Phone Number" style={{height:"2.5vw", width:"18vw", fontSize:"1vw"}}/>
                    <input type="text" placeholder="Email Address" style={{height:"2.5vw", width:"18vw", fontSize:"1vw"}}/>
                    <input type="text" placeholder="Car Model" style={{height:"2.5vw", width:"18vw", fontSize:"1vw"}}/>
                    <span style={{fontSize:'1vw',color:"white"}}><input type="checkbox" name="" id="" style={{height:'1vw'}}/> I agree to Vertron Privacy Policy and Terms of Use</span>
                    <Button buttonText={'SUBMIT'}/>
                </div>
                </div>
        </div>
    )
}
export default Actualblog