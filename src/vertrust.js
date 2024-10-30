import rectangle6741 from './Rectangle 6741.png'

function Vertrust(){
    return(
        <div>
            <section class="group1"style={{ display: 'flex', justifyContent: 'space-around', height:'30vw', width: '100%', alignItems: 'center', padding: '5vw 0px', marginBottom: '5vw', position:'relative'}}>
            <div class="grouptext" style={{ width: '45%', height: '25vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <h1 style={{fontSize:'2.5vw'}}>VERTRON SYMBOLIZES TRUST</h1>
                <p style={{fontSize:'1.5vw'}}>At Vertron, we embody trust - quite literally, as "Vertron" is derived from the German word for trust. Our commitment to excellence goes beyond mere business; it's a passion-driven journey. </p><p style={{fontSize:'1.5vw'}}>

                    Just as you cherish your luxury vehicle, we treat each car as our own, with meticulous care and attention to detail. With Vertron, you're not just a client; you're part of our trusted family, where every service is infused with dedication and integrity.</p>
            </div>
            <div class="img" style={{width:"45%"}}>
                <img src={rectangle6741} alt="" style={{ width: '100%', height: '30vw' }}/>
            </div>
    </section>
        </div>
    )
}
export default Vertrust