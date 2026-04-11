import { Row, Col, Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>

      <Row className="p-3">
        <Col>
          <img
            className='img-fluid'
            src='/xoch_sews_website/images/PatchworkDuffle__KnotThread.jpg'
            alt='Pink Patchwork Duffle Bag ' />
        </Col>

        <Col>
          <img
            className='img-fluid'
            src='/xoch_sews_website/images/DerpyTiger_FPP.jpeg'
            alt='K-Pop Demon Hunters Derpy Tiger FPP Wall Hanging on a burgundy spekcled fabric with gold binding.' />
        </Col>

        <Col>
          <img
            className='img-fluid'
            src='/xoch_sews_website/images/LoveRainbowBlock.jpg'
            alt='Love Rainbow Block: 6 Layered hearts in red, pink, orange, yellow, green, and blue fabrics on a floral fabric pillowcase.' />
        </Col>
      </Row>

      <div className="box">
        <div className="inner-box">
          <h1>Welcome!</h1>
          <p className="m-0">
            A little bit about me, I'm a self-taught sewist and quilter located in Southern California.
            <br/>
            My sewing journey began during the 2020 COVID pandemic with no sewing experience or knowledge, I handstitched my first sewing project a face mask.
            I quickly realized, I did not want to handsew and was luckily able to get my hands on a sewing machine.
            I spent hours on YouTube and reading through multiple sewing related websites and blogs to gain my knowledge.
          </p>
          <br />
          <p>
            I started sewing children and adult garments, plushies, blankets, bags, and so on.
            In the winter of 2024, I decided to make my 1st baby quilt, not blanket, which led me to dive head first into quilting.
            I'm may be new to quilting but I've learned so much in about a year and a half.
          </p>
          <br />
          <p>
            Some of the quilting interests include: color theory, foundation paper piecing, and pattern design.
          </p>
        </div>

      </div>
    </Container>
  );
}
