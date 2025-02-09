"use client"
export default function AnnouncementBanner() {
  return (
    <div className="w-full bg-purple-600 text-white py-2 overflow-hidden">
      <div className="inline-flex whitespace-nowrap animate-marquee">
        <div className="flex items-center mx-4">
          <span className="flex items-center gap-2 px-8">
            <span className="text-yellow-300">🎂</span>
            <span>₹50 OFF on every 1/2kg Cakes</span>
          </span>
          <span className="flex items-center gap-2 px-8">
            <span>🎁</span>
            <span>Buy 1 / 1.5 kg cake Get 1/2kg Cake FREE</span>
          </span>
          <span className="flex items-center gap-2 px-8">
            <span className="text-yellow-300">⭐</span>
            <span>*T&C applied</span>
          </span>
        </div>
        <div className="flex items-center mx-4">
          <span className="flex items-center gap-2 px-8">
            <span className="text-yellow-300">🎂</span>
            <span>₹50 OFF on every 1/2kg Cakes</span>
          </span>
          <span className="flex items-center gap-2 px-8">
            <span>🎁</span>
            <span>Buy 1 / 1.5 kg cake Get 1/2kg Cake FREE</span>
          </span>
          <span className="flex items-center gap-2 px-8">
            <span className="text-yellow-300">⭐</span>
            <span>*T&C applied</span>
          </span>
        </div>
        <div className="flex items-center mx-4">
          <span className="flex items-center gap-2 px-8">
            <span className="text-yellow-300">🎂</span>
            <span>₹50 OFF on every 1/2kg Cakes</span>
          </span>
          <span className="flex items-center gap-2 px-8">
            <span>🎁</span>
            <span>Buy 1 / 1.5 kg cake Get 1/2kg Cake FREE</span>
          </span>
          <span className="flex items-center gap-2 px-8">
            <span className="text-yellow-300">⭐</span>
            <span>*T&C applied</span>
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}