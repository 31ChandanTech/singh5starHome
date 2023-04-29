import React from "react";
import "./art.css";
import ArtPoster from "./ArtPoster";
import PosterContant from "./ArtPoster.json";
import ArtFooter from "./ArtFooter";

const Art = () => {
  return (
    <div className="artcontainer" data-aos='fade-up'>
      <h2>THE ART PROGRAM</h2>
      <p className="artpara">
        SINGH announces its latest art partnership with the blue-chip art company{" "}
        <a rel="noreferrer" href="https://dagworld.com/" target="_blank">
          DAG
        </a>{" "}
        (formerly Delhi Art Gallery) for an exclusive showcase of a carefully
        curated selection of works of twentieth century Indian art, entirely
        from the gallery collection, throughout the restaurant. Marking the
        debut, the collaboration highlights works of fine art from some of
        India’s most prolific artists and celebrates the diverse characters and
        cultures of the subcontinent; allowing new generations of art
        enthusiasts and collectors a fresh point of view on India’s rich art
        history.{" "}
      </p>
      <p className="artpara">
        Carefully amassing works by underrepresented influential artists,
        collecting important works from the 19th and 20th centuries, it places
        them at the forefront of the modern art conversation alongside familiar
        names such as Picasso, Matisse, and the German expressionists.
        Handpicked by DAG in association with SINGH, the special collection
        includes vibrant pieces from some of India’s most celebrated artists
        including Himmat Shah, Ambadas, Sohan Qadri, Avinash Chandra, G R
        Santosh, Dharamanarayan Dasgupta, and P Kemraj. Spanning the 1960s
        through the early 2000s, the current collection is a harmonious blend of
        expressionism, modernism, and surrealism.
      </p>
      <p className="artpara">
        In forging this partnership, our hope is to utilize SINGH as a powerful
        platform; a platform to start new conversations around India’s rich
        cultural heritage, bringing the characters and flavors that make the
        country the wonderfully rich and inspiring place it is.
      </p>

      {PosterContant.map((elem, index) => {
        return <ArtPoster key={elem.id + index} sorce={elem.posterUrl} posterSize={elem.posterSize} posterName={elem.posterName} posterYear={elem.posterYear} posterDiscription={elem.posterDiscription} />
      })}

      <ArtFooter />

    </div>
  );
};

export default Art;
