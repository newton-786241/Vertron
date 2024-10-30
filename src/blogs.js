import Button from "./button";
import rectangle12 from './Rectangle 12.png'
import rectangle13 from './Rectangle 13.png'
import rectangle14 from './Rectangle 14.png'

function Blogs(){
    return(
        <div>
            <section class="blogs" style={{position:'relative', width:'100%', display:'flex', flexDirection:'column', justifyContent:"space-around", height:'55vw'}}>
        <h1 style={{padding:'2.6vw 6vw', fontSize:'2.5vw'}}>BLOGS</h1>
        <div class="blogsbox" style={{display:'flex', justifyContent:'space-around', width:"100%"}}>
            <div class="blog" style={{width:"30%", height:'35vw'}}>
                <img src={rectangle12} style={{width:"100%", height:'21vw'}} alt=""/>
                <h2 style={{fontSize:'1.7vw'}}>LOREM IPSUM</h2>
                <p style={{fontSize:'1vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, nostrum accusamus? Pariatur adipisci enim doloribus cupiditate dolor! Fuga at neque cupiditate nisi, praesentium amet earum quas a non pariatur labore?</p>
                <p style={{color:'grey', fontSize:"1vw"}}>November 20, 2020 - VETRON</p>
            </div>
            <div class="blog" style={{width:'30%', height:'35vw'}}>
                <img src={rectangle13} style={{width:"100%", height:'21vw'}} alt=""/>
                <h2 style={{fontSize:'1.7vw'}}>LOREM IPSUM</h2>
                <p style={{fontSize:'1vw'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt non iure doloremque magni nam recusandae, labore autem esse provident accusamus quia vitae ratione consectetur quis expedita aut, cumque quae enim?</p>
                <p style={{color:'grey', fontSize:"1vw"}}>November 20, 2020 - VETRON</p>
            </div>
            <div class="blog" style={{width:'30%', height:'35vw'}}>
                <img src={rectangle14} style={{width:"100%", height:'21vw'}} alt=""/>
                <h2 style={{fontSize:'1.7vw'}}>LOREM IPSUM</h2>
                <p style={{fontSize:'1vw'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aliquid ratione deserunt quis omnis accusantium nesciunt beatae. Ipsa corrupti iusto quisquam velit laboriosam ab enim.</p>
                <p style={{color:'grey', fontSize:"1vw"}}>November 20, 2020 - VETRON</p>
            </div>
        </div>
        <div style={{alignSelf:'center'}}>
        <Button buttonText="VIEW ALL"/></div>
    </section>
        </div>
    )
}
export default Blogs