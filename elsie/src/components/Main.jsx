import React, { useState } from "react";
import Section from "./Section";
import Messages from "./Messages";

export default function Main() {
  //base url for image paths
  const [baseurl] = useState("images/");

  //img paths
  const [imgs] = useState({
    carousel1: [
      `${baseurl}L1.jpg`,
      `${baseurl}L2.jpg`,
      `${baseurl}L3.jpg`,
      `${baseurl}L5.jpg`,
      `${baseurl}L6.jpg`
    ],
    carousel2: [`${baseurl}P1.jpg`, `${baseurl}P2.jpg`, `${baseurl}P3.jpg`],
    carousel3: [`${baseurl}P4.jpg`, `${baseurl}P5.jpg`, `${baseurl}P6.jpg`]
  });
  
  return (
    <main className="main">
      <Messages />
      <Section images={imgs.carousel1}>
        <ul className="section__list">
          <li className="section__list__item">Henry Loves Elsie</li>
        </ul>
      </Section>
      <Section images={imgs.carousel2}>
        <h3 className="section__title">I love you</h3>
        <p className="section__content__body">
           To the moon and back
        </p>
        <div style={{ borderRadius: '12px', overflow: 'hidden', width: '100%', height: '352px' }}>
      <iframe
        src="https://open.spotify.com/embed/track/4iZ4pt7kvcaH6Yo8UoZ4s2?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '12px' }}
      ></iframe>
    </div>

    <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
            <iframe
                src="https://open.spotify.com/embed/track/6PGoSes0D9eUDeeAafB2As?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: '12px' }}

            ></iframe>
        </div>
      </Section>
      
      <Section images={imgs.carousel3}>Never Forget
      Henry loves you {"<3"}</Section>
      
    </main>
  );
}
