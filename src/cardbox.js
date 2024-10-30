import Button from "./button";

function Cardbox(props){
    return(
        <div style={{width:"16vw", height:"28vw", display:'flex', justifyContent:'space-around', flexDirection:"column", paddingLeft:"20px", backgroundColor:"white"}}>
            <img src={props.image} alt="" style={{width:"67px", height:'67px'}} />
            <h1 style={{fontSize:'1.5vw', color:"black"}}>{props.heading}</h1>
            <p style={{fontSize:'1.1vw', color:"black"}}>{props.text}</p>
            <a href="#" style={{textDecoration:'underline', fontSize:'1vw', color:'black'}}>KNOW MORE</a>
            <Button buttonText={'BOOK NOW'}/>
        </div>
    )
}
export default Cardbox