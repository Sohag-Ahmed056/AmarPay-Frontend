import Logo from "@/components/Logo"
import { footerMenu1, footerMenu2 } from "@/data/footerLinkData"
import { Facebook, Github, Linkedin, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/90 dark:from-gray-900 dark:to-gray-800 text-white rounded-t-3xl mt-24 shadow-inner">
      <div className="container mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        
        {/* Brand & About */}
        <div className="col-span-1 md:col-span-1 space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-gray-200">
            Experience the fastest, most secure, and hassle-free way to manage your money.
            With AmarPay, you can add, send, receive, and withdraw funds — all from one simple app.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="https://www.facebook.com/sohag.shisir.5" target="_blank" className="hover:scale-110 transition-transform">
              <Facebook className="w-6 h-6 text-white hover:text-blue-400" />
            </Link>
            
            <Link to="https://github.com/Sohag-Ahmed056" target="_blank" className="hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-white hover:text-gray-300" />
            </Link>
            
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-3">Menu</h3>
          <ul className="space-y-3">
            {footerMenu1.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-3">Helpful</h3>
          <ul className="space-y-3">
            {footerMenu2.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter or CTA */}
        <div className="hidden lg:block">
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-3">Stay Connected</h3>
          <p className="text-gray-200 text-sm mb-4">Subscribe to get updates on offers and new features.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-lg px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-primary font-semibold px-4 py-2 rounded-r-lg hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8">
        <p className="text-center text-gray-200 py-6 text-sm tracking-wide">
          © 2025 Amar Pay. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
