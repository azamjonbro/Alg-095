import React from 'react'

function About() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }} className='container'>
                <h1 style={{ color: '#333' }}>About Page</h1>
                <p style={{ fontSize: '16px', lineHeight: '1.5' }}>This is the about page of our website. Here you can find more information about us.</p>

                <section style={{ margin: '20px 0' }}>
                        <h2 style={{ color: '#555' }}>Our Mission</h2>
                        <p>We are dedicated to providing the best services and products to our customers worldwide.</p>
                </section>

                <section style={{ margin: '20px 0' }}>
                        <h2 style={{ color: '#555' }}>Our Team</h2>
                        <p>Our experienced team consists of professionals committed to excellence and innovation.</p>
                </section>

                <section style={{ margin: '20px 0' }}>
                        <h2 style={{ color: '#555' }}>Our Values</h2>
                        <p>We believe in integrity, quality, and customer satisfaction as our core values.</p>
                </section>

                <section style={{ margin: '20px 0' }}>
                        <h2 style={{ color: '#555' }}>Contact Us</h2>
                        <p>Get in touch with us for more information or inquiries about our services.</p>
                </section>
        </div>
    )
}

export default About