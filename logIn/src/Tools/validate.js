 export const validate = data => {
      let errors = {};

      if(!data.name.trim()){
         errors.name = 'Username required!'
      } else {
        delete errors.name
      }
  
      if(!data.email) {
         errors.email = 'Email required!'
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid!'
      } else {
        delete errors.email
      }

      if(!data.pass) {
        errors.password = 'Password is required!'
      } else if(data.pass.length < 8){
        errors.password=  'Password is too short!'
      } else {
        delete errors.pass
      }

      if(!data.confirmPass) {
        errors.confirmPassword = 'Confirm password field cannot be empty!'
      } else if( data.confirmPass !== data.pass ) {
        errors.confirmPassword='Passwords do not match!';
      } else {
        delete errors.confirmPassword
      }

      if (data.isAccepted) {
        delete errors.isAccepted
      } else {
        errors.isAccepted="You must accept the terms and conditions!"
      }
  
        
}

