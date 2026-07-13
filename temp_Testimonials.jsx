import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "JusticeGuard helped me navigate a complex business merger. Their expertise and strategic insight saved us both time and significant capital.",
      author: "Michael T.",
      company: "CEO, Tech Innovations Inc.",
    },
    {
      quote:
        "I was facing serious criminal charges and felt completely lost. Thanks to their diligent work and aggressive defense, I was completely exonerated.",
      author: "Sarah J.",
      company: "Private Client",
    },
    {
      quote:
        "The family law team handled my complex divorce with incredible compassion and steadfast professionalism. I am forever grateful. Highly recommended.",
      author: "David L.",
      company: "Private Client",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
            <span className="text-[#D17D0F] uppercase tracking-widest font-semibold text-sm">
              Client Success Stories
            </span>
            <div className="w-12 h-0.5 bg-[#D17D0F]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Words of Trust
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Discover how our dedication, expertise, and relentless advocacy have made a profound impact on the lives and businesses of our clients.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={card}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-2xl hover:border-[#D17D0F]/30 transition-all duration-500 relative group"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D17D0F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl"></div>
              
              <FaQuoteLeft className="text-[#D17D0F]/20 text-4xl absolute top-6 right-6 transition-transform group-hover:scale-110 group-hover:text-[#D17D0F]/30 duration-500" />
              
              <div className="flex text-[#D17D0F] mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4" />
                ))}
              </div>
              
              <p className="italic text-slate-600 text-lg leading-relaxed mb-8 relative z-10 font-serif">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 font-serif text-lg">{testimonial.author}</p>
                  <p className="text-slate-500 text-sm font-light mt-0.5">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;