import React from 'react';
import resumeFile from '../documents/resume.pdf';
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={'section ' + (darkTheme ? 'bg-dark-1' : '')}>
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            About Me
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            About Me
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                'text-7 fw-600 mb-3 ' + (darkTheme ? 'text-white' : '')
              }
            >
              I'm <span className="text-primary">Atreyu Santiago,</span> Full
              Stack Developer
            </h2>
            <p className={darkTheme ? 'text-white-50' : ''}>
              I'm a highly adaptable and versatile software engineer with a
              passion for crafting elegant and efficient solutions to complex
              problems. I have built and maintained software applications and
              have led teams to do the same. I enjoy mentoring and guiding
              fellow engineers, helping to increase team velocity and deliver
              high-quality products. My experience spans from fast-growing
              startups to top global tech companies, where I have had the
              opportunity to learn and grow as a professional in various
              settings.
            </p>
            <p className={darkTheme ? 'text-white-50' : ''}>
              If you'd like to connect, collaborate or discuss opportunities,
              please feel free to reach out. Let's create something amazing
              together!{' '}
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  'list-style-2 ' +
                  (darkTheme ? 'list-style-light text-light' : '')
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Atreyu Santiago
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="ksantiagoatreyu@gmail.com">
                    ksantiagoatreyu@gmail.com
                  </a>
                </li>
                {/*<li>
                  <span className="fw-600 me-2">Age:</span>31
                </li>
                */}
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Ellenwood, Georgia
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
