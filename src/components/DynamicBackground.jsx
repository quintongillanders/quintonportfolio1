import "../styles/DynamicBackground.css";

export default function DynamicBackground() {

    return (

        <div className="dynamic-background">

            <div className="sunset-layer"></div>

            <div className="city-layer"></div>

            <div className="fog-layer"></div>


            <div className="rain-layer">

                {Array.from({ length: 55 }).map((_, index) => {
                    const depth = ((index * 37) % 100) / 100;
                    const rainStyle = {
                        "--rain-left": `${((index * 47.31) % 108) - 4}%`,
                        "--rain-duration": `${0.65 + depth * 1.25}s`,
                        "--rain-delay": `${-(((index * 61) % 100) / 32)}s`,
                        "--rain-length": `${28 + ((index * 43) % 105)}px`,
                        "--rain-opacity": 0.22 + depth * 0.5,
                        "--rain-width": `${0.65 + depth * 1.05}px`,
                        "--rain-angle": `${8 + ((index * 17) % 18)}deg`,
                        "--rain-drift": `${-45 - ((index * 29) % 95)}px`,
                        "--rain-blur": `${(1 - depth) * 0.7}px`,
                    };

                    return <span key={index} style={rainStyle}></span>;
                })}

            </div>

        </div>

    );

}
