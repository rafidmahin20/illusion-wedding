import React from 'react';
import google from '../../Images/social/google.png';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import './Socia;.css'


const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(loading){
        return <Loading/>
    }
    return (
        <div>
            <div className='flex justify-center'>
                <div className='social-part w-50'></div>
                OR
                <div className='social-part w-50'></div>
            </div>
            <div className='flex justify-center mx-auto'>
                <button onClick={() => signInWithGoogle()}>
                    <img style={{width: "30px", heigh: "30px"}} src={google} alt=''></img>
                </button>
            </div>
        </div>
    );
};

export default Social;