import Form from './form'
import grpbg from './Rectangle 6503.png'
import FormText from './text'

function Group3({sectionStyle}){
    return(
        <section class="group3" style={{width:"99vw", height:'43vw'}}>
        <div className='test' style={{display:'flex', justifyContent:"space-around", alignItems:'center'}}>
            <div><FormText/></div>
            <div><Form formheading={'Book An Appointment'}/></div>
        </div>
    </section>
    )
}
export default Group3