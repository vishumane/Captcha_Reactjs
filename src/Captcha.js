import 'bootstrap/dist/css/bootstrap.min.css';
import captchaImg from './captcha.jpg';
import studentIMG from './user.jpg';
import React, { useState} from 'react';
// import Recaptcha from 'react-recaptcha';

function Captcha() {

// const[Verified,setVerified]=useState([]);
  const [user, setUser] = useState({
      username:""
  });

  // const characters ='Abc123';
  const characters ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  function generateString(length) 
  {
      let result = '';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
     return result;
   }

   const captcha = generateString(6) // Function called here and save in captcha variable


 

   let handleChange = (e) => {
     let name = e.target.name;
     let value = e.target.value;
     user[name] = value;
     setUser(user);
  }

  const onSubmit = e => {

    var element =  document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
     element.style.cursor = "wait";
     element.innerHTML  = "Validating...";
     inputData.disabled = true;
     element.disabled = true;

      var myFunctions = function(){
          if(captcha === user.username)
          {
            element.style.backgroundColor   = "green";
            element.innerHTML  = "Captcha Verified";
            element.disabled = true;
            element.style.cursor = "not-allowed";
            inputData.style.display = "none";

          }
          else
          {
            element.style.backgroundColor   = "red";
            element.style.cursor = "not-allowed";
            element.innerHTML  = "Not Matched";
            element.disabled = true;
            //  element.disabled = true;

            var myFunction = function(){
              element.style.backgroundColor   = "#007bff";
              element.style.cursor = "pointer";
              element.innerHTML  = "Verify Captcha";
              element.disabled = false;
              inputData.disabled = false;
              inputData.value ='sssss';
            };
            setTimeout(myFunction,5000);
          }
        }   
        setTimeout(myFunctions,5000); 
  };
  
    //  recaptch code 
  // const recaptchaLoaded=()=>{
  //   console.log('capcha successfully loaded');
  // }

  // const verifyCallback=(response)=>{
  //   if (response) {
  //     setVerified(true);
  //   }
  // }
  // console.log(Verified);
   return (
    <div class="container">
      <h5 className="text-center mt-4 text-info"><b> Validate Custom Captcha using REACT JS</b></h5>
      <div class="row mt-4">
          <div class="col-md-4">
          </div>
         
          <div class="col-md-8">
            <h4 id="captcha" style={{ marginTop:"162px",marginLeft:"25px",position:"absolute"}}>{captcha}</h4>

            <div class="form-group row">
              <img src={studentIMG} className="mt-3 mb-3" height="90" alt=""userimg/> <span class="font-weight-bold ml-3"  style={{ marginTop:"50px"}} >Vishal Mane</span>
            </div>

            <div class="form-group row">
              <img src={captchaImg} className="mt-3 mb-3" height="50" alt="captcha"/> 
            </div>

            <div class="form-group row">
              <input type="text" id="inputType" className="form-control"placeholder="Enter Captcha"
                name="username"  onChange={handleChange} autocomplete="off" style={{width:"20%"}}
                />
              <button type="button" id="succesBTN" onClick={onSubmit} class="btn btn-primary ml-1">Verify Captcha</button>
              <button>change captcha</button>

            </div>
           </div>
        </div>
        {/* <Recaptcha
            sitekey="6LfTolwUAAAAAJ16pnJ1qBgXKlzGeKXRsCMRXllK"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifyCallback}
          /> */}
       
      </div>
    );
}
export default Captcha;
