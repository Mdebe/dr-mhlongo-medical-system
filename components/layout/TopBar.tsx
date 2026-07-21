import { Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export function TopBar() {
  return (
    <div className="bg-[#0B1B33] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="tel:+27136553057"
            className="flex items-center gap-2 hover:text-[#D9A24B] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+27 13 655 3057 / 8</span>
          </a>

          <a
            href="mailto:info@mhlongoortho.co.za"
            className="hidden sm:flex items-center gap-2 hover:text-[#D9A24B] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>info@mhlongoortho.co.za</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-white/60">
            Follow us:
          </span>

          <a
            href="https://instagram.com/nathimhlongoortho"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#D9A24B] transition-colors"
          >
            <FaInstagram className="w-4 h-4" />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#D9A24B] transition-colors"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}