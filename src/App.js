import './App.css';

function App() {
  return (
    <div className="App">
      <div className="make-center">
        <div className="make-flex">
          <h1 className='moving-around'>Under</h1>
          <h1>Construction</h1>
        </div>
        <h6>We are upgrading our website and will be on-line very soon</h6>
        <p>Reach out to us through Email,Facebook or Whatsapp (preferable)</p>
        <div className='full-width'>
          <input type="text" placeholder="example@email.com"></input>
          <input type="submit" />
          <div className='make-side'>
            <a href="https://www.facebook.com/JoshDrewWebStudio" id="fb-icon">
              <i class="fa-brands fa-facebook-square fa-3x"></i>
            </a>
            <a href="https://wa.me/60179906278?text=I'm%20interested%20for%20your%20services" id="whatsapp-icon">
              <i class="fa-brands fa-whatsapp-square fa-3x"></i>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
