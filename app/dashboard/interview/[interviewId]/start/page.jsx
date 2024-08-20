"use client"
import { db } from '../../../../../utils/db.js'
import { MockInterview } from '../../../../../utils/schema.js'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import QuestionsSection from './_components/QuestionsSection'
import RecordAnswer from './_components/RecordAnswer'
import { Button } from '../../../../../components/ui/button.jsx'
import Link from 'next/link'
import { quantum } from 'ldrs'
import { useRouter } from 'next/navigation.js'
d
function StartInterview({params}) {

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false);

    quantum.register();
    const router = useRouter();

    useEffect(()=>{
        GetInterviewDetails();
    },[])

    const GetInterviewDetails = async () =>{
        const result = await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId))

        const jsonMockResp = (result[0].jsonMockResp);

        const parsedResp = JSON.parse(jsonMockResp)
        console.log("Parsed Data is:", parsedResp)

        setMockInterviewQuestion(parsedResp)
        setInterviewData(result[0])
    }
    console.log(mockInterviewQuestion)
   
    const handleEnInterview = () =>{
      setIsLoading(true)

      setTimeout(() =>{
        router.push('/dashboard/interview/'+interviewData?.mockId+'/feedback')
      }, 2000)
    }

  return (
    <div >

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Question*/}
        {mockInterviewQuestion && (
          <QuestionsSection mockInterviewQuestion={mockInterviewQuestion} activeQuestionIndex={activeQuestionIndex}/>
        )}

        {/* Video Web Cam */}
        <RecordAnswer mockInterviewQuestion={mockInterviewQuestion} activeQuestionIndex={activeQuestionIndex} interviewData={interviewData} />

        
      </div>

      <div className="flex justify-end gap-6">
        {activeQuestionIndex > 0 && <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex-1)} className="hover:font-bold hover:scale-105 hover:shadow-md transition-all">Previous Question</Button>}

        {activeQuestionIndex!=mockInterviewQuestion?.length-1 && <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)} className="hover:font-bold hover:scale-105 hover:shadow-md transition-all">Next Question</Button>}

        {activeQuestionIndex==mockInterviewQuestion?.length-1 &&

          <Button onClick={handleEnInterview} disabled={isLoading} className="hover:font-bold hover:scale-105 hover:shadow-md transition-all">

            {isLoading ? (
              <l-quantum
              size="45"
              speed="1.75"
              color="red"
          ></l-quantum>

            ): (
              "End Interview"
            )}
          </Button>
        }
      </div>
      
    </div>
  )
}

export default StartInterview
