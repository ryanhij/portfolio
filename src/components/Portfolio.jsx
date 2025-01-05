import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import ProjectDetailsModal from './ProjectDetailsModal';
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey] = useState('*');
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: 'Design',
    BRAND: 'Brand',
    PHOTOS: 'Photos',
  };

  const projectsData = [
    {
      title: 'Mattressland',
      projectInfo:
        'Mattress Land offers a variety of mattresses, bed sheets, foundations, and related bedding accessories. The site provides tools like the BedFIT™ assessment to help customers choose optimal products based on comfort and support needs. Additional features include financing options, delivery services, and detailed product information to assist in making informed purchasing decisions.',
      technologies: 'HTML5, CSS3, Solidity, Javascript, React, Hardhat',
      date: 'August 2023',
      url: {
        name: 'https://mattressland.com/',
        link: 'https://mattressland.com/',
        git: 'Mattressland',
        gitlink: 'https://github.com/ryanhij/mattressland',
        vid: 'https://www.youtube.com/user/MattressLand',
        vidlink: 'https://www.youtube.com/user/MattressLandSleepFit',
      },
      thumbImage: 'images/projects/mattressland1.png',
      sliderImages: [
        'images/projects/mattressland2.png',
        'images/projects/mattressland3.png',
        'images/projects/mattressland4.png',
      ],
      categories: [filters.BRAND],
    },
    {
      title: 'Curitics Health',
      projectInfo:
        'Curitics Health is a low-code platform designed to optimize value-based care in healthcare. It integrates data sharing, patient engagement, and clinical workflows into a scalable and HIPAA-compliant system. The platform supports health plans, providers, and behavioral health organizations, enabling efficient care coordination, real-time data access, and reduced operational costs. Features include customizable workflows, data analytics, and telehealth support, aimed at improving clinical efficiency and patient outcomes.',
      technologies: 'HTML5, CSS3, Javascript, Next.js',
      date: 'June 2024',
      url: {
        name: 'https://curiticshealth.com/',
        link: 'https://curiticshealth.com/',
        git: 'CuriticsHealth',
        gitlink: 'https://github.com/ryanhij/curiticshealth',
        vid: 'Linkedin Post',
        vidlink:
          'https://www.linkedin.com/posts/curitics-health_healthtech-innovation-valuebasedcare-activity-7107992333454839808-JvUb?utm_source=share&utm_medium=member_desktop',
      },
      thumbImage: 'images/projects/curitics1.png',
      sliderImages: [
        'images/projects/curitics2.png',
        'images/projects/curitics3.png',
        'images/projects/curitics4.png',
      ],
      categories: [filters.BRAND],
    },
    {
      title: 'Truckpedia',
      projectInfo:
        'Truckpedia is a comprehensive trucking management platform offering tools to streamline operations. Features include automated data entry, load tracking with GPS/ELD integration, driver settlement management, invoicing, and IFTA compliance. It supports integrations with systems like QuickBooks and fuel cards, providing analytics on costs and profits. The platform also connects users with shippers and offers marketing tools, making it an all-in-one solution for trucking businesses. ',
      technologies:
        'Solidity, Node.js, Figma, Blender, Three.js, Adobe Photoshop, Adobe Illustrator, React.js, Hardhat',
      date: 'April 2023',
      url: {
        name: 'https://dashboard.truckpedia.io/',
        link: 'https://dashboard.truckpedia.io/',
        git: 'Truckpedia',
        gitlink: 'https://github.com/ryanhij/truckpedia',
        vid: 'https://youtu.be/JfTrWz3rJ2o?list=PLhGIZqOcOGLVIkRW_XCzBRpBvx5XYH7EB',
        vidlink:
          'https://youtu.be/JfTrWz3rJ2o?list=PLhGIZqOcOGLVIkRW_XCzBRpBvx5XYH7EB',
      },
      thumbImage: 'images/projects/truckpedia1.png',
      sliderImages: [
        'images/projects/truckpedia2.png',
        'images/projects/truckpedia3.png',
        'images/projects/truckpedia4.png',
      ],
      categories: [filters.BRAND],
    },
    {
      title: 'Coach',
      projectInfo:
        'Coach is a luxury brand offering designer handbags, wallets, shoes, clothing, and accessories for both men and women. It features collections like Tabby and holiday gift guides, emphasizing timeless and crafted-to-last styles. The site provides an online shopping experience with options to browse by category, gifts, and bestsellers.',
      technologies: 'HTML5, CSS3, Solidity, Javascript, React, Hardhat',
      date: 'April 2023',
      url: {
        name: 'https://www.coach.com',
        link: 'https://www.coach.com',
        git: 'Coach',
        gitlink: 'https://github.com/ryanhij/coach',
        vid: 'https://www.youtube.com/user/coach?sub_confirmation=1',
        vidlink: 'https://www.youtube.com/user/coach?sub_confirmation=1',
      },
      thumbImage: 'images/projects/coach1.png',
      sliderImages: ['images/projects/coach2.png', 'images/projects/coach3.png'],
      categories: [filters.BRAND],
    },
    {
      title: 'Jumpcloud',
      projectInfo:
        "JumpCloud is a unified cloud platform for identity, device, and access management, enabling organizations to centrally manage users, devices, and IT resources. Key features include single sign-on (SSO), multi-factor authentication (MFA), directory services, and device management across various operating systems. It supports Zero Trust security, remote work environments, and compliance needs. The platform integrates with tools like RADIUS, LDAP, and APIs, allowing streamlined IT operations.",
      technologies:
        'Solidity, Javascript, React, DALL.E 2, Hardhat, Node.js, Ethers.js',
      date: 'January 2024',
      url: {
        name: 'https://jumpcloud.com/',
        link: 'https://jumpcloud.com/',
        git: 'Jumpcloud',
        gitlink: 'https://github.com/ryanhij/jumpcloud',
        vid: 'https://www.youtube.com/UCV9U0J9zvop_Whyh-35M_xg',
        vidlink: 'https://www.youtube.com/channel/UCV9U0J9zvop_Whyh-35M_xg',
      },
      thumbImage: 'images/projects/jumpcloud1.png',
      sliderImages: [
        'images/projects/jumpcloud2.png',
        'images/projects/jumpcloud3.png',
      ],
      categories: [filters.BRAND],
    },
    {
      title: 'NewAge AI Art Gallery',
      projectInfo:
        "NewAge is a cutting-edge web 3.0 AI art gallery that showcases a curated collection of mesmerizing artworks crafted by artificial intelligence. With NewAge, you not only have the opportunity to appreciate these unique pieces but also to make them a tangible part of your space. Purchase your favorite AI-generated artwork, and we'll transform it into a stunning poster and send it straight to your doorstep. (Deployed to the Polygon Matic test network)",
      technologies:
        'Solidity, Javascript, React, DALL.E 2, Hardhat, Node.js, Ethers.js',
      date: 'January 2024',
      url: {
        name: 'https://newage.on.fleek.co/',
        link: 'https://newage.on.fleek.co/',
        git: 'Newage AI art',
        gitlink: 'https://github.com/MaxSyber/Newage',
        vid: 'https://youtu.be/hbp9Ta5mU8M',
        vidlink: 'https://youtu.be/hbp9Ta5mU8M',
      },
      thumbImage: 'images/projects/Newage1.jpg',
      sliderImages: [
        'images/projects/Newage1.jpg',
        'images/projects/Newage2.jpg',
        'images/projects/Newage3.jpg',
      ],
      categories: [filters.BRAND],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.portfolio-filter', {
      itemSelector: '.filter-item',
      layoutMode: 'masonry',
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  return (
    <>
      <section
        id="portfolio"
        className={'section ' + (darkTheme ? 'bg-dark-2' : 'bg-light')}
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
              Portfolio
            </h2>
            <p
              className={
                'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
                (darkTheme ? 'text-white' : 'text-dark')
              }
            >
              {' '}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      'col-sm-6 col-lg-6 filter-item ' +
                      project.categories.join(' ')
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href="viewdetails"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            {' '}
                            .
                          </a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
