import React from 'react';

import './sign-in.style.scss';

//use class bc i have to store what the user is typing in

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }

    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>

                </form>
            </div>
        )
    }
}

export default SignIn;