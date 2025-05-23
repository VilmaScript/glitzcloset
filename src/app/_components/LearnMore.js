import Link from "next/link"


const LearnMore = () => {
  return (
    <div className="md:px-16 px-2 text-center mb-16">
      <p className="text-primary mb-5">
        Our mission at <span className={`font-bold tracking-wide font-eb-garamond`}>GLITZINTERIORS </span> is to provide you with the best quality furniture and home decor items at the most affordable prices. We believe that everyone deserves to live in a beautiful home, and we are here to help you achieve that. Whether you are looking for a new sofa, a stylish coffee table, or a unique piece of wall art, we have everything you need to create the home of your dreams. So why wait? Start shopping now and turn your house into a home today!

      </p>
      <Link href="/about" className="bg-secondary text-white px-2.5 py-0.5 track-wider ">LEARN MORE</Link>
    </div>
  )
}

export default LearnMore