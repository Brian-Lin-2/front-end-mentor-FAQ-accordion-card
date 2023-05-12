export default function Question({ children }) {
  return (
      <>
        <div id="faq-clicker" className="flex justify-between items-center border-b w-full py-4">
          <h3>{children}</h3>
          <img src="/images/icon-arrow-down.svg" />
        </div>
      </>
  )
}