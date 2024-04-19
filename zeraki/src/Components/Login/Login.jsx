import React, { useContext, useState } from 'react'
import Style from './Login.module.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Bars } from 'react-loader-spinner'
import { UserContext } from '../../Context/UserContext.js';

export default function Login() {

    let navigate = useNavigate();
    let { setUserToken } = useContext(UserContext);
    const [loading, setLoading] = useState(false)

    const onSubmit = async (values, { setSubmitting }) => {
        setLoading(true)

        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/signin`, values)
            .then((response) => {
                console.log(response);
                if (response.data.message === 'success') {
                    localStorage.setItem("userTkn", response.data.token)
                    setUserToken(response.data.token)
                    navigate('/')
                }
            }).catch((error) => {
                notify(error.response.data.message)
                console.log(error);
            }).finally(() => {
                setLoading(false)
            })

    }

    const notify = (message) => {
        toast.error(`${message}`, {
            position: "bottom-right"
        });
    };

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(passwordRegex, 'At least 8 characters long, Contains at least one lowercase letter and one uppercase letter and one digit.'),
    })

    // const validate = (values) => {
    //     console.log(values)
    // }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }, validationSchema,
        // },validate,
        onSubmit
    });


    return <>
        <div className="w-75 mx-auto py-5">
            <h2>Login Now</h2>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email : </label>
                <input type="email" className='form-control mb-2' id='email' name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email && <div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div>}

                <label htmlFor="password">Password : </label>
                <input type="password" className='form-control mb-2' id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password && <div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div>}

                {loading ?
                    <button type="button" className='btn bg-main text-white px-4'>
                        <Bars
                            height="23"
                            width="25"
                            color="white"
                            ariaLabel="bars-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </button>
                    :
                    <button disabled={!formik.isValid || !formik.dirty} type="submit" className='btn bg-main text-white'>
                        Login
                    </button>
                }
            </form>
        </div>
    </>
}
