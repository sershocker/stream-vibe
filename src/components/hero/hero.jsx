import './hero.scss'
import classNames from 'classnames'

const hero = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'hero')}
        >
            hero
        </div>
    )
}

export default hero