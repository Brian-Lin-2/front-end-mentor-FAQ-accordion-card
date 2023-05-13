export default function Question({ question, answer }) {
  return (
      <>
        <div id="faq-clicker" className="flex justify-between items-center border-b w-full py-4">
          <h3 className="text-sm opacity-75">{question}</h3>
          <img src="/images/icon-arrow-down.svg" />
        </div>

        <p className="border-b pb-4 text-dark-grayish-blue">{answer}</p>
      </>
  )
}