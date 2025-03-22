import Link from "next/link";
import { FileText, DollarSign, LogIn, Upload, Crown } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  const isLoggedIn = true; // Change this value to simulate login status

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-800 transition-colors duration-300 hover:text-blue-600"
          >
            <FileText className="w-6 h-6 lg:w-8 lg:h-8 stroke-current fill-transparent transition-all duration-300 ease-in-out transform hover:rotate-12 hover:fill-current" />
            <span className="font-bold text-lg">SummaDocs</span>
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            href="/#pricing"
            className="flex items-center gap-2 text-gray-800 transition-colors duration-300 delay-75 hover:text-blue-600"
          >
            <DollarSign className="w-5 h-5 lg:w-6 lg:h-6 stroke-current fill-transparent transition-all duration-300 ease-in-out transform hover:rotate-12 hover:fill-current" />
            <span>Pricing</span>
          </Link>
          {isLoggedIn ? (
            <>
              {/* Dashboard: no icon */}
              <Link
                href="/dashboard"
                className="text-gray-800 transition-colors duration-300 delay-75 hover:text-blue-600"
              >
                <span>Your Summary</span>
              </Link>
              <Link
                href="/upload"
                className="flex items-center gap-2 text-gray-800 transition-colors duration-300 delay-75 hover:text-blue-600"
              >
                <Upload className="w-5 h-5 lg:w-6 lg:h-6 stroke-current fill-transparent transition-all duration-300 ease-in-out transform hover:rotate-12 hover:fill-current" />
                <span>Upload a PDF</span>
              </Link>
              {/* Pro Link with Crown icon */}
              <Link
                href="/pro"
                className="flex items-center gap-2 text-gray-800 transition-colors duration-300 delay-75 hover:text-blue-600"
              >
                <Crown className="w-5 h-5 lg:w-6 lg:h-6 stroke-current fill-transparent transition-all duration-300 ease-in-out transform hover:rotate-12 hover:fill-current" />
                <span>Pro</span>
              </Link>
              <Button>Signout</Button>
            </>
          ) : (
            <Link
              href="/signin"
              className="flex items-center gap-2 text-gray-800 transition-colors duration-300 delay-75 hover:text-blue-600"
            >
              <LogIn className="w-5 h-5 lg:w-6 lg:h-6 stroke-current fill-transparent transition-all duration-300 ease-in-out transform hover:rotate-12 hover:fill-current" />
              <span>Sign in</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
