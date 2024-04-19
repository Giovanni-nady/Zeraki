import React, { useState } from 'react'
import Style from './Register.module.css'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Bars } from 'react-loader-spinner'
export default function Register() {

    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const onSubmit = async (values, { setSubmitting }) => {
        setLoading(true)

        await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/signup`, values)
            .then((response) => {
                console.log(response);
                if (response.data.message === 'success') {
                    navigate('/login')
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

    const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Name min length is 3").max(15, 'Name max length is 15').required('Name is required'),
        phone: Yup.string().matches(phoneRegex, 'phone is invalid').required('Phone is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(passwordRegex, 'At least 8 characters long, Contains at least one lowercase letter and one uppercase letter and one digit.'),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Please confirm your password'),
    })

    // const validate = (values) => {
    //     console.log(values)
    // }

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            rePassword: ''
        }, validationSchema,
        // },validate,
        onSubmit
    });

    return <>
        <div className="w-75 mx-auto py-5">
            <h2>Register Now</h2>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" className='form-control mb-2' id='name' name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.name && formik.touched.name && <div className="alert alert-danger p-2 mt-2">{formik.errors.name}</div>}

                <label htmlFor="phone">Phone : </label>
                <input type="text" className='form-control mb-2' id='phone' name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.phone && formik.touched.phone && <div className="alert alert-danger p-2 mt-2">{formik.errors.phone}</div>}

                <label htmlFor="email">Email : </label>
                <input type="email" className='form-control mb-2' id='email' name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email && <div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div>}

                <label htmlFor="password">Password : </label>
                <input type="password" className='form-control mb-2' id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password && <div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div>}

                <label htmlFor="rePassword">rePassword : </label>
                <input type="password" className='form-control mb-4' id="rePassword" name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.rePassword && formik.touched.rePassword && <div className="alert alert-danger p-2 mt-2">{formik.errors.rePassword}</div>}

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
                        Register
                    </button>
                }
            </form>
        </div>
    </>
}
