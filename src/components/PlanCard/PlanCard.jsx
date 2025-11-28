import './PlanCard.scss'
import classNames from 'classnames'
import Button from "@/components/Button";

const PlanCard = (props) => {
    const {
        title,
        description,
        price,

        className,
    } = props

    return (
        <div className='plan-card'>
            <div className="plan-card__info">
                <h4 className="plan-card__title">{title}</h4>
                <div className="plan-card__description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="plan-card__conditions">
                <span className="plan-card__price">{price.value}</span>
                <span className="plan-card__period">{price.period}</span>
            </div>
            <div className="plan-card__actions">
                <Button
                    label="Start Free Trial"
                    href="/subscriptions"
                    mode="black-08"
                />
                <Button
                    label="Choose Plan"
                    href="/subscriptions"
                />
            </div>
        </div>
    )
}

export default PlanCard