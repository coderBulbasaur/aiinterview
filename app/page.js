import Link from "next/link"
import { IconCloudDemo } from '../ComponentHelper/TechUsed'
import GradualSpacing from '../components/magicui/gradual-spacing'
import PulsatingButton from '../components/magicui/pulsating-button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import {DockDemo} from '../ComponentHelper/ContactUs'
import Image from "next/image"


export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/blob.svg)' }}>
      <header className="px-6 lg:px-10 h-20 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BotIcon className="h-8 w-8" />
          <span className="text-black ml-3 mt-0.5 text-xl font-semibold">Interview Genie</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link href="/pricing" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>Pricing</Link>
          <Dialog>
          <DialogTrigger asChild>
            <Link href="#" className="text-base font-medium hover:underline underline-offset-4" prefetch={false}>
            
              Contact
            </Link>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DockDemo/>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        </nav>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-6 md:px-10 mx-auto">
            <div className="grid gap-10 lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <GradualSpacing
                    className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 text-center lg:text-left tracking-[-0.02em] text-black dark:text-white underline"
                    text="Ace Your Next Interview with AI"
                  />
                  <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl">
                    Prepare for your dream job with our <span className="text-[#5046e6] font-bold">AI-powered</span> interview simulator. Get personalized feedback and practice anytime, anywhere.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <PulsatingButton className="text-lg hover:text-black transition-colors py-3 px-8">Start Interview</PulsatingButton>
                    <Link
                      href="/dashboard"
                      className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <IconCloudDemo />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 lg:py-36 bg-gray-50">
          <div className="container px-6 md:px-10 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-muted px-4 py-2 text-base font-medium">Key Features</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter lg:text-6xl">
                  Prepare for Success
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl">
                  Our AI-powered interview simulator helps you practice answering common questions, get personalized
                  feedback, and build confidence for your next big interview.
                </p>
              </div>
            </div>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Image
                src="/splash.png"
                width="650"
                height="400"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />

              <div className="flex flex-col justify-center space-y-8">
                <ul className="grid gap-8">
                  {[
                    { title: "Personalized Feedback", description: "Get detailed feedback on your performance and suggestions for improvement." },
                    { title: "Practice Anytime", description: "Practice answering common interview questions whenever you have time." },
                    { title: "Build Confidence", description: "Gain confidence and feel prepared for your next big interview." }
                  ].map((item, index) => (
                    <li key={index}>
                      <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                        <p className="text-muted-foreground text-base sm:text-lg">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container px-6 md:px-10 mx-auto">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Get Started Today</h2>
                <p className="max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl">
                  Sign up for our <span className="text-[#5046e6] font-bold">AI Interview</span> simulator and start practicing for your next big opportunity.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 lg:justify-end">
                <PulsatingButton className="text-lg hover:text-black transition-colors py-3 px-8">Start Interview</PulsatingButton>
                <Link
                  href="/dashboard"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 w-full shrink-0 border-t">
        <div className="container px-6 md:px-10 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; 2024 AI Interview. All rights reserved.</p>
          <nav className="flex gap-6 sm:gap-8 mt-4 sm:mt-0">
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4" prefetch={false}>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

// BotIcon and XIcon components remain unchanged

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}