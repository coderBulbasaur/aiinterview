"use client";
// import { Button } from "@/components/ui/button";
import {Button} from '../../../../components/ui/button.jsx'
import { db } from "../../../../utils/db.js";
import { MockInterview } from "../../../../utils/schema.js";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import { useRouter } from 'next/navigation.js';

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const startInterview = () => {
    setIsLoading(true);
  
    setTimeout(() => {
      router.push(`/dashboard/interview/${params.interviewId}/start`);
    }, 2000);
  };
  
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));
    setInterviewData(result[0]);
  };
  return (
    <div className="my-10 ">
      <h2 className="font-bold text-2xl">Lets get started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5">
          <div className="flex flex-col p-5  rounded-lg border gap-5">
            <h2 className="text-lg">
              <strong>Job Role/Job Position: </strong>
              {interviewData?.jobPosition}
            </h2>
            <h2 className="text-lg">
              <strong>Job Description/tech Stack: </strong>
              {interviewData?.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Years of Experience: </strong>
              {interviewData?.jobExperience}
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-500">
              <Lightbulb />
              <span>Information</span>
            </h2>
            <h2 className="mt-3 text-yellow-500">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div>
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
              style={{ height: 300, width: 300 }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 my-7 border rounded-lg w-full p-20 bg-secondary" />
              <Button
                className="w-full"
                variant="ghost"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable Web Cam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">

          <Button onClick={startInterview} disabled={isLoading} className="hover:text-black hover:font-bold transition-all hover:scale-105 hover:shadow-md">
            
            {isLoading ? (
              <l-quantum
              size="60"
              speed="1.75"
              color="red"
              ></l-quantum>
            ) : (
              "Start Interview"
            )}
          </Button>

      </div>
    </div>
  );
}

export default Interview;
