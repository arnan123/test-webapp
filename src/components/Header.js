import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, TelephoneInbound } from "react-bootstrap-icons";

function HeaderComponent() {
  return (
    <div className="bg-primary py-2">
      <div className="container">
        <div className="row align-items-center">
          {/* Social Media Icons */}
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start mb-2 mb-md-0">
            <div className="d-flex gap-2 text-white">
              <Facebook size={24} />
              <Twitter size={24} />
              <Instagram size={24} />
              <Linkedin size={24} />
              <Youtube size={24} />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-12 col-md-4 d-flex justify-content-center mb-2 mb-md-0">
            <div className="d-flex gap-4">
              <p className="text-white mb-0">Pay Rent</p>
              <p className="text-white mb-0">Repair Request</p>
              <p className="text-white mb-0">Apply Now</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center text-white">
            <TelephoneInbound size={24} />
            <p className="mb-0 ml-2">(330) 600-4556</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
