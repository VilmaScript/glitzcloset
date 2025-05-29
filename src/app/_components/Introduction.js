
import Image from "next/image"

const Introduction = () => {
  return (
    <div className="-mx-12 md:-mx-0 block md:flex md:h-[40vh] bg-primary justify-between gap-9 p-10">
      <div className="text-white mb-7 md:mb-0 ">
        <h2 className="tracking-wider text-xl">Introducing</h2>
        <h3 className={`md:text-5xl text-3xl font-eb-garamond font-medium mb2`}>GLITZINTERIORS</h3>
        <p className="tracking-widest">A LIMITED EDITION COLLECTION</p>
        <p className="mb-5 tracking-widest">WHERE INTERIOR DECOR MEETS CREATIVITY</p>
        <button className="bg-secondary text-white px-2.5 py-0.5 font-medium track-wider ">SHOP NOW</button>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-3">
        {/* First Image (Spans 2 Columns) */}
        <div className="row-span-2 ">
          <Image
            className="object-cover w-full h-full rounded-tl-full  border-2 border-white"
            src="/bed.jpg" // Replace with your image path
            alt="Image 1"
            width={100}
            height={200}
          />
        </div>

        {/* Second Image (Spans 1 Column) */}
        <div className="  ">
          <Image
            className="object-cover h-full w-full border-2 border-white "
            src="/sculpture.jpg" // Replace with your image path
            alt="Image 2"
            width={200}
            height={200}
          />
        </div>

        {/* Fourth Image (Spans 1 Column) */}
        <div className="row-span-2  ">
          <Image
            className="object-cover  w-full h-full border-2 border-white"
            src="/bed2.jpg" // Replace with your image path
            alt="Image 4"
            width={200}
            height={200}
          />
        </div>

        {/* Third Image (Spans 2 Columns) */}
        <div className=" ">
          <Image
            className="object-cover w-full h-full border-2 border-white"
            src="/figurine.jpg" // Replace with your image path
            alt="Image 3"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}

export default Introduction