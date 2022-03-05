import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Layout } from '../../components/Layout';
import { Input } from '../../components/UI/Input/index.';

export function SignIn(){
    return(
        <Layout>
            <Container>     
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
                            <Input 
                                type="email"
                                placeholder="Digite seu Email"
                                label="Email"
                                value=''
                                onChange={() => {}}
                            />

                            <Input 
                                type="password"
                                placeholder="Digite a senha"
                                label="Senha"
                                value=''
                                onChange={() => {}}
                            />                                                        
                            <Button variant="primary" type="submit">
                                Entrar
                            </Button>
                        </Form>                    
                    </Col>
                </Row>       
            </Container>
        </Layout>        
    );
}