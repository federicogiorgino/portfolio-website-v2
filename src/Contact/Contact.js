import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-page' id='contact'>
      <div className='contact-container'>
        <div className='contact-panel'>
          <a href='mailto:federicogiorgino@protonmail.com'>
            <button class='btn-2 '>Send me an Email</button>
          </a>
        </div>
        <div className='contact-panel-2'>
          <hr />
        </div>
        <div className='contact-panel'>
          <div>
            <p>Or you can also find me on </p>
            <a href='https://github.com/federicogiorgino'>
              <i className='fa fa-github' aria-hidden='true' />
            </a>
            <a href='https://www.linkedin.com/in/federico-giorgino/'>
              <i className='fa fa-linkedin' aria-hidden='true' />
            </a>
            <a href='https://codepen.io/federicogiorgino'>
              <i className='fa fa-codepen' aria-hidden='true' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
