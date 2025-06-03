import { scroller } from "react-scroll";

export default function HeroSection() {
  const scrollToContact = () => {
    scroller.scrollTo("Contact", {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="hero--section--title">Hey, I'm Ali Sher</p>
          <h1 className="section--title">
            <span className="hero--section-title--color">
              Full-Stack Web Development Expert
            </span>{" "}
          </h1>
          <p className="hero--section-description">
            Transforming ideas into powerful web experiences through
            cutting-edge technology.
          </p>
        </div>
        <button className="btn btn-primary" onClick={scrollToContact}>
          Contact Me
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
