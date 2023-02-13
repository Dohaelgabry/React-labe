
function Divskill() {
  return (
    // div with SKILLS
      <div>
          <h3 className="bg-dark bg-gradient text-light text-center">CONTACT</h3>
          {/* progress1  Photoshop */}
          <div className="row col-12 align-items-center">
              <div className="ps-2 col-4 ">Photoshop </div>
              <div className="progress col-8 " style={{height:"8px"}}>
                  <div className=" progress-bar bg-success" role="progressbar" style={{width:"70%"}} aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100"></div>
              </div>
          </div>


         {/* progress2 InDesign */}
          <div className="row col-12 align-items-center">
              <div className="ps-2 col-4 ">InDesign </div>
              <div className="progress col-8 " style={{height: "8px;"}}>
                  <div className=" progress-bar bg-success" role="progressbar" style={{width: "30%"}} aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100"></div>
              </div>
          </div>
           {/* progress3 Illustrator */}
          <div class="row col-12 align-items-center">
              <div className="ps-2 col-4 ">Illustrator </div>
              <div className="progress col-8 " style={{height:" 8px;"}}>
                  <div className=" progress-bar bg-success" role="progressbar" style={{width: "50%"}} aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100"></div>
              </div>
          </div>


           {/* progress4 After Effects */}
          <div className="row col-12 align-items-center">
              <div className="ps-2 col-4 ">After Effects </div>
              <div className="progress col-8 " style={{height:" 8px;"}}>
                  <div className=" progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100"></div>
              </div>
          </div>





      </div>
  )
}

export default Divskill