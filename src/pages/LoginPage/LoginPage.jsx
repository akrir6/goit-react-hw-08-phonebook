import {Container, Form, Label, Input, Button } from "./LoginPage.styled";

export const LoginPage = () => {
    return (
      <Container>
        <Form>
          <Label>
            Email
          <Input type="email" name="email" required/>
          </Label>
          <Label>
            Password
          <Input type="password" name="password" required/>
          </Label>
          <Button type="submit">
            Login
          </Button>
        </Form>
      </Container>
    )
}
