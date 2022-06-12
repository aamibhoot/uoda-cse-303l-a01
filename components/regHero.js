import Image from "next/image";
import React from "react";
import Container from "./container";

export default function RegHero(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <div className="w-7/12">
              <AnimatedSVG />
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                "data.title"
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                "data.desc"
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
function AnimatedSVG() {
  return (
    <>
      <svg
        className="animated"
        id="freepik_stories-add-user"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="freepik--background-simple--inject-231"
          className="animable"
          style={{ transformOrigin: "255.111px 223.766px" }}
        >
          <path
            d="M285,98.07c-38,39.34-57.92,42.18-106.1,64-39.4,17.79-78.4,52.38-91.71,95.48C52.1,371,207.9,385.22,281.47,366.69c51.79-13.05,72.51-43.1,85.63-93,5.1-19.39,6.59-40.36,15-58.81,9-19.83,27.51-29.48,36.72-46.89C463.41,83.67,335.65,45.62,285,98.07Z"
            style={{
              fill: "#4F46E5",
              transformOrigin: "255.111px 223.766px",
            }}
            id="el50c48cfz076"
            className="animable"
          />
          <g id="elbgt1ztl8ns6">
            <path
              d="M285,98.07c-38,39.34-57.92,42.18-106.1,64-39.4,17.79-78.4,52.38-91.71,95.48C52.1,371,207.9,385.22,281.47,366.69c51.79-13.05,72.51-43.1,85.63-93,5.1-19.39,6.59-40.36,15-58.81,9-19.83,27.51-29.48,36.72-46.89C463.41,83.67,335.65,45.62,285,98.07Z"
              style={{
                fill: "rgb(255, 255, 255)",
                opacity: "0.9",
                transformOrigin: "255.111px 223.766px",
              }}
              className="animable"
              id="el57v2ngs8u6k"
            />
          </g>
        </g>
        <g
          id="freepik--Shadow--inject-231"
          className="animable"
          style={{ transformOrigin: "250px 416.24px" }}
        >
          <ellipse
            id="freepik--path--inject-231"
            cx={250}
            cy="416.24"
            rx="193.89"
            ry="11.32"
            style={{
              fill: "rgb(245, 245, 245)",
              transformOrigin: "250px 416.24px",
            }}
            className="animable"
          />
        </g>
        <g
          id="freepik--Window--inject-231"
          className="animable"
          style={{ transformOrigin: "198.69px 216.91px" }}
        >
          <path
            d="M52.3,113.53a6.3,6.3,0,0,1,6.28-6.28H338.8a6.3,6.3,0,0,1,6.28,6.28v20.21H52.3Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "198.69px 120.495px",
            }}
            id="elh9s93570gqn"
            className="animable"
          />
          <path
            d="M103.07,125.79a5.3,5.3,0,1,1,5.3-5.3A5.3,5.3,0,0,1,103.07,125.79Zm0-9.49a4.19,4.19,0,1,0,4.19,4.19A4.2,4.2,0,0,0,103.07,116.3Z"
            style={{
              fill: "rgb(240, 240, 240)",
              transformOrigin: "103.07px 120.49px",
            }}
            id="elcy0ywbua4qv"
            className="animable"
          />
          <path
            d="M86.24,125.79a5.3,5.3,0,1,1,5.31-5.3A5.3,5.3,0,0,1,86.24,125.79Zm0-9.49a4.19,4.19,0,1,0,4.2,4.19A4.2,4.2,0,0,0,86.24,116.3Z"
            style={{
              fill: "rgb(240, 240, 240)",
              transformOrigin: "86.25px 120.49px",
            }}
            id="el6idrlypvfxa"
            className="animable"
          />
          <path
            d="M69.42,125.79a5.3,5.3,0,1,1,5.31-5.3A5.3,5.3,0,0,1,69.42,125.79Zm0-9.49a4.19,4.19,0,1,0,4.19,4.19A4.2,4.2,0,0,0,69.42,116.3Z"
            style={{
              fill: "rgb(240, 240, 240)",
              transformOrigin: "69.43px 120.49px",
            }}
            id="el43ydk1uklqg"
            className="animable"
          />
          <path
            d="M338.8,326.57H58.58a6.3,6.3,0,0,1-6.28-6.28V133.74H345.08V320.29A6.3,6.3,0,0,1,338.8,326.57Z"
            style={{
              fill: "#4F46E5",
              transformOrigin: "198.69px 230.155px",
            }}
            id="elrnd3qu65r8"
            className="animable"
          />
          <rect
            x="54.08"
            y="139.11"
            width="289.22"
            height="165.33"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "198.69px 221.775px",
            }}
            id="els740tx1nhwa"
            className="animable"
          />
          <rect
            x="68.25"
            y="153.28"
            width="117.79"
            height="22.33"
            rx="3.81"
            style={{
              fill: "#4F46E5",
              transformOrigin: "127.145px 164.445px",
            }}
            id="el07l0p21xcluh"
            className="animable"
          />
          <path
            d="M325.32,154.28a2.81,2.81,0,0,1,2.81,2.81V171.8a2.81,2.81,0,0,1-2.81,2.81H215.15a2.81,2.81,0,0,1-2.81-2.81V157.09a2.81,2.81,0,0,1,2.81-2.81H325.32m0-1H215.15a3.82,3.82,0,0,0-3.81,3.81V171.8a3.81,3.81,0,0,0,3.81,3.81H325.32a3.81,3.81,0,0,0,3.81-3.81V157.09a3.82,3.82,0,0,0-3.81-3.81Z"
            style={{
              fill: "#4F46E5",
              transformOrigin: "270.235px 164.445px",
            }}
            id="el0g0d5slf5h49"
            className="animable"
          />
          <path
            d="M87.83,185.61a18.58,18.58,0,1,1-18.58,18.58,18.6,18.6,0,0,1,18.58-18.58m0-1a19.58,19.58,0,1,0,19.58,19.58,19.58,19.58,0,0,0-19.58-19.58Z"
            style={{ fill: "#4F46E5", transformOrigin: "87.83px 204.19px" }}
            id="el00lr3263wrr9t"
            className="animable"
          />
          <g id="elab630898y9q">
            <path
              d="M102,211.89a16.16,16.16,0,0,1-28.41,0,25.56,25.56,0,0,1,28.41,0Z"
              style={{
                fill: "#4F46E5",
                opacity: "0.4",
                transformOrigin: "87.795px 213.962px",
              }}
              className="animable"
              id="el1h5nyshgz"
            />
          </g>
          <g id="el7iwpaifvuxp">
            <circle
              cx="87.83"
              cy="198.66"
              r="7.2"
              style={{
                fill: "#4F46E5",
                opacity: "0.4",
                transformOrigin: "87.83px 198.66px",
              }}
              className="animable"
              id="elnseixn5x26"
            />
          </g>
          <g id="el7bml0av17g4">
            <path
              d="M319.06,214.26H128.48a10.07,10.07,0,0,1-10.07-10.07h0a10.06,10.06,0,0,1,10.07-10.06H319.06a10.06,10.06,0,0,1,10.07,10.06h0A10.07,10.07,0,0,1,319.06,214.26Z"
              style={{
                fill: "#4F46E5",
                opacity: "0.4",
                transformOrigin: "223.77px 204.195px",
              }}
              className="animable"
              id="elzha23z7kuo"
            />
          </g>
          <path
            d="M87.83,239a18.58,18.58,0,1,1-18.58,18.58A18.59,18.59,0,0,1,87.83,239m0-1a19.58,19.58,0,1,0,19.58,19.58A19.58,19.58,0,0,0,87.83,238Z"
            style={{ fill: "#4F46E5", transformOrigin: "87.83px 257.58px" }}
            id="ellqa57d96388"
            className="animable"
          />
          <g id="elnv8n6ixe2p">
            <path
              d="M102,265.22a16.16,16.16,0,0,1-28.41,0,25.61,25.61,0,0,1,28.41,0Z"
              style={{
                fill: "#4F46E5",
                opacity: "0.4",
                transformOrigin: "87.795px 267.297px",
              }}
              className="animable"
              id="el2jjc23e2s3z"
            />
          </g>
          <g id="elvvdapf6036p">
            <circle
              cx="87.83"
              cy={252}
              r="7.2"
              style={{
                fill: "#4F46E5",
                opacity: "0.4",
                transformOrigin: "87.83px 252px",
              }}
              className="animable"
              id="eljrnuqg2aia"
            />
          </g>
          <g id="el6bo39s3xgv8">
            <path
              d="M128.48,247.46H319.06a10.07,10.07,0,0,1,10.07,10.07v0a10.07,10.07,0,0,1-10.07,10.07H128.48a10.07,10.07,0,0,1-10.07-10.07v0a10.06,10.06,0,0,1,10.06-10.06Z"
              style={{
                fill: "#4F46E5",
                opacity: "0.4",
                transformOrigin: "223.77px 257.53px",
              }}
              className="animable"
              id="elryrzpcudlk"
            />
          </g>
          <g id="el5uaoz7vd724">
            <path
              d="M272.12,267.3a93.48,93.48,0,0,0,1.79,18.22,37.58,37.58,0,0,0-18.39,32.23,37.17,37.17,0,0,0,1,8.82H338.8a6.3,6.3,0,0,0,6.28-6.28v-144A93.33,93.33,0,0,0,272.12,267.3Z"
              style={{
                opacity: "0.1",
                transformOrigin: "300.3px 251.43px",
              }}
              className="animable"
              id="elm4abx8kevg"
            />
          </g>
        </g>
        <g
          id="freepik--Character--inject-231"
          className="animable"
          style={{ transformOrigin: "365.31px 271.24px" }}
        >
          <g id="eldqll1rg12xa">
            <circle
              cx="365.31"
              cy="271.24"
              r="83.19"
              style={{
                fill: "#4F46E5",
                transformOrigin: "365.31px 271.24px",
                transform: "rotate(-45deg)",
              }}
              className="animable"
              id="el22yety2017s"
            />
          </g>
          <g id="el7w0k8oq2vjj">
            <circle
              cx="365.7"
              cy="271.13"
              r="75.84"
              style={{
                fill: "rgb(255, 255, 255)",
                transformOrigin: "365.7px 271.13px",
                transform: "rotate(-45deg)",
              }}
              className="animable"
              id="elul7giumz2se"
            />
          </g>
          <path
            d="M340.11,220.25l-4.84,6.2s-4.25,3.22-5.86,6c-1.88,1.86-3.6,3.77-5.3,5.78a79.5,79.5,0,0,0-5.44,7.21,41.84,41.84,0,0,0-4.52,8.59,18.16,18.16,0,0,0-1.21,6,11.13,11.13,0,0,0,.76,4.25,10,10,0,0,0,3.17,4.2l1.06.8,1.59.3a53.59,53.59,0,0,0,9.52.94l1.26-.11L329,257.73c-1.07,0-3.37.21-4.42.19,0-.2.08-.4.13-.6a37.81,37.81,0,0,1,2.6-7c1.12-2.43,2.41-4.86,3.75-7.28,1.18-2.14,2.45-4.29,3.68-6.39l6-3.78,3.51-6.23Zm-15.61,39.5a1.68,1.68,0,0,1,0-.29.76.76,0,0,1,.09.23C324.62,259.93,324.55,259.94,324.5,259.75Z"
            style={{
              fill: "rgb(127, 62, 59)",
              transformOrigin: "328.594px 245.385px",
            }}
            id="el7dn96rqf0b5"
            className="animable"
          />
          <path
            d="M374.19,233.65c.15-.77-5.11-3.41-8.73-1.26-3.13,1.86-3.53,4.4-2.39,7.43,0,.21.08.42.11.63.07.49.13,1,.16,1.46.23,3.19-.61,6.16-4.2,7.85,0,.2-.49.41-.65.55a7.15,7.15,0,0,0-2.38,4.55c0,1.3,1.23,2.33,2.66,3.57l2,1.35,2.74-.26c8.41-2.47,12.34-10.15,12.16-10.72C373.51,245.24,373.54,239,374.19,233.65Z"
            style={{
              fill: "rgb(127, 62, 59)",
              transformOrigin: "365.893px 245.672px",
            }}
            id="eljmunj4clkz"
            className="animable"
          />
          <path
            d="M392.37,251.87l-1.52-.26c-2-.32-10.92-2.34-15.23-2.72h0c-1,2.13-4.28,7.33-12.69,9.8l-2.08.49-2-1a5.3,5.3,0,0,1-2.18-3.84,5.69,5.69,0,0,1,2.18-4,.66.66,0,0,0,.17-.23c0-.24,0-.4,0-.42-.63.08-8.61,1.29-9.28,1.4a130,130,0,0,0-22.07,6.13l.08.72,1.45,12.59.54,4.77s4-.45,9.25-1.37c-1.43,12.74-1.71,31.2,2.66,54.93l17.07-.32,29.66-.55c.12-2-.1-6.14-.31-11.8l-.27-8.74c-.16-7.72-.13-17,.56-26.92.11-1.57.24-3.15.38-4.75h0c6.06,6.55,12.13,12.81,12.13,12.81l2.87-2.76c3.67-1.77,6.56-4.94,9.08-8.75l3.37-3.25S400.57,253.25,392.37,251.87Z"
            style={{
              fill: "#4F46E5",
              transformOrigin: "371.93px 288.875px",
            }}
            id="eldva1s7h2iz"
            className="animable"
          />
          <g id="elw9qk5ko7h9l">
            <path
              d="M384.16,270.64a14.91,14.91,0,0,0,1.95,5.9l2.3,3.94c.11-1.57.24-3.15.38-4.75C387.21,274,385.63,272.29,384.16,270.64Z"
              style={{
                opacity: "0.3",
                transformOrigin: "386.475px 275.56px",
              }}
              className="animable"
              id="elfks21vhzb4e"
            />
          </g>
          <g id="el0plvxmp9l3x">
            <path
              d="M388.8,275.74h0c-.14,1.6-.27,3.18-.38,4.75h0C388.52,278.92,388.66,277.33,388.8,275.74Z"
              style={{
                opacity: "0.3",
                transformOrigin: "388.61px 278.115px",
              }}
              className="animable"
              id="elpgabd50vuyq"
            />
          </g>
          <path
            d="M363.07,239.82c0,.21.07.42.11.63,0-.21-.07-.42-.11-.63Z"
            style={{
              fill: "rgb(127, 62, 59)",
              transformOrigin: "363.125px 240.135px",
            }}
            id="el092z93qsimdi"
            className="animable"
          />
          <g id="elojk521tlyw">
            <path
              d="M363.34,241.91c0-.48-.09-1-.16-1.46C363.25,240.94,363.31,241.43,363.34,241.91Z"
              style={{
                opacity: "0.2",
                transformOrigin: "363.26px 241.18px",
              }}
              className="animable"
              id="el5xdb9y39rak"
            />
          </g>
          <path
            d="M369.56,237.45c-.2.14-.39.29-.6.43a11.54,11.54,0,0,1-5.89,1.94c0,.21.07.42.11.63.07.49.13,1,.16,1.46,0,0,0,.06,0,.09A10.08,10.08,0,0,0,369.56,237.45Z"
            style={{
              fill: "rgb(127, 62, 59)",
              transformOrigin: "366.315px 239.725px",
            }}
            id="el40loiclpqwb"
            className="animable"
          />
          <path
            d="M380.79,250.41a2.23,2.23,0,0,0-1.66-1.7l-2.08-.5a1.24,1.24,0,0,0-1.36.59l-.07.09c-1,2.13-4.28,7.33-12.69,9.8l-.65.15h0l-1.43.34-2-1a5.3,5.3,0,0,1-2.18-3.84,5.69,5.69,0,0,1,2.18-4,2.16,2.16,0,0,0,.29-.37c.09-.23.07-.34-.09-.44-2.21-1.59-7.15.86-7.35,1.28-.21.21-.42.43-.63.68a6.93,6.93,0,0,0-1.6,5.3,10.69,10.69,0,0,0,5.07,7.76.23.23,0,0,0,.14,0,.29.29,0,0,0,.16,0,.33.33,0,0,0,.14-.27,6,6,0,0,1,3.7-5.52l1.75.94c-7.52,30.86-2.42,67.85-2.28,68.85h.58s0,0,0,0c0-.38-5.3-37.69,2.28-68.72l1.83-.44c2.13,2.6,1.12,6.46,1.11,6.5a.3.3,0,0,0,.09.3.31.31,0,0,0,.2.07.2.2,0,0,0,.11,0c.4-.18,9.86-4.32,13.17-8.27a15.8,15.8,0,0,0,3.22-6.5A2.12,2.12,0,0,0,380.79,250.41Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "365.13px 288.363px",
            }}
            id="eln25agok0it"
            className="animable"
          />
          <g id="elyw8k4tt83d8">
            <path
              d="M369.56,237.45c-.2.14-.39.29-.6.43a11.54,11.54,0,0,1-5.89,1.94c0,.21.07.42.11.63.07.49.13,1,.16,1.46,0,0,0,.06,0,.09A10.08,10.08,0,0,0,369.56,237.45Z"
              style={{
                opacity: "0.2",
                transformOrigin: "366.315px 239.725px",
              }}
              className="animable"
              id="elp76ywmudvd"
            />
          </g>
          <path
            d="M357.21,215.37c3.91-5,1.43-8-.23-7.72-1.57.74-3.06,2.83-3.83,7.51a11.82,11.82,0,0,0-.08,3.34C354.68,218.42,357.21,215.37,357.21,215.37Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "356.142px 213.066px",
            }}
            id="el8em00dem0or"
            className="animable"
          />
          <path
            d="M373.6,226.4c10.83-19.05-10.56-21.27-14.92-17a18.55,18.55,0,0,0-3.67,4.72l-.91,1.79a27.36,27.36,0,0,0-1,2.59,30.63,30.63,0,0,0-1.7,9.83,11.44,11.44,0,0,0,11.7,11.49h0a11.54,11.54,0,0,0,5.89-1.94c.21-.14.4-.29.6-.43a13.66,13.66,0,0,0,3.59-3.78C375.4,230.08,374.82,228.27,373.6,226.4Z"
            style={{
              fill: "rgb(127, 62, 59)",
              transformOrigin: "364.013px 223.694px",
            }}
            id="eld3g1ulen6da"
            className="animable"
          />
          <path
            d="M353.55,215.32a.42.42,0,0,0,.07.58.43.43,0,0,0,.26.09.37.37,0,0,0,.22-.08.25.25,0,0,0,.1-.08,3.46,3.46,0,0,1,2.73-1.37.42.42,0,0,0,.44-.39.41.41,0,0,0-.38-.44,4.22,4.22,0,0,0-2,.49A4.58,4.58,0,0,0,353.55,215.32Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "355.418px 214.81px",
            }}
            id="elzeyid6czb"
            className="animable"
          />
          <path
            d="M364.37,227.3a.21.21,0,0,0-.29,0,5.87,5.87,0,0,1-5,1.24.21.21,0,0,0-.24.16.22.22,0,0,0,.16.25,6.85,6.85,0,0,0,1.45.13,6,6,0,0,0,3.89-1.48A.21.21,0,0,0,364.37,227.3Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "361.628px 228.161px",
            }}
            id="elhbehm9gosyl"
            className="animable"
          />
          <path
            d="M359,220.16a26.31,26.31,0,0,1-4.69,5.21c1,1.38,3.16,1.28,3.16,1.28Z"
            style={{
              fill: "rgb(99, 15, 15)",
              transformOrigin: "356.655px 223.406px",
            }}
            id="elzlj9ydsbwvs"
            className="animable"
          />
          <path
            d="M355.46,220.4c.45.09,1-.39,1.11-1.08s-.07-1.31-.52-1.4-.95.39-1.11,1.08S355,220.31,355.46,220.4Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "355.745px 219.16px",
            }}
            id="elrcq41yoakf"
            className="animable"
          />
          <path
            d="M363.28,222c.45.09.94-.39,1.11-1.08s-.08-1.31-.53-1.4-.95.39-1.11,1.08S362.82,221.87,363.28,222Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "363.571px 220.76px",
            }}
            id="elc1ka18und6e"
            className="animable"
          />
          <path
            d="M380.45,211.1c4.23-3.62-5.41-11-5.41-11s1.08,2.64-1.16,3.37-18-5.15-17.77,1.52a5.12,5.12,0,0,0,.87,2.63,7.6,7.6,0,0,0,1.7,1.75C362.34,212.15,369,213,372.6,213a18.54,18.54,0,0,0-1.19,4.34,11.55,11.55,0,0,0,2.19,9c2,3.48,4.67,3.38,6.95.73C384.21,223.61,387.74,216.6,380.45,211.1Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "370.405px 214.555px",
            }}
            id="elymjndxxkzu"
            className="animable"
          />
          <path
            d="M378.61,225.07c-1.66-.68-3.53.12-5,1.33a9.67,9.67,0,0,0-2.07,2.27c-1.41,2.21-.91,4.78,1.62,5l.44,0,.6,0a8.71,8.71,0,0,0,5.27-2.5,4.05,4.05,0,0,0,1.09-4A3.25,3.25,0,0,0,378.61,225.07Z"
            style={{
              fill: "rgb(127, 62, 59)",
              transformOrigin: "375.737px 229.245px",
            }}
            id="elpl7ye4ie998"
            className="animable"
          />
          <path
            d="M341.7,328.81s-.27,2.34-.69,6.27a75.91,75.91,0,0,0,47.29.44c.1-4.75.17-7.59.17-7.59l-29.7.56h-.58Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "364.74px 333.505px",
            }}
            id="eljotpgw9dpq"
            className="animable"
          />
          <path
            d="M419,288.54a9.9,9.9,0,0,0-.58-2.49,9.26,9.26,0,0,0-.51-1.16l-.29-.54-.16-.28c-1.43-2.46-3-4.79-4.6-7l-9.08,8.75c1.2,1.5,2.37,3,3.45,4.54a7.17,7.17,0,0,1-.77,1.45,33,33,0,0,1-5,5.51,147.39,147.39,0,0,1-12.29,9.93l-1.39.18-5.58.76-5.49,3.71,3.61,7.34,4.54-2.32a17.43,17.43,0,0,0,3.19-.75,6.82,6.82,0,0,0,3.93-2.78,83.26,83.26,0,0,0,7.79-3.56,77.34,77.34,0,0,0,7.9-4.69q1.93-1.32,3.82-2.89a29.3,29.3,0,0,0,3.7-3.63,16.68,16.68,0,0,0,3.26-5.57A10.72,10.72,0,0,0,419,288.54Zm-11.69,1.58c0-.05,0-.11,0-.15,0-.24.09-.33.09-.19A1.07,1.07,0,0,1,407.33,290.12Z"
            style={{
              fill: "rgb(127, 62, 59)",
              transformOrigin: "397.878px 298.155px",
            }}
            id="el9wfgg9pxvy"
            className="animable"
          />
          <g id="eluhd69k4tala">
            <circle
              cx="292.97"
              cy="313.69"
              r="27.45"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "292.97px 313.69px",
                transform: "rotate(-80.78deg)",
              }}
              className="animable"
              id="el826rp8wcxhr"
            />
          </g>
          <path
            d="M308.06,311.12H295.54V298.6a2.57,2.57,0,1,0-5.14,0v12.52H277.88a2.57,2.57,0,0,0,0,5.14H290.4v12.52a2.57,2.57,0,1,0,5.14,0V316.26h12.52a2.57,2.57,0,0,0,0-5.14Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "292.97px 313.69px",
            }}
            id="el5sof6a7zi9h"
            className="animable"
          />
          <path
            d="M364.77,216.76a3.16,3.16,0,0,1,2.28,1.86.42.42,0,0,0,.38.24.35.35,0,0,0,.17,0,.41.41,0,0,0,.2-.55,4,4,0,0,0-2.92-2.33.41.41,0,0,0-.11.82Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "366.126px 217.423px",
            }}
            id="el2a0o9k2rcvc"
            className="animable"
          />
        </g>
        <defs>
          {" "}
          <filter id="active" height="200%">
            {" "}
            <feMorphology
              in="SourceAlpha"
              result="DILATED"
              operator="dilate"
              radius={2}
            />{" "}
            <feFlood floodColor="#32DFEC" floodOpacity={1} result="PINK" />{" "}
            <feComposite
              in="PINK"
              in2="DILATED"
              operator="in"
              result="OUTLINE"
            />{" "}
            <feMerge>
              {" "}
              <feMergeNode in="OUTLINE" /> <feMergeNode in="SourceGraphic" />{" "}
            </feMerge>{" "}
          </filter>{" "}
          <filter id="hover" height="200%">
            {" "}
            <feMorphology
              in="SourceAlpha"
              result="DILATED"
              operator="dilate"
              radius={2}
            />{" "}
            <feFlood floodColor="#ff0000" floodOpacity="0.5" result="PINK" />{" "}
            <feComposite
              in="PINK"
              in2="DILATED"
              operator="in"
              result="OUTLINE"
            />{" "}
            <feMerge>
              {" "}
              <feMergeNode in="OUTLINE" /> <feMergeNode in="SourceGraphic" />{" "}
            </feMerge>{" "}
            <feColorMatrix
              type="matrix"
              values="0   0   0   0   0                0   1   0   0   0                0   0   0   0   0                0   0   0   1   0 "
            />{" "}
          </filter>
        </defs>
      </svg>
    </>
  );
}
function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}
