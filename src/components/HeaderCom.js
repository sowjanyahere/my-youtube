import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { isToggleMenu } from '../utils/appSlice';

const HeaderCom = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(isToggleMenu());
    }
    return(
        <>
            <div className='grid grid-flow-col p-2 pl-5 shadow-lg'>
                <div className='flex align-middle gap-4 col-span-1'>
                    <img alt='menu' onClick={() => toggleMenuHandler()} className='h-9 cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png' />
                    <img alt='logo' className='h-12' src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/youtube-512.png' />
                </div>
                <div className='col-span-10 flex justify-center'>
                    <input type='text' className='border border-r-0 w-1/2 p-2 border-gray-400 rounded-l-full' />
                    <button className='border border-gray-400 p-2 px-4 rounded-r-full bg-gray-100'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className='col-span-1 flex justify-center align-middle'>
                    <p><FontAwesomeIcon icon={faUser} /></p>
                </div>
            </div>
        </>
    )
}

export default HeaderCom;