
import Product from "./Product";

const SectionOne = () => {
    return (
        <div className=" pt-4">
           <div className="flex justify-center gap-x-10 ">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            <Product
             imageWidth={250} 
             imageHeight={300} 
             sliceRange={[3, 6]} 
             showCategoryButton={true}
             topValue="-top-16"
            />
            </div>
           </div>
        </div>
    )
}

export default SectionOne