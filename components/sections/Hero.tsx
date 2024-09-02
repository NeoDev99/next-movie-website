"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '../ui/badge';

import imageCover from "@/public/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpeg";

const Hero = () => {
    return (
        <section className="bg-muted py-12 sm:py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div>
                        <Image
                        src={imageCover}
                        width={500}
                        height={700}
                        alt="Featured Movie Poster"
                        className="mx-auto h-auto max-w-full rounded-lg object-cover"
                        style={{ aspectRatio: "500/700", objectFit: "cover" }}
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">The Shawshank Redemption</h1>
                        <p className="text-muted-foreground">
                            Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of
                            common decency.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Badge variant="outline">Drama</Badge>
                            <Badge variant="outline">Crime</Badge> 
                            <Badge variant="outline">1994</Badge>
                        </div>
                        <div className='py-3'>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                                prefetch={false}
                            >
                                Watch Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;