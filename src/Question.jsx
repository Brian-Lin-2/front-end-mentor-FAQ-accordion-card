import { useState } from 'react';

export default function Question({ question, answer }) {
  const [active, setActive] = useState(false);

  let text = "flex justify-between items-center border-b w-full py-4 hover:cursor-pointer hover:text-soft-red";

  if (active) {
    text = "flex justify-between items-center w-full py-4 hover:cursor-pointer hover:text-soft-red font-bold"
  }

  return (
      <>
        <a id="faq-clicker" className={text} onClick={() => setActive(!active)}>
          <h3 className="text-sm opacity-75">{question}</h3>
          <img src="/images/icon-arrow-down.svg" />
        </a>

        {active && <p className="border-b pb-4 text-dark-grayish-blue">{answer}</p>}
      </>
  )
}