import Question from './Question';
import { useState } from 'react';

export default function Card() {
  const [active, setActive] = useState('');

  const faq = [
    { id: 1,
      question: "How many team members can I invite?", 
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."},
    { id: 2,
      question: "What is the maximum file upload size?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space."},
    { id: 3,
      question: "How do I reset my password?",
      answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."},
    { id: 4,
      question: "Can I cancel my subscription?",
      answer: "Yes! Send us a message and we’ll process your request no questions asked."},
    { id: 5,
      question: "Do you provide additional support?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."},
  ]

  return (
    <div className="bg-white pb-12 pt-24 sm:p-0 my-20 sm:m-0 rounded-3xl flex flex-col sm:flex-row justify-center items-center w-5/6 sm:w-4/6 text-xs bg-mobile-pattern sm:bg-none bg-no-repeat bg-top">

      {/* For desktop state */}
      <div className="sm:w-1/2 sm:bg-desktop-pattern sm:bg-no-repeat sm:bg-right sm:bg-auto"></div>

      <img className="w-60 absolute top-12 sm:top-1/4 sm:start-32 sm:w-4/12" src="./images/illustration-woman-online-mobile.svg"></img>

      <div className="px-8 sm:pl-14 sm:pr-28 sm:w-1/2">

        <h1 className="text-3xl font-bold mt-8 mb-4 text-center sm:text-start">FAQ</h1>

        {faq.map(question => {
          return (
            <div key={question.id} className="flex flex-col items-center">
              <Question id={question.id} question={question.question} answer={question.answer} active={active} setActive={setActive}></Question>
            </div>
          );
        })}


      </div>

    </div>
  )
}