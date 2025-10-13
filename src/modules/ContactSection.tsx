"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, Globe, CheckCircle2 } from "lucide-react";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;

}

export default function ContactSection({
  title = "Get in Touch",
  description = "We’d love to hear from you! Whether you have questions, feedback, or collaboration ideas, drop us a message below — our team will reach out soon.",
  phone = "+8801302243428",
  email = "sohagahmed056@gmail.com",
  
}: Contact2Props) {
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmited(true);
  };

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-start justify-between gap-14">
          
          {/* LEFT SIDE - INFO */}
          <div className="flex-1 space-y-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400">
                {title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg max-w-sm mx-auto lg:mx-0">
              <h3 className="mb-6 text-2xl font-semibold">Contact Details</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span><span className="font-semibold text-white">Phone:</span> {phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    <a href={`mailto:${email}`} className="underline hover:text-green-400 transition">
                      {email}
                    </a>
                  </span>
                </li>
               
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0">
            {isSubmited ? (
              <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-12 text-center backdrop-blur-md shadow-xl transition-all animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-green-400 mb-4 animate-bounce" />
                <h2 className="text-2xl font-semibold text-green-400 mb-2">Message Sent Successfully!</h2>
                <p className="text-gray-300">
                  Thank you for reaching out. We’ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSendMessage}
                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-10 flex flex-col gap-6 shadow-xl transition-all hover:border-green-400/30"
              >
                <div className="flex gap-4">
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="firstname" className="text-gray-200">First Name</Label>
                    <Input
                      type="text"
                      id="firstname"
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-green-400"
                    />
                  </div>
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="lastname" className="text-gray-200">Last Name</Label>
                    <Input
                      type="text"
                      id="lastname"
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-green-400"
                    />
                  </div>
                </div>

                <div className="grid w-full gap-1.5">
                  <Label htmlFor="email" className="text-gray-200">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-green-400"
                  />
                </div>

                <div className="grid w-full gap-1.5">
                  <Label htmlFor="subject" className="text-gray-200">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    placeholder="Enter your subject"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-green-400"
                  />
                </div>

                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message" className="text-gray-200">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here..."
                    className="min-h-[150px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-green-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-2 w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold py-3 text-lg rounded-lg transition-transform hover:scale-105 shadow-lg hover:shadow-green-500/30"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
