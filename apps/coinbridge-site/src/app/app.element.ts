import './app.element.css';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
      <!-- ======= Header ======= -->
        <section id="topbar" class="topbar d-flex align-items-center">
          <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
              <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:coinbridgeafrica@gmail.com">info@coinbridge.co</a></i>
            </div>
            <div class="social-links d-none d-md-flex align-items-center">
              <a href="https://twitter.com/coinbridgeAf" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
              <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
            </div>
          </div>
        </section><!-- End Top Bar -->
      
        <header id="header" class="header d-flex align-items-center">
      
          <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
              <!-- Uncomment the line below if you also wish to use an image logo -->
              <img src="assets/img/CoinBridge_logo.jpg" alt="coinbridge_logo">
              <!-- <h1>CoinBridge<span>.</span></h1> -->
            </a>
            <nav id="navbar" class="navbar">
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </nav>
      
            <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      
          </div>
        </header><!-- End Header -->
        <!-- End Header -->
      
        <!-- ======= Hero Section ======= -->
        <section id="hero" class="hero">
          <div class="container position-relative">
            <div class="row gy-5" data-aos="fade-in">
              <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                <h2>Welcome to <span>CoinBridge</span></h2>
                <p>Secure on-ramp and off-rramp infrastructure for Africa.</p>
                <div class="d-flex justify-content-center justify-content-lg-start">
                  <a href="#call-to-action" class="btn-get-started">Get Started</a>
                  <!-- <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> -->
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2">
                <img src="assets/img/hero-img-2.svg" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100">
              </div>
            </div>
          </div>
      
          <div class="icon-boxes position-relative">
            <div class="container position-relative">
              <div class="row gy-4 mt-5">
      
                <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div class="icon-box">
                    <div class="icon"><i class="bi bi-file-earmark-lock"></i></div>
                    <h4 class="title"><a href="" class="stretched-link">Fast and Secure</a></h4>
                  </div>
                </div><!--End Icon Box -->
      
                <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon-box">
                    <div class="icon"><i class="bi bi-person-add"></i></div>
                    <h4 class="title"><a href="" class="stretched-link">Easy Onboarding</a></h4>
                  </div>
                </div><!--End Icon Box -->
      
                <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div class="icon-box">
                    <div class="icon"><i class="bi bi-currency-exchange"></i></div>
                    <h4 class="title"><a href="" class="stretched-link">Cost Effective</a></h4>
                  </div>
                </div><!--End Icon Box -->
      
                <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div class="icon-box">
                    <div class="icon"><i class="bi bi-shield-check"></i></div>
                    <h4 class="title"><a href="" class="stretched-link">Trusted</a></h4>
                  </div>
                </div><!--End Icon Box -->
      
              </div>
            </div>
          </div>
      
          </div>
        </section>
        <!-- End Hero Section -->
      
        <main id="main">
      
          <!-- ======= About Us Section ======= -->
          <section id="about" class="about">
            <div class="container" data-aos="fade-up">
      
              <div class="section-header">
                <h2>About Us</h2>
                <p>We are working towards a more inclusive financial system.</p>
              </div>
      
              <div class="row gy-4">
                <div class="col-lg-6">
                  <h3>Enabling access to on/off-ramps for underserved areas in Africa.</h3>
                  <img src="assets/img/about-4.jpg" class="img-fluid rounded-4 mb-4" alt="">
                  <p>According to research, 57% of Africans do not hold any kind of bank account. Millions of Africans therefore lack access to traditional banking services leaving them unable to participate in the digital economy.</p>
                  <p>
                    We are a team of passionate builders that are building a bridge between the traditional financial system and the digital economy. We are building a suite of products that will enable users to seamlessly convert fiat to crypto and vice versa.
                  </p>
                </div>
                <div class="col-lg-6">
                  <div class="content ps-0 ps-lg-5">
                    <p class="fst-italic">
                      CoinBridge empowers underserved communities in Africa to actively engage in the digital economy by offering effortless access to essential on-ramp and off-ramp blockchain infrastructure. We do this through:
                    </p>
                    <ul>
                      <li><i class="bi bi-check-circle-fill"></i> MiniPay Widget - Built on MiniPay, a stable coin wallet in the Opera Mini Browser.</li>
                      <li><i class="bi bi-check-circle-fill"></i> SMS Wallet - Feature phone wallet connecting users to the celo blockchain without the internet.</li>
                    </ul>
                    <p>
                      Our solutions offer on-ramp and off-ramp services using familiar payment methods such as mobile money and bank transfers: enabling users to seamlessly convert fiat to crypto and vice versa. These are the first steps towards building a more inclusive financial system. Our solutions are built on the Celo blockchain, a mobile-first blockchain platform that makes financial tools accessible to anyone with a mobile phone.
                    </p>
      
                    <div class="position-relative mt-4">
                      <img src="assets/img/about-5.jpeg" class="img-fluid rounded-4" alt="">
                      <!-- <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a> -->
                    </div>
                  </div>
                </div>
              </div>
      
            </div>
          </section><!-- End About Us Section -->
      
          <!-- ======= Call To Action Section ======= -->
          <section id="call-to-action" class="call-to-action">
            <div class="container text-center" data-aos="zoom-out">
              <h3>Join the waitlist</h3>
              <p> CoinBridge is launching soon, we'll keep you updated about the lauch date and other events.</p>
              <a class="cta-btn" href="#">Join Waitlist</a>
            </div>
          </section>
          <!-- End Call To Action Section -->
      
          <!-- ======= Recent Blog Posts Section ======= -->
          <section id="recent-posts" class="recent-posts sections-bg">
            <div class="container" data-aos="fade-up">
      
              <div class="section-header">
                <h2>Recent Posts</h2>
              </div>
      
              <div class="row gy-4">
      
                <div class="col-xl-4 col-md-6">
                  <article>
      
                    <div class="post-img">
                      <img src="assets/img/CCB8.jpeg" alt="" class="img-fluid">
                    </div>
      
                    <p class="post-category">News</p>
      
                    <h2 class="title">
                      <a href="https://x.com/CeloOrg/status/1726602231439569266?s=20">CoinBridge has been selected for Celo Camp Batch 8: Build for MiniPay</a>
                    </h2>
      
                  </article>
                </div><!-- End post list item -->
      
                <div class="col-xl-4 col-md-6">
                  <article>
      
                    <div class="post-img">
                      <img src="assets/img/CB_FNBNK.jpeg" alt="" class="img-fluid">
                    </div>
      
                    <p class="post-category">News</p>
      
                    <h2 class="title">
                      <a href="https://x.com/ETHSafari/status/1709097842600505357?s=20">CoinBridge emerges victorious at ethsafari hackathon: fonbnk prize pool</a>
                    </h2>
      
                  </article>
                </div>
                <!-- End post list item -->
      
                
              </div><!-- End recent posts list -->
      
            </div>
          </section>
          <!-- End Recent Blog Posts Section -->
      
          <!-- ======= Contact Section ======= -->
          <!-- <section id="contact" class="contact">
            <div class="container" data-aos="fade-up">
      
              <div class="section-header">
                <h2>Contact</h2>
                <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
              </div>
      
              <div class="row gx-lg-0 gy-4">
      
                <div class="col-lg-4">
      
                  <div class="info-container d-flex flex-column align-items-center justify-content-center">
                    <div class="info-item d-flex">
                      <i class="bi bi-geo-alt flex-shrink-0"></i>
                      <div>
                        <h4>Location:</h4>
                        <p>A108 Adam Street, New York, NY 535022</p>
                      </div>
                    </div>
      
                    <div class="info-item d-flex">
                      <i class="bi bi-envelope flex-shrink-0"></i>
                      <div>
                        <h4>Email:</h4>
                        <p>info@example.com</p>
                      </div>
                    </div>
      
                    <div class="info-item d-flex">
                      <i class="bi bi-phone flex-shrink-0"></i>
                      <div>
                        <h4>Call:</h4>
                        <p>+1 5589 55488 55</p>
                      </div>
                    </div>
      
                    <div class="info-item d-flex">
                      <i class="bi bi-clock flex-shrink-0"></i>
                      <div>
                        <h4>Open Hours:</h4>
                        <p>Mon-Sat: 11AM - 23PM</p>
                      </div>
                    </div>
                  </div>
      
                </div>
      
                <div class="col-lg-8">
                  <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                      </div>
                      <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
                    </div>
                    <div class="form-group mt-3">
                      <textarea class="form-control" name="message" rows="7" placeholder="Message" required></textarea>
                    </div>
                    <div class="my-3">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
      
              </div>
      
            </div>
          </section> -->
          <!-- End Contact Section -->
      
        </main>
        <!-- End #main -->
      
        <!-- ======= Footer ======= -->
        <footer id="footer" class="footer">
      
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-5 col-md-12 footer-info">
                <a href="index.html" class="logo d-flex align-items-center">
                  <span>CoinBridge</span>
                </a>
                <p>Creating Financial Bridges, One Coin at a Time.</p>
                <div class="social-links d-flex mt-4">
                  <a href="https://twitter.com/coinbridgeAf" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
                  <a href="https://github.com/Tomorrow-Labs-Africa" class="github"><i class="bi bi-github"></i></a>
                </div>
              </div>
      
              <div class="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>
      
              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                  <strong>Email:</strong> <a style="color: white;" href="mailto:coinbridgeafrica@gmail.com">info@coinbridge.co</a><br>
                </p>
      
              </div>
      
            </div>
          </div>
      
          <div class="container mt-4">
            <div class="copyright">
              &copy; Copyright <strong><span>CoinBridge</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/impact-bootstrap-business-website-template/ -->
            </div>
          </div>
      
        </footer><!-- End Footer -->
        <!-- End Footer -->
      `;
  }
}
customElements.define('coinbridge-root', AppElement);
