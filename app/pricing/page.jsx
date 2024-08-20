import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import Header from "../dashboard/_components/Header";

export default function Pricing() {
  return (
    (
    <><Header /><div className="flex flex-col min-h-[100dvh]">

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl underline">PRICING</h2>
                <h4 className="text-red-500">(Upcoming)</h4>
                <p
                  className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your needs and start acing your next interview.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>Get started with our basic mock interview service.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="text-4xl font-bold">Free</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>1 Mock Interview</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Personalized Feedback</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Resume Review</span>
                      </div>
                    </div>
                    <div className="mt-4">
                    <Button size="lg" className="w-full mt-12 ">
                      Get Started
                    </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>Unlock more features for your interview preparation.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="text-4xl font-bold">$10</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>3 Mock Interviews</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Personalized Feedback</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Resume Review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Interview Preparation Guide</span>
                      </div>
                    </div>
                    <Button size="lg" className="w-full mt-8">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <CardDescription>Tailored solutions for teams and organizations.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className="text-4xl font-bold">Custom</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Unlimited Mock Interviews</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Personalized Feedback</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Resume Review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Interview Preparation Guide</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span>Team Management</span>
                      </div>
                    </div>
                    <Button size="lg" className="w-full">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </div></>)
  );
}

function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
