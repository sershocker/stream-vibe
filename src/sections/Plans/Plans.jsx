// import './Plans.scss'
import Section from "@/layouts/Section";
import PlanCard from "@/components/PlanCard";
import Grid from "@/components/Grid";
import planGroups from "@/sections/Plans/planGroups";
import TabsNavigation from "@/components/Tabs/TabsNavigation";
import Tabs from "@/components/Tabs";

const Plans = () => {
    const tabsTitle = 'plan-tabs'
    const tabsNavigationId = "plan-tabs-navigation";
    return (
        <>
            <Section
                title="Choose the plan that's right for you"
                titleId="plans-id"
                description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
                actions={
                <TabsNavigation
                    id={tabsNavigationId}
                    title={tabsTitle}
                    items={planGroups}
                />
                }
            >
                <Tabs
                    title={tabsTitle}
                    navTargetElementId={tabsNavigationId}
                    items={planGroups.map((planGroup, index) => ({
                        title: planGroup.title,
                        isActive: planGroup.isActive,
                        children: (
                            <Grid columns={3}>
                                {planGroup.items.map((item, index) => (
                                    <PlanCard {...item} key={index} />
                                ))}
                            </Grid>
                        )
                    }))}
                />
            </Section>
        </>
    )
}

export default Plans


// <div className="plans">

// </div>