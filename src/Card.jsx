import Question from './Question';
import Answer from './Answer';

export default function Card() {
  return (
    <div className="bg-white pb-12 pt-24 sm:p-0 my-20 sm:m-0 rounded-3xl flex flex-col sm:flex-row justify-center items-center w-5/6 sm:w-4/6 text-xs bg-mobile-pattern sm:bg-none bg-no-repeat bg-top">

      {/* For desktop state */}
      <div className="sm:w-1/2 sm:bg-desktop-pattern sm:bg-no-repeat sm:bg-right sm:bg-auto"></div>

      <img className="w-60 absolute top-12 sm:top-1/4 sm:start-32 sm:w-4/12" src="./images/illustration-woman-online-mobile.svg"></img>

      <div className="px-8 sm:pl-14 sm:pr-28 sm:w-1/2">
        <h1 className="text-3xl font-bold mt-8 mb-4 text-center sm:text-start">FAQ</h1>

        <div className="flex flex-col items-center">
          <Question>
            How many team members can I invite?
          </Question>
          <Answer>
            You can invite up to 2 additional users on the Free plan. There is no limit on 
            team members for the Premium plan.
          </Answer>
        </div>

        <div className="flex flex-col items-center">
          <Question>
            What is the maximum file upload size?
          </Question>
          <Answer>
            No more than 2GB. All files in your account must fit your allotted storage space.
          </Answer>
        </div>

        <div className="flex flex-col items-center">
          <Question>
            How do I reset my password?
          </Question>
          <Answer>
            Click “Forgot password” from the login page or “Change password” from your profile page.
            A reset link will be emailed to you.
          </Answer>
        </div>

        <div className="flex flex-col items-center">
          <Question>
            Can I cancel my subscription?
          </Question>
          <Answer>
            Yes! Send us a message and we’ll process your request no questions asked.
          </Answer>        
        </div>


        <div className="flex flex-col items-center">
          <Question>
            Do you provide additional support?
          </Question>
          <Answer>
            Chat and email support is available 24/7. Phone lines are open during normal business hours.
          </Answer>  
        </div>

      </div>

    </div>
  )
}