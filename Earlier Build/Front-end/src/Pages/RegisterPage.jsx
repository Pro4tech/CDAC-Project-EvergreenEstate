// import index from "../index";

import Footer from "../Components/Footer";
import Header from "../Components/Header";

import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

function RegisterPage() {
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Username, setUsername] = useState("")
  const [PhoneNumber, setPhoneNumber] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")
  const [Buyer, setBuyer] = useState(false)
  const [Seller, setSeller] = useState(false)

  const RegisterUser = async () => {
    if (FirstName.length === 0) {
      toast.warning("Please Enter First Name");
    } else if (LastName.length === 0) {
      toast.warning("Please Enter Last Name");
    } else if (Username.length === 0) {
      toast.warning("Please Enter Username");
    } else if (PhoneNumber.length === 0) {
      toast.warning("Please Enter Phone Number");
    } else if (PhoneNumber.length !== 10) {
      toast.warning("Please Enter Valid Phone Number");
    } else if (Email.length === 0) {
      toast.warning("Please Enter Email");
    } else {
      if (Buyer === false && Seller === false) {
        toast.warning("Please Select User Type");
      }
      else if (!(Email.includes('@') && Email.endsWith('.com'))) {
        toast.warning("Please Enter Valid Email Address");
      } else if (Password.length === 0) {
        toast.warning("Please Enter Password");
      } else if (ConfirmPassword.length === 0) {
        toast.warning("Please Enter Confirm Password");
      } else if (!Password.match(ConfirmPassword)) {
        toast.warning("Password and Confirm Password are not Matching");
      }
      else {
        const Bval = Buyer ? 1 : 0
        const Sval = Seller ? 1 : 0
        toast.success(FirstName)
        toast.success(LastName)
        toast.success(Username)
        toast.success(PhoneNumber)
        toast.success(Email)
        toast.success(Password)
        toast.success(ConfirmPassword)
        toast.success("Buyer:" + Bval)
        toast.success("Seller:" + Sval)
      }
    }
  }
  return (
    <div>
      <Header />
      <div className='container'>

        <div >
          <div className="row mt-3 ">
            <div className="col-sm-1 col-md-2 col-lg-2"></div>

            <div className="col formContainer">
              <center>
                <h1 className="page-title mt-3">User Registration</h1>
              </center>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      className='form-control'
                      onChange={e => setFirstName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className='form-control' onChange={e => setLastName(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Username</label>
                    <input type='text' className='form-control' onChange={e => setUsername(e.target.value)} />
                  </div>
                </div>
              </div>
              <div />

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Phone Number</label>
                    <input type="number" className='form-control' onChange={e => setPhoneNumber(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input type="email" className='form-control' onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input type="password" className='form-control form-control-sm' onChange={e => setPassword(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" className='form-control' onChange={e => setConfirmPassword(e.target.value)} />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="">User Type: </label>
                    <div class="btn-group ms-2" role="group" aria-label="Basic checkbox toggle button group">
                      <input type="checkbox" class="btn-check" id="btncheck1" autoComplete="off" onChange={e => setBuyer(!Buyer)} />
                      <label class="btn btn-outline-primary" for="btncheck1">Buyer</label>
                      <input type="checkbox" class="btn-check" id="btncheck2" autoComplete="off" onChange={e => setSeller(!Seller)} />
                      <label class="btn btn-outline-primary" for="btncheck2">Seller</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="mb-3">Already have account ? {" "}
                    <u><Link to='/login'>Login</Link></u>
                  </div>
                  <button className="btn btn-success ms-2 mb-3" onClick={RegisterUser}>Register</button>
                  <button className="btn btn-danger mb-3 ms-4">Cancel</button>
                </div>
              </div>
            </div>

            <div className="col-sm-1 col-md-2 col-lg-2"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default RegisterPage;
