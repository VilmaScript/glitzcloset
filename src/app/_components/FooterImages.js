


// import Image from 'next/image';

// const FooterImages = () => {
//   return (
//     <div className="flex w-full -m-4">
//       <Image src="/footerimg1.jpg" alt="Footer Image 1" width={0} height={0} sizes="25vw" className="w-full h-auto" />
//       <Image src="/footerimg3.jpg" alt="Footer Image 3" width={0} height={0} sizes="25vw" className="w-full h-auto" />
//       <Image src="/footerimg4.jpg" alt="Footer Image 4" width={0} height={0} sizes="25vw" className="w-full h-auto" />
//       <Image src="/footerimg2.jpg" alt="Footer Image 2" width={0} height={0} sizes="25vw" className="w-full h-auto" />
//     </div>
//   );
// };

// export default FooterImages;

import Image from 'next/image';
import { eb_garamond_init } from '../layout';

const FooterImages = () => {
  return (
   <div className='-mx-12'>
    <p className={`w-full text-center bg-primary text-white py-2  ${eb_garamond_init.variable} custom-heading font-medium`}>For more design inspirations follow @glitzinteriors</p>
     <div className="flex w-full overflow-hidden">
      <Image src="/footerimg1.jpg" alt="Footer Image 1" width={0} height={0} sizes="25vw" className="w-full h-auto" />
      <Image src="/footerimg2.jpg" alt="Footer Image 2" width={0} height={0} sizes="25vw" className="w-full h-auto" />
      <Image src="/footerimg3.jpg" alt="Footer Image 3" width={0} height={0} sizes="25vw" className="w-full h-auto" />
      <Image src="/footerimg4.jpg" alt="Footer Image 4" width={0} height={0} sizes="25vw" className="w-full h-auto" />
    </div>
   </div>
  );
};

export default FooterImages;
