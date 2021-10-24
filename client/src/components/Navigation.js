import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation = ({type,links}) => {
    return (
        <>
            {
                navChanger(type,links)
            }
        </>
    )
}

const navChanger = (type,links) => {
    switch(type) {
        case 'mobile':
            return <h1>Mobile Nav</h1>
        case 'desktop':
            return (
                <Navbar bg="light" variant="light" fixed="top">
                <Container>
                <Navbar.Brand href="#home">Currency-Today</Navbar.Brand>
                <Nav className="me-auto">
                    {
                        links.map((link,idx) => {
                                if (!idx) {
                                   return ( <Nav.Link as={Link} to={`/`}>{link}</Nav.Link> )
                                }
                                else {
                                    return ( <Nav.Link as={Link} to={`/${link}`}>{link}</Nav.Link> )
                                }
                        })
                    }
                </Nav>
                </Container>
              </Navbar>
            )
        default: console.log(`Navigation:navChanger Error`);
    }
}

export default Navigation
