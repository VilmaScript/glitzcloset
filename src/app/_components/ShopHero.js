const ShopHero = () => {
    return (
      <div className="-mx-12">
        <div 
        className=" relative h-[30vh] w-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/shophero.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary bg-opacity-20"></div>
  
        {/* Text Content */}
        <div className="absolute inset-0 animate-pop-color-change flex items-center justify-center text-white text-xl font-medium ">
          Start Shopping!
        </div>
      </div>
      </div>
    );
  };
  
  export default ShopHero;
  