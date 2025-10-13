import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from '../assets/images/AmarPay.png'
import { useGetCurrentUserQuery } from "@/redux/features/auth/auth.api";
import { useEffect, useState } from "react";
import { getDynamicDashboardUrl } from "@/utils/getDynamicDashboardUrl";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { data } = useGetCurrentUserQuery(undefined)
  const [dashboardUrl, setDashboardUrl] = useState('/login')

  // Dynamic dashboard url
  useEffect(() => {
    if (!data?.data?.role) return;
    setDashboardUrl(getDynamicDashboardUrl(data?.data))
  }, [data?.data?.role]);

  return (
    <section className="bg-background py-20 lg:py-32 mt-[60px] lg:mt-0">
      <div className="container flex flex-col items-center gap-10 lg:my-0 lg:flex-row">
        
        {/* Text Section */}
        <div className="flex flex-col gap-7 lg:w-2/3 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-foreground md:text-5xl xl:text-6xl leading-tight">
            <span className="block">AmarPay</span>
            <span className="block text-secondary">Fast. Secure. Anytime, Anywhere.</span>
          </h2>

          <p className="text-base text-muted-foreground md:text-lg lg:text-xl xl:pr-30 mt-2">
            Manage your money effortlessly with AmarPay. Add funds, send or receive payments, pay bills, and withdraw cash — all in one secure digital wallet.
          </p>

          {/* New tagline */}
          <p className="text-sm md:text-base text-primary font-medium mt-2">
            Trusted by thousands of users across Bangladesh for seamless, instant, and secure transactions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 justify-center lg:justify-start lg:gap-7 mt-4">
            <Link to={dashboardUrl}>
              <Button className="cursor-pointer">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="size-4" />
                </div>
                <span className="pr-6 pl-4 text-sm whitespace-nowrap lg:pr-8 lg:pl-6 lg:text-base">
                  Get Started
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative z-10">
          <img
            className="relative z-10"
            src={heroImage}
            width={450}
            height={889}
            alt="AmarPay App on iPhone"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
