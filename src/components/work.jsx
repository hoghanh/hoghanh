export const Work = (props) => {
  return (
    <div id="work" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Work experience</h2>
          <p>
            A software engineering student is on the way to becoming a good
            software engineer
            <br />
            by gaining experience in both technical and soft skills.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="work-desc">
                    <h3>{d.name}</h3>
                    <h4>{d.time}</h4>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
