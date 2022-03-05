import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Layout } from '../../components/Layout'

export function Home(){
    return(
        <Layout>
            <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
                <h1>Bem-vindo ao painel de administração</h1>            
            </Jumbotron>
        </Layout>
    )
}