import '../styles/Contact.css'
import Button from '../components/Button'

export default function GetCalled() {
  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT US</span>
              </div>
              <div className="app-contact">Email - <p></p>syedmouad@gmail.com</div>
              <div className="app-contact">ADDRESS - <p></p> XYZ Group Contracting 0000 S. XYZ Road Continental, XY 00000</div>
              <div className="app-contact">CONTACT - <p></p> +23 81 314 948 595</div>

              
            </div>
            
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="NAME" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="EMAIL" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="CONTACT NO" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="PROJECT" />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="MESSAGE" />
                </div>
                <div className="app-form-group buttons">
                  <Button data="SEND" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}