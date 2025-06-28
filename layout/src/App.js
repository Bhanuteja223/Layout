import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content-container">
        <div className='padding-container'>
          <div className="header">
            <div className="plus-icon">+</div>
          </div>

          <h1 className='header-title'>hellorabbit</h1>

          <h2 className='header-subtitle'>Quizzes</h2>

          <div className="multiplication-container">
            <div>
              <h3>Multiplication</h3>
              <p>Math • 4th Grade</p>
            </div>
            <img src="https://res.cloudinary.com/dpuziwnvl/image/upload/v1751086647/groovy-multiplication-superhero-vector-53981386_uqrk2b.jpg" className='image' />
          </div>

          <div className="division-container">
            <div>
              <h3>Division</h3>
              <p>Math • 4th Grade</p>
            </div>
            <img src="https://res.cloudinary.com/dpuziwnvl/image/upload/v1751086901/easy-division-operation-kids-symbol-260nw-625518158_uqemhy.webp" className='image' />
          </div>

          <div className="weather-container">
            <div>
              <h3>Weather and Climate</h3>
              <p>Science • 4th Grade</p>
            </div>
            <img src="https://res.cloudinary.com/dpuziwnvl/image/upload/v1751087208/2317162263a02ee37125916edf0f190f_j0oqgn.jpg" className='image' />
          </div>

          <h2 className='header-subtitle'>Submissions</h2>

          <div className='bottom-container'>
            <div>
              <img src='https://res.cloudinary.com/dpuziwnvl/image/upload/v1751086647/groovy-multiplication-superhero-vector-53981386_uqrk2b.jpg' className='image2' />
            </div>
            <div>
              <img src="https://res.cloudinary.com/dpuziwnvl/image/upload/v1751095935/circle-globe-world-blue-cartoon-icon-global-map-with-europe-america-africa-asia-continent-3d_zouzyf.jpg" className='image2' />
            </div>
            <div className='social-studies'>
              <h1> Social Studies</h1>
            </div>
          </div>
        </div>
        <div className='bottom-fixed'>
          <h1> Quizzes </h1>
          <h1> leaderboard</h1>
        </div>
      </div>
    </div>
  );
}

export default App;