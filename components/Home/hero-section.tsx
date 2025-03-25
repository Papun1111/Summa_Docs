import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
export default function HeroSection() {
  return (
    <section>
      <div className="">
        <div className="flex">
          <Badge>
            <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse"></Sparkles>
            <p>Powered by AI</p>
          </Badge>
        </div>
        <h1>Transform PDFs into concise summaries</h1>
        <h2>Get a beautiful summary reel of the document in seconds</h2>
        <Button>Try SummaDocs</Button>
      </div>
    </section>
  );
}
