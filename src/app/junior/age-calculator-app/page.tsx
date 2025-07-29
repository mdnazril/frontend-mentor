import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image';
import React from 'react'
import qr from '@/assets/shared/qr.png';
import MenuButton from '@/components/MenuButton';

type Props = {}

const page = (props: Props) => {

    return (
        <div className='bg-amber-400 min-w-screen min-h-screen flex justify-center items-center relative'>

            <MenuButton challenge_link='https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q' />

            <div className='m-2 p-4 max-w-lg rounded-br-8xl bg-white'>

                <div className='p-2'>

                    {/* <div className='w-full aspect-square flex justify-center items-center bg-gradient-to-r from-[#3684fe] to-[#2b7dfa] rounded-lg'>
                        <Image
                            src={qr}
                            alt='QR code'
                            className='w-9/12  m-auto'
                        />
                    </div> */}

                    <p className='font-bold text-6xl pt-4 pb-2'><span className='text-age-calculator-app-primary'>--</span> years</p>
                    <p className='font-bold text-6xl pt-4 pb-2'><span className='text-age-calculator-app-primary'>--</span> months</p>
                    <p className='font-bold text-6xl pt-4 pb-2'><span className='text-age-calculator-app-primary'>--</span> days</p>

                </div>

            </div>

        </div>
    )
}

export default page