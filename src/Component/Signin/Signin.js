import { Button } from '@mui/material';
import React from 'react'
import './Signin.css'
function Signin()
{
    return <div className='signInHeader'>
        <div>See personalized recommendations</div>
        <Button variant='contained' className='signInButton'>Sign In</Button>
        <div>New customer? <a>Start here.</a></div>
    </div>
}
export default Signin;