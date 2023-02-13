import React,{useState} from 'react'
import image1 from'./Asset 12.png'
import image2 from './Asset 13.png'

function Changecurrency() {

const [flag, setflag] = useState(false);
    const [Numd1, setNumd1] = useState(0);
    const [Numd2, setNumd2] = useState(1);
    function show() {
        if (flag == false) {
            setflag(true)
            setNumd1(Numd1+1)
        } else {
            setflag(false)
            setNumd2(Numd2+1)
        }
    }
  return (
      <div>
          
          {flag ? <img style={{ width: "100px", height: " 100px;" }} src={image1} /> : <img src={image2} style={{ width: "100px", height: " 100px;" }} />}
          <p>B={Numd2}</p> 
          <p>~={Numd1}</p> 
          
          <button className='btn btn-danger' onClick={show}>show</button>

      </div>
  )
}

export default Changecurrency