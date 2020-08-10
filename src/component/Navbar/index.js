import React from "react";

// style
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container-fluid">
        <div className="nav-mobile">
          <div className="nav-brand">
            <a href="#">three60</a>
          </div>
          <div>
            <button className="nav-menu-button">
              <svg
                className="nav-menu-hamburger"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="nav-menu">
          <div className="nav-left">
            <a href="#" className="nav-link">
              <span className="nav-svg">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L1 5L9 9L17 5L9 1Z"
                    stroke="#777"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 13L9 17L17 13"
                    stroke="#777"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 9L9 13L17 9"
                    stroke="#777"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Todos
            </a>
            <a href="#" className="nav-link">
              <span className="nav-svg">
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75 1H2.5C2.10218 1 1.72064 1.16857 1.43934 1.46863C1.15804 1.76869 1 2.17565 1 2.6V15.4C1 15.8243 1.15804 16.2313 1.43934 16.5314C1.72064 16.8314 2.10218 17 2.5 17H11.5C11.8978 17 12.2794 16.8314 12.5607 16.5314C12.842 16.2313 13 15.8243 13 15.4V6.6L7.75 1Z"
                    stroke="#777777"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.75 1V6.6H13"
                    stroke="#777777"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Notes
            </a>
            <a href="#" className="nav-link">
              <span className="nav-svg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.54785 8.63313C6.8478 9.03395 7.23048 9.36561 7.66993 9.6056C8.10939 9.84559 8.59534 9.9883 9.09483 10.0241C9.59431 10.0598 10.0957 9.98778 10.5648 9.81283C11.034 9.63789 11.4601 9.36413 11.8141 9.01013L13.9094 6.91571C14.5456 6.25736 14.8976 5.37561 14.8896 4.46036C14.8817 3.54511 14.5144 2.6696 13.8669 2.0224C13.2194 1.3752 12.3435 1.00809 11.4279 1.00013C10.5122 0.992179 9.63009 1.34402 8.97145 1.97988L7.77013 3.17369"
                    stroke="#777777"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.34189 7.23686C9.04194 6.83604 8.65926 6.50439 8.21981 6.2644C7.78035 6.02441 7.2944 5.8817 6.79491 5.84594C6.29543 5.81018 5.79409 5.88222 5.32491 6.05716C4.85572 6.23211 4.42966 6.50586 4.07563 6.85987L1.98031 8.95428C1.34417 9.61263 0.992175 10.4944 1.00013 11.4096C1.00809 12.3249 1.37536 13.2004 2.02285 13.8476C2.67033 14.4948 3.54622 14.8619 4.46187 14.8699C5.37751 14.8778 6.25966 14.526 6.91829 13.8901L8.11263 12.6963"
                    stroke="#777777"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              Links
            </a>
          </div>
          <div className="nav-right">
            <div className="nav-item">Kraft Alpha is out!</div>
            <a href="#" className="nav-link">
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
