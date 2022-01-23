import React from 'react';
import {Button} from '@mui/material'
import './cardSignin.css'
const CardSignin=()=>{
    return(
        <div className='signinCardHeader'>
            <div className='signinCardStyle'>Sign in for your best experience</div>
            <div className='signinCardButton'>
                <Button variant="contained" >Sign in securely</Button>
            </div>
        </div>
    )
}
export default CardSignin;