

function Button(props){
    return(
        <div>
            <div class="btn" style={{display:'flex', justifyContent:'flex-start'}}>
                <div style={{display:'flex', height:"3vw"}}>
                    <div style={{backgroundColor: '#6369D1', padding: '0px 5px', fontSize:'1.2vw', alignItems: 'center', fontWeight: 'normal', height: '3vw', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '10vw', color:'white' }}>{props.buttonText}</div>
                    <button style={{fontSize:'1.4vw', height:'3vw', width:'3vw', padding:'0px 10px', color:'#6369D1'}}>+</button>
                </div>
                </div>
        </div>
    )
}
export default Button