export default function Question({ id, question, answer, active, setActive }) {
  let text = "flex justify-between items-center border-b w-80 py-4 hover:cursor-pointer hover:text-soft-red";

  if (active == id) {
    text = "flex justify-between items-center w-full py-4 hover:cursor-pointer hover:text-soft-red font-bold"
  }

  function handleActive(id) {
    if (active == id) {
      setActive('');
    } else {
      setActive(id);
    }
  }

  return (
      <>
        <a id="faq-clicker" className={text} onClick={(e) => handleActive(id)}>
          <h3 className="text-sm opacity-75">{question}</h3>
          <img src="/images/icon-arrow-down.svg" />
        </a>

        {active == id && <p className="border-b pb-4 text-dark-grayish-blue w-80">{answer}</p>}
      </>
  )
}