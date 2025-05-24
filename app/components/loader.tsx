// components/geometric-loader.tsx
"use client"

export default function GeometricLoader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated Geometric Shapes */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Rotating squares */}
          <div className="absolute inset-0 border-4 border-light-green rounded-lg animate-spin"></div>
          <div
            className="absolute inset-4 border-4 border-yellow rounded-lg animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          <div
            className="absolute inset-8 border-4 border-dark-orange rounded-lg animate-spin"
            style={{ animationDuration: "2s" }}
          ></div>
          <div className="absolute inset-12 w-8 h-8 bg-dark-green rounded-full"></div>
        </div>

        {/* Organization Name with Staggered Animation */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-dark-green font-manrope">
            <span className="inline-block animate-bounce" style={{ animationDelay: "0s" }}>Y</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>o</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>u</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.3s" }}>n</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>g</span>
            <span className="inline-block animate-bounce mx-2" style={{ animationDelay: "0.5s" }}>&</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.6s" }}>S</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.7s" }}>k</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.8s" }}>i</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.9s" }}>l</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1s" }}>l</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1.1s" }}>e</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "1.2s" }}>d</span>
          </h1>
          <h2
            className="text-xl font-semibold text-ash font-manrope opacity-0"
            style={{
              animation: "fadeIn 0.5s ease-in-out 1.5s forwards",
            }}
          >
            Advancement Initiative
          </h2>
        </div>

        {/* Loading Text */}
        <p className="text-ash font-manrope text-sm animate-pulse">Loading your experience...</p>
      </div>

      {/* Custom CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}