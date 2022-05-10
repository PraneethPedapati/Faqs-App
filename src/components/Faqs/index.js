import './index.css'
import FaqItem from '../FaqItem/index'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="bg-card">
        <h1 className="faq-heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(eachFaqList => (
            <FaqItem faqsItem={eachFaqList} key={eachFaqList.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
