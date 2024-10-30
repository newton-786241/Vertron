import Button from './button'
import engine from './ENGINE 1.png'

function Group2(){
    return(
        <section class="group2" style={{position:'relative', display:'flex', alignItems:'center', width:'100%', height:'53vw', justifyContent:'space-evenly'}}>
        <div class="img219">
            <img src={engine} style={{width: '47vw', height: '32vw'}} alt=""/>
        </div>
        <div class="219text" style={{display: 'flex', width: '45vw', height: '32vw', flexDirection: 'column', justifyContent:'space-between'}}>
            <h1 style={{fontSize: '3vw',}}>EXPERT CONSULTATION - ASK ANYTHING FOR FREE</h1>
            <p style={{fontSize:'1.5vw', fontWeight:'bold'}}>Because No Question is Too Basic and No Issue is Too Complex</p>
            <p style={{fontSize:'1.3vw', color:'#555555'}}>Get free expert advice on insurance claims, car maintenance tips, buying guidance for second-hand cars, technical issues and more. Don’t hesitate - get answers to all your car-related questions and make informed decisions.</p>
            <a href="#" style={{color:'black', textDecoration:'underline',fontSize:"1.1vw"}}>KNOW MORE</a>
            <div class="btn" style={{display:'flex', alignItems:'center', backgroundColor:'white'}}>
                <Button buttonText={'BOOK NOW'}/>
                    <div class="contact" style={{paddingLeft:'30px'}}>
                        <span>
                            <svg width="3vw" height="3vw" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#6369D1" fill-opacity="0.3"/>
                                <circle cx="20" cy="20" r="15" fill="#6369D1"/>
                                <g clip-path="url(#clip0_1_91)">
                                <path d="M22.4061 16.125C23.0166 16.2441 23.5776 16.5427 24.0174 16.9825C24.4572 17.4223 24.7558 17.9833 24.8749 18.5937M22.4061 13.625C23.6744 13.7659 24.8571 14.3339 25.76 15.2356C26.663 16.1374 27.2324 17.3194 27.3749 18.5875M26.7499 23.575V25.45C26.7506 25.6241 26.7149 25.7964 26.6452 25.9558C26.5755 26.1153 26.4732 26.2585 26.3449 26.3762C26.2167 26.4938 26.0653 26.5834 25.9004 26.6392C25.7355 26.695 25.5608 26.7157 25.3874 26.7C23.4642 26.491 21.6168 25.8338 19.9936 24.7813C18.4835 23.8217 17.2032 22.5414 16.2436 21.0313C15.1874 19.4008 14.53 17.5444 14.3249 15.6125C14.3093 15.4397 14.3298 15.2655 14.3852 15.101C14.4406 14.9366 14.5296 14.7854 14.6466 14.6573C14.7636 14.5291 14.906 14.4267 15.0648 14.3566C15.2235 14.2865 15.3951 14.2502 15.5686 14.25H17.4436C17.747 14.247 18.041 14.3544 18.271 14.5522C18.501 14.75 18.6512 15.0247 18.6936 15.325C18.7728 15.925 18.9196 16.5142 19.1311 17.0813C19.2152 17.305 19.2334 17.5481 19.1836 17.7818C19.1337 18.0155 19.0179 18.2301 18.8499 18.4L18.0561 19.1937C18.9459 20.7585 20.2414 22.054 21.8061 22.9437L22.5999 22.15C22.7698 21.982 22.9844 21.8662 23.2181 21.8163C23.4518 21.7665 23.6949 21.7847 23.9186 21.8687C24.4857 22.0803 25.0749 22.2271 25.6749 22.3063C25.9785 22.3491 26.2558 22.502 26.454 22.7359C26.6522 22.9699 26.7575 23.2685 26.7499 23.575Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_91">
                                <rect width="15" height="15" fill="white" transform="translate(13 13)"/>
                                </clipPath>
                                </defs>
                                </svg>                    
                        </span>
                        <span>
                        <p style={{fontSize:'1vw'}}>Need Help</p>
                        <p style={{fontWeight:'bold', fontSize:'1vw'}}>+91-89398 54430</p>
                        </span>
                    </div>
                </div>
            </div>
    </section>
    )
}
export default Group2