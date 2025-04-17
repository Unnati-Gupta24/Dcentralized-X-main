import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import googlelogo from "../assets/google.png";
import metamasklogo from "../assets/metamask.png";
import RegisterModal from "../components/Overlay/RegisterModal";
import LoginModal from "../components/Overlay/LoginModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../hooks/useAuth";

type ButtonType = string | null;

const LoginPage = () => {
  const { handleGoogleAuth, connectWallet } = useAuth();
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [activeButton, setActiveButton] = useState<ButtonType>(null);

  useEffect(() => {
    localStorage.setItem("userID", "");

    // Fade-in animation on load
    setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => {};
  }, []);

  const toggleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };

  const toggleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const handleButtonHover = (button: ButtonType) => {
    setActiveButton(button);
  };

  const resetButtonHover = () => {
    setActiveButton(null);
  };

  return (
    <>
      {registerModal && (
        <RegisterModal
          toggleRegisterModal={toggleRegisterModal}
          isVisible={registerModal}
        />
      )}
      {loginModal && (
        <LoginModal
          toggleLoginModal={toggleLoginModal}
          isVisible={loginModal}
        />
      )}

      <div
        className={`w-full min-h-screen bg-black text-white overflow-hidden ${
          loaded ? "opacity-100" : "opacity-0"
        } transition-all duration-1000`}
      >
        <ToastContainer
          bodyClassName={() =>
            "text-sm font-medium block p-3 bg-gray-900 border-l-4 border-cyan-500"
          }
        />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid */}
          <div className="absolute inset-0 animated-grid"></div>

          {/* Free Speech Animation */}
          <div className="speech-container">
            <div className="speech-bubble speech-1">Free Speech</div>
            <div className="speech-bubble speech-2">Decentralized Voice</div>
            <div className="speech-bubble speech-3">Be Heard</div>
            <div className="speech-bubble speech-4">Express Freely</div>
            <div className="speech-bubble speech-5">Power to People</div>
            <div className="speech-bubble speech-6">Uncensored</div>
            <div className="speech-bubble speech-7">Your Voice Matters</div>
          </div>

          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse-slower"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Logo section */}
            <div
              className="w-full lg:w-1/2 flex items-center justify-center animate-fadeIn"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 scale-105"></div>
                <img
                  src={logo}
                  alt="logo"
                  className="relative z-10 max-w-full w-auto max-h-80 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Login form section */}
            <div
              className="w-full lg:w-1/2 animate-slideUp"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative bg-gray-900/70 backdrop-blur-md p-8 rounded-xl shadow-xl">
                <div className="relative z-10">
                  {/* Heading */}
                  <div className="text-center mb-8">
                    <h1
                      className="text-4xl font-bold mb-3 neon-text-cyan animate-textReveal"
                      style={{ animationDelay: "0.9s" }}
                    >
                      Decentralize Your Voice
                    </h1>
                    <p
                      className="text-lg text-gray-300 font-medium animate-fadeIn"
                      style={{ animationDelay: "1.2s" }}
                    >
                      Get started today
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="space-y-4">
                    <button
                      onClick={handleGoogleAuth}
                      onMouseEnter={() => handleButtonHover("google")}
                      onMouseLeave={resetButtonHover}
                      className={`w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                        activeButton === "google" ? "neon-glow-cyan" : ""
                      } animate-fadeIn`}
                      style={{ animationDelay: "1.5s" }}
                    >
                      <img
                        src={googlelogo}
                        width={20}
                        alt="google"
                        className="animate-spin-slow"
                      />
                      <span className="font-medium">Sign up with Google</span>
                    </button>

                    <button
                      onClick={connectWallet}
                      onMouseEnter={() => handleButtonHover("metamask")}
                      onMouseLeave={resetButtonHover}
                      className={`w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 ${
                        activeButton === "metamask" ? "neon-glow-purple" : ""
                      } animate-fadeIn`}
                      style={{ animationDelay: "1.5s" }}
                    >
                      <img
                        src={metamasklogo}
                        width={20}
                        alt="metamask"
                        className="animate-spin-slow"
                      />
                      <span className="font-medium">Sign up with MetaMask</span>
                    </button>

                    <div
                      className="relative my-6 animate-fadeIn"
                      style={{ animationDelay: "1.9s" }}
                    >
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700"></div>
                      </div>
                      <div className="relative flex justify-center">
                        <span className="bg-gray-900 px-4 text-sm text-gray-400">
                          or
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={toggleRegisterModal}
                      onMouseEnter={() => handleButtonHover("register")}
                      onMouseLeave={resetButtonHover}
                      className={`w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                        activeButton === "register" ? "neon-glow-multi" : ""
                      } animate-fadeIn`}
                      style={{ animationDelay: "2.1s" }}
                    >
                      Register
                    </button>

                    <p
                      className="text-center text-gray-400 pt-4 animate-fadeIn"
                      style={{ animationDelay: "2.3s" }}
                    >
                      Already have an Account?{" "}
                      <button
                        onClick={toggleLoginModal}
                        className="text-cyan-400 hover:text-cyan-300 hover:underline focus:outline-none font-medium relative group"
                      >
                        Sign in
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        /* Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Outfit', sans-serif;
        }
        
        /* Neon text effects */
        .neon-text-cyan {
          color: #fff;
          text-shadow: 0 0 5px rgba(6, 182, 212, 0.7),
                       0 0 10px rgba(6, 182, 212, 0.5),
                       0 0 15px rgba(6, 182, 212, 0.3);
        }
        
        /* Neon glow effects for buttons */
        .neon-glow-cyan {
          box-shadow: 0 0 5px rgba(6, 182, 212, 0.7),
                     0 0 10px rgba(6, 182, 212, 0.4);
        }
        
        .neon-glow-purple {
          box-shadow: 0 0 5px rgba(147, 51, 234, 0.7),
                     0 0 10px rgba(147, 51, 234, 0.4);
        }
        
        .neon-glow-multi {
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.7),
                     0 0 20px rgba(147, 51, 234, 0.4);
        }
        
        /* Animated Grid */
        .animated-grid {
          background-size: 50px 50px;
          background-image: 
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          animation: grid-move 20s linear infinite;
          transform-origin: center;
          perspective: 1000px;
        }
        
        @keyframes grid-move {
          0% {
            background-position: 0px 0px;
            transform: rotateX(10deg) scale(1.5);
          }
          50% {
            background-position: 25px 25px;
            transform: rotateX(20deg) scale(1.8);
          }
          100% {
            background-position: 50px 50px;
            transform: rotateX(10deg) scale(1.5);
          }
        }
        
        /* Free Speech Animation */
        .speech-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .speech-bubble {
          position: absolute;
          color: rgba(6, 182, 212, 0.15);
          font-weight: bold;
          font-size: 24px;
          white-space: nowrap;
          text-transform: uppercase;
          opacity: 0;
          animation: float-up 15s linear infinite;
        }
        
        .speech-1 {
          left: 10%;
          bottom: -50px;
          animation-delay: 0s;
        }
        
        .speech-2 {
          left: 25%;
          bottom: -50px;
          animation-delay: 4s;
          color: rgba(147, 51, 234, 0.15);
        }
        
        .speech-3 {
          left: 45%;
          bottom: -50px;
          animation-delay: 7s;
        }
        
        .speech-4 {
          left: 65%;
          bottom: -50px;
          animation-delay: 10s;
          color: rgba(147, 51, 234, 0.15);
        }
        
        .speech-5 {
          left: 80%;
          bottom: -50px;
          animation-delay: 5s;
        }
        
        .speech-6 {
          left: 15%;
          bottom: -50px;
          animation-delay: 8s;
          color: rgba(147, 51, 234, 0.15);
        }
        
        .speech-7 {
          left: 60%;
          bottom: -50px;
          animation-delay: 12s;
        }
        
        @keyframes float-up {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes textReveal {
          0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
        
        .animate-textReveal {
          animation: textReveal 1s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
          animation-play-state: paused;
        }
        
        button:hover .animate-spin-slow {
          animation-play-state: running;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        `}
      </style>
    </>
  );
};

export default LoginPage;
