import "../styles/DynamicBackground.css";

export default function DynamicBackground() {

    return (

        <div className="dynamic-background">

            <div className="sunset-layer"></div>

            <div className="city-layer"></div>

            <div className="fog-layer"></div>


            <div className="rain-layer">

                {Array.from({ length: 120 }).map((_, index) => (

                    <span key={index}></span>

                ))}

            </div>

        </div>

    );

}