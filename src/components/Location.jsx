import React from "react";

const Location = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 bg-gray-50 bg-gradient-to-r from-black via-red-800 to-black text-white">
      {/* Title and Address */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-yellow-500 underline underline-offset-6 mb-2">
          📍 Location
        </h2>
        <p className="text-white font-semibold text-lg">
          Kacha Shahi Road, Near Jamia Masjid Abu Huraira
        </p>
      </div>

      {/* Responsive Map */}
      <div className="w-full max-w-4xl h-[300px] md:h-[450px]  rounded-2xl overflow-hidden shadow-xl shadow-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.76283842974357!2d70.13271852133715!3d28.316038533637524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3937415b412f0767%3A0x437a57c6853d5152!2z2KzYp9mF2LnYqSDYoyDYqNmJINmH2LHZitix2Kkg2KfZh9mEINit2K_Zitir!5e1!3m2!1sen!2s!4v1756502177048!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
