import Loader from "./Loader";
import Product from "./Product";
import Reveal from "./Reveal";

const MainContent = ({ setPage, totalProducts, page, loading }) => {
  const totalPages = Math.ceil(totalProducts / 8);

  const getButtons = () => {
    const btns = [];

    // Always show first page
    if (totalPages > 1) btns.push(1);

    // Show ellipsis if needed before current page
    if (page > 3) btns.push("...");

    // Show pages around current page
    for (let i = page - 1; i <= page + 1; i++) {
      if (i > 1 && i < totalPages) {
        btns.push(i);
      }
    }

    // Show ellipsis if needed after current page
    if (page < totalPages - 2) btns.push("...");

    // Always show last page
    if (totalPages > 1 && totalPages !== 1) btns.push(totalPages);

    return btns;
  };

  const buttons = getButtons();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      {/* Wrapper with padding and max-width for proper centering */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
         <Reveal>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 mb-10">
         
          <Product
            imageWidth={230}
            imageHeight={230}
            sliceRange={[0, 8]}
            showCategoryButton={false}
            topValue="-top-12"
          />
      
        </div>
        </Reveal>    
      </div>

      <div className="my-8 text-center">
        <div className="flex justify-center mt-4 gap-2">
          {buttons.map((btn, i) =>
            btn === "..." ? (
              <span key={i} className="px-3 py-1.5 text-sm text-gray-500">
                ...
              </span>
            ) : (
              <button
                key={i}
                onClick={() => setPage(btn)}
                className={`px-3 py-1.5 text-sm shadow-xl border rounded-full ${
                  page === btn
                    ? "bg-primary text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {btn}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
