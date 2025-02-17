import About1 from "../../../public/About1.jpeg";
import About2 from "../../../public/About2.jpeg";
import HeadLine from "../../Shared/HeadLine/HeadLine";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import { Container, Grid, Box, Card, CardMedia } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Image */}
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            component="img"
            src={About1} // Replace with real image
            alt="Mechanic"
            width="100%"
            sx={{
              borderRadius: 2,
              height: { xs: "auto", sm: "350px", md: "auto" }, // Responsive height
              maxHeight: { xs: "300px", sm: "400px", md: "500px" }, // Adjust per device
              objectFit: "cover", // Ensures the image scales properly
            }}
          />
          {/* Small Card Image Overlapping */}
          <Card
            sx={{
              maxWidth: 350,
              position: "absolute",
              bottom: "-15%",
              right: "-3%",
              boxShadow: 3,
              width: { xs: "100px", sm: "220px" }, // Responsive width
              height: { xs: "100px", sm: "220px" }, // Responsive height
            }}
          >
            <CardMedia
              component="img"
              image={About2} // Replace with real image
              alt="Car Parts"
              sx={{
                objectFit: "cover", // Ensures the image fits within the defined width and height
              }}
            />
          </Card>
        </Grid>

        {/* Right Side - Content */}
        <Grid item xs={12} md={6}>
          <HeadLine
            title={`About Us`}
            className={"lg:mt-32 md:mt-20 mt-36 text-start"}
            subTitle={`We are qualified & of experience in this field`}
            paragraph={`There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly believable.`}
            extraStyle={`text-start pr-10`}
          />
          <AnimatedButton
            text="Get More Info"
            primaryColor="#ffffff"
            secondaryColor="#e02424"
            extraClasses="mt-3 text-start"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
