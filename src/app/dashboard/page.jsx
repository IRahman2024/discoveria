'use client'
import styles from './page.module.css'

import { useState } from "react";
import tourDatas from '../../../data/tourData.json'
import roomDatas from '../../../data/roomData.json'
import RoomTable from '@/Components/RoomTable/RoomTable';
import TourTable from '@/Components/TourTable/TourTable';
import UserProfile from '@/Components/UserProfile/UserProfile';
import Link from 'next/link';


const Page = () => {
    const [activeSection, setActiveSection] = useState();
    const [tourData, setTourData] = useState([...tourDatas]);
    const [roomData, setRoomData] = useState([...roomDatas]);

    const renderContent = () => {
        switch (activeSection) {
            case 'tour':
                return <TourTable tour={tourData}></TourTable>;
            case 'room':
                return <RoomTable room={roomData}></RoomTable>;
            default:
                return <UserProfile></UserProfile>;
        }
    };


    // console.log(room);


    return (
        <div className={`${styles.customBody} flex gap-x-4`}>
            <div
                className={`${styles.sideNav} text-slate-800 bg-[#6767e4] rounded-r-2xl p-3 max-w-min`}>
                <Link href="/"
                    className="btn btn-ghost text-3xl">Home</Link>
                <button
                    onClick={() => setActiveSection('tour')}
                    className="btn btn-ghost text-3xl">Tour</button>
                <button
                    onClick={() => setActiveSection('room')}
                    className="btn btn-ghost text-3xl">Rooms</button>
            </div>
            <div className='w-full mr-10'>
                {
                    renderContent()
                }
            </div>
        </div>
    );
};

export default Page;