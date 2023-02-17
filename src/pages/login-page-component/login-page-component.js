import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthService} from "../../services";
import {useNavigate} from "react-router-dom";

const LoginPageComponent = () => {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState()
    const navigate = useNavigate()
    const login = async (userCredential) => {

        try {
            const {data} = await AuthService.login(userCredential)
            navigate("/cars")
        } catch (e) {
            if (e.response.status === 401) {
                setError(e.response.data)
            }
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(login)}>
                    <input type="text" placeholder={'user name'} {...register("username")}/>
                    <input type="text" placeholder={'password'} {...register("password")}/>
                    <button>login</button>
                </form>
            </div>
            {error?.detail && <div>
                {error.detail}
            </div>}
        </div>


    )
        ;
};

export {LoginPageComponent};
