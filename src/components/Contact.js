import React from 'react';
import "./styles/Home.css";

const Contact = () => {
    const mailID = process.env.REACT_APP_MAIL_ID;
    const socialID = process.env.REACT_APP_SOCIAL_ID;

    return (
        <div id="contact" className="page-header">
            <div className="container">
                <div className="row">
                    <div className="ml-auto mr-auto col-md">
                        <div className="section-description text-center">
                            <h2 className="title">Let's Touch Base</h2>
                            <p className="description">Feel free to get in touch with me. I'd love to hear from you!</p>
                        
                            <svg 
                                width="90" 
                                height="90" 
                                fill="currentColor" 
                                className="bi bi-envelope mailto" 
                                viewBox="0 0 16 16" 
                                onClick={() => window.location.href=mailID
                                }
                            >
                                <path 
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                                />
                            </svg>
                            
                            <svg 
                                width="85" 
                                height="85" 
                                fill="currentColor" 
                                className="bi bi-linkedin" 
                                viewBox="0 0 16 16" 
                                onClick={() => window.location.href=socialID
                                }
                            >
                                <path 
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/
                                >
                            </svg>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Contact;
