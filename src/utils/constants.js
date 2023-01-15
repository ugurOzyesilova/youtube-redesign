import { FiCode, FiHome, FiHeadphones } from "react-icons/fi";
import { CgGym } from "react-icons/cg";
import { RiMovieLine } from "react-icons/ri";
import { MdCastForEducation, MdOutlinePodcasts } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiBitcoin } from "react-icons/bi";
import { AiOutlineLike, AiOutlineYoutube, AiFillYoutube } from "react-icons/ai"

import {SiYoutubetv, SiYoutubestudio} from "react-icons/si"

export const lists = [

    { name: 'Liked Videos', icon: <AiOutlineLike />, }
];

export const categories = [
    { name: 'New', icon: <FiHome />, },
    { name: 'Coding', icon: <FiCode />, },
    { name: 'Music', icon: <FiHeadphones /> },
    { name: 'Education', icon: <MdCastForEducation/>, },
    { name: 'Podcast', icon: <MdOutlinePodcasts />, },
    { name: 'Movie', icon: <RiMovieLine />, },
    { name: 'Gaming', icon: <IoGameControllerOutline />, },
    { name: 'Sport', icon: <CgGym />, },
    { name: 'Crypto', icon: <BiBitcoin />, },
];

export const settings = [
    { name: 'YT Premium', icon: <AiOutlineYoutube />, },
    { name: 'YT Music', icon: <AiFillYoutube />, },
    { name: 'YT Studio', icon: <SiYoutubestudio />, },
    { name: 'YT TV', icon: <SiYoutubetv />, },
];

