export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-[#f8f9fc] py-14 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded- sm:rounded-3xl shadow-xl sm:shadow-2xl order-1">
          <img
            src="/images/hero-doctor.jpg"
            alt="Dr Nkosinathi Mhlongo"
            className="w-full h- sm:h- lg:h- object-cover object-top hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B33]/50 sm:from-[#0B1B33]/40 via-transparent to-transparent" />

          {/* HIDDEN ON MOBILE - VISIBLE ON DESKTOP ONLY */}
          <div className="hidden sm:block absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-5 shadow-xl">
            <p className="text-xl font-bold text-[#0B1B33] leading-none">
              Dr Nkosinathi Mhlongo
            </p>
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#D9A24B] mt-1">
              Specialist Orthopaedic Surgeon
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="order-2 px-1 sm:px-0">
          <span className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text- sm:text-sm font-semibold text-[#D9A24B]">
            Bones Restored Best
          </span>

          <h2 className="text- sm:text- lg:text-5xl font-bold text-[#0B1B33] mt-3 leading-[1.05] sm:leading-tight">
            Restoring Mobility.
            <br />
            <span className="text-[#D9A24B]">
              Improving Lives.
            </span>
          </h2>

          <p className="text-gray-600 mt-5 sm:mt-6 leading-[1.75] sm:leading-8 text- sm:text-lg">
            Dr Nkosinathi Mhlongo Incorporated is a specialist Orthopaedic
            Surgery practice based in Emalahleni, Mpumalanga. Since 2017,
            the practice has provided compassionate, evidence-based care for
            adults and children suffering from bone, joint, muscle and spine
            conditions.
          </p>

          <p className="text-gray-600 mt-4 sm:mt-5 leading-[1.75] sm:leading-8 text- sm:text-lg">
            Practising at Emalahleni Private Hospital and Life Cosmos Hospital,
            Dr Mhlongo combines advanced surgical techniques with
            patient-centred care to restore movement, relieve pain and help
            patients return to their everyday lives.
          </p>

          {/* Qualifications */}
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
            {[
              "MBChB (Natal)",
              "FC Ortho (SA)",
              "MMed Ortho (UP)",
              "HPCSA Registered",
            ].map((item) => (
              <span
                key={item}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#F6F7FB] border border-gray-200 text- sm:text-sm font-semibold text-[#0B1B33]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-8 sm:mt-10">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 text-center border border-gray-100">
              <h3 className="text- sm:text-3xl font-bold text-[#D9A24B] leading-none">
                2017
              </h3>
              <p className="text- sm:text-sm text-gray-500 mt-1.5 sm:mt-2 leading-tight">
                Established
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 text-center border border-gray-100">
              <h3 className="text- sm:text-3xl font-bold text-[#D9A24B] leading-none">
                2
              </h3>
              <p className="text- sm:text-sm text-gray-500 mt-1.5 sm:mt-2 leading-tight">
                Partner Hospitals
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6 text-center border border-gray-100">
              <h3 className="text- sm:text-3xl font-bold text-[#D9A24B] leading-none">
                Adult & Child
              </h3>
              <p className="text- sm:text-sm text-gray-500 mt-1.5 sm:mt-2 leading-tight">
                Orthopaedic Care
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10">
            <a
              href="/about"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#0B1B33] hover:bg-[#14294d] text-white px-8 py-3.5 sm:py-4 text- sm:text- font-semibold transition"
            >
              Learn More About Dr Mhlongo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}