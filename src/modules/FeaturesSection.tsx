import { ShieldCheck, Smartphone, CreditCard, Zap, QrCode, FileText } from "lucide-react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 p-6 bg-white/5 dark:bg-gray-900/40 backdrop-blur rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <div className="text-primary bg-primary/10 p-3 rounded-full">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Money Transfer",
      description: "Send and receive money anytime, anywhere — instantly and securely.",
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "Secure QR Payments",
      description: "Make safe payments by scanning QR codes for merchants and peers.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Easy Bill Payments",
      description: "Pay your electricity, water, and internet bills with a few taps.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Recharge",
      description: "Top up your mobile instantly for any operator, anytime you need.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Robust Security",
      description: "PIN, OTP, and encryption protect every transaction you make.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Card & Bank Integration",
      description: "Link your bank or card to add or withdraw money seamlessly.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Features of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
            Amar Pay
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
          From instant transfers to exclusive rewards — everything you need in one secure app.
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
