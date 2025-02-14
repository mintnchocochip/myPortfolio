import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from './text';
import JoinImg from '../assets/JoinBg.png';

export default function Join({ className }) {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0'); // Get day and pad with 0 if needed
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed) and pad
    const year = today.getFullYear();

    return (
            <a href="https://chat.whatsapp.com/E2SRTK0yLfZIpGka4DO3mG" className={className}>
            <img src={JoinImg} alt="JoinImg" className="fixed bottom-4 right-0 rounded-none text-right m-6  px-6 py-4 flex items-center justify-center h-32  "/>
            <div>
            <AnimatedText text="CHECK-IN" className="fixed bottom-14 right-10 rounded-none pt-2
            text-right m-6 x-6 py-4 text-black
            font-neuebit text-xl flex items-center justify-center h-24  "/>
            <AnimatedText text="JOIN NOW" className="fixed bottom-8 right-10 rounded-none
            text-right m-6 x-6 py-4 text-black
            font-neuebit text-6xl flex items-center justify-center h-22  "/>
            <p  className="fixed bottom-0 right-16 rounded-none
            text-right m-6 x-6 py-4 text-black
            font-neuebit text-3xl flex items-center justify-center h-24  ">
            04 Mar 25
            </p>
            </div>
        </a>
    );
}
