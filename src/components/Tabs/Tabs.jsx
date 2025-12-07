import './Tabs.scss'
import classNames from 'classnames'
import getTabsElementsIdsFromTitle from "@/components/Tabs/utils/getTabsElementsIdsFromTitle";
import TabsNavigation from "@/components/Tabs/TabsNavigation";

const Tabs = (props) => {
    const {
        className,
        title,
        items = [],
        navTargetElementId = null,
        isEnableOnlyOnMobile = false
    } = props

    return (
        <div
            className={classNames(className, 'tabs', {
                "tabs--enable-only-on-mobile": isEnableOnlyOnMobile,
            })}
            data-js-tabs={JSON.stringify({navTargetElementId})}
        >
            {!navTargetElementId && (
                <TabsNavigation
                    title={title}
                    items={items}
                />
            )}
            <div className="tabs__body">
                {items.map((item, index) => {
                    const{
                        title,
                        children,
                        isActive,
                    } = item

                    const {buttonId, contentId} = getTabsElementsIdsFromTitle(title)

                    return (
                        <div
                            className={classNames('tabs__content', {
                            "is-active": isActive})}
                            tabIndex={0}
                            id={contentId}
                            aria-labelledby={buttonId}
                            data-js-tabs-content=""
                            key={index}
                        >
                            {children}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tabs