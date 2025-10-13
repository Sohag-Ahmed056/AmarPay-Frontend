
import SectionHeading from "@/components/SectionHeading";

import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-[#eef2f7] dark:from-background dark:to-background text-gray-900 dark:text-gray-100">
      {/* ---- Hero / Intro Section ---- */}
      <div className="container mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <SectionHeading title="" />
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            <span className="font-semibold text-primary">AmarPay</span> is a
            next-generation digital wallet built to simplify how you manage,
            send, and receive money. Designed with modern security, speed, and
            usability, AmarPay ensures that your financial transactions are safe
            and seamless.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            From instant money transfers to mobile recharges and bill payments —
            AmarPay brings everything you need into one smart, trusted, and easy
            platform.
          </p>
        </div>
      </div>

      {/* ---- Mission & Vision ---- */}
      <div className="bg-white dark:bg-gray-900 py-24">
        <div className="container mx-auto max-w-6xl text-center">
          <SectionHeading title="Our Mission & Vision" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-primary mb-4">
                🎯 Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To make digital transactions accessible, affordable, and
                effortless for everyone in Bangladesh — bridging the gap between
                people and technology through secure fintech innovation.
              </p>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-primary mb-4">
                🌍 Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Bangladesh’s most trusted and user-friendly digital
                wallet, empowering millions to go fully cashless and take
                control of their financial freedom.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Why Choose Us ---- */}
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-24">
        <div className="container mx-auto max-w-6xl text-center">
          <SectionHeading title="Why Choose AmarPay?" />
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            AmarPay isn’t just another wallet — it’s your partner in every
            transaction. Here’s why users love and trust us:
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Advanced Security",
                desc: "We use top-grade encryption and authentication to protect your funds.",
              },
              {
                title: "Instant Transfers",
                desc: "Send and receive money within seconds — anywhere, anytime.",
              },
              {
                title: "User-Friendly Interface",
                desc: "A clean, simple, and modern UI for effortless financial management.",
              },
              {
                title: "24/7 Support",
                desc: "Our support team is always available to assist you when you need it.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
              >
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Stats / Achievements ---- */}
      <div className="bg-primary text-white py-24">
        <div className="container mx-auto max-w-6xl text-center">
          <SectionHeading title="Our Impact in Numbers" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16">
            {[
              { label: "Active Users", value: "500K+" },
              { label: "Transactions Processed", value: "20M+" },
              { label: "Merchant Partners", value: "5K+" },
              { label: "Avg. Daily Transfers", value: "1.2M+" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <h3 className="text-4xl font-extrabold">{stat.value}</h3>
                <p className="mt-2 text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- CTA ---- */}
      <div className="py-24 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Cashless Journey with AmarPay
          </h2>
          <p className="text-white/90 mb-10">
            Join thousands of users already enjoying seamless, secure, and fast
            digital payments. It’s time to experience the smarter way to manage
            your money.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
