/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              About Us Cryptologic
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Founded on the promise of financial empowerment, Cryptologic stands as a cutting-edge
              cryptocurrency exchange that mirrors the innovation and scope of industry leaders like
              Binance. Headquartered in the digital heart of the blockchain revolution, Cryptologic
              has been at the forefront of democratizing finance since its inception. Business Model
              Cryptologic offers a comprehensive array of trading options, including spot trading,
              futures, and margin trading, catering to both novice and seasoned investors. Our
              revenue model is designed around competitive trading fees, withdrawal fees, and
              value-added services within our ecosystem, which include staking, lending, and
              institutional-grade custody solutions. Operations Our platform employs
              state-of-the-art technology to ensure high throughput and low-latency transactions,
              providing our users with an exceptional trading experience. Cryptologic operates under
              strict regulatory compliance, ensuring a secure trading environment with robust AML
              and KYC protocols. Organizational Structure Helmed by a team of fintech veterans and
              blockchain pioneers, Cryptologic boasts a culture of innovation, agility, and
              transparency. Our dynamic team is dedicated to pushing the boundaries of what a crypto
              exchange can offer. Market Position Cryptologic’s competitive edge lies in our
              user-centric design, cutting-edge technology, and unwavering commitment to customer
              service. We have positioned ourselves as a trusted platform in the crypto space,
              focused on offering comprehensive trading tools, educational resources, and 24/7
              customer support
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creative-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Download Now
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
