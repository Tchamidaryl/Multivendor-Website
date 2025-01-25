import { useCarousel } from "nuka-carousel";

export const CustomDots = () => {
  const { totalPages, currentPage, goToPage } = useCarousel();

  return (
    <div className="relative w-full h-full">
      {/* Carousel Images (placeholder for carousel content) */}
      <div className="relative w-full h-full">
        {/* Your carousel content here */}
      </div>

      {/* Dots positioned at the bottom middle */}
      <div className="absolute bottom-[320px] sm:bottom-[370px] left-1/2 transform -translate-x-1/2 flex gap-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentPage === index ? "true" : undefined}
            className={`w-2 h-2 rounded-full cursor-pointer
              ${currentPage === index ? "bg-gray-800" : "bg-gray-200"}
              hover:${currentPage === index ? "bg-gray-800" : "bg-gray-600"}`}
          />
        ))}
      </div>
    </div>
  );
};
