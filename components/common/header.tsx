import Link from "next/link";
import { FileText } from "lucide-react";
export default function header() {
  return (
    <nav className="container flex items-center justify-between lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12"></FileText>
        <Link href="/">SummaDocs</Link>
      </div>
      <div>
        <Link href="/#pricing">Pricing</Link>
      </div>
      <div>
        <Link href="/signin">Sign in</Link>
      </div>
    </nav>
  );
}
