import Arrivals from "./_components/Arrivals";
import FooterImages from "./_components/FooterImages";
import Hero from "./_components/Hero";
import Introduction from "./_components/Introduction";
import LearnMore from "./_components/LearnMore";
import More from "./_components/More";
import Reveal from "./_components/Reveal";
import Reviews from "./_components/reviews";
import SectionOne from "./_components/SectionOne";
import SectionTwo from "./_components/SectionTwo";


export default function Home() {
  return (
    <div>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <SectionTwo />
      </Reveal>
      <Reveal>
        <SectionOne />
      </Reveal>
      <Reveal>
        <Arrivals />
      </Reveal>
      <Reveal>
        <Introduction />
      </Reveal>
      <Reveal>
        <Reviews />
      </Reveal>
      <Reveal>
        <More />
      </Reveal>
      <Reveal>
        <LearnMore />
      </Reveal>
      <Reveal>
        <FooterImages />
      </Reveal>


    </div>
  );
}
