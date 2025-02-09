export default function ComingSoon() {
    return (
      <div className="flex flex-col items-center justify-center bg-[#FFF5E1] text-[#4A1E12] p-6 text-center min-h-screen">
        {/* Logo or Illustration */}
        <div className="w-32 h-32 mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
            alt="Baking Icon"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight">
          Our Website is Baking! 🍪  
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-[#9C4221] mt-2">
          हमारी वेबसाइट बेक हो रही है!  
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl mt-4 max-w-2xl text-gray-700 leading-relaxed">
          We’re whipping up something delightful in our digital oven! <br />
          <span className="text-[#9C4221] font-medium">हम अपनी डिजिटल ओवन में कुछ स्वादिष्ट तैयार कर रहे हैं!</span>
        </p>

        <p className="text-lg md:text-xl mt-2 max-w-2xl text-gray-700 leading-relaxed">
          Stay tuned for a fresh experience coming your way soon. <br />
          <span className="text-[#9C4221] font-medium">जल्द ही एक नई और ताज़ा वेबसाइट लेकर आ रहे हैं।</span>
        </p>

        {/* Loading Animation */}
        <div className="mt-6 flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-dashed border-[#9C4221] rounded-full animate-spin"></div>
          <p className="text-sm md:text-base mt-3 text-gray-600">
            Preparing something delicious... <br />
            <span className="text-[#9C4221] font-medium">स्वादिष्ट कुछ तैयार हो रहा है...</span>
          </p>
        </div>
      </div>
    );
}
