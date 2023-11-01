import React, {useEffect, useState} from 'react';
import Styles from '../Styles/Styles.module.css';

import { validate } from '../Tools/validate';

const SignUp = () => {

   const [data, setData] = useState({
       name: '',
       email: '',
       pass: '',
       confirmPass: '',
       isAccepted : false
   });

   const [errors, setErrors] = useState({});

   useEffect (() => {
      setErrors(validate(data))
   }, [data])

   const changeHandler = event => {
    console.log(event)
       if (event.target.name === 'isAccepted'){
           setData({...data, [event.target.name]: event.target.checked})
        } else{
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data)
    }

    return (
        <div className={Styles.container}>
            <form className={Styles.formContainer}>
                <h2 className={Styles.header}> Log In </h2>

                <div className={Styles.formFiled}>
                <label>Name</label>
                <br/>
                <input type="text" 
                name='name' value={data.name} 
                onChange={changeHandler}/>
                 {/* {errors.name && <span>{errors.name}</span>} */}
                </div>

                <div className={Styles.formFiled}>
                <label htmlFor="">Email</label>
                <br/>
                <input type="text" 
                name='email' value={data.email} 
                onChange={changeHandler}/> 
                {/* {errors.email && <span>{errors.email}</span>} */}
                </div>

                <div>
                <label htmlFor="">Password</label>
                <br/>
                <input type="password" 
                name='pass' value={data.pass} 
                onChange={changeHandler}/> 
                {/* {errors.pass && <span>{errors.pass}</span>} */}
                </div>

                <div className={Styles.formFiled}>
                <label htmlFor="">Confirm Password</label>
                <br/>
                <input type="password" 
                name='confirmPass' value={data.confirmPass} 
                onChange={changeHandler}/> 
                {/* {errors.confirmPass && <span>{errors.confirmPass}</span>} */}
                </div>

                <div className={Styles.formFiled}>
                <label htmlFor="">I accept Terms of Policy</label>
                <input type="checkbox" 
                name='isAccepted' 
                value={data.isAccepted} 
                onChange={changeHandler}/> 
                {/* {errors.checked && <span>{errors.checked}</span>} */}
                </div>

                <div className={Styles.formFiled}>
                    <a href="#">sign In</a>
                    <br /> 
                    <button type='submit' 
                    onChange={changeHandler}>
                        Sign Up
                    </button> 
                </div>
            </form>
        </div>
    );
};

export default SignUp;