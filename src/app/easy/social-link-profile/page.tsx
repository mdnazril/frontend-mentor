import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import profile from '@/assets/shared/profile.jpeg'
import MenuButton from '@/components/MenuButton';
type Props = {}

const page = (props: Props) => {

    const links = [
        { label: "Github", url: "https://github.com/mdnazril" },
        { label: "Linkedin", url: "https://www.linkedin.com/in/mdnazril" },
        { label: "Instagram", url: "https://www.instagram.com/mdnazril" },
    ];

    return (
        <div className='bg-social-link-bg min-w-screen min-h-screen flex justify-center items-center relative'>

            <MenuButton challenge_link='https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ' />

            <Card className='bg-social-link-card border-social-link-card text-white m-2'>
                <CardContent className='text-center'>
                    <Image
                        src={profile}
                        alt='profile'
                        className='w-32 h-32 rounded-full mx-auto'
                    />
                    <h1 className='font-semibold text-2xl'>Muhammad Nazril</h1>
                    <h2 className='text-social-link-country font-semibold py-2'>Kuala Lumpur, Malaysia</h2>
                    <h2 className='py-4'>‟Software Developer and sort of Designer.”</h2>

                    <div className='flex flex-col gap-4 justify-center'>

                        {links.map((link, index) => (
                            <Button asChild key={index} className='bg-social-link-button text-white hover:bg-social-link-country hover:text-black'>
                                <Link href={link.url} target='_blank' rel="noopener noreferrer">
                                    {link.label}
                                </Link>
                            </Button>
                        ))}

                    </div>

                </CardContent>

            </Card>

        </div>
    )
}

export default page