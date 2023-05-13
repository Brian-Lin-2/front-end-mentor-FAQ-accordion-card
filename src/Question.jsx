export default function Question({ id, question, answer, active, setActive }) {

  return (
      <>
        <a id="faq-clicker" className="flex justify-between items-center border-b w-full py-4 hover:cursor-pointer" onClick={() => setActive(id)}>
          <h3 className="text-sm opacity-75">{question}</h3>
          <img src="/images/icon-arrow-down.svg" />
        </a>

        {active === id && <p className="border-b pb-4 text-dark-grayish-blue">{answer}</p>}
        {active === id && console.log("true")}
      </>
  )
}