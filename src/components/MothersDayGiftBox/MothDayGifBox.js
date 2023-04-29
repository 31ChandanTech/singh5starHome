import React from "react";
import "./mothdaygifbox.css";
import {Link} from "react-router-dom";

const MothDayGifBox = () => {
  return (
    <div className="MothDayGifBox_container" data-aos="fade-up">
      <h2>
        MOTHER'S DAY AT <br /> SINGH{" "}
      </h2>
      <p>Make Mom feel extra special! </p>
      <p>
        We've made it easy to pre-order the ultimate Mother's Day gift, which
        can be added to your <br /> dinner or brunch reservation, or picked up
        between May 11-14.{" "}
      </p>
      <p>Each Gift Box includes:</p>
      <p>
        - One Box of Four SINGH Macarons: Two Masala Chai and Two Mango Lassi
      </p>
      <p>- One SINGH Home Candle: Attar No. 36</p>
      <p>- One Box of SINGH Home Matches</p>
      <p>
        - Two VAHDAM India Loose Leaf Tea Tins: One Masala Chai and One Turmeric
        Spiced Blend
      </p>
      <p>- One SINGH Home G & Tea Straw</p>
      <p>
        When ordering, please provide the name, date and time of your
        reservation, or the date and <br /> time you wish to pickup.
      </p>
      <p>
        Pickup hours are Thurs-Fri between 5pm-10pm and Sat-Sun between
        11:30am-10pm.
      </p>
      <p>
        For shipping nationwide, please place your order through{" "}
        <a href="/">SINGH Home</a>.
      </p>

      <div className="mothday_anchor" data-aos="fade-up">
        <Link to="/store/product/mothers-day-gift-box">
          <div className="img">
          <img
            src="https://lh3.googleusercontent.com/lP_ZHvPjZtK2IYh404TLIzzwZrSAewSUn3Qk1k-9OKwd5tO38Im2dcxSs29rv5fBOLGuh3GsSgiulVmdMO3ungAMGTv2xZ2DOVc=s465"
            alt="GiftHamper"
          />
          </div>
          <p>MOTHER'S DAY GIFT BOX</p>
          <p>&#x20b9; 5000</p>
        </Link>
      </div>
    </div>
  );
};

export default MothDayGifBox;
