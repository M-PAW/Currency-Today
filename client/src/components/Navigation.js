import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap';
import {Link as RouterLink} from 'react-router-dom';
import {House,CashCoin} from 'react-bootstrap-icons';

const Navigation = ({type,links,text,icons}) => {
    return (
        <>
            {
                navChanger(type,links,text,icons)
            }
        </>
    )
}

const navChanger = (type,links,text,icons) => {
    switch(type) {
        case 'mobile-top':
            return (
                MobileTop(text)
            )
        case 'mobile-bottom':
            return (
                MobileBottom(links,icons)
            )
        case 'desktop':
            return (
                Desktop(links,text)
            )
        default: console.log(`Navigation:navChanger Error`);
    }
}

// Desktop Navigation
const Desktop = (links,text) => {
    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="/">  
                    {text}
                </Navbar.Brand>
                <Nav className="me-auto">
                    {
                        links.map((link,idx) => {
                                if (!idx) {
                                return ( <Nav.Link as={RouterLink} to={`/`} eventKey={0}>{link}</Nav.Link> )
                                }
                                else {
                                    return ( <Nav.Link as={RouterLink} to={`/${link}`} eventKey={idx}>{link}</Nav.Link> )
                                }
                        })
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

// Mobile-Top
const MobileTop = (text) => {
    return (
        <Navbar bg="light" variant="light" fixed="top" >
            <Container className="justify-content-center">
                <Navbar.Brand href="/">  
                    {text}
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

//Mobile-Bottom
const MobileBottom = (links,icons) => {
    return (
        <Navbar bg="light" variant="light" fixed="bottom" >
        <Container className="justify-content-center">
            <Nav className='w-50 justify-content-evenly'>
                {
                    links.map((link,idx) => {
                            if (!idx) {
                            return ( <Nav.Link as={RouterLink} to={`/`} eventKey={0}>
                                <House size={35}/>
                            </Nav.Link> )
                            }
                            else {
                                return ( <Nav.Link as={RouterLink} to={`/${link}`} eventKey={idx}>
                                    <CashCoin size={35} />
                                </Nav.Link> )
                            }
                    })
                }
            </Nav>
        </Container>
        </Navbar>
    )
}

export default Navigation
