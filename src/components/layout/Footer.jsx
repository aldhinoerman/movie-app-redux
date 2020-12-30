import React from 'react';
import '../assets/footer.css';
import logo from '../img/youtube.svg';
import apple from '../img/apple.png';
import android from '../img/android.png';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';
import instagram from '../img/instagram.svg';

function Footer() {
  return (
    <footer className="footer">
            <div className="row">
                <div className="col-sm-7 mr-5 ml-5">
                    <h2><img src={logo} width="50px" height="auto" /><a href="#" className="text-decoration-none text-white" > Milan TV</a></h2>
                        <div className="content">
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            </p>
                        </div>
                </div>
                <div className="col mr-1">
                    <h2>About Us</h2>
                        <div className="content">
                            <a className="teks text-decoration-none" href="#">Blog</a>
                        </div>
                        <div className="layanan">
                            <a className="teks text-decoration-none" href="#">Layanan</a>
                        </div>
                        <div className="karir">
                            <a className="teks text-decoration-none" href="#">Karir</a>     
                        </div>
                        <div className="pusat media">
                            <a className="teks text-decoration-none" href="#">Pusat Media</a>     
                        </div>
                </div>
                <div className="col mr-3">
                    <div className="mediaSocial">
                        <h2>Media Social</h2>
                            <a className="facebook text-decoration-none" href="#"> <img src={facebook} width="30px" height="auto" /> </a>
                            <a className="twitter text-decoration-none" href="#"> <img src={twitter} width="30px" height="auto" /> </a>
                            <a className="instagram text-decoration-none" href="#"> <img src={instagram} width="30px" height="auto" /> </a>
                    </div>
                    <h2>Download</h2>
                    <div className="mb-2">
                        <a className="ios text-decoration-none mr-2" href="#"><img src={apple} width="150px" height="auto"/></a>
                    </div>
                    <div>
                        <a className="android text-decoration-none" href="#"><img src={android} width="150px" height="auto" /></a>
                    </div>
                </div>
                <hr className="line"/>
                <h6>Team<sup> D </sup>Glints Academy</h6>
            </div>
        </footer>
  );
}

export default Footer;
