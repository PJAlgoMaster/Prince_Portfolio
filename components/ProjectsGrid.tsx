"use client";
import Card3D from "./Card3D";
import { TypeAnimation } from "react-type-animation";

export default function ProjectsGrid() {
  return (
    <section className="min-h-screen w-full bg-black flex flex-col items-center justify-start pt-0">
      {/* Profile Image */}
      <div className="pt-8">
        <img
          src="/assets/prince.jpg" // <-- Update your profile image path
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>

      {/* Heading with typing animation */}
      <h1 className="text-white text-4xl sm:text-5xl font-extrabold text-center mt-6 mb-2 drop-shadow-lg">
        <TypeAnimation
          sequence={[
            "My Projects 💡",
            2000,
            "Explore My Creations 🚀",
            2000,
          ]}
          wrapper="span"
          speed={30}
          repeat={Infinity}
        />
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 px-4 md:px-12 py-10">
        {/* Gesture Project */}
        <Card3D
          url="https://github.com/PjAlgoMaster/Gesture-ControlledBrightnessAdjustment-System-2024-"
          className="max-w-md"
        >
          <img
            src="/assets/project-gesture.webp"
            alt="Gesture Control Project"
            className="w-full h-56 object-cover rounded-xl mb-4 shadow-md"
            style={{ objectPosition: "right top" }}
          />
          <h3 className="text-xl font-bold text-blue-300 mb-2 hover:text-white transition-colors duration-200">
            Gesture-Controlled Brightness Changer
          </h3>
          <p className="text-gray-300 text-sm">
            AI-based gesture recognition system to control hardware brightness. Built with OpenCV, Python & ML.
          </p>
        </Card3D>

        {/* Weather App Project */}
        <Card3D
          url="https://github.com/PjAlgoMaster/SKYCAST-WEATHER-APP"
          className="max-w-md"
        >
          <img
            src="/assets/imagecard2.webp"
            alt="Skycast Weather App"
            className="w-full h-56 object-cover rounded-xl mb-4 shadow-md"
          />
          <h3 className="text-xl font-bold text-blue-300 mb-2 hover:text-white transition-colors duration-200">
            SKYCAST Weather App
          </h3>
          <p className="text-gray-300 text-sm">
            A responsive real-time weather app with clean UI and weather API integration. Built with React.
          </p>
        </Card3D>
      </div>
    </section>
  );
}
