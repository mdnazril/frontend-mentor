"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { challenges, levels } from "@/constant/home";
import { getCompletedChallenges, getCompletedLevel } from "@/function/home";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "@/assets/home/default.png";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const countRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(titleRef.current, { opacity: 0, y: 40, duration: 0.8 })
            .from(subtitleRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
            .from(countRef.current, { opacity: 0, y: 40, duration: 0.8 }, "-=0.4")
            .from(buttonRef.current, { opacity: 0, y: 40, duration: 0.8 }, "-=0.4")
            ;
    }, []);

    return (
        <main>
            <div className="flex flex-col items-center justify-center container mx-auto min-h-screen text-center">

                <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">Frontend Mentor Challenges</h1>

                <h2 ref={subtitleRef} className="text-md md:text-xl text-gray-500">
                    A collection of my completed Frontend Mentor challenges, showcasing my journey from beginner to advanced web development skills.
                </h2>

                <div ref={countRef} className="flex flex-col md:flex-row items-center justify-center mt-6 text-center">
                    <p className="font-bold text-3xl">{getCompletedChallenges(challenges)} <br />
                        <span className="font-normal text-lg text-gray-500">Completed</span>
                    </p>
                </div>

                <div ref={buttonRef} className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mt-6">
                    <Button asChild><Link href="https://www.frontendmentor.io/challenges" target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-1" />Visit Frontend Mentor</Link></Button>
                    <Button asChild variant={"outline"}><Link href="https://github.com/mdnazril/frontend-mentor" target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-1" />View Source Code</Link></Button>
                </div>
            </div>

            <div className="bg-gray-100 border-y-1 border-gray-300 px-2">

                {Object.values(levels).map((level, index) => {

                    const challenge = challenges[level.title as keyof typeof challenges];

                    return (
                        <React.Fragment key={index}>
                            {
                                challenge.length > 0 &&
                                <div className="flex flex-col items-center justify-center container mx-auto py-12">
                                    <div className="flex items-center justify-between w-full gap-4">
                                        <div className="flex items-center gap-4 p-2">
                                            <div className="">{level.icon}</div>
                                            <div>
                                                <p className="font-semibold text-2xl">{level.title} Challenges</p>
                                                <p className="text-gray-500">{level.description}</p>
                                            </div>
                                        </div>

                                        <Badge className={level.color + ""}>
                                            <p className="font-semibold">{challenge.length}</p>
                                            <p>{challenge.length === 1 ? "Challenge" : "Challenges"}</p>
                                        </Badge>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                                        {challenge.map((challenge, i) => (
                                            <HomeCard key={i} challenge={challenge} />
                                        ))}
                                    </div>

                                </div>
                            }
                        </React.Fragment>
                    )
                })}

            </div>

            <Footer />

        </main>
    );
}

const HomeCard = (props: props) => {

    const { challenge } = props;

    return (
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-0 gap-2">
            <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                        src={challenge?.image || defaultImage.src}
                        alt={challenge?.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </CardHeader>
            <CardContent className="px-4">
                <CardTitle className="text-lg mb-2">{challenge?.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-3">{challenge?.description}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex gap-2">
                <Button asChild size="sm" className="flex-1">
                    <Link href={challenge?.liveUrl}>
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                    </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Link href={challenge?.githubUrl}>
                        <Github className="w-4 h-4 mr-1" />
                        Code
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-16">
            <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
                <p>Built with Next.js, Tailwind CSS, and shadcn/ui</p>
                <p className="mt-2">
                    Challenges from{" "}
                    <Link href="https://www.frontendmentor.io" className="text-primary hover:underline">
                        Frontend Mentor
                    </Link>
                </p>
            </div>
        </footer>
    )
}
interface props {
    challenge: any;
}