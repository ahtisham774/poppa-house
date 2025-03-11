export function MissionVision() {
    return (
      <section className="py-16 ">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <img
              src="assets/mission.jpg"
              alt="Modern interior"
              className="rounded-lg max-h-[370px] max-w-full w-full object-cover"
            />
            <div className="bg-[#F6F6F6] rounded-xl p-6 h-full">
              <h2 className="text-3xl lg:text-5xl font-normal mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to provide reliable and customer-focused property services—built on trust, maintained with
                care—to ensure a seamless experience for all. We are committed to simplifying the process of finding,
                renting, and maintaining homes by offering transparent, efficient, and personalized solutions. we strive
                to make every property transaction smooth, secure, and rewarding.
              </p>
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#F6F6F6] rounded-xl p-6 h-full">
          <h2 className="text-3xl lg:text-5xl font-normal mb-4">Our Vision</h2>
              <p className="text-gray-600">
                Our vision is to transform the property landscape by delivering innovative and sustainable solutions that
                enrich communities—built on trust, maintained with care. We strive to set new standards in property
                services by ensuring transparency, efficiency, and customer satisfaction. Through a people-first approach,
                we aim to simplify property transactions and maintaining homes a seamless experience.
              </p>
            </div>
            <img
              src="assets/vision.jpg"
              alt="Modern bedroom"
               className="rounded-lg max-h-[370px] max-w-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    )
  }
  
  