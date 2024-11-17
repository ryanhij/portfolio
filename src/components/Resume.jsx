import React from 'react';
import resumeFile from '../documents/resume.pdf';

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: '2006 - 2010',
      title: 'Bachelor of Science',
      place: 'Georgia State University',
      desc: 'Completed a four year bachelors degree.',
    },
  ];

  const experienceDetails = [
    {
      yearRange: 'July 2024 - Present',
      title: 'Freelancer',
      place: 'Freelance',
      desc: 'Experienced freelance web developer specializing in building scalable, responsive, and user-friendly web applications, leveraging cloud technologies and data visualization tools to deliver impactful solutions for clients across diverse industries.',
    },
    {
      yearRange: 'October 2023 - June 2024',
      title: 'Senior Software Engineer',
      place: 'Token Metrics',
      desc: 'Highly skilled software engineer with a strong track record in designing, developing, and deploying complex web and mobile applications. Proficient in a variety of technologies and methodologies, including React, Node.js, Angular, React Native, and blockchain. Experienced in full-stack development, API design, data visualization, and DevOps practices.',
    },
    {
      yearRange: 'February 2022 - September 2023',
      title: 'Senior Software Engineer',
      place: 'Curitics Health',
      desc: 'Highly skilled software engineer specializing in developing innovative healthcare applications using React and related technologies. Experienced in building patient-centric solutions, including dashboards, APIs, and integrations with FHIR standards, to enhance patient experience, improve healthcare delivery, and ensure data security.',
    },
    {
      yearRange: 'June 2021 - Jan 2022',
      title: 'Full Stack and Mobile Developer',
      place: 'Truckpedia',
      desc: 'Developed and optimized fleet management dashboards, mobile applications, and real-time tracking systems, integrated payment solutions, and collaborated on API enhancements to streamline logistics operations and improve user engagement.',
    },
    {
      yearRange: 'October 2019 - May 2021',
      title: 'Senior Software Engineer',
      place: 'Coach',
      desc: 'Highly skilled senior software engineer with expertise in building responsive web applications using React and related technologies. Experienced in designing user-friendly interfaces, optimizing performance, and implementing robust testing strategies. Proficient in state management, accessibility, and security best practices. Adept at mentoring junior developers and contributing to all phases of the software development lifecycle.',
    },
    {
      yearRange: 'September 2016 - September 2019',
      title: 'Full Stack Developer',
      place: 'Nationwide Marketing Group',
      desc: 'Developed and optimized e-commerce platforms with a focus on UI/UX, accessibility, secure authentication, and efficient data management while contributing to solutions architecture and agile development practices.',
    },
    {
      yearRange: 'April 2014 - August 2016',
      title: 'Frontend Developer',
      place: 'Spreadshirt',
      desc: 'Enhanced e-commerce platform performance and user experience by refactoring code, developing a reusable component library, improving state management, and optimizing API integrations for scalability and responsiveness.',
    },
    {
      yearRange: 'September 2012 - March 2014',
      title: 'Full Stack Developer',
      place: 'JumpCloud',
      desc: 'Designed and developed dynamic web applications with responsive interfaces, scalable backend services, and efficient APIs, contributing to the architecture of a clinical service platform while collaborating across the full development lifecycle.',
    },
    {
      yearRange: 'January 2011 - May 2012',
      title: 'Frontend Developer',
      place: 'Novatech',
      desc: 'Optimized client-side performance, improved conversion rates through enhanced UX/UI workflows, automated asset optimization, and contributed to reducing technical debt in CRM system development.',
    },
    {
      yearRange: 'August 2010 - December 2010',
      title: 'Software Developer Intern',
      place: 'Salesfusion',
      desc: 'Developed and optimized a web-based workflow application, adhered to coding standards, and engaged in continuous learning through training and collaboration with senior developers.',
    },
  ];

  return (
    <section
      id="resume"
      className={'section ' + (darkTheme ? 'bg-dark-1' : '')}
    >
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            Summary
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {' '}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                'text-6 fw-600 mb-4 ' + (darkTheme ? 'text-white' : '')
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    'bg-white  rounded p-4 mb-4 ' +
                    (darkTheme ? 'bg-dark' : 'bg-white border')
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={'text-5 ' + (darkTheme ? 'text-white' : '')}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? 'text-primary' : 'text-danger'}>
                    {value.place}
                  </p>
                  <p className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                'text-6 fw-600 mb-4 ' + (darkTheme ? 'text-white' : '')
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    'bg-white  rounded p-4 mb-4 ' +
                    (darkTheme ? 'bg-dark' : 'bg-white border')
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={'text-5 ' + (darkTheme ? 'text-white' : '')}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? 'text-primary' : 'text-danger'}>
                    {value.place}
                  </p>
                  <p className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
