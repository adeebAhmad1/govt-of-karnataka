import React from "react";

const ServiceExplore = ({ children, className,cl }) => {
  return (
    <div className={"container "+ cl} >
      <div
        className={"shadow my_box "+className}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="top_left"
          width="312"
          height="256"
          viewBox="0 0 312 256"
        >
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            opacity=".082"
          >
            <g stroke="#8274FF">
              <g>
                <g>
                  <path
                    strokeWidth="28.178"
                    d="M30.772 77.966c-21.577 37.489-1.557 82.051 44.715 99.533 46.272 17.481 101.275 1.262 122.852-36.227 21.577-37.49 1.557-82.052-44.715-99.533"
                    opacity=".695"
                    transform="translate(-8 -786) translate(70 884) translate(-43.444 -79.856)"
                  />
                  <path
                    strokeWidth="12.871"
                    d="M122.501 143.749c-19.584 4.55-40.012-4.625-45.628-20.491-5.615-15.867 5.708-32.417 25.292-36.967 19.584-4.55 40.013 4.624 45.628 20.491"
                    opacity=".724"
                    transform="translate(-8 -786) translate(70 884) translate(-43.444 -79.856)"
                  />
                  <path
                    strokeWidth="21.76"
                    d="M207.247 23.247c43.168 12.043 66.113 50.157 51.25 85.131"
                    opacity=".49"
                    transform="translate(-8 -786) translate(70 884) translate(-43.444 -79.856)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bottom_right"
          width="344"
          height="312"
          viewBox="0 0 344 312"
        >
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            opacity=".105"
          >
            <g stroke="#8274FF" strokeWidth="15.733">
              <g>
                <g>
                  <path
                    d="M121.457 198.465c43.096 3.712 75.022-33.264 71.31-82.59-3.711-49.324-41.656-92.319-84.752-96.03-43.095-3.713-75.022 33.264-71.31 82.589"
                    opacity=".695"
                    transform="translate(-646 -882) translate(70 884) scale(1 -1) rotate(17 1320.805 2035.223) rotate(115 114.736 109.155)"
                  />
                  <path
                    d="M110.604 144.983c20.079-1.025 37.187-15.475 38.212-32.274 1.024-16.8-14.422-29.589-34.502-28.564-20.08 1.025-37.187 15.474-38.212 32.274"
                    opacity=".695"
                    transform="translate(-646 -882) translate(70 884) scale(1 -1) rotate(17 1320.805 2035.223) scale(-1 1) rotate(16 0 -685.823)"
                  />
                  <path
                    d="M255.614 47.98c-44.222-3.22-77.46 25.318-74.24 63.742"
                    opacity=".695"
                    transform="translate(-646 -882) translate(70 884) scale(1 -1) rotate(17 1320.805 2035.223) scale(-1 1) rotate(-24 0 1107.154)"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="top_right"
          width="113"
          height="41"
          viewBox="0 0 113 41"
        >
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            opacity=".143"
          >
            <g stroke="#8274FF" strokeWidth="15.733">
              <g>
                <path
                  d="M1111.207 33.033c50.819-1.497 93.23-36.436 94.727-78.038 1.497-41.601-38.486-74.112-89.304-72.615-50.819 1.497-93.23 36.436-94.726 78.038"
                  transform="translate(-1097 -884) translate(70 884) rotate(-171 1113.939 -42.318)"
                />
              </g>
            </g>
          </g>
        </svg>
        {children}
      </div>
    </div>
  );
};

export default ServiceExplore;
