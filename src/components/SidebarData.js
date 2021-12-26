import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Menu',
        path: '/menu',
        icon: <IoIcons.IoIosMenu />,
        cName: 'nav-text'
    },
    {
        title: 'Reminders',
        path: '/reminders',
        icon: <IoIcons.IoIosCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'Customer',
        path: '/customer',
        icon: <IoIcons.IoIosPeople />,
        cName: 'nav-text'
    },
    {
        title: 'OrderInformation',
        path: '/orderinfomation',
        icon: <IoIcons.IoIosCart />,
        cName: 'nav-text'
    },
    {
        title: 'OrderHistory',
        path: '/orderhistory',
        icon: <IoIcons.IoIosTime />,
        cName: 'nav-text'
    },
    {
        title: 'Product',
        path: '/product',
        icon: <FaIcons.FaBoxOpen />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <IoIcons.IoIosSettings />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <FaIcons.FaSignOutAlt />,
        cName: 'nav-log'
    }
]