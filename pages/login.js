import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
const hcaptcha = process.env.NEXT_PUBLIC_HC_KEY;

export default function Home() {
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const router = useRouter();

  const [isSuccess, setIsSuccess] = useState();

  function getFormValues(event) {
    const data = new FormData(event.currentTarget);
    return Object.fromEntries(data.entries());
  }

  function useSubmit(fn) {
    return (event) => {
      event.preventDefault();

      const values = getFormValues(event);
      return fn(values);
    };
  }
  const onLoad = () => {};
  const handleSubmit = useSubmit((values) => {
    const { username, password } = values;
    const data = {
      username,
      password,
    };

    fetch("/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json(), setIsSuccess(true))
      .then(() => {
        router.push("/admin");
      })
      .catch((error) => {
        setIsSuccess(false);
      });
    router.push("/admin");
  });
  
  return (
    <>
      <Head>
        <title>Login | UODA</title>
        <meta name="description" content="UODA Computer Society" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "svg#freepik_stories-add-user:not(.animated) .animable {opacity: 0;}svg#freepik_stories-add-user.animated #freepik--background-simple--inject-231 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideRight;animation-delay: 0s;}svg#freepik_stories-add-user.animated #freepik--Shadow--inject-231 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) zoomOut;animation-delay: 0s;}svg#freepik_stories-add-user.animated #freepik--Window--inject-231 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideLeft;animation-delay: 0s;}svg#freepik_stories-add-user.animated #freepik--Character--inject-231 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideDown;animation-delay: 0s;}            @keyframes slideRight {                0% {                    opacity: 0;                    transform: translateX(30px);                }                100% {                    opacity: 1;                    transform: translateX(0);                }            }                    @keyframes zoomOut {                0% {                    opacity: 0;                    transform: scale(1.5);                }                100% {                    opacity: 1;                    transform: scale(1);                }            }                    @keyframes slideLeft {                0% {                    opacity: 0;                    transform: translateX(-30px);                }                100% {                    opacity: 1;                    transform: translateX(0);                }            }                    @keyframes slideDown {                0% {                    opacity: 0;                    transform: translateY(-30px);                }                100% {                    opacity: 1;                    transform: translateY(0);                }            }        ",
        }}
      />
      <Navbar />
      <Container className="flex w-full justify-center flex-wrap lg:gap-10 lg:flex-nowrap pt-20 pb-10 transition-all ease-in-out delay-150">
        <div className={`lg:w-7/12 w-full mt-4`}>
          <div className="flex flex-col justify-center items-center w-full h-full px-14 rounded-2xl py-10 bg-trueGray-800">
            <h1 className="text-4xl leading-normal text-center lg:pb-4">
              {isSuccess === true ? "✨ Successfully Login" : "🔒 Admin Login"}
            </h1>
            {isSuccess === true ? (
              <p className="text-center">Redirecting ....</p>
            ) : (
              ""
            )}
            <form
              className={`w-full ${isSuccess === true ? " hidden" : ""}`}
              onSubmit={handleSubmit}
              autoComplete={"off"}
            >
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="flex w-full h-full">
                  <AnimatedSVG />
                </div>
                <div className="lg:col-span-2">
                  <div
                    className="flex flex-col w-full mb-6 h-full justify-center items-center 
                "
                  >
                    <div className="mb-4 w-full">
                      <label
                        htmlFor="first_name"
                        className="block mb-2 text-sm font-medium text-gray-100"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                        placeholder="Username"
                        required={true}
                        ref={input => input && input.focus()}
                      />
                    </div>
                    <div className="mb-4 w-full">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-100"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white"
                        placeholder="•••••••••"
                        required={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between w-full">
                <div>
                  <HCaptcha
                    sitekey={hcaptcha}
                    onLoad={onLoad}
                    onVerify={setToken}
                    ref={captchaRef}
                    theme={"dark"}
                  />
                </div>
                {!token ? (
                  ""
                ) : (
                  <button
                    type="submit"
                    className={`text-white mt-10 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800`}
                  >
                    Login
                  </button>
                )}{" "}
              </div>
            </form>
            {isSuccess === false ? (
              <b className="text-red-300 mt-4 transition-all ease-in-out delay-150">
                🤦🏻‍♂️ Login Failed. Try Again.
              </b>
            ) : isSuccess === true ? (
              "Logged in successfully ..."
            ) : (
              ""
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
function AnimatedSVG() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "svg#freepik_stories-security-on:not(.animated) .animable {opacity: 0;}svg#freepik_stories-security-on.animated #freepik--Device--inject-95 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) zoomIn;animation-delay: 0s;}svg#freepik_stories-security-on.animated #freepik--character-2--inject-95 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) slideUp;animation-delay: 0s;}svg#freepik_stories-security-on.animated #freepik--character-1--inject-95 {animation: 1s 1 forwards cubic-bezier(.36,-0.01,.5,1.38) zoomOut;animation-delay: 0s;}            @keyframes zoomIn {                0% {                    opacity: 0;                    transform: scale(0.5);                }                100% {                    opacity: 1;                    transform: scale(1);                }            }                    @keyframes slideUp {                0% {                    opacity: 0;                    transform: translateY(30px);                }                100% {                    opacity: 1;                    transform: inherit;                }            }                    @keyframes zoomOut {                0% {                    opacity: 0;                    transform: scale(1.5);                }                100% {                    opacity: 1;                    transform: scale(1);                }            }        ",
        }}
      />
      <svg
        className="animated"
        id="freepik_stories-security-on"
        viewBox="0 0 500 500"
        version="1.1"
      >
        <g
          id="freepik--Device--inject-95"
          className="animable"
          style={{ transformOrigin: "247.6px 231.175px" }}
        >
          <polygon
            points="344.1 361.12 151.32 361.12 166.54 346.43 328.88 346.43 344.1 361.12"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "247.71px 353.775px",
            }}
            id="elquz8kck4fa"
            className="animable"
          />
          <path
            d="M322.68,352.1c0,3-34.91,5.47-78,5.47s-78-2.45-78-5.47,34.91-5.48,78-5.48S322.68,349.07,322.68,352.1Z"
            style={{
              fill: "rgb(67, 57, 202)",
              transformOrigin: "244.68px 352.095px",
            }}
            id="elv12wglavxvj"
            className="animable"
          />
          <g id="el8398t44xvuv">
            <path
              d="M322.68,352.1c0,3-34.91,5.47-78,5.47s-78-2.45-78-5.47,34.91-5.48,78-5.48S322.68,349.07,322.68,352.1Z"
              style={{
                fill: "rgb(255, 255, 255)",
                opacity: "0.5",
                transformOrigin: "244.68px 352.095px",
              }}
              className="animable"
            />
          </g>
          <rect
            x="151.32"
            y="361.12"
            width="192.78"
            height="13.61"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "247.71px 367.925px",
            }}
            id="el4837iby7u98"
            className="animable"
          />
          <polygon
            points="357.74 389.41 137.68 389.41 151.32 374.73 344.1 374.73 357.74 389.41"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "247.71px 382.07px",
            }}
            id="el0lb3dhjgfzin"
            className="animable"
          />
          <rect
            x="137.72"
            y="389.41"
            width="219.98"
            height="14.32"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "247.71px 396.57px",
            }}
            id="elvxwln6yvhbd"
            className="animable"
          />
          <polyline
            points="245.58 215.93 245.58 124.4 280.41 124.4 280.41 85.89"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "262.995px 150.91px",
            }}
            id="elhhjbj6pui68"
            className="animable"
          />
          <line
            x1="259.19"
            y1="123.97"
            x2="259.19"
            y2="85.89"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "259.19px 104.93px",
            }}
            id="el3o4amkagwrj"
            className="animable"
          />
          <polyline
            points="248.18 230.52 408.54 230.52 408.54 207.72 439.19 207.72"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "343.685px 219.12px",
            }}
            id="els05rs6c67cf"
            className="animable"
          />
          <polyline
            points="240.32 229.73 87.83 229.73 87.83 205.37 54.82 205.37"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "147.57px 217.55px",
            }}
            id="ellm1kqpy1rf"
            className="animable"
          />
          <polyline
            points="214.38 61.52 214.38 96.11 194.73 96.11 194.73 118.11 219.1 118.11 219.1 192"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "206.915px 126.76px",
            }}
            id="el9iu4yh1tdw"
            className="animable"
          />
          <polyline
            points="322.07 163.7 322.07 114.18 335.43 114.18 335.43 92.96 346.44 92.96"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "334.255px 128.33px",
            }}
            id="elepszdcg0ief"
            className="animable"
          />
          <polyline
            points="160.15 158.99 160.15 121.26 149.14 110.25 149.14 82.74"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "154.645px 120.865px",
            }}
            id="el5vgoi5gqsfy"
            className="animable"
          />
          <polyline
            points="351.94 181 379.45 181 379.45 162.92 397.53 162.92 397.53 152.7 413.25 152.7"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "382.595px 166.85px",
            }}
            id="elzmoao3infr"
            className="animable"
          />
          <polyline
            points="132.63 187.29 103.55 187.29 103.55 164.49 62.68 164.49"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "97.655px 175.89px",
            }}
            id="elbib6wwpysgm"
            className="animable"
          />
          <polyline
            points="159.36 310.69 159.36 331.13 146 331.13 146 353.93 107.48 353.93"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "133.42px 332.31px",
            }}
            id="elwe5kuyym1jb"
            className="animable"
          />
          <polyline
            points="306.35 313.84 306.35 335.06 337 335.06 337 326.42 345.65 326.42 345.65 344.49 372.38 344.49"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "339.365px 329.165px",
            }}
            id="elwx60gr6d979"
            className="animable"
          />
          <path
            d="M282.65,85.89a2.24,2.24,0,1,1-2.24-2.25A2.24,2.24,0,0,1,282.65,85.89Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "280.41px 85.88px",
            }}
            id="el8jckwdztbod"
            className="animable"
          />
          <path
            d="M261.51,85.89a2.24,2.24,0,1,1-2.24-2.25A2.24,2.24,0,0,1,261.51,85.89Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "259.27px 85.88px",
            }}
            id="elhdyvbxcn55t"
            className="animable"
          />
          <path
            d="M216.64,60.87a2.25,2.25,0,1,1-2.24-2.25A2.24,2.24,0,0,1,216.64,60.87Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "214.39px 60.87px",
            }}
            id="elhk366rfxccr"
            className="animable"
          />
          <path
            d="M151.4,81.61a2.24,2.24,0,1,1-2.24-2.25A2.24,2.24,0,0,1,151.4,81.61Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "149.16px 81.6px",
            }}
            id="el3p9rmnj3vtm"
            className="animable"
          />
          <path
            d="M64.92,164.49a2.25,2.25,0,1,1-2.24-2.24A2.24,2.24,0,0,1,64.92,164.49Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "62.67px 164.5px",
            }}
            id="el8plg9hgihy5"
            className="animable"
          />
          <path
            d="M57.13,205.3a2.25,2.25,0,1,1-2.25-2.25A2.25,2.25,0,0,1,57.13,205.3Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "54.88px 205.3px",
            }}
            id="elg6otee3mg49"
            className="animable"
          />
          <path
            d="M109.92,353.5a2.25,2.25,0,1,1-2.24-2.25A2.24,2.24,0,0,1,109.92,353.5Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "107.67px 353.5px",
            }}
            id="el8jsfsloi1df"
            className="animable"
          />
          <path
            d="M375.76,344.05a2.25,2.25,0,1,1-2.25-2.24A2.24,2.24,0,0,1,375.76,344.05Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "373.51px 344.06px",
            }}
            id="el2dsbvdimj9e"
            className="animable"
          />
          <path
            d="M442.57,207.28a2.24,2.24,0,1,1-2.24-2.24A2.24,2.24,0,0,1,442.57,207.28Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "440.33px 207.28px",
            }}
            id="eleddebcsc3oc"
            className="animable"
          />
          <path
            d="M416.55,152.22a2.24,2.24,0,1,1-2.24-2.24A2.24,2.24,0,0,1,416.55,152.22Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "414.31px 152.22px",
            }}
            id="elj828t0jv21q"
            className="animable"
          />
          <path
            d="M350.13,92.9a2.24,2.24,0,1,1-2.24-2.24A2.24,2.24,0,0,1,350.13,92.9Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "347.89px 92.9px",
            }}
            id="eltbwghmvcqib"
            className="animable"
          />
          <path
            d="M274.92,330.5V311H216.24v19.5A27.88,27.88,0,0,1,210,348l-2.57,3.18h76.28L281.15,348A27.83,27.83,0,0,1,274.92,330.5Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "245.57px 331.09px",
            }}
            id="elcxjyz6mon8m"
            className="animable"
          />
          <g
            style={{
              clipPath: 'url("#freepik--clip-path--inject-95")',
              transformOrigin: "245.58px 317.3px",
            }}
            id="elr5zz1j9e1wr"
            className="animable"
          >
            <path
              d="M212.64,344.16h65.88a27.77,27.77,0,0,1-3.6-13.66V311H216.24v19.5A27.77,27.77,0,0,1,212.64,344.16Z"
              style={{
                fill: "rgb(67, 57, 202)",
                transformOrigin: "245.58px 327.58px",
              }}
              id="el2wfoyuvozun"
              className="animable"
            />
            <g id="el9wqr6dq9hps">
              <path
                d="M212.64,344.16h65.88a27.77,27.77,0,0,1-3.6-13.66V311H216.24v19.5A27.77,27.77,0,0,1,212.64,344.16Z"
                style={{
                  fill: "rgb(255, 255, 255)",
                  opacity: "0.3",
                  transformOrigin: "245.58px 327.58px",
                }}
                className="animable"
              />
            </g>
            <path
              d="M212.64,323.6h65.88a27.77,27.77,0,0,1-3.6-13.66v-19.5H216.24v19.5A27.77,27.77,0,0,1,212.64,323.6Z"
              style={{
                fill: "rgb(38, 50, 56)",
                transformOrigin: "245.58px 307.02px",
              }}
              id="eltb2apvowgu"
              className="animable"
            />
          </g>
          <path
            d="M274.92,330.5V311H216.24v19.5A27.88,27.88,0,0,1,210,348l-2.57,3.18h76.28L281.15,348A27.83,27.83,0,0,1,274.92,330.5Z"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.57px 331.09px",
            }}
            id="elwd43d88qobl"
            className="animable"
          />
          <rect
            x="127.67"
            y="143.99"
            width="235.82"
            height="173.15"
            rx="8.48"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.58px 230.565px",
            }}
            id="elh7ono513fg"
            className="animable"
          />
          <path
            d="M127.67,290.23H363.49a0,0,0,0,1,0,0v18.43a8.48,8.48,0,0,1-8.48,8.48H136.15a8.48,8.48,0,0,1-8.48-8.48V290.23a0,0,0,0,1,0,0Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.58px 303.685px",
            }}
            id="elve20orcp4pp"
            className="animable"
          />
          <rect
            x="139.53"
            y="154.77"
            width="212.09"
            height="122.33"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.575px 215.935px",
            }}
            id="elm0nu3nzxp1k"
            className="animable"
          />
          <path
            d="M249.93,308a4.35,4.35,0,1,0-4.35,4.26A4.31,4.31,0,0,0,249.93,308Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.581px 307.91px",
            }}
            id="el1l37azzejjb"
            className="animable"
          />
          <rect
            x="207.44"
            y="351.21"
            width="76.29"
            height="3.48"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.585px 352.95px",
            }}
            id="el0rd4wxehbued"
            className="animable"
          />
          <path
            d="M245.9,148.42c-10.66,10-38,20-69.81,41.29,0,0,2,72,69.81,111.31Z"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "210.995px 224.72px",
            }}
            id="elqxpqljxmd18"
            className="animable"
          />
          <path
            d="M245.9,148.42c10.67,10,38,20,69.82,41.29,0,0-2,72-69.82,111.31Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "280.81px 224.72px",
            }}
            id="elg9c6d2capt5"
            className="animable"
          />
          <path
            d="M245.9,154.55C233,163.49,210.71,172,181.21,191.74c0,0,1.85,66.7,64.69,103.16,62.85-36.46,64.7-103.16,64.7-103.16C281.1,172,258.88,163.49,245.9,154.55Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.905px 224.725px",
            }}
            id="elqp7hbahiu6o"
            className="animable"
          />
          <path
            d="M310.6,191.74c-29.5-19.73-51.72-28.25-64.7-37.19V294.9C308.75,258.44,310.6,191.74,310.6,191.74Z"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "278.25px 224.725px",
            }}
            id="elaozeucztitn"
            className="animable"
          />
          <rect
            x="126.94"
            y="227.05"
            width="237.28"
            height="15.36"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.58px 234.73px",
            }}
            id="el25aue4e9sl1"
            className="animable"
          />
          <path
            d="M131.61,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,131.61,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "130.02px 229.52px",
            }}
            id="elrach83iz1yo"
            className="animable"
          />
          <path
            d="M129.11,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A18.37,18.37,0,0,0,129.11,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "130.205px 229.712px",
            }}
            id="elwnjvkf41el"
            className="animable"
          />
          <path
            d="M137.85,229.49a1.6,1.6,0,1,1-1.6-1.56A1.58,1.58,0,0,1,137.85,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "136.25px 229.53px",
            }}
            id="elsdvu3fmdz5g"
            className="animable"
          />
          <path
            d="M135.34,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A19.51,19.51,0,0,0,135.34,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "136.435px 229.712px",
            }}
            id="elxhiwpntosn"
            className="animable"
          />
          <path
            d="M144.08,229.49a1.6,1.6,0,0,1-3.19,0,1.6,1.6,0,0,1,3.19,0Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "142.485px 229.49px",
            }}
            id="elks00wxf32u"
            className="animable"
          />
          <path
            d="M141.57,230.35a1.28,1.28,0,0,0,.92.39,1.26,1.26,0,0,0,1.27-1.25,1.18,1.18,0,0,0-.32-.81A19.51,19.51,0,0,0,141.57,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "142.665px 229.71px",
            }}
            id="el5upfgm3w98b"
            className="animable"
          />
          <path
            d="M150.31,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,150.31,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "148.72px 229.52px",
            }}
            id="elwdan7uk2isp"
            className="animable"
          />
          <path
            d="M147.8,230.35a1.28,1.28,0,0,0,2.2-.86,1.22,1.22,0,0,0-.32-.81A18.53,18.53,0,0,0,147.8,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "148.9px 229.71px",
            }}
            id="elilw89ifdct"
            className="animable"
          />
          <path
            d="M156.54,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,156.54,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "154.95px 229.52px",
            }}
            id="elbb8m41kpg8j"
            className="animable"
          />
          <path
            d="M154,230.35a1.29,1.29,0,0,0,.92.39,1.26,1.26,0,0,0,1.28-1.25,1.22,1.22,0,0,0-.32-.81A19.68,19.68,0,0,0,154,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "155.1px 229.71px",
            }}
            id="eloiugryz3y0b"
            className="animable"
          />
          <path
            d="M162.77,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,162.77,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "161.18px 229.52px",
            }}
            id="el6ffknnf6mlg"
            className="animable"
          />
          <path
            d="M160.27,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A18.37,18.37,0,0,0,160.27,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "161.365px 229.712px",
            }}
            id="elg09wjolupho"
            className="animable"
          />
          <path
            d="M169,229.49a1.6,1.6,0,1,1-1.6-1.56A1.58,1.58,0,0,1,169,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "167.401px 229.53px",
            }}
            id="elbez2cc9l5ze"
            className="animable"
          />
          <path
            d="M166.5,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A19.51,19.51,0,0,0,166.5,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "167.595px 229.712px",
            }}
            id="el2eiep0tzmjx"
            className="animable"
          />
          <path
            d="M175.24,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,175.24,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "173.65px 229.52px",
            }}
            id="elqtvv26tot9q"
            className="animable"
          />
          <path
            d="M172.73,230.35a1.28,1.28,0,0,0,.92.39,1.26,1.26,0,0,0,1.27-1.25,1.18,1.18,0,0,0-.32-.81A19.51,19.51,0,0,0,172.73,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "173.825px 229.71px",
            }}
            id="el7x7hm550gxq"
            className="animable"
          />
          <path
            d="M181.47,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,181.47,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "179.88px 229.52px",
            }}
            id="ellorg324688e"
            className="animable"
          />
          <path
            d="M179,230.35a1.28,1.28,0,0,0,2.2-.86,1.22,1.22,0,0,0-.32-.81A19.68,19.68,0,0,0,179,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "180.1px 229.71px",
            }}
            id="elfe18eqmlrpp"
            className="animable"
          />
          <path
            d="M187.7,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,187.7,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "186.11px 229.52px",
            }}
            id="ele6qpoj88t77"
            className="animable"
          />
          <path
            d="M185.19,230.35a1.29,1.29,0,0,0,.92.39,1.26,1.26,0,0,0,1.28-1.25,1.22,1.22,0,0,0-.32-.81A19.68,19.68,0,0,0,185.19,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "186.29px 229.71px",
            }}
            id="el4qphcyegna"
            className="animable"
          />
          <path
            d="M193.93,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,193.93,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "192.34px 229.52px",
            }}
            id="el2mcwe7w2o8s"
            className="animable"
          />
          <path
            d="M191.43,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A19.51,19.51,0,0,0,191.43,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "192.525px 229.712px",
            }}
            id="elzonfz0p1b8b"
            className="animable"
          />
          <path
            d="M200.17,229.49a1.6,1.6,0,1,1-1.59-1.56A1.57,1.57,0,0,1,200.17,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "198.57px 229.53px",
            }}
            id="el3vn0wmuqoeu"
            className="animable"
          />
          <path
            d="M197.66,230.35a1.27,1.27,0,0,0,2.19-.86,1.18,1.18,0,0,0-.32-.81A19.51,19.51,0,0,0,197.66,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "198.755px 229.712px",
            }}
            id="elt1jd4h4v09m"
            className="animable"
          />
          <path
            d="M206.4,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,206.4,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "204.81px 229.52px",
            }}
            id="elq7j0gvr3r7c"
            className="animable"
          />
          <path
            d="M203.89,230.35a1.28,1.28,0,0,0,2.2-.86,1.22,1.22,0,0,0-.32-.81A18.53,18.53,0,0,0,203.89,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "204.99px 229.71px",
            }}
            id="elx1xr398u1w"
            className="animable"
          />
          <path
            d="M212.63,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,212.63,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "211.04px 229.52px",
            }}
            id="el3lgehhu6vx"
            className="animable"
          />
          <path
            d="M210.12,230.35a1.29,1.29,0,0,0,.92.39,1.26,1.26,0,0,0,1.28-1.25,1.22,1.22,0,0,0-.32-.81A19.68,19.68,0,0,0,210.12,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "211.22px 229.71px",
            }}
            id="elmis079h61p"
            className="animable"
          />
          <path
            d="M131.61,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,131.61,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "130.021px 239.44px",
            }}
            id="elo43j4z9xqeg"
            className="animable"
          />
          <path
            d="M129.11,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A18.37,18.37,0,0,0,129.11,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "130.205px 239.63px",
            }}
            id="el36aghghu2b2"
            className="animable"
          />
          <path
            d="M137.85,239.4a1.6,1.6,0,1,1-1.6-1.55A1.58,1.58,0,0,1,137.85,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "136.251px 239.45px",
            }}
            id="el491b84hqwit"
            className="animable"
          />
          <path
            d="M135.34,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.51,19.51,0,0,0,135.34,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "136.435px 239.63px",
            }}
            id="eljk8o40rj1fi"
            className="animable"
          />
          <path
            d="M144.08,239.4a1.6,1.6,0,1,1-1.59-1.55A1.57,1.57,0,0,1,144.08,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "142.481px 239.45px",
            }}
            id="elsqn115mrya"
            className="animable"
          />
          <path
            d="M141.57,240.27a1.27,1.27,0,0,0,2.19-.87,1.17,1.17,0,0,0-.32-.8A19.51,19.51,0,0,0,141.57,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "142.665px 239.632px",
            }}
            id="el4baua0pr0yg"
            className="animable"
          />
          <path
            d="M150.31,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,150.31,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "148.721px 239.44px",
            }}
            id="elys92ojnhqra"
            className="animable"
          />
          <path
            d="M147.8,240.27a1.28,1.28,0,0,0,2.2-.87,1.22,1.22,0,0,0-.32-.8A18.53,18.53,0,0,0,147.8,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "148.9px 239.63px",
            }}
            id="elrumw7vrmozi"
            className="animable"
          />
          <path
            d="M156.54,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,156.54,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "154.95px 239.44px",
            }}
            id="el787krbbe9ul"
            className="animable"
          />
          <path
            d="M154,240.27a1.29,1.29,0,0,0,.92.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.68,19.68,0,0,0,154,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "155.1px 239.63px",
            }}
            id="elen1a3t776ze"
            className="animable"
          />
          <path
            d="M162.77,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,162.77,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "161.181px 239.44px",
            }}
            id="elo4701vg2bh9"
            className="animable"
          />
          <path
            d="M160.27,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A18.37,18.37,0,0,0,160.27,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "161.365px 239.63px",
            }}
            id="el6wgk64wwb"
            className="animable"
          />
          <path
            d="M169,239.4a1.6,1.6,0,1,1-1.6-1.55A1.58,1.58,0,0,1,169,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "167.401px 239.45px",
            }}
            id="elsei2a9k6eff"
            className="animable"
          />
          <path
            d="M166.5,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.51,19.51,0,0,0,166.5,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "167.595px 239.63px",
            }}
            id="el9b0tghqwdp"
            className="animable"
          />
          <path
            d="M175.24,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,175.24,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "173.651px 239.44px",
            }}
            id="el7swm5lpmoq5"
            className="animable"
          />
          <path
            d="M172.73,240.27a1.27,1.27,0,0,0,2.19-.87,1.17,1.17,0,0,0-.32-.8A19.51,19.51,0,0,0,172.73,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "173.825px 239.632px",
            }}
            id="elqtptz4ozfrg"
            className="animable"
          />
          <path
            d="M181.47,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,181.47,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "179.881px 239.44px",
            }}
            id="elm2ybtltlmdq"
            className="animable"
          />
          <path
            d="M179,240.27a1.28,1.28,0,0,0,2.2-.87,1.22,1.22,0,0,0-.32-.8A19.68,19.68,0,0,0,179,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "180.1px 239.63px",
            }}
            id="elsvyo4oh1mx"
            className="animable"
          />
          <path
            d="M187.7,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,187.7,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "186.111px 239.44px",
            }}
            id="els5z59ypzha"
            className="animable"
          />
          <path
            d="M185.19,240.27a1.29,1.29,0,0,0,.92.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.68,19.68,0,0,0,185.19,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "186.29px 239.63px",
            }}
            id="ele1voqmqb9pm"
            className="animable"
          />
          <path
            d="M193.93,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,193.93,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "192.34px 239.44px",
            }}
            id="elcg5lprdbm96"
            className="animable"
          />
          <path
            d="M191.43,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.51,19.51,0,0,0,191.43,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "192.525px 239.63px",
            }}
            id="el8pkluvudzkk"
            className="animable"
          />
          <path
            d="M200.17,239.4a1.6,1.6,0,1,1-1.59-1.55A1.57,1.57,0,0,1,200.17,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "198.571px 239.45px",
            }}
            id="el1eyj6bkre1y"
            className="animable"
          />
          <path
            d="M197.66,240.27a1.27,1.27,0,0,0,2.19-.87,1.17,1.17,0,0,0-.32-.8A19.51,19.51,0,0,0,197.66,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "198.755px 239.632px",
            }}
            id="elf7e47kk9uu"
            className="animable"
          />
          <path
            d="M206.4,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,206.4,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "204.811px 239.44px",
            }}
            id="elscrutx8gimr"
            className="animable"
          />
          <path
            d="M203.89,240.27a1.28,1.28,0,0,0,2.2-.87,1.22,1.22,0,0,0-.32-.8A18.53,18.53,0,0,0,203.89,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "204.99px 239.63px",
            }}
            id="el7v3e4d5dbl9"
            className="animable"
          />
          <path
            d="M212.63,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,212.63,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "211.04px 239.44px",
            }}
            id="elpt7v4exyb6"
            className="animable"
          />
          <path
            d="M210.12,240.27a1.29,1.29,0,0,0,.92.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.68,19.68,0,0,0,210.12,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "211.22px 239.63px",
            }}
            id="eljorr8nkngns"
            className="animable"
          />
          <path
            d="M281.68,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,281.68,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "280.09px 229.52px",
            }}
            id="elehib6cg62he"
            className="animable"
          />
          <path
            d="M279.18,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A19.51,19.51,0,0,0,279.18,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "280.275px 229.712px",
            }}
            id="elvwjlv8z4tzj"
            className="animable"
          />
          <path
            d="M287.92,229.49a1.6,1.6,0,1,1-1.59-1.56A1.57,1.57,0,0,1,287.92,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "286.321px 229.53px",
            }}
            id="elo7xmrhu24oh"
            className="animable"
          />
          <path
            d="M285.41,230.35a1.27,1.27,0,0,0,2.19-.86,1.18,1.18,0,0,0-.32-.81A19.51,19.51,0,0,0,285.41,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "286.505px 229.712px",
            }}
            id="el966nupuyhc6"
            className="animable"
          />
          <path
            d="M294.15,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,294.15,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "292.56px 229.52px",
            }}
            id="elw5z18zvfht"
            className="animable"
          />
          <path
            d="M291.64,230.35a1.28,1.28,0,0,0,2.2-.86,1.22,1.22,0,0,0-.32-.81A18.53,18.53,0,0,0,291.64,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "292.74px 229.71px",
            }}
            id="elo45lf36cjr"
            className="animable"
          />
          <path
            d="M300.38,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,300.38,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "298.79px 229.52px",
            }}
            id="elzt9a2zz6jq"
            className="animable"
          />
          <path
            d="M297.87,230.35a1.29,1.29,0,0,0,.92.39,1.26,1.26,0,0,0,1.28-1.25,1.22,1.22,0,0,0-.32-.81A19.68,19.68,0,0,0,297.87,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "298.97px 229.71px",
            }}
            id="el8w4d7p9h8lb"
            className="animable"
          />
          <path
            d="M306.61,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,306.61,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "305.02px 229.52px",
            }}
            id="elana5d14sg6"
            className="animable"
          />
          <path
            d="M304.11,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A18.37,18.37,0,0,0,304.11,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "305.205px 229.712px",
            }}
            id="elk5wxoqmplpg"
            className="animable"
          />
          <path
            d="M312.85,229.49a1.6,1.6,0,1,1-1.6-1.56A1.58,1.58,0,0,1,312.85,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "311.25px 229.53px",
            }}
            id="el4or18wlrxys"
            className="animable"
          />
          <path
            d="M310.34,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A19.51,19.51,0,0,0,310.34,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "311.435px 229.712px",
            }}
            id="elcjqa3l2z0nm"
            className="animable"
          />
          <path
            d="M319.08,229.49a1.6,1.6,0,1,1-1.59-1.56A1.57,1.57,0,0,1,319.08,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "317.48px 229.53px",
            }}
            id="elqckewe98tqo"
            className="animable"
          />
          <path
            d="M316.57,230.35a1.27,1.27,0,0,0,2.19-.86,1.18,1.18,0,0,0-.32-.81A19.51,19.51,0,0,0,316.57,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "317.665px 229.712px",
            }}
            id="eltpwqjzqrmlj"
            className="animable"
          />
          <path
            d="M325.31,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,325.31,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "323.72px 229.52px",
            }}
            id="elgpjdb4x01xe"
            className="animable"
          />
          <path
            d="M322.8,230.35a1.28,1.28,0,0,0,2.2-.86,1.22,1.22,0,0,0-.32-.81A18.53,18.53,0,0,0,322.8,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "323.9px 229.71px",
            }}
            id="elsbutmypo3m"
            className="animable"
          />
          <path
            d="M331.54,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,331.54,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "329.95px 229.52px",
            }}
            id="elze7um3mrwij"
            className="animable"
          />
          <path
            d="M329,230.35a1.29,1.29,0,0,0,.92.39,1.26,1.26,0,0,0,1.28-1.25,1.22,1.22,0,0,0-.32-.81A19.68,19.68,0,0,0,329,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "330.1px 229.71px",
            }}
            id="el53nh9md1c"
            className="animable"
          />
          <path
            d="M337.77,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,337.77,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "336.18px 229.52px",
            }}
            id="elelyq5synzje"
            className="animable"
          />
          <path
            d="M335.27,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A18.37,18.37,0,0,0,335.27,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "336.365px 229.712px",
            }}
            id="elw5ujzo9pttr"
            className="animable"
          />
          <path
            d="M344,229.49a1.6,1.6,0,1,1-1.6-1.56A1.58,1.58,0,0,1,344,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "342.4px 229.53px",
            }}
            id="elxoxlnwqfhsd"
            className="animable"
          />
          <path
            d="M341.5,230.35a1.27,1.27,0,0,0,2.19-.86,1.22,1.22,0,0,0-.32-.81A19.51,19.51,0,0,0,341.5,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "342.595px 229.712px",
            }}
            id="el1z3qxsvac02"
            className="animable"
          />
          <path
            d="M350.24,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,350.24,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "348.65px 229.52px",
            }}
            id="elx9i08ae482s"
            className="animable"
          />
          <path
            d="M347.73,230.35a1.28,1.28,0,0,0,.92.39,1.26,1.26,0,0,0,1.27-1.25,1.18,1.18,0,0,0-.32-.81A19.51,19.51,0,0,0,347.73,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "348.825px 229.71px",
            }}
            id="el1n3fd2t98dm"
            className="animable"
          />
          <path
            d="M356.47,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,356.47,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "354.88px 229.52px",
            }}
            id="elnpakcftn9yo"
            className="animable"
          />
          <path
            d="M354,230.35a1.28,1.28,0,0,0,2.2-.86,1.22,1.22,0,0,0-.32-.81A19.68,19.68,0,0,0,354,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "355.1px 229.71px",
            }}
            id="el8x9kxc2ls83"
            className="animable"
          />
          <path
            d="M362.7,229.49a1.59,1.59,0,1,1-1.59-1.56A1.57,1.57,0,0,1,362.7,229.49Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "361.11px 229.52px",
            }}
            id="elmul6ucgdx7g"
            className="animable"
          />
          <path
            d="M360.19,230.35a1.29,1.29,0,0,0,.92.39,1.26,1.26,0,0,0,1.28-1.25,1.22,1.22,0,0,0-.32-.81A19.68,19.68,0,0,0,360.19,230.35Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "361.29px 229.71px",
            }}
            id="el5xrq7teitv6"
            className="animable"
          />
          <path
            d="M281.68,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,281.68,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "280.09px 239.44px",
            }}
            id="elfrs7qmmimxn"
            className="animable"
          />
          <path
            d="M279.18,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.51,19.51,0,0,0,279.18,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "280.275px 239.63px",
            }}
            id="el33s5urruseq"
            className="animable"
          />
          <path
            d="M287.92,239.4a1.6,1.6,0,1,1-1.59-1.55A1.57,1.57,0,0,1,287.92,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "286.321px 239.45px",
            }}
            id="elo60ea3regw"
            className="animable"
          />
          <path
            d="M285.41,240.27a1.27,1.27,0,0,0,2.19-.87,1.17,1.17,0,0,0-.32-.8A19.51,19.51,0,0,0,285.41,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "286.505px 239.632px",
            }}
            id="elzrc8slhdw9"
            className="animable"
          />
          <path
            d="M294.15,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,294.15,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "292.561px 239.44px",
            }}
            id="elzdu4c7n9l5q"
            className="animable"
          />
          <path
            d="M291.64,240.27a1.28,1.28,0,0,0,2.2-.87,1.22,1.22,0,0,0-.32-.8A18.53,18.53,0,0,0,291.64,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "292.74px 239.63px",
            }}
            id="ele2lw774uj57"
            className="animable"
          />
          <path
            d="M300.38,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,300.38,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "298.791px 239.44px",
            }}
            id="elsfi4cmnq6di"
            className="animable"
          />
          <path
            d="M297.87,240.27a1.29,1.29,0,0,0,.92.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.68,19.68,0,0,0,297.87,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "298.97px 239.63px",
            }}
            id="elmdk7jt85re"
            className="animable"
          />
          <path
            d="M306.61,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,306.61,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "305.02px 239.44px",
            }}
            id="elo01ilema6oi"
            className="animable"
          />
          <path
            d="M304.11,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A18.37,18.37,0,0,0,304.11,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "305.205px 239.63px",
            }}
            id="elnbtjavkt0g"
            className="animable"
          />
          <path
            d="M312.85,239.4a1.6,1.6,0,1,1-1.6-1.55A1.58,1.58,0,0,1,312.85,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "311.251px 239.45px",
            }}
            id="el85ikolmihv2"
            className="animable"
          />
          <path
            d="M310.34,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.51,19.51,0,0,0,310.34,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "311.435px 239.63px",
            }}
            id="elol8g7na6ij"
            className="animable"
          />
          <path
            d="M319.08,239.4a1.6,1.6,0,1,1-1.59-1.55A1.57,1.57,0,0,1,319.08,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "317.481px 239.45px",
            }}
            id="el6bazekve0xc"
            className="animable"
          />
          <path
            d="M316.57,240.27a1.27,1.27,0,0,0,2.19-.87,1.17,1.17,0,0,0-.32-.8A19.51,19.51,0,0,0,316.57,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "317.665px 239.632px",
            }}
            id="eli7v73nu0d7d"
            className="animable"
          />
          <path
            d="M325.31,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,325.31,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "323.72px 239.44px",
            }}
            id="elbcpa7k9ojx5"
            className="animable"
          />
          <path
            d="M322.8,240.27a1.28,1.28,0,0,0,2.2-.87,1.22,1.22,0,0,0-.32-.8A18.53,18.53,0,0,0,322.8,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "323.9px 239.63px",
            }}
            id="elfa8h1jdunn"
            className="animable"
          />
          <path
            d="M331.54,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,331.54,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "329.951px 239.44px",
            }}
            id="elb3ph5jgr0di"
            className="animable"
          />
          <path
            d="M329,240.27a1.29,1.29,0,0,0,.92.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.68,19.68,0,0,0,329,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "330.1px 239.63px",
            }}
            id="elon2ak1j4oen"
            className="animable"
          />
          <path
            d="M337.77,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,337.77,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "336.181px 239.44px",
            }}
            id="elz0sryrdyiq"
            className="animable"
          />
          <path
            d="M335.27,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A18.37,18.37,0,0,0,335.27,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "336.365px 239.63px",
            }}
            id="el8jhjcgclw7p"
            className="animable"
          />
          <path
            d="M344,239.4a1.6,1.6,0,1,1-1.6-1.55A1.58,1.58,0,0,1,344,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "342.401px 239.45px",
            }}
            id="ellzeehcw7h3d"
            className="animable"
          />
          <path
            d="M341.5,240.27a1.25,1.25,0,0,0,.91.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.51,19.51,0,0,0,341.5,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "342.595px 239.63px",
            }}
            id="elceghsmcnqq"
            className="animable"
          />
          <path
            d="M350.24,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,350.24,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "348.65px 239.44px",
            }}
            id="elbn6h8ti7czv"
            className="animable"
          />
          <path
            d="M347.73,240.27a1.27,1.27,0,0,0,2.19-.87,1.17,1.17,0,0,0-.32-.8A19.51,19.51,0,0,0,347.73,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "348.825px 239.632px",
            }}
            id="el3l2zarsl6xs"
            className="animable"
          />
          <path
            d="M356.47,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,356.47,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "354.88px 239.44px",
            }}
            id="elahxug2xr6y5"
            className="animable"
          />
          <path
            d="M354,240.27a1.28,1.28,0,0,0,2.2-.87,1.22,1.22,0,0,0-.32-.8A19.68,19.68,0,0,0,354,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "355.1px 239.63px",
            }}
            id="el4tp4l62na8p"
            className="animable"
          />
          <path
            d="M362.7,239.4a1.59,1.59,0,1,1-1.59-1.55A1.57,1.57,0,0,1,362.7,239.4Z"
            style={{
              fill: "rgb(255, 255, 255)",
              transformOrigin: "361.111px 239.44px",
            }}
            id="elsrhz5asmxum"
            className="animable"
          />
          <path
            d="M360.19,240.27a1.29,1.29,0,0,0,.92.39,1.27,1.27,0,0,0,1.28-1.26,1.22,1.22,0,0,0-.32-.8A19.68,19.68,0,0,0,360.19,240.27Z"
            style={{
              fill: "rgb(38, 50, 56)",
              transformOrigin: "361.29px 239.63px",
            }}
            id="els0mbk7ide2r"
            className="animable"
          />
          <path
            d="M270.41,221.8H222.2a4,4,0,0,1-4-3.92V195.64c0-15.17,12.61-27.52,28.11-27.52s28.12,12.35,28.12,27.52v22.24A4,4,0,0,1,270.41,221.8ZM226.2,214h40.2V195.64a20.1,20.1,0,0,0-40.2,0Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "246.315px 194.96px",
            }}
            id="elzddchsompoo"
            className="animable"
          />
          <rect
            x="215.21"
            y="211.08"
            width="61.38"
            height="50.78"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.9px 236.47px",
            }}
            id="el920uqzdiu1t"
            className="animable"
          />
          <path
            d="M252.29,232.17a6.69,6.69,0,0,0-13.37,0,6.53,6.53,0,0,0,3.51,5.76l-1.12,11.53h8.59l-1.12-11.53A6.53,6.53,0,0,0,252.29,232.17Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "245.605px 237.599px",
            }}
            id="els9yho1s0ar"
            className="animable"
          />
        </g>
        <g
          id="freepik--character-2--inject-95"
          className="animable"
          style={{ transformOrigin: "387.48px 320.694px" }}
        >
          <ellipse
            cx="384.5"
            cy="426.5"
            rx="47.5"
            ry="10.5"
            style={{
              fill: "rgb(67, 57, 202)",
              transformOrigin: "384.5px 426.5px",
            }}
            id="elyjgtb4347yb"
            className="animable"
          />
          <g id="els0rmqo682bc">
            <ellipse
              cx="384.5"
              cy="426.5"
              rx="47.5"
              ry="10.5"
              style={{
                fill: "rgb(255, 255, 255)",
                opacity: "0.5",
                transformOrigin: "384.5px 426.5px",
              }}
              className="animable"
            />
          </g>
          <path
            d="M359.66,415.76s-11.52,6.48-11.52,9.6,7.11,1.2,11.76-1,8.34-3.84,8.34-8.16S359.66,415.76,359.66,415.76Z"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "358.19px 420.577px",
            }}
            id="elaufmlwjiqlr"
            className="animable"
          />
          <path
            d="M414.81,415.76s11.52,6.48,11.52,9.6-7.11,1.2-11.76-1-8.34-3.84-8.34-8.16S414.81,415.76,414.81,415.76Z"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "416.28px 420.577px",
            }}
            id="elaum04ftczq"
            className="animable"
          />
          <path
            d="M364.32,309.69,359.41,417a6.52,6.52,0,0,0,4.91,1.44,6.41,6.41,0,0,0,3.92-2.16l16.67-87.59h3.43L406,417.92a8.12,8.12,0,0,0,3.43,1c1.71,0,4.41-2.16,4.41-2.16l-5.64-107Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "386.625px 364.305px",
            }}
            id="el88fc51qq1cq"
            className="animable"
          />
          <polygon
            points="381.48 244.66 359.17 253.77 365.05 305.61 407.7 305.61 415.55 251.85 391.28 244.18 381.48 244.66"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "387.36px 274.895px",
            }}
            id="eli3nfxheeoy8"
            className="animable"
          />
          <polygon
            points="383.93 252.09 386.62 256.41 382.21 293.61 387.6 301.53 392.26 292.89 388.58 255.93 391.77 250.9 387.11 248.86 383.93 252.09"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "387.235px 275.195px",
            }}
            id="elomc172ly68h"
            className="animable"
          />
          <polygon
            points="387.11 248.86 383.53 254.99 377.15 246.49 380.72 242.24 387.11 248.86"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "382.13px 248.615px",
            }}
            id="elobvk71xgge"
            className="animable"
          />
          <polygon
            points="387.11 248.86 391.45 255.61 396.68 245.99 393.62 242.11 387.11 248.86"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "391.895px 248.86px",
            }}
            id="eluarh5zjmty9"
            className="animable"
          />
          <polygon
            points="378.45 263.37 363.42 263.37 363.42 268.49 370.94 271.37 378.45 268.17 378.45 263.37"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "370.935px 267.37px",
            }}
            id="elhpu0y236vys"
            className="animable"
          />
          <polygon
            points="408.52 263.37 393.49 263.37 393.49 268.49 401 271.37 408.52 268.17 408.52 263.37"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "401.005px 267.37px",
            }}
            id="elwinz98j1kf"
            className="animable"
          />
          <rect
            x="364.32"
            y="304.65"
            width="43.88"
            height="5.04"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "386.26px 307.17px",
            }}
            id="el490mdg56ffg"
            className="animable"
          />
          <path
            d="M363.58,308.73l-7.6,3.12a24.54,24.54,0,0,0,.49,6.48c.74,2.88,1.72,9.12,2.45,10.32s4.42,3.6,4.91,2.88,2.94-21.84,2.94-21.84Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "361.355px 320.196px",
            }}
            id="elsedio8ybsb"
            className="animable"
          />
          <polygon
            points="380.72 233.49 380.72 242.24 387.11 248.86 393.62 242.11 393.62 233.36 380.72 233.49"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "387.17px 241.11px",
            }}
            id="ellbbno3eist"
            className="animable"
          />
          <path
            d="M376.26,225.37s-1.15-2.63-1.92-1,.13,4.12,1.28,5.12a4.11,4.11,0,0,0,2.93.75l-.64-3.75Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "376.302px 227.055px",
            }}
            id="elycfc92x7x8r"
            className="animable"
          />
          <path
            d="M397.06,225.37s1.15-2.63,1.92-1-.13,4.12-1.28,5.12a4.13,4.13,0,0,1-2.94.75l.64-3.75Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "397.013px 227.055px",
            }}
            id="el6cfrrxmiqbf"
            className="animable"
          />
          <path
            d="M378.43,208s-5.37,2.25-5.37,6,.77,8,2.05,9.63,2.29,2.75,2.29,2.75l.26-5.38,3.7-6.37s6.13,3.87,9.19,3.87a31.6,31.6,0,0,0,5.11-.37l1.15,6.37,1.66-4.62v-4.25s3.06-2.88,2.42-4.75-11-7.75-17.36-6.25S378.43,208,378.43,208Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "387.019px 215.384px",
            }}
            id="el90iw34gl8g"
            className="animable"
          />
          <path
            d="M375.87,220.62s1.53,9.37,2.81,11.87a34.74,34.74,0,0,0,6.13,7.5c.89.62,4.21.12,5.49.12s5-7.5,5.61-8.87,1-13.12,1-13.12L395.79,216s-5.49,1.38-9.83-.37a15,15,0,0,1-6.13-4.13s-.38,4.25-1.92,6.75S375.87,220.62,375.87,220.62Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "386.39px 225.9px",
            }}
            id="elp5ks2zdtw9a"
            className="animable"
          />
          <path
            d="M385.7,221.62a11,11,0,0,0-5-1.25,9.41,9.41,0,0,0-4.34.87s0,4.25,1.41,5.88,5.49,1.12,6.64-.25S385.7,221.62,385.7,221.62Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "381.03px 224.25px",
            }}
            id="elsnaobizn5v"
            className="animable"
          />
          <path
            d="M387.49,221.62a11,11,0,0,1,5-1.25,9.41,9.41,0,0,1,4.34.87s0,4.25-1.41,5.88-5.49,1.12-6.63-.25S387.49,221.62,387.49,221.62Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "392.16px 224.25px",
            }}
            id="elsq6y1toy0ej"
            className="animable"
          />
          <line
            x1="385.7"
            y1="221.62"
            x2="387.49"
            y2="221.62"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "386.595px 221.62px",
            }}
            id="el9cspk6q6pfg"
            className="animable"
          />
          <path
            d="M359.41,300.81l8.09-.24,6.13,5.52a3,3,0,0,1-.73,1.92c-.74.72-2.7.24-2.7.24s-1.47,3.6-4.17,3.6-10-5-10-5Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "364.83px 306.21px",
            }}
            id="elab92fb8ubuq"
            className="animable"
          />
          <polygon
            points="359.17 253.77 331.96 289.53 355.98 306.81 359.41 300.81 352.06 286.65 362.11 277.53 359.17 253.77"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "347.035px 280.29px",
            }}
            id="elul60rs7l228"
            className="animable"
          />
          <line
            x1="357.45"
            y1="296.73"
            x2="353.29"
            y2="304.17"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "355.37px 300.45px",
            }}
            id="el5jw0izge398"
            className="animable"
          />
          <line
            x1="352.06"
            y1="286.65"
            x2="348.87"
            y2="278.49"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "350.465px 282.57px",
            }}
            id="elfwx6d92c0h"
            className="animable"
          />
          <path
            d="M415.55,300.81l-8.09-.24-6.13,5.52a3,3,0,0,0,.74,1.92c.73.72,2.69.24,2.69.24s1.47,3.6,4.17,3.6,10.05-5,10.05-5Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "410.155px 306.21px",
            }}
            id="eln7zls1pbts"
            className="animable"
          />
          <polygon
            points="415.55 251.85 443 289.53 418.98 306.81 415.55 300.81 422.9 286.65 411.38 277.29 415.55 251.85"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "427.19px 279.33px",
            }}
            id="elg3anwj8j7el"
            className="animable"
          />
          <line
            x1="417.51"
            y1="296.73"
            x2="421.67"
            y2="304.17"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "419.59px 300.45px",
            }}
            id="elcm5pkgg7229"
            className="animable"
          />
          <line
            x1="422.9"
            y1="286.65"
            x2="426.09"
            y2="278.49"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "424.495px 282.57px",
            }}
            id="elt7pjox72s1p"
            className="animable"
          />
        </g>
        <g
          id="freepik--character-1--inject-95"
          className="animable"
          style={{ transformOrigin: "109.64px 320.694px" }}
        >
          <ellipse
            cx="106.5"
            cy="426.5"
            rx="47.5"
            ry="10.5"
            style={{
              fill: "rgb(67, 57, 202)",
              transformOrigin: "106.5px 426.5px",
            }}
            id="elrny3o31p1gm"
            className="animable"
          />
          <g id="ela52nw3ayz3j">
            <ellipse
              cx="106.5"
              cy="426.5"
              rx="47.5"
              ry="10.5"
              style={{
                fill: "rgb(255, 255, 255)",
                opacity: "0.5",
                transformOrigin: "106.5px 426.5px",
              }}
              className="animable"
            />
          </g>
          <path
            d="M81.82,415.76s-11.52,6.48-11.52,9.6,7.11,1.2,11.77-1,8.33-3.84,8.33-8.16S81.82,415.76,81.82,415.76Z"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "80.35px 420.577px",
            }}
            id="el1lz28xsgv5l"
            className="animable"
          />
          <path
            d="M137,415.76s11.52,6.48,11.52,9.6-7.1,1.2-11.76-1-8.34-3.84-8.34-8.16S137,415.76,137,415.76Z"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "138.47px 420.577px",
            }}
            id="elpbddrripwof"
            className="animable"
          />
          <path
            d="M86.48,309.69,81.58,417a6.49,6.49,0,0,0,4.9,1.44,6.41,6.41,0,0,0,3.92-2.16l16.67-87.59h3.43l17.65,89.27a8.12,8.12,0,0,0,3.43,1c1.72,0,4.41-2.16,4.41-2.16l-5.64-107Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "108.785px 364.325px",
            }}
            id="elycjnjwsmqod"
            className="animable"
          />
          <polygon
            points="103.64 244.66 81.33 253.77 87.21 305.61 129.87 305.61 137.71 251.85 113.44 244.18 103.64 244.66"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "109.52px 274.895px",
            }}
            id="elokra287cnj"
            className="animable"
          />
          <rect
            x="86.48"
            y="304.65"
            width="43.88"
            height="5.04"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "108.42px 307.17px",
            }}
            id="elvf49aiv6zhf"
            className="animable"
          />
          <path
            d="M85.74,308.73l-7.6,3.12a24.54,24.54,0,0,0,.49,6.48c.74,2.88,1.72,9.12,2.46,10.32s4.41,3.6,4.9,2.88,2.94-21.84,2.94-21.84Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "83.5148px 320.196px",
            }}
            id="elbhtiime397"
            className="animable"
          />
          <polygon
            points="102.89 233.49 102.89 242.24 109.27 248.86 115.78 242.11 115.78 233.36 102.89 233.49"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "109.335px 241.11px",
            }}
            id="elsyi741ocmlj"
            className="animable"
          />
          <path
            d="M98.42,225.37s-1.15-2.63-1.92-1,.13,4.12,1.28,5.12a4.13,4.13,0,0,0,2.94.75l-.64-3.75Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "98.4666px 227.055px",
            }}
            id="el1qc48c9j1jq"
            className="animable"
          />
          <path
            d="M119.22,225.37s1.15-2.63,1.92-1-.13,4.12-1.28,5.12a4.11,4.11,0,0,1-2.93.75l.63-3.75Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "119.178px 227.055px",
            }}
            id="el2zou6h2xr7n"
            className="animable"
          />
          <path
            d="M100.59,208s-5.36,2.25-5.36,6,.76,8,2,9.63,2.3,2.75,2.3,2.75l.25-5.38,3.7-6.37s6.13,3.87,9.19,3.87a31.6,31.6,0,0,0,5.11-.37l1.15,6.37,1.66-4.62v-4.25s3.06-2.88,2.42-4.75-11-7.75-17.36-6.25S100.59,208,100.59,208Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "109.164px 215.384px",
            }}
            id="el86ihbql9rqg"
            className="animable"
          />
          <path
            d="M98,220.62s1.54,9.37,2.81,11.87A35,35,0,0,0,107,240c.89.62,4.21.12,5.49.12s5-7.5,5.62-8.87,1-13.12,1-13.12L118,216s-5.49,1.38-9.83-.37a15,15,0,0,1-6.13-4.13s-.38,4.25-1.91,6.75S98,220.62,98,220.62Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "108.555px 225.905px",
            }}
            id="el8fz0qo33lmw"
            className="animable"
          />
          <path
            d="M107.86,221.62a11,11,0,0,0-5-1.25,9.41,9.41,0,0,0-4.34.87s0,4.25,1.4,5.88,5.49,1.12,6.64-.25S107.86,221.62,107.86,221.62Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "103.19px 224.25px",
            }}
            id="elfqpaujdkiaw"
            className="animable"
          />
          <path
            d="M109.65,221.62a11,11,0,0,1,5-1.25,9.41,9.41,0,0,1,4.34.87s0,4.25-1.41,5.88-5.48,1.12-6.63-.25S109.65,221.62,109.65,221.62Z"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "114.32px 224.25px",
            }}
            id="eltmvf6gd6ze"
            className="animable"
          />
          <line
            x1="107.86"
            y1="221.62"
            x2="109.65"
            y2="221.62"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "108.755px 221.62px",
            }}
            id="elxt58sogqm4f"
            className="animable"
          />
          <polygon
            points="106.09 252.09 108.78 256.41 104.37 293.61 109.77 301.53 114.42 292.89 110.75 255.93 113.93 250.9 109.27 248.86 106.09 252.09"
            style={{
              fill: "rgb(38, 50, 56)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "109.395px 275.195px",
            }}
            id="el4wfcor42gxk"
            className="animable"
          />
          <polygon
            points="109.27 248.86 105.69 254.99 99.31 246.49 102.89 242.24 109.27 248.86"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "104.29px 248.615px",
            }}
            id="elymtq5dpr1p"
            className="animable"
          />
          <polygon
            points="109.27 248.86 113.61 255.61 118.84 245.99 115.78 242.11 109.27 248.86"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "114.055px 248.86px",
            }}
            id="el6a6o7r9reng"
            className="animable"
          />
          <polygon
            points="81.33 253.77 54.12 289.53 78.14 306.81 81.58 300.81 74.22 286.65 84.27 277.53 81.33 253.77"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "69.195px 280.29px",
            }}
            id="elzql3gukoyyr"
            className="animable"
          />
          <path
            d="M81.58,300.81l8.08-.24,6.13,5.52a3,3,0,0,1-.73,1.92c-.74.72-2.7.24-2.7.24s-1.47,3.6-4.17,3.6-10-5-10-5Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "86.99px 306.21px",
            }}
            id="elh0xanw9zcib"
            className="animable"
          />
          <line
            x1="79.62"
            y1="296.73"
            x2="75.45"
            y2="304.17"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "77.535px 300.45px",
            }}
            id="elfzvu6gmodqt"
            className="animable"
          />
          <line
            x1="74.22"
            y1="286.65"
            x2="71.04"
            y2="278.49"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "72.63px 282.57px",
            }}
            id="elrlb4wphbk1"
            className="animable"
          />
          <polygon
            points="137.71 251.85 165.16 289.53 141.14 306.81 137.71 300.81 145.06 286.65 133.54 277.29 137.71 251.85"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "149.35px 279.33px",
            }}
            id="el23oak8j8r1s"
            className="animable"
          />
          <path
            d="M137.71,300.81l-8.09-.24-6.13,5.52a3,3,0,0,0,.74,1.92c.73.72,2.69.24,2.69.24s1.47,3.6,4.17,3.6,10-5,10-5Z"
            style={{
              fill: "rgb(255, 255, 255)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "132.29px 306.21px",
            }}
            id="elsz2aogx8jb"
            className="animable"
          />
          <line
            x1="139.67"
            y1="296.73"
            x2="143.84"
            y2="304.17"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "141.755px 300.45px",
            }}
            id="elj9508jmmiw"
            className="animable"
          />
          <line
            x1="145.06"
            y1="286.65"
            x2="148.25"
            y2="278.49"
            style={{
              fill: "none",
              stroke: "rgb(38, 50, 56)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              transformOrigin: "146.655px 282.57px",
            }}
            id="ellnuriajnul"
            className="animable"
          />
          <polygon
            points="100.61 263.37 85.58 263.37 85.58 268.49 93.1 271.37 100.61 268.17 100.61 263.37"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "93.095px 267.37px",
            }}
            id="eli9sru70cpcb"
            className="animable"
          />
          <polygon
            points="130.68 263.37 115.65 263.37 115.65 268.49 123.17 271.37 130.68 268.17 130.68 263.37"
            style={{
              fill: "rgb(67, 57, 202)",
              stroke: "rgb(38, 50, 56)",
              strokeMiterlimit: 10,
              transformOrigin: "123.165px 267.37px",
            }}
            id="elxf65i1yh1k"
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
        <defs>
          <clipPath id="freepik--clip-path--inject-95">
            <path
              d="M274.92,330.5V311H216.24v19.5A27.88,27.88,0,0,1,210,348l-2.57,3.18h76.28L281.15,348A27.83,27.83,0,0,1,274.92,330.5Z"
              style={{
                fill: "#fff",
                stroke: "#263238",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  const getToken = myCookie.ucs_token;
  const token = getToken === undefined ? "user~token" : getToken.split("~");
  if (token[1] === process.env.NEXT_PUBLIC_COOKIE_KEY) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  //   const productRes = await axios.get("http://localhost:3000/api/products");
  //   const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      // orders: orderRes.data,
      // products: productRes.data,
    },
  };
};
