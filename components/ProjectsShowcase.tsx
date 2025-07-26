import Card3D from "./Card3D";
export default function ProjectsShowcase() {
  return (
    <div className="flex flex-col gap-7 w-full max-w-2xl md:items-end items-center">
      <Card3D url="https://github.com/PjAlgoMaster/Python-Service-Project-2023">
        <img
          src="/assets/imagecard1.jpg"
          alt="Python Service Project"
          className="w-full h-[220px] object-cover rounded-xl mb-4 shadow-lg"
          style={{ maxWidth: "480px", objectPosition: "right top" }}
        />
        <h3 className="font-bold text-lg mb-1 text-blue-200">Python-Service-Project-2023</h3>
        <p className="text-gray-100 text-sm mb-1">
          Automation for email creation/formatting/sending + tracking.
        </p>
      </Card3D>
      <Card3D url="https://github.com/PjAlgoMaster/SKYCAST-WEATHER-APP">
        <img
          src="/assets/imagecard2.jpg"
          alt="Skycast Weather App"
          className="w-full h-[220px] object-cover rounded-xl mb-4 shadow-lg"
          style={{ maxWidth: "480px", objectPosition: "right top" }}
        />
        <h3 className="font-bold text-lg mb-1 text-blue-200">SKYCAST Weather App</h3>
        <p className="text-gray-100 text-sm mb-1">
          Live weather app, modern UI, real API connection.
        </p>
      </Card3D>
    </div>
  );
}
