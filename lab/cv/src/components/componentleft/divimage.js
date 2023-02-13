import './styledivimage.css'
import image from './1.png'
function Divimage() {
  return (
    // dive with image
      <div >
      <img src={image} className="rounded-circle image p-1 "/>
              <p class="text-center fs-1 fw-bold">HELLO</p>
      </div>
  )
}

export default Divimage;