const WorksSection = () => {
    return (
        <div id="works" className="page">
            <h1 className="works--title">Selected Works</h1>
            <div className="work--visuals">
                <img
                    src="https://d33wubrfki0l68.cloudfront.net/aa3d2ff66de5f16336bd94fd68c3c2ce61e29f68/d5064/assets/home/home-casestudy-mgny.webp"
                    alt=""
                />
                <video
                    autoPlay
                    loop
                    muted
                    src="https://d33wubrfki0l68.cloudfront.net/a13ea7c2ca2f38134748966280e54af4340ce821/f976d/assets/home/projects_madegood-reduced.mp4"
                ></video>
            </div>
        </div>
    )
}

export default WorksSection
