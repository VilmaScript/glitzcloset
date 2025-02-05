


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

const FooterImages = () => {
  return (
    <div className="flex w-full overflow-hidden">
      <Image src="/footerimg1.jpg" alt="Footer Image 1" width={0} height={0} sizes="25vw" className="w-full h-auto" />
      <Image src="/footerimg2.jpg" alt="Footer Image 2" width={0} height={0} sizes="25vw" className="w-full h-auto" />
      <Image src="/footerimg3.jpg" alt="Footer Image 3" width={0} height={0} sizes="25vw" className="w-full h-auto" />
      <Image src="/footerimg4.jpg" alt="Footer Image 4" width={0} height={0} sizes="25vw" className="w-full h-auto" />
    </div>
  );
};

export default FooterImages;
