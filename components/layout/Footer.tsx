"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-6 md:px-8 lg:px-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <p>&copy; 2023 Movie Website. All rights reserved.</p>
                </div>
                <div className="flex items-center space-x-6">
                    <Link href="#" className="hover:text-gray-400" prefetch={false}>
                        Contact
                    </Link>
                    <Link href="#" className="hover:text-gray-400" prefetch={false}>
                        Privacy
                    </Link>
                    <Link href="#" className="hover:text-gray-400" prefetch={false}>
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;