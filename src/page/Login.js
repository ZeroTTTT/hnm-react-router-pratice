import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ( {setAuthenticate} ) => {
    const navigate = useNavigate()
    const loginUser = (event) => { 
      event.preventDefault(); //form에서 onsubmit 시에 리프레시 되는걸 막아주기 위한 코드
      console.log("login user function issue");
      setAuthenticate(true);
      navigate("/");
    }

  return (
    <Container>
      <Form onSubmit={ (event) => loginUser(event)}>  {/* form에서는 onClick이 아니라 onsubmit이다  리프레시 되는걸 막아주기위해 event를 넘겨준다 */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="danger" type="submit"> 
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login