import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { Input } from "../../components/UI/Input/index.";

export function SignUp(){
    return(
        <Layout>
            <Container>     
                <Row style={{marginTop: '50px'}}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        type="text"
                                        placeholder="Primeiro nome"
                                        label="Primeiro nome"
                                        value=""
                                        onChange={() => {}}
                                    />                                   
                                </Col>
                                <Col md={6}>
                                    <Input
                                        type="text"
                                        placeholder="Sobrenome"
                                        label="Sobrenome"
                                        value=""
                                        onChange={() => {}}
                                    />                                   
                                </Col>
                            </Row>
                            <Input 
                                type="email"
                                label="Email"
                                placeholder="Digite um email"
                                value=""
                                onChange={() => {}}
                            />         

                            <Input 
                                type="password"
                                label="Senha"
                                placeholder="Digite uma senha"
                                value=""
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