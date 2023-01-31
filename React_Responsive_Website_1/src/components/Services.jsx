import React from 'react'
import { services } from '../constants'

const Services = () => 
 (
 
    <div className=' py-12 sm:py-32 lg:py-20'>
      <div className='mx-auto max-w-7x1 px-1 lg:px-8'>
        <div className='sm:text-center'>
          <h2 className='text-2xl font-semibold leading-8 text-white'> Our Services</h2>
          {/* <p className='mt-2 text-3x1 font-bold tracking-tight text-gray-900 sm:text-4x1'> MNAKK</p> */}
          <p className="mx-auto mt-6 max-w-2x1 text-lg leading-8 text-gray-600">
          We offer a wide range of construction services including design, planning, building and maintenance for commercial, residential and mixed-use developments.
          </p>
        </div>

        <div className='mt-20 max-w-lg sm:mx-auto md:max-w-none'>
          <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16'>
            {services.map((service) => (
              <div key={service.id} className="relative flex flex-col gap-6 sm:flex-col lg:flex-row">
                <div className="flex h-12 w-12 rounded-x1 text-white sm:shrink-0">
                  <div className={`w-[64px] h-[64px`}>
                    <img src={service.icon} alt="image" className='w-[50%] h-[50%] object-contain' />

                  </div>
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-white">{service.title}</p>
                  <p className="mt-2 text-base text-gray-500">{service.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
 
    
  )


export default Services