// import './Plans.scss'
import Section from "@/layouts/Section";
import PlanCard from "@/components/PlanCard";
import Grid from "@/components/Grid";
import planGroups from "@/sections/Plans/planGroups";

const Plans = () => {

    return (
        <>
            <Section
                title="Choose the plan that's right for you"
                titleId="plans-id"
                description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
            >
                <Grid columns={3}>
                    {planGroups[0].items.map((item, index) => (
                     <PlanCard {...item} key={index} />
                    ))}
                </Grid>
            </Section>
        </>
    )
}

export default Plans


// <div className="plans">

// </div>