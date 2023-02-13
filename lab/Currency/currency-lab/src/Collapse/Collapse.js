
import React, { useState } from 'react'

function Collapse() {
    const [flag, setflag] = useState(false);
    function show() {
        if (flag == false) {
            setflag(true)
        } else {
            setflag(false)
        }
    }
  return (
   <div>
          <button onClick={show}>show</button>
          {flag && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illum, nostrum a officiis officia vero optio ex laudantium sit fugit, omnis adipisci delectus architecto magni dolorem, at odio fuga odit?</p>}
   </div>
   
  )
}

export default Collapse