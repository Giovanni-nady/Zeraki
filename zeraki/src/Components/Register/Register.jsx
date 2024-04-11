import React from 'react'
import Style from './Register.module.css'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

export default function Register() {

    // const validationSchema = Yup.object().shape({
    //     email: Yup.string().email('Invalid email').required('Required'),
    //     password: Yup.string().required('Required'),
    // });

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

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

                <button disabled={!formik.isValid || !formik.dirty} type="submit" className='btn bg-main text-white'>
                    Register
                </button>
            </form>
        </div>
    </>
}
