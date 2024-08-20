'use client'
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList';

function Dashboard() {
  return (
    <>
    
    <div className="relative z-10 p-10 text-center">
      <h2 className="font-bold text-2xl ">Dashboard</h2>
      <h2 className="text-gray-500">Create and Start AI Mockup Interview</h2>
    </div>
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 my-5">
      <AddNewInterview />
    </div>
    <InterviewList/>
  </>
  
  );
}

export default Dashboard;

