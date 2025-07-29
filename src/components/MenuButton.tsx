"use client"
import React, { useState, useRef, useEffect } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"
import Link from 'next/link'

type Props = {
    challenge_link: string
}

const MenuButton = (props: Props) => {
    const { challenge_link } = props;

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (dropdownRef.current) {
            if (isOpen) {
                gsap.fromTo(
                    dropdownRef.current,
                    { opacity: 0, y: -10 },
                    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
                )
            } else {
                gsap.to(dropdownRef.current, {
                    opacity: 0,
                    y: -10,
                    duration: 0.2,
                    ease: "power2.in",
                })
            }
        }
    }, [isOpen]);

    return (
        <div className="absolute top-4 left-4 z-50">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger asChild>
                    <button
                        aria-label="Toggle Menu"
                        className="p-2 rounded-md border border-gray-300 bg-white shadow-md"
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent ref={dropdownRef} className="min-w-[180px] p-0 gap-2" align='start' side='right'>
                    <DropdownMenuItem className='p-0'>
                        <Link href="/" className='hover:bg-gray-300 w-full rounded p-2'>Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='p-0'>
                        <Link href={challenge_link || "#"} rel='noopener noreferrer' target='_blank' className='hover:bg-gray-300 w-full rounded p-2'>Original Challenges</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default MenuButton
