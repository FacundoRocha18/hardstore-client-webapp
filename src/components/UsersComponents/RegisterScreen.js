import React, { useState } from 'react';
import newUser from '../../helpers/newUser'

const RegisterScreen = (props) => {

    const [userData, setUserData] = useState({
        uEmail: null,
        uName: null,
        uAddress: null,
        uPhone: null,
        uPassword: null,
    })

    const handleUserInfoChanged = ({ target }) => {

        switch (target.name) {

            case 'email':
                setUserData({
                    ...userData,
                    uEmail: target.value
                })
                break;

            case 'username':
                setUserData({
                    ...userData,
                    uName: target.value
                })
                break;

            case 'address':
                setUserData({
                    ...userData,
                    uAddress: target.value
                })
                break;

            case 'phone':
                setUserData({
                    ...userData,
                    uPhone: target.value
                })
                break;

            case 'password':

                setUserData({
                    ...userData,
                    uPassword: target.value
                })
                break;
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        newUser(userData);
    }

    return (
        <>
            <div>
                <div className='register-form-container pd-4'>
                    <div className='register-header'>
                        <h2 className='title-center mb-2 '>Crear una cuenta</h2>
                    </div>
                    <form onSubmit={handleSubmit} autoComplete='off'>

                        <input name='email' className='mb-2' id='userEmail' type='text' placeholder='email@email.com ' autoFocus required onChange={handleUserInfoChanged}></input>

                        <input name='username' className='mb-2' id='username' type='text' placeholder='nombre' required onChange={handleUserInfoChanged}></input>

                        <input name='address' className='mb-2' id='address' type='text' placeholder='dirección' required onChange={handleUserInfoChanged}></input>

                        <input name='phone' className='mb-2' id='phone' type='text' placeholder='teléfono' required onChange={handleUserInfoChanged}></input>

                        <input name='password' className='mb-2' id='password' type='password' placeholder='contraseña' required onChange={handleUserInfoChanged}></input>

                        <button type='submit' className='btn register-submit-button'><p>Crear cuenta</p></button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterScreen;