import { Button, Container, Form, Input, Label } from "./RegisteredPage.styled"

export const RegisterPage = () => {
    return (
      <Container>
        <Form>
          <Label>
            Name
          <Input type="input" name="name" required/>
          </Label>
          <Label>
            Email
          <Input type="email" name="email" required/>
          </Label>
          <Label>
            Password
          <Input type="password" name="password" required/>
          </Label>
          <Button type="submit">
            Register
          </Button>
        </Form>
      </Container>
    )
}