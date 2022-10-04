import { Loader } from "components/Loader/Loader";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container, Header, NavItem } from "./SharedLayout.styled";
export const SharedLayout = () => {
    return (
        
        <Container>
            <Header>
                <h1>Phonebook</h1>
            <UserMenu/>
                <Navigation/>
           </Header>
                {/* <Suspense fallback={<Loader/>}> */}
                <Outlet />
                {/* </Suspense> */}
        </Container>
        
    )
}