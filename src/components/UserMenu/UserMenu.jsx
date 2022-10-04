
import { HomePage } from 'pages/HomePage/HomePage';
import { MdAccountBox } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import { Button, UserNav, UserLabel } from './UserMenu.styled';

export const UserMenu = () => {
    return (
      <UserNav>
        <MdAccountBox size={32}  />
        <UserLabel>mango@mail.com</UserLabel>
        <Button type='button' onClick={() =><HomePage/>}>Logout</Button>
        </UserNav>
    )
}