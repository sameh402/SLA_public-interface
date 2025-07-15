import React from "react";
import { useI18n } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Contact Information */}
          <div className="space-y-8">
            {/* Logo and Description */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Smart Learning Academy
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-md">
                {t("footer.description")}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold mb-4 text-white">
                {t("footer.contact.title")}
              </h4>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">
                      {t("footer.contact.email.label")}
                    </p>
                    <a
                      href="mailto:info@smartlearningacademy.com"
                      className="text-white hover:text-blue-400 transition-colors font-medium"
                    >
                      info@smartlearningacademy.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
                    <Phone className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">
                      {t("footer.contact.phone.label")}
                    </p>
                    <a
                      href="tel:+201234567890"
                      className="text-white hover:text-green-400 transition-colors font-medium"
                    >
                      +20 123 456 7890
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">
                      {t("footer.contact.address.label")}
                    </p>
                    <p className="text-white font-medium">
                      Mk Coworking Space, Cairo, Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">
                {t("footer.social.title")}
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61576356164052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                >
                  <Facebook className="h-6 w-6 text-blue-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/smart_learning.academy?fbclid=IwY2xjawLgDipleHRuA2FlbQIxMABicmlkETFrUjRzQ3pBYU1qd1JHd1pBAR7Seyg435ifQ40zQYlP-7YvlvokQ7NOHE_FS1kONBuqegbmQx1hpAkPhAQjYg_aem_aUh1JiXEhHbLO6IWde7-lA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:scale-110 transition-all duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-pink-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Map */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">
              {t("footer.location.title")}
            </h4>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.2488287749761!2d31.326127508434354!3d30.079930619195487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583ffa9a034a4d%3A0x4c5925f91221bc79!2sMk%20Coworking%20Space!5e0!3m2!1sen!2seg!4v1752582139717!5m2!1sen!2seg"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h5 className="text-lg font-semibold mb-4 text-white">
                {t("footer.quickLinks.title")}
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("nav.courses")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h5 className="text-lg font-semibold mb-4 text-white">
                {t("footer.categories.title")}
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/courses?category=languages"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.categories.languages")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses?category=development"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.categories.technology")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses?category=design"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.categories.design")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses?category=business"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.categories.business")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="text-lg font-semibold mb-4 text-white">
                {t("footer.support.title")}
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.support.help")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.support.faq")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.support.community")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.support.technical")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="text-lg font-semibold mb-4 text-white">
                {t("footer.legal.title")}
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.legal.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.legal.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.legal.cookies")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {t("footer.legal.refund")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-slate-700 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Smart Learning Academy. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>Made with ❤️ in Egypt</span>
              <div className="flex items-center gap-4">
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
