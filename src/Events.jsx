import nationcamp from '/nationcamp.png'
import bloodcamp from '/bloodcamp.png'
import specialcamp from '/specialcamp.png'

const Events = () => {
    const nss_events = [
    {title:'National Camps',path:'/',img: nationcamp },
    {title:'Blood Donation Camp',path:'/Events/Blood-camp',img: bloodcamp},
    {title:'Special Camp',path:'/About',img: specialcamp},
    {title:'Social Activities',path:'/Office',img:'/socialact.png'}
    ]
  
    return (
            <div  style={{height:'600px', width:"100%" }}className="flex p-5 justify-center">
            <div className="vertical-align:top items-center">
            <div className="flex justify-center font-medium tracking-wide text-4xl leading-loose antialiased ">
                <h1>NSS PTU Events</h1>
            </div>
            <div style={{ borderBottom: '1px solid #ccc' }}></div>
            <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {nss_events.map((ele,id)=>(   
                <a>
                    <div  style={{width:"300px", backgroundImage: `URL(${ele.img})`, backgroundPosition:`center`,backgroundSize: 'cover',  }}  className="relative max-w-sm min-h-40 w-full mx-auto bg-blue-500 rounded-lg shadow-md">
                        <div className="absolute inset-0 bg-blue-200 bg-opacity-40 hover:bg-transparent rounded-lg transition-all">
                            <p className="flex justify-center items-center min-h-40 text-white font-semibold font-sans text-2xl hover:text-3xl transition-all subpixel-antialiased italic rounded-lg">{ele.title}</p>
                    
                        </div>
                        </div>
                </a>
                ))}
            </div>

            </div>
        </div> 
        </div>
        
    )
}
export default Events;