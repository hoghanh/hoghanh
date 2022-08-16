import { Image } from "./image";

export const Project = (props) => {
  return (
    <div id='project' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Project in learning</h2>
          <a href="https://github.com/hoghanh"><p>Visit all my project <u>here!</u></p></a>
        </div>
        <div className='row'>
          <div className='project-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6 col-md-6">
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage}/>
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
