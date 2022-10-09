
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { Loader } from "./Loader/Loader";
import { BadRequest } from "./BadRequest/BadRequest";
import { Navigation } from "./Navigation/Navigation";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { HomePage } from "pages/HomePage/HomePage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>} />
        <Route path="contacts" element={<ContactList/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // <Container>
    //   <h1>Phonebook</h1>
    //   <Navigation/>
    //   <ContactForm />
    //   <Outlet/>
    //   <h2>Contacts</h2>
    //   <Filter />
    //   {isLoading && <Loader />}
    //   {error && <BadRequest>Something went wrong</BadRequest>}
    //   <ContactList />
    // </Container>
  )
}


