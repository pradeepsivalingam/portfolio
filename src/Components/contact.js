import React from 'react';

const Contact = () => (
    
    <div style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '32px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
    }}>
        <h2 style={{ marginBottom: '16px', color: '#222' }}>Contact Us</h2>
        <p style={{ marginBottom: '32px', color: '#555' }}>
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid #ccc'
                    }}
                />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid #ccc'
                    }}
                />
            </div>
            <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Message</label>
                <textarea
                    name="message"
                    rows="5"
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        resize: 'vertical'
                    }}
                />
            </div>
            <button
                type="submit"
                style={{
                    background: '#0078d4',
                    color: '#fff',
                    padding: '12px 32px',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Send Message
            </button>
        </form>
        <div style={{ marginTop: '32px', color: '#888', fontSize: '14px' }}>
            Or email us directly at <a href="mailto:pradeepsivalingam09@gmail.com" style={{ color: '#0078d4' }}>pradeepsivalingam09@gmail.com</a>
        </div>
    </div>
);

const App = () => (
    <section
        className="py-12"
        style={{
            background: "bg-gray-100",
        }}
    >
        <Contact />
    </section>
);

export default App;