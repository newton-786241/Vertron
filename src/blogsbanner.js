import blogsbanner from './Rectangle 6495 (5).png'

function BlogsBanner(props){
    return(
        <div style={{width:"100%", height:"30vw", display:"flex", justifyContent:'center', flexDirection:"column"}} className="blogsbanner" >
            <img src={blogsbanner} alt="" style={{width:'100%', zIndex:"0", height:"30vw", position:'absolute'}}/>
            <h1 style={{zIndex:'1', position:"absolute", paddingLeft:"4vw", fontSize:"4vw", color:'white'}}>{props.bannertext}</h1>
        </div>
    )
} 
export default BlogsBanner