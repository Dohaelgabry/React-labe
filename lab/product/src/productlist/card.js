import React from 'react'

function Card(props) {
    return (


        <div className="card col-3 m-3 p-3" style={{ width: "18rem;" }}>
            <img src={props.data.imgURL}classclassName="card-img-top" />
            <div classclassName="card-body">
                <h5 classclassName="card-title">{props.data.name}</h5>
                <p classclassName="card-text">{props.data.price}$</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>




    )
}

export default Card