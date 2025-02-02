import Arrivals from "./_components/Arrivals";
import Hero from "./_components/Hero";
import Introduction from "./_components/Introduction";
import LearnMore from "./_components/LearnMore";
import More from "./_components/More";
import Reviews from "./_components/reviews";
import SectionOne from "./_components/SectionOne";
import SectionTwo from "./_components/SectionTwo";


export default function Home() {
  return (
    <div>
   <Hero/>
   <SectionTwo/>
   <SectionOne/>
   <Arrivals/>
   <Introduction/>
   <Reviews/>
   <More/>
   <LearnMore/>
    </div>
   
    
  );
}
