import React, { PropsWithChildren } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Template: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
    )
}

export default Template