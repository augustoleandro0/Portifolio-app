import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HardSkils from '../components/HardSkils'
import Header from '../components/Header'
import Projects from '../components/Projects'
import ScrollStop from '../components/ScrollStop'
import SoftSkils from '../components/SoftSkils'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>  <ScrollStop>
          <Header/>
          <Banner/>
          <HardSkils/>
          <SoftSkils/>
          <Projects/>
          <Footer/>
        </ScrollStop>
    </>
    
  )
}

export default Home
