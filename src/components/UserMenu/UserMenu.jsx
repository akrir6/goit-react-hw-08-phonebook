
import { HomePage } from 'pages/HomePage/HomePage';
import { MdAccountBox } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import { FaUserSecret } from "react-icons/fa"
import { Button, UserNav, UserLabel } from './UserMenu.styled';

export const UserMenu = () => {
    return (
      <UserNav>
        <FaUserSecret size={28}  />
        <UserLabel>mango@mail.com</UserLabel>
        <Button type='button' onClick={() =><HomePage/>}>Logout</Button>
        </UserNav>
    )
}