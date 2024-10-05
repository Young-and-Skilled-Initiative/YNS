import React from "react";

const NewsAndInsightsBlogHero = () => {
  const categories = ["All", "Education", "Career", "Company", "Courses"];
  const backgroundImage = "/path-to-your-image.jpg"; // Update this with your image path
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-green-900 text-white py-12 px-4 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          News Insights & <span className="text-gradient">Blog</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Latest community tips for you. Dive into our latest posts, explore
          various learning categories, and stay informed about the best
          practices in education.
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${
                index === 0
                  ? "bg-white text-black"
                  : "bg-gray-700 text-gray-300"
              } py-2 px-4 rounded-[2.75rem] hover:bg-white hover:text-black transition`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Star decoration */}
      <div className="absolute top-10 right-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="orange"
          className="w-8 h-8"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    </section>
  );
};

export default NewsAndInsightsBlogHero;
