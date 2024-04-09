import React from 'react'
import Style from './Register.module.css'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

export default function Register() {

    // const validationSchema = Yup.object().shape({
    //     email: Yup.string().email('Invalid email').required('Required'),
    //     password: Yup.string().required('Required'),
    // });

    // const onSubmitForm = (values, { setSubmitting }) => {
    //     setTimeout(() => {
    //         alert(JSON.stringify(values, null, 2));
    //         setSubmitting(false);
    //     }, 400);
    // }

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            rePassword: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return <>
        <div className="w-75 mx-auto py-5">
            <h2>Register Now</h2>
            
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name : </label>
                <input type="text" className='form-control mb-2' id='name' name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <label htmlFor="phone">Phone : </label>
                <input type="text" className='form-control mb-2' id='phone' name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <label htmlFor="email">Email : </label>
                <input type="text" className='form-control mb-2' id='email' name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <label htmlFor="password">Password : </label>
                <input type="text" className='form-control mb-2' id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <label htmlFor="rePassword">rePassword : </label>
                <input type="text" className='form-control mb-4' id="rePassword" name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <button type="submit" className='btn bg-main text-white'>
                    Register
                </button>
            </form>
        </div>
    </>
}
