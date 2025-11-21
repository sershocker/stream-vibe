import './Devices.scss'
import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import DeviceCard from "@/components/DeviceCard";

const Devices = () => {

    const deviceItems = [
        {
            title: "Smartphones",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc:  "/devices/smartphones.svg",
        },
        {
            title: "Tablet",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc:  "/devices/tablet.svg",
        },
        {
            title: "Smart TV",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc:  "/devices/smartTV.svg",
        },
        {
            title: "Laptops",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc:  "/devices/laptops.svg",
        },
        {
            title: "Gaming Consoles",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc:  "/devices/gaming-consoles.svg",
        },
        {
            title: "VR Headsets",
            description: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
            imgSrc:  "/devices/VR-headsets.svg",
        },


    ]

    return (
        <Section
            title="We Provide you streaming experience across various devices."
            titleId="devices-title"
            description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
        >
            <Grid columns={3}>
                {deviceItems.map((devicItem, index) => (
                <DeviceCard {...devicItem} key={index}/>

            ))}
            </Grid>

        </Section>
    )
}

export default Devices