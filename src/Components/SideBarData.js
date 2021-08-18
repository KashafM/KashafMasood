import React from 'react';
import AboutIcon from '@material-ui/icons/Info';
import ResumeIcon from '@material-ui/icons/PostAdd';
import ProjectsIcon from '@material-ui/icons/Work';
import ConnectIcon from '@material-ui/icons/EmojiPeople';

export const SideBarData = [
    {
        title: 'About',
        path: '#About',
        icon: <AboutIcon/>,
        cName: 'nav-text' 
    }, 
    {
        title: 'Resume',
        path: '#Resume',
        icon: <ResumeIcon/>, 
        cName: 'nav-text' 
    }, 
    {
        title: 'Projects',
        path: '#Projects',
        icon: <ProjectsIcon/>,
        cName: 'nav-text' 
    }, 
    {
        title: 'Connect',
        path: '#Socials',
        icon: <ConnectIcon/>,
        cName: 'nav-text' 
    }, 

]