import React from 'react';

const Footer = () => {
    return (
        <div className='my-10 text-neutral-content bg-neutral max-w-7xl mx-auto pt-10 rounded-lg'>
            <div className='my-10'>
                <h1 className='text-4xl font-bold text-gray-400 text-center'>Gadget Heaven</h1>
                <p className='text-center'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer bg-neutral text-neutral-content p-10 mx-auto border-4">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;