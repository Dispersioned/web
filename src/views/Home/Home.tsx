import React from 'react'
import Container from '../../components/Container/Container'
import Header from '../../components/Header/Header'
import { PageContent } from '../../style/global'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <PageContent>
        <h1 style={{fontWeight: 400}}>Hi, I’m Max. A student frontend developer </h1>
        <p>So far there is no important information here, yet you can see my projects.</p>
      </PageContent>
    </Container>
  )
}
export default Home
