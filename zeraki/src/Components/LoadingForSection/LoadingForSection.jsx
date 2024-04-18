import React from 'react'
import Style from './LoadingForSection.module.css'
import { FidgetSpinner } from 'react-loader-spinner'

export default function LoadingForSection() {
    return <>
        <FidgetSpinner
            visible={true}
            height="100"
            width="100"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
        />
    </>
}
