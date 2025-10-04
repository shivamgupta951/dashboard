import React from "react";
import toast from "react-hot-toast";

const testimonials = [
  {
    name: "Michael Kim",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 4,
    text: "Absolutely amazing! Their services exceeded my expectations. I'm thrilled with the results.",
  },
  {
    name: "Melissa Reynolds",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    text: "Impressed beyond words! Their professionalism and attention to detail are unmatched. I highly recommend them.",
  },
  {
    name: "Sarah Morgan",
    role: "Content Strategist",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
    text: "Outstanding experience! Their support team is exceptional and the quality of their work is top-notch. I'm a delighted customer.",
  },
];

export default function TestimonialsSection() {
  const handleShowReviews = (e) => {
    toast("Coming soon! 🚧", {
      icon: "⏳",
    });
  };

  return (
    <div className="w-full py-16 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 lg:mx-20">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gradient-to-bl from-red-900 to-green-950 shadow-lg rounded-2xl p-6 flex flex-col justify-between border border-gray-700 hover:shadow-sm transform transition duration-300 hover:shadow-orange-800 hover:ring-4"
          >
            {/* Stars */}
            <div className="flex space-x-1 mb-4">
              {[...Array(t.stars)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-white italic mb-6">“{t.text}”</p>

            {/* User Info */}
            <div className="flex items-center space-x-3 border-t pt-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <p className="text-white text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={handleShowReviews}
          className="font-semibold text-purple-300 hover:text-primary underline decoration-2 underline-offset-4 bg-transparent"
          aria-label="Check all reviews"
        >
          Check all 3,421 reviews
        </button>
      </div>
    </div>
  );
}
