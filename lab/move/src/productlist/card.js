import React from 'react'
import { useNavigate } from 'react-router'
function Card(props) {
    const nav=useNavigate();
    
    function go(data){
        console.log(data)
        nav('/item',{state:data});
        }
    return (
        
            // <div className="card col-3 m-3 p-3" style={{ width: "18rem" }}>
            //     <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`} />
            //     <div className="card-body">
            //         <h5 className="card-title">{props.data.title}</h5>


            //         <p className="card-text">{props.data.overview.length > 80 ? props.data.overview.substring(0, 80).concat("...more") : props.data.overview}</p>


            //     <button className="btn btn-primary" onClick={() => go(props.data)}>See Details</button>
            //     </div>
            //     {/*  */}
           
            // </div>



        <div className="card p-3" style={{ width: "18rem" }}>
                <img src={`https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    </div>
                <button className="btn btn-primary" onClick={() => go(props.data)}>See Details</button>
            </div>
       

    )
}

export default Card