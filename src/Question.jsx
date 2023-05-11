export default function Question({ children }) {
  return (
      <>
        <div id="faq-clicker">
          <h3>{children}</h3>
          <img src="/images/icon-arrow-down.svg" />
        </div>
      </>
  )
}