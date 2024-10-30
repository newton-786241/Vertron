import Button from "./button"

function Form(props){
    return(
        <div style={{width:'45vw', height:'40vw'}}>
            <div className="blur" style={{border:"1px solid white",borderRadius:'20px',opacity:"100%", display:'flex', flexDirection:'column', justifyContent:'space-around',paddingLeft:'1vw',height:'35vw', marginTop:'3vw'}}>
            <p style={{fontSize:'1.1vw', color:'white',}}>Lorem ipsum dolor sit amet.</p>
            <h1 style={{fontSize:'2.6vw', color:'white'}}>{props.formheading}</h1>
            <div className="line1" style={{display:'flex', justifyContent:"space-around"}}>
                <input type="text" placeholder="Name" style={{width:"20vw", height:'3.4vw', fontSize:"1vw", borderRadius:'10px'}}/>
                <input type="text" placeholder="Email Adress"style={{width:"20vw", height:'3.4vw', fontSize:"1vw", borderRadius:'10px'}}/>
            </div>
            <div className="line1" style={{display:'flex', justifyContent:"space-around"}}>
                <input type='number' placeholder="Phone Number" style={{width:"20vw", height:'3.4vw', fontSize:"1vw", borderRadius:'10px'}}/>
                <input type="text" placeholder="Car Model"style={{width:"20vw", height:'3.4vw', fontSize:"1vw", borderRadius:'10px'}}/>
            </div>
            <div className="line3" style={{fontSize:'1vw', color:'white'}}>
                <input type="checkbox" name="" id="" style={{fontSize:'1vw',}}/>I agree to Vertron Privacy Policy and Terms of Use
            </div>
            <div className="button" style={{alignSelf:'center',}}>
                <Button buttonText={'SUBMIT'}/>
            </div>
            </div>
        </div>
    )
}
export default Form