import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const About = () => {
    return (
        <main className="about-main">
            <header>
                <h1 class={'text-center'}>About <span>Currency-Today</span></h1>
            </header>
            <section>
                <header>
                    <h4>Why I Built It</h4>
                </header>
                <article>
                <p className='reader'>Over many long months, I've continued to learn and grow as a developer. While at the same time, I encountered countless companies that told me I wasn't good enough and tossed my application aside. So many in-fact that I faced severe imposter syndrome.</p>
                <p className='reader'>For some time, I reflected on the situation. In the end, I decided to take on my imposter syndrome directly and crush it while at the same time proving to myself what I'm capable of doing.</p>
                </article>
            </section>
            <hr />
            <section>
                <header>
                    <h4>Overview</h4>
                </header>
                <article>
                    <p className='reader'><span>Currency-Today</span> is a Full-Stack application developed using the <span>MERN</span> stack and integrates the <span><a href="https://www.exchangerate-api.com/">ExchangeRate-API</a></span> into its backend to supply currency data. The rates update every 24 hours while using the free API key.</p>
                    <Container fluid>
                        <Row>
                            <Col md={12}><div className='sub-header'><h5>Key Features</h5></div></Col>
                            <Col md={3} sm={6}><p className='col-buffer'>✅ Dry Code</p></Col>
                            <Col md={3} sm={6}><p className='col-buffer'>✅ Code-Splitting</p></Col>
                            <Col md={3} sm={6}><p className='col-buffer'>✅ Responsive Design</p></Col>
                            <Col md={3} sm={6}><p className='col-buffer'>✅ Optimization</p></Col>
                        </Row>
                
                        <Row>
                            <Col md={12}><div className='sub-header'><h5>Tech Highlights</h5></div></Col>
                            <Col lg={6} md={12}>
                                <Row>
                                    <Col md={12}><p className='highlight-title'>Frontend</p></Col>
                                    <Col xs={6}><p className='col-buffer'>ReactJS</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Styled-Components</p></Col>
                                    <Col xs={6}><p className='col-buffer'>SASS & React-Bootstrap</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Custom Hooks</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Redux</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Lazy Loading</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Reusable Components</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Desktop/Mobile Views</p></Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12}>
                                <Row>
                                    <Col md={12}><p className='highlight-title'>Backend</p></Col>
                                    <Col xs={6}><p className='col-buffer'>NodeJS</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Express</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Mongoose</p></Col>
                                    <Col xs={6}><p className='col-buffer'>MongoDB</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Helmet</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Cors</p></Col>
                                    <Col xs={6}><p className='col-buffer'>Models</p></Col>
                                    <Col xs={6}><p className='col-buffer'>JSONWebToken</p></Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </article>
            </section>
            <hr />
            <section>
                <article className='about-me'>
                <header className='text-center'>
                    <h4>A Little About Me</h4>
                </header>
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/40832145?v=4" alt="Michael Walter"/>
                    </div>
                    <p className='reader'>"My name is Mike, and I'm a software engineer based in Southern California. I'm ambitious and tenacious. Giving up isn't in my nature. If there is a way, I will find it."</p>
                </article>
            </section>
        </main>
    )
}

export default About
