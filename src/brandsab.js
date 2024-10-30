import img1 from './Rectangle 6495.png'

function Brandsab(){
    return(
        <div>
            <section class="banner">
        <div class="bannertext" style={{height:'25vw', left:'0px', top:'0px'}}>
            <img src={img1} alt="" style={{ position: 'relative', margin:'0px',position:"absolute", zIndex: -1, width: '100%', height: 'auto' }}/>
            <h1 style={{ fontSize: '4vw', height:"100%", paddingLeft:"5vw", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: 'white',justifyContent:'center',flexDirection:"column", display:'flex',}}>WHO WE ARE</h1>
        </div>
    </section>
        </div>
    )
}
export default Brandsab