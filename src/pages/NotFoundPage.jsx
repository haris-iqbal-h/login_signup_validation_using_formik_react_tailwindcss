import React from 'react'
import Img from './../assets/images/404.jpg'

const NotFoundPage = () => {
    return (
        <>
            <img
                src={Img}
                alt='Error'
                style={{
                    backgroundPosition:'center',
                    height:'100vh',
                    width:'100vw',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }}
            />
        </>
    )
}
export default NotFoundPage