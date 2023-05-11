import Question from './Question';
import Answer from './Answer';

export default function Card() {
  return (
    <>
      <img src="./images/illustration-woman-online-mobile.svg"></img>
      <h1></h1>

      <div>
        <Question>
          How many team members can I invite?
        </Question>
        <Answer>
          You can invite up to 2 additional users on the Free plan. There is no limit on 
          team members for the Premium plan.
        </Answer>
      </div>

      <div>
        <Question>
          What is the maximum file upload size?
        </Question>
        <Answer>
          No more than 2GB. All files in your account must fit your allotted storage space.
        </Answer>
      </div>

      <div>
        <Question>
          How do I reset my password?
        </Question>
        <Answer>
          Click “Forgot password” from the login page or “Change password” from your profile page.
          A reset link will be emailed to you.
        </Answer>
      </div>

      <div>
        <Question>
          Can I cancel my subscription?
        </Question>
        <Answer>
          Yes! Send us a message and we’ll process your request no questions asked.
        </Answer>
      </div>

      <div>
        <Question>
          Do you provide additional support?
        </Question>
        <Answer>
          Chat and email support is available 24/7. Phone lines are open during normal business hours.
        </Answer>
      </div>
    </>
  )
}