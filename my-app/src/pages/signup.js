import business from './business.svg';
import personal from './personal.svg';
import './pages.css';


<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
</style>

function Signup() {
    return (
      <div className="page2">
        <header className="page2_signup">
          <h1>Choose Account Type</h1>
          <div className='page2_buttons'>
            <div className='page2_personal'>
                <img src={personal} className="App-logos" alt="personal" />
                <p>Personal</p>
            </div>
            <div className='page2_business'>
                <img src={business} className="App-logos" alt="business" />
                <p>Business</p>
            </div>
          </div>

          <div className='page2_inputfields'> 
            <div className='businessname'> 
                <label for="businessname">Business Name:</label>
                <input type="text" id="businessname" name="businessname"></input>
            </div>
            <div className='businessname'> 
                <label for="phonenumber">Phone Number:</label>
                <input type="text" id="phonenumber" name="phonenumber"></input>
            </div>
            <div className='businessname'> 
                <label for="businessemail">Business Email:</label>
                <input type="text" id="businessemail" name="businessemail"></input>
            </div>
            <div className='businessname'> 
                <label for="password">Password:</label>
                <input type="text" id="password" name="password"></input>
            </div>
            <div className='businessname'> 
                <label for="businessaddress">Business Address:</label>
                <input type="text" id="businessaddress" name="businessaddress"></input>
            </div>
        
            <div className='businessname'> 
                <label for="businesscategory">Business Category</label>
                    <select id="businesscategory" name="businesscategory">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
            </div>
          </div>
        <button> Get Started</button>
        <div className='page2_account'>
            <p>Already have an account? <a href="#">Sign In</a></p>
        </div>

        </header>
      </div>
    );
  }
  
export default Signup;