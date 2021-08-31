/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Pixels from "assets/key-feature/pixels.svg";
import Snap from "assets/key-feature/easy-to-use.svg";
import Tool from "assets/key-feature/brush.svg";
import File from "assets/key-feature/folder.svg";

const data = [
  {
    id: 1,
    imgSrc: Pixels,
    altText: "Pixel-Perfect Designs",
    title: "Pixel-Perfect Designs",
    text:
      "Provides the sharpest, cleanest and intentional looks due to the complete utilization of every pixel in the design",
  },
  {
    id: 2,
    imgSrc: Snap,
    altText: "Snap to Pixel Capability",
    title: "Snap to Pixel Capability",
    text:
      "Available when you turn on the Pixel Preview Mode, which allows you to see the actual underlying pixel grid.",
  },
  {
    id: 3,
    imgSrc: Tool,
    altText: "CSS Extractor Tool",
    title: "CSS Extractor Tool",
    text:
      "Snip CSS is a developer tool that makes it easier to extract/copy/move web elements between websites.",
  },
  {
    id: 4,
    imgSrc: File,
    altText: "File Packaging",
    title: "File Packaging",
    text:
      "Create a folder that contains the InDesign document, any necessary fonts, linked graphics, text files, and a customized report.",
  },
];

export default function KeyFeature() {
  return (
    <section id="feature" sx={{ variant: "section.keyFeature" }}>
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of our product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
