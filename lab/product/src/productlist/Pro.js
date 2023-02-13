import React, { useState } from 'react'
import Card from './card'
function Pro() {
let[input,setInput]=useState();
function addData(e){
    setInput(e.target.value)
}

    let list = [{
        id: 1,
        name: "Lenvo thinpad X230",
        price: 100,
        quantity: 0,
        categoryID: "phone",
        imgURL: "https://picsum.photos/200"
    },
    {
        id: 2,
        name: "Dell 1",
        price: 3000,
        quantity: 20,
        categoryID: "laptop",
        imgURL: "https://picsum.photos/200"
    }, {
        id: 2,
        name: "Dell 2",
        price: 2000,
        quantity: 20,
        categoryID: "laptop",
        imgURL: "https://picsum.photos/200"
    }, {
        id: 2,
        name: "Dell3",
        price: 5000,
        quantity: 20,
        categoryID: "laptop",
        imgURL: "https://picsum.photos/200"
    },
    {
        id: 3,
        name: "Lenovo Tab",
        price: 500,
        quantity: 1,
        categoryID: 2,
        imgURL: "https://picsum.photos/200"
    },
    {
        id: 4,
        name: "Samsung Tab1",
        price: 9000,
        quantity: 10,
        categoryID: "Tab",
        imgURL: "https://picsum.photos/200"
    }, {
        id: 4,
        name: "Samsung Tab2",
        price: 600,
        quantity: 10,
        categoryID: "Tab",
        imgURL: "https://picsum.photos/200"
    }, {
        id: 4,
        name: "Samsung Tab3",
        price: 8000,
        quantity: 10,
        categoryID: "Tab",
        imgURL: "https://picsum.photos/200"
    },
    {
        id: 5,
        name: "Samsung note 10",
        price: 1000,
        quantity: 10,
        categoryID: "phone",
        imgURL: "https://picsum.photos/200"
    },
    {
        id: 6,
        name: "Samsung S10",
        price: 6000,
        quantity: 10,
        categoryID: "phone",
        imgURL: "https://picsum.photos/200"
    }]

    let [arr, setArr] = useState(list);
    arr.map((i) => console.log(i))

    function fillter(input) {
        let newarr = list.filter((item) => (item.categoryID == input))
        setArr(newarr)
    }

   function sort_price(){
       let newarr = list.sort((a, b) => (a.price-b.price));
       console.log(list.price)
       setArr([...newarr])
    }

    return (
        <div className='container'>
            <div className='row '>
                <div className='col-8'>
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    onChange={addData} />
                </div>
 
                <button class="btn btn-outline-success col-1"
                    onClick={() => fillter(input)}
                > Search</button>


                <button class="btn btn-outline-success col-1"
                    onClick={sort_price}
                >sort</button>
                
            </div>

            <div className='row '>
                {arr.map((m, index) => <Card key={index} data={m} />)}
            </div>
        </div>
    )
}

export default Pro