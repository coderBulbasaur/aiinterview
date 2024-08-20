"use client"
import React, { useEffect, useState } from 'react'
import { db } from '../../../../../utils/db'
import { UserAnswer } from '../../../../../utils/schema'
import { eq } from 'drizzle-orm'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../components/ui/collapsible"
import { ChevronDown, ChevronsUpDown } from 'lucide-react'
import { Button } from '../../../../../components/ui/button'
import { useRouter } from 'next/navigation'

function Feedback({params}) {

  const [feedBackList, setFeedBackList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    GetFeedback()
  },[])

  const GetFeedback = async () => {

    const result = await db.select()
    .from(UserAnswer)
    .where(eq(UserAnswer.mockIdRef,params.interviewId))
    .orderBy(UserAnswer.id);

    console.log(result)
    setFeedBackList(result);
  }

  const totalRating = feedBackList.reduce((acc, item) => acc + Number(item.rating), 0);
  const maxRating = feedBackList.length * 5;

  return (
    <div className='p-10'>
      
      <h2 className='text-3xl font-bold text-green-500'>
        Congratulations
      </h2>
      <h2 className="font-bold text-2xl">
        Here is your interview feedback
      </h2>
      
      {
        feedBackList?.length==0 ? <h2 className='text-purple-400 text-lg my-3'>No Interview performed</h2> : <>
      <h2 className='text-purple-400 text-lg my-3'>
        Your overall interview rating: <strong>{totalRating.toFixed(2)}/{maxRating}</strong>
      </h2>
      <h2 className='text-sm text-gray-500'>
        Find below interview question with correct answer, Your answer and feedback for improvement
      </h2>

      {feedBackList&&feedBackList.map((item,index) =>(

        <Collapsible key={index} className='mt-7'>
          <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between my-2 text-left gap-7 w-full'>
            {item.question} <ChevronsUpDown className='h-4 w-5'/>
          </CollapsibleTrigger>
          <CollapsibleContent>

            <div className="flex flex-col gap-2">

              <h2 className="text-red-500 p-2 border rounded-lg">
                <strong>Rating:</strong>
                {item.rating}
              </h2>

              <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                <strong>Your Answer: </strong>
                {item.userAns}
              </h2>

              <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                <strong>Correct Answer: </strong>
                {item.correctAns}
              </h2>

              <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-900">
                <strong>Feedback: </strong>
                {item.feedback}
              </h2>

            </div>

          </CollapsibleContent>
        </Collapsible>
      
      ))}
      </>
      }
      <Button className="hover:font-bold hover:scale-105 hover:shadow-md transition-all" onClick={() => router.replace('/dashboard')}>Go Home</Button>
    </div>
  )
}

export default Feedback
