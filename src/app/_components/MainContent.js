import { eb_garamond_init } from "../layout"
import Product from "./Product"


const MainContent = ({selectedCategory}) => {
    
  return (
    <div className="border-l-2 ps-4 border-primary">
    <p className={`text-2xl text-tertiary font-medium text-center ${eb_garamond_init.variable} custom-heading `}> Check out {selectedCategory}</p>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-10 ">
        <Product
             imageWidth={250} 
             imageHeight={250} 
             sliceRange={[0,8]}
             showCategoryButton={false}
             topValue="-top-12"
            
            />
        </div>
    </div>
  )
}

export default MainContent