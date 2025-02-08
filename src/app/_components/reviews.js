import { eb_garamond_init } from "../layout"
import Card from "./Card"


const Reviews = () => {
  return (
    <div >
         <div className="mt-14 mb-20">
                <h2 className={`${eb_garamond_init.variable} text-primary text-3xl custom-heading border-primary border-b-2`}>Customers Reviews</h2>
                </div>
       <div className="grid grid-cols-4 gap-12 px-20 text-center">
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       </div>
    </div>
  )
}

export default Reviews