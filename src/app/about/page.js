import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { IoLogoFacebook } from 'react-icons/io'

const AboutPage = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-12 p-12 gap-10'>
        <div className='col-span-5'>
          <Image
            src={"/About.jpg"}
            width={300}
            height={300}
            alt={'about us'}
            className={`object-cover transition-all w-full h-full duration-300 
                  }`}
          />
        </div>
        <div className=" col-span-7">
          <h1 className="text-3xl font-medium mb-4 text-primary font-eb-garamond">ABOUT GLITZINTERIORS</h1>
          <p className="mb-5 text-secondary">
            GLITZINTERIORS is a premier interior design company dedicated to transforming spaces into stunning works of art. Our team of experienced designers and craftsmen work closely with clients to create personalized designs that reflect their unique style and needs.
          </p>
          <p className='text-secondary'>
            With a passion for innovation and a commitment to excellence, we strive to exceed our clients' expectations at every turn. Whether you're looking to redesign your home, office, or commercial space, GLITZINTERIORS is here to bring your vision to life.
          </p>
          <div className='grid md:grid-cols-6 gap-x-7 mt-14'>
            <div className='col-span-3'>
              <p className="mb-5 text-secondary ">
                <span className='font-medium text-primary text-2xl font-eb-garamond'>OUR MISSION, </span> is to create beautiful, functional spaces that enhance the quality of life for our clients. We believe that great design should be accessible to everyone, and we work tirelessly to deliver exceptional results on every project.
              </p>
              <p className='font-medium text-primary'>Follow our handles & socials to Stay Upated</p>
              <div className="flex gap-x-6 mt-5 text-2xl text-secondary">
                <FaTwitter />
                <IoLogoFacebook />
                <FaInstagram />
              </div>
             

            </div>
            <div className='col-span-3 md:mt-0 mt-5'>
              <Image
                src={"/footerimg4.jpg"}
                width={200}
                height={200}
                alt={'about us'}
                className={`object-cover transition-all duration-300 
                  }`}
              />

            </div>
          </div>
        </div>



      </div>


    </div>
  )
}

export default AboutPage