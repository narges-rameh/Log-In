import React, {useState} from 'react';

import { validate } from './validate';

const SignUp = () => {

   const [data, setData] = useState({
       name: '',
       email: '',
       pass: '',
       confirmPass: '',
       isAccepted : false
   });

   const [error, setError] = useState({});

   useState (() => {
      setError(validate(data))
   }, [data])

   const changeHandler = event => {
       if (event.target.name === 'isAccepted'){
           setData({...data, [event.target.name]: event.target.checked})
        } else{
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data)
    }

    return (
        <div>
            <form action="">
                <h2> Log In </h2>

                <div>
                <label htmlFor="">Name</label>
                <br/>
                <input type="text" name='name' value={data.name} onChange={changeHandler}/>
                 {errors.name && <span>{error.name}</span>}
                </div>

                <div>
                <label htmlFor="">Email</label>
                <br/>
                <input type="text" name='email' value={data.email} onChange={changeHandler}/> 
                {/* {errors.email && <span>{errors.email}</span>} */}
                </div>

                <div>
                <label htmlFor="">Password</label>
                <br/>
                <input type="password" name='pass' value={data.pass} onChange={changeHandler}/> 
                {/* {errors.pass && <span>{errors.pass}</span>} */}
                </div>

                <div>
                <label htmlFor="">Confirm Password</label>
                <br/>
                <input type="password" name='confirmPass' value={data.confirmPass} onChange={changeHandler}/> 
                {/* {errors.confirmPass && <span>{errors.confirmPass}</span>} */}
                </div>

                <div>
                <label htmlFor="">I accept Terms of Policy</label>
                <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler}/> 
                {/* {errors.checked && <span>{errors.checked}</span>} */}
                </div>

                <div>
                    <a href="#">sign In</a>
                    <br /> 
                    <button type='submit' onChange={changeHandler}>Sign Up</button> 
                </div>
            </form>
        </div>
    );
};

export default SignUp;