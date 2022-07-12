import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DUST</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main>
        <div className='landingOne'>
          <div className='topNavBar'>
            <div className='topLeftNavBar'>
              <ul className='topLeftNavBarUL'>
                <li className='topLeftNavBarUL'>Woman</li>
                <li className='topLeftNavBarUL'>Man</li>
                <li className='topLeftNavBarUL'>Editorial</li>
                <li className='topLeftNavBarUL'>Search</li>
              </ul>
            </div>

            <div className='topRightNavBar'>
              <ul className='topRightNavBarUL'>
                <li className='topRightNavBarUL'><img src='/iconUser.png' className='iconUser'></img></li>
                <li className='topRightNavBarUL'><img src='/iconCart.png' className='iconCart'></img></li>
              </ul>
            </div>
          </div>

          <div className='landingOneText'>
            <h2 className='landingOneTitle'>Our community shapes us.</h2>
            <p className='landingOneBody'>We started as a humble brand, which then continue to flourish into a tight-knit community that fosters friendship, positivity, and inclusivity.</p>
          </div>

          <div className='landingOneLogo'>
            <img src='/logo.png'></img>
          </div>
        </div>


        <div className='landingTwo'>
          <h2 className='landingTwoTitle'>Our Latest Product</h2>
         <div className='latestProduct'>
           <span className='displayLatestProduct'><img src='/landingTwoA.png' className='latestProductIMG'></img></span>
           <span className='displayLatestProduct'><img src='/landingTwoBB.png' className='latestProductIMG'></img></span>
           <span className='displayLatestProduct'><img src='/landingTwoC.png' className='latestProductIMG'></img></span>
         </div>
        </div>


        <div className='landingThree'>
          <div className='landingThreeImage'></div>
        </div>


        <div className='landingFour'>
          <div className='landingFourTop'>
            <p className='landingFourTitle'>DUST Stories</p>

            <div className='landingFourTopRow'>
              <div className='landingFourTopRowStories'>
                <img src='/landingFour.png' className='landingFourIMG'></img>
                <p className='landingFourTopRowSubtitle'>EVENT — 29/10/2020</p>
                <p className='landingFourTopRowTitle'>Our Sustainability Effort in Sumba</p>
              </div>
              <div className='landingFourTopRowStories'>
                <img src='/landingFour.png' className='landingFourIMG'></img>
                <p className='landingFourTopRowSubtitle'>OUTREACH — 29/10/2020</p>
                <p className='landingFourTopRowTitle'>Lorem Ipsum Dolor sit Amer</p>
              </div>
              <div className='landingFourTopRowStories'>
                <img src='/landingFour.png' className='landingFourIMG'></img>
                <p className='landingFourTopRowSubtitle'>STYLE GUIDE — 29/10/2020</p>
                <p className='landingFourTopRowTitle'>Lorem Ipsum Dolor sit Amer</p>
              </div>
              <div className='landingFourTopRowStories'>
                <img src='/landingFour.png' className='landingFourIMG'></img>
                <p className='landingFourTopRowSubtitle'>STORIES — 29/10/2020</p>
                <p className='landingFourTopRowTitle'>DUST September Style Guide</p>
              </div>
            </div>

            <button className='buttonSeeMore'>SEE MORE</button>
          </div>

          <div className='landingFourBottom'>
            <div className='landingFourBottomTitle'>
              <p className='landingFourBottomTitleLeft'>Inspiration from our Instagram</p>
              <img src='/landingFourLine.png' className='landingFourBottomLine'></img>
              <p className='landingFourBottomTitleRight'>@dust.id</p>
            </div>

            <div className='landingFourBottomRow'>
              <div className='landingFourBottomSlideTrack'>
                <img src='/landingFourBottomRowA.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowB.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowC.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowD.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowE.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowA.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowB.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowC.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowD.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowE.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowA.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowB.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowC.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowD.jpg' className='landingFourBottomRowIMG'></img>
                <img src='/landingFourBottomRowE.jpg' className='landingFourBottomRowIMG'></img>
              </div>
            </div>
          </div>
        </div>
      </main>


      <footer>
          <div className='footerBlock'>
            <div className='footerBlockTop'>
              <div className='footerBlockTopA'>
                <p className='footerBlockTopTitle'>SHOP</p>
                <p className='footerBlockTopAText'>Women</p>
                <p className='footerBlockTopAText'>Men</p>
              </div>

              <div className='footerBlockTopB'>
                <p className='footerBlockTopTitle'>HELP</p>
              <p className='footerBlockTopBText'>Cara Berbelanja</p>
              <p className='footerBlockTopBText'>Konfirmasi Pembayaran</p>
              <p className='footerBlockTopBText'>Pengembalian dan Penukaran</p>
              <p className='footerBlockTopBText'>Berbelanja dari Instagram</p>
              <p className='footerBlockTopBText'>Panduan Ukuran</p>
              <p className='footerBlockTopBText'>FAQs</p>
              <p className='footerBlockTopBText'>Hubungi Kami</p>
              <p className='footerBlockTopBText'>Lokasi Toko</p>
              <p className='footerBlockTopBText'>Covid-19 Update</p>
              </div>

              <div className='footerBlockTopC'>
                <p className='footerBlockTopCTitle'>Receive exclusive promotion, style guide, news, and more!</p>

                <form className='emailForm'>
				          <input className='inputEmail' type="text" name="email" placeholder='Tell us your email, and we will keep you updated!' color='white'></input>
                  <input className='submit' type="submit" value="Subscribe"></input>
                </form>
              </div>
            </div>

            <div className='footerBlockBottom'>
              <div className='footerBlockBottomA'>
                <img src='/logo.png'></img>
              </div>

              <div className='footerBlockBottomB'>
                <div className='footerRowIcon'>
                  <ul className='footerBlockBottomBIcon'>
                    <li className='footerBlockBottomBIcon'><img src='/iconFacebook.png' className='iconFacebook'></img></li>
                    <li className='footerBlockBottomBIcon'><img src='/iconInstagram.png' className='iconInstagram'></img></li>
                    <li className='footerBlockBottomBIcon'><img src='/iconYoutube.png' className='iconYoutube'></img></li>
                    <li className='footerBlockBottomBIcon'><img src='/iconWhatsapp.png' className='iconWhatsapp'></img></li>
                    <li className='footerBlockBottomBIcon'><img src='/iconTikTok.png' className='iconTikTok'></img></li>
                  </ul>
                </div>
                <br></br>
                <div className='footerRowInfo'>
                  <ul className='footerBlockBottomBInfo'>
                    <li className='footerBlockBottomBInfo'>Tentang Kami</li>
                    <li className='footerBlockBottomBInfo'>Syarat dan Ketentuan</li>
                    <li className='footerBlockBottomBInfo'>Careers</li>
                    <li className='footerBlockBottomBInfo'>Press</li>
                  </ul>
                </div>
                <br></br>
                <p className='footerCopyright'>© 2021 DUST All Rights Reserve</p>
              </div>
            </div>
          </div>
      </footer>

      <style jsx>{`

        .landingOne {
          height: 800px;
          background-image: url('/landingOne.png');
          background-repeat: no-repeat;
          background-size: cover;
        }

        .topNavBar {
          height: 30px;
        }

        .topLeftNavBarUL {
          list-style-type: none;
          float: left;
          margin-top: 15px;
          margin-bottom: 15px;
          margin-left: 15px;
          padding-left: 10px;
          font-size: 18px;
          font-family: arial;
        }

        .topRightNavBarUL {
          list-style-type: none;
          float: right;
          margin-top: 15px;
          margin-bottom: 15px;
          margin-right: 15px;
          padding-right: 10px;
          font-size: 18px;
        }

        .iconUser, 
        .iconCart {
          width: 40px;
          height: 40px;
        }

        .landingOneTitle {
          font-family: serif;
          font-weight: 400;
          font-size: 52px;
        }

        .landingOneText {
          position: absolute;
          right: 100px;
          width: 400px;
          top: 50%;
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
        }

        .landingOneBody {
          font-family: arial;
          font-size: 14px;
        }

        .landingOneLogo {
          width: 340px;
          height: 100px;
          position: absolute;
          left: 20px;
          bottom: 120px;
        }

        .logo {
          float: left;
        }

        .landingTwo {
          height: 600px;
          background: #FFFFFF;
          text-align: center;
          padding: 50px;
        }

        .landingTwoTitle {
          margin-top: 50px;
          margin-bottom: 40px;
          font-family: arial;
          font-size: 36px;
          font-weight: 400;
        }

        .latestProduct {
          height: 450px;
          width: 320px;
          display: inline;
          align-items: center;
          justify-content: center;
        }

        .displayLatestProduct {
          padding: 20px;
        }

        .latestProductIMG {
          width: 320px;
          height: 400px;
          opacity: 0.5;
        }

        .latestProductIMG:hover {
          opacity: 1.0;
        }

        .landingThree {
          height: 580px;
          background: #dedede;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .landingThreeImage {
          width: 1200px;
          height: 500px;
          animation-name: landingThreeAnimation;
          animation-duration: 60s;
          animation-iteration-count: infinite;
          overflow: infinite;
        
        }

        @keyframes landingThreeAnimation {
          0% {
            background-image: url('/landingThreeA.png');
          }
          10% {
            background-image: url('/landingThreeB.png');
          }
          20% {
            background-image: url('/landingThreeA.png');
          }
          30% {
            background-image: url('/landingThreeB.png');
          }
          40% {
            background-image: url('/landingThreeA.png');
          }
          50% {
            background-image: url('/landingThreeB.png');
          }
          60% {
            background-image: url('/landingThreeA.png');
          }
          70% {
            background-image: url('/landingThreeB.png');
          }
          80% {
            background-image: url('/landingThreeA.png');
          }
          90% {
            background-image: url('/landingThreeB.png');
          }
          100% {
            background-image: url('/landingThreeA.png');
          }
        }

        .landingThreeTitle {
          position: absolute;
          font-family: arial;
          color: white;
        }

        .landingFour {
          height: 950px;
          background: #ffffff;
          display: block;
        }

        .landingFourTop {
          display: block;
          margin-top: 40px;
          margin-left: auto;
          margin-right: auto;
        }

        .landingFourTitle {
          font-family: arial;
          font-size: 36px;
          font-weight: 400;
          text-align: center;
        }

        .landingFourTopRow {
          display: flex;
          justify-content: center;
        }

        .landingFourTopRowStories {
          width: 235px;
          height: 350px;
          padding: 10px;
          background-color: #ffffff;
        }

        .landingFourTopRowStories:hover {
          transform: scale(1.2)
        }

        .landingFourTopRowTitle {
          font-family: arial;
          font-size: 24px;
          font-weight: 400;
        }

        .landingFourTopRowSubtitle {
          font-family: arial;
          font-size: 12px;
          font-weight: 400;
        }

        .landingFourIMG {
          width: 235px;
          height: 235px;
          duration: 5s;
        }

        .buttonSeeMore {
          width: 180px;
          height: 40px;
          font-size: 14px;
          display: block;
          margin-top: 15px;
          margin-left: auto;
          margin-right: auto;
          background: transparent;
          border: 1px solid black;
        }

        .landingFourBottom {
          margin-top: 100px;
        }

        .landingFourBottomTitle {
          display: flex;
          font-size: 24px;
          justify-content: center;
        }

        .landingFourBottomLine {
          height: 1px;
          width: 735px;
          padding-top: 45px;
          padding-left: 20px;
          padding-right: 20px;
        }

        .landingFourBottomRow {
          background: white;
          height: 250px;
          margin: auto;
          overflow:hidden;
          position: relative;
          
          &::before,
          &::after {
            @include white-gradient;
            content: "";
            position: absolute;
            width: 250px;
            height: 250px;
            z-index: 2;
          }
          
          &::after {
            right: 0;
            top: 0;
            transform: rotateZ(180deg);
          }
        
          &::before {
            left: 0;
            top: 0;
          }
        }

        .landingFourBottomSlideTrack {
          display: flex;
          float: center;
          animation: sliding linear infinite;
          animation-duration: 60s;
        }

        @keyframes sliding {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 7))}
        }

        .landingFourBottomTitleLeft {
          font-family: serif;
          font-size: 26px;
          font-weight: 400;
        }

        .landingFourBottomTitleRight {
          font-family: arial;
          font-size: 24px;
          font-weight: 400;
          color: #F87E59;
        }

        .landingFourBottomRowIMG {
          width: 250px;
          height: 250px;
          display: flex;
          margin-left: 10px;
        }

        footer {
          background: #f87e59;
          width: 100%;
          display: flex;
        }

        .footerBlockTop {
          margin-top: 37.5px;
          margin-left: 40px;
          display: flex;
          font-size: 14px;
        }

        .footerBlockTopA {
          margin-right: 85px;
          width: 80px;
          font-family: arial;
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
        }

        .footerBlockTopB {
          width: 250px;
          margin-right: 300px;
          font-family: arial;
          font-size: 14px;
          font-weight: 400;
          color: #ffffff;
        }

        .footerBlockTopC {
          width: 470px;
          font-family: arial;
          font-size: 36px;
          font-weight: 400;
          color: #ffffff;
        }

        .emailForm {
          display: flex;
          border-bottom: 1px solid #eaeaea;
          color: white;
        }

        input {
          width: 360px;
          background: transparent;
          border: 0px;
          color: white;
          font-size: 16px;
        }

        .submit {
          width: 80px;
          font-size: 16px;
          text-align: center;
        }

        .footerBlockBottom {
          margin-top: 40px;
          margin-bottom: 20px;
          margin-left: 20px;
          display: flex;
        }

        .footerBlockBottomA {
          width: 340px;
          height: 100px;
          margin-right: 350px;
        }

        .footerBlockBottomB {
          padding: 0;
          display: block;
        }

        .footerBlockBottomBIcon {
          list-style-type: none;
          float: left;
          padding-right: 20px;
          font-size: 20px;
        }

        .footerBlockBottomBInfo {
          list-style-type: none;
          float: left;
          padding-right: 20px;
          font-family: arial;
          font-size: 11px;
          color: #ffffff;
        }

        .footerCopyright {
          padding-left: 40px;
          font-family: arial;
          color: #ffffff;
        }

      `}</style>
    </div>
  )
}
