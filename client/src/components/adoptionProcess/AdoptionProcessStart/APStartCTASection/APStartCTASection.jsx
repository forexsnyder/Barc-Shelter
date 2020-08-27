import React from 'react'

import APStartCTAImageCard from "./APStartCTAImageCard/APStartCTAImageCard";
import APStartCTAButton from "./APStartCTAButton/APStartCTAButton";
import APStartCTAButtonSmall from "./APStartCTAButtonSmall/APStartCTAButtonSmall";

import "./APStartCTASection.css"

import _2CatsAndADog from "./2-cats-and-a-dog.png";
import catYawning from "./cat-yawning.png";

const APStartCTASection = () => {
  return (
    <div className="cta-section">
      <div className="cta-see-our-pets">
        <APStartCTAImageCard imageSrc={_2CatsAndADog} />
        <div>
          <APStartCTAButtonSmall buttonText={"See our Pets!"} />
          <APStartCTAButtonSmall buttonText={"See our Pets!"} />
        </div>
      </div>
      <div className="cta-sponsor-a-pet">
        <APStartCTAImageCard imageSrc={catYawning} />
        <APStartCTAButton buttonText={"Sponsor a Pet"} />
      </div>
    </div>
  );
}

export default APStartCTASection
