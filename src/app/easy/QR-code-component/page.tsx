import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image';
import React from 'react'
import qr from '@/assets/shared/qr.png';
import MenuButton from '@/components/MenuButton';

type Props = {}

const page = (props: Props) => {

    return (
        <div className='bg-QR-code-component-bg min-w-screen min-h-screen flex justify-center items-center relative'>

            <MenuButton challenge_link='https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H' />

            <Card className='m-2 p-1 max-w-[300px] '>
                <CardContent className='p-2 text-center'>

                    <div className='w-full aspect-square flex justify-center items-center bg-gradient-to-r from-[#3684fe] to-[#2b7dfa] rounded-lg'>
                        <Image
                            src={qr}
                            alt='QR code'
                            className='w-9/12  m-auto'
                        />
                    </div>

                    <h2 className='font-bold text-xl text-slate-700 pt-4 pb-2'>Discover My Front-End Work</h2>
                    <h1 className='text-gray-500'>Scan the QR code to explore my portfolio. Showcasing responsive, user-focused interfaces and clean, modern code.</h1>

                </CardContent>

            </Card>

        </div>
    )
}

export default page