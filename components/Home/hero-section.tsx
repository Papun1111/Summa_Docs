import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="w-full max-w-3xl">
        <div className="flex justify-center mb-4">
          <div className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x transition-all duration-500 hover:scale-105">
            <Badge
              variant="secondary"
              className="relative flex items-center px-4 sm:px-6 py-2 text-sm sm:text-base font-medium bg-white rounded-full shadow-md"
            >
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 mr-1 sm:mr-2 text-rose-600 animate-pulse" />
              <span>Powered by AI</span>
            </Badge>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-rose-800 bg-clip-text text-transparent transition duration-500 hover:scale-105">
          Transform PDFs into concise summaries
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 transition-colors duration-300 hover:text-gray-900">
          Get a beautiful summary reel of the document in seconds
        </h2>
        <Button className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-rose-600 text-white transition transform duration-300 ease-in-out hover:scale-105 hover:bg-rose-700">
          Try SummaDocs
        </Button>
      </div>
    </section>
  );
}
