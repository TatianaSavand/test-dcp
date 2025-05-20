import backgroundImage from "../assets/Image.png";

export const LandingPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: `url(${backgroundImage})`}}
    ></div>
  )
}