import './App.css';

window.addEventListener("resize", () => {
  let getSocial = document.getElementById("social");
  getSocial.classList.toggle("dissapear")
});

function App() {
  return (
    <div className="App">
      <div className="make-center">
        <div className="make-flex">
          <h1 className='moving-around'>Josdrew</h1>
          <h1>Studio.SDK</h1>
        </div>
        <h6>We are upgrading our website and will be on-line very soon</h6>
        <p>Reach out to us through Email,Facebook or Whatsapp (preferable)</p>
        <div className='full-width'>
          <form
          action="https://formspree.io/f/xeqnzjyl"
          method="POST"
          >
            <input type="text" id="email"
                   name='email'
                   placeholder="example@email.com" 
                   required
            />
            <input type="submit" name='submit' />
          </form>
          <div className='make-side' id="social">
            <a href="https://www.facebook.com/JoshDrewWebStudio" id="fb-icon">
              <i className="fa-brands fa-facebook-square fa"></i>
            </a>
            <a href="https://wa.me/60179906278?text=I'm%20interested%20for%20your%20services" id="whatsapp-icon">
              <i className="fa-brands fa-whatsapp-square fa"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
