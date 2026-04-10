import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export default function Wishlist() {
    return (
        <Container>
            <h1>Wishlist</h1>
            <Row className="mb-3">
                <Col md={6}>

                    <div className="box">
                        <div className="inner-box">
                            <h2>Favorite Quilt Stores</h2>
                            <ul>
                                <li><a href='https://sewingarts.com/'>Sewing Arts</a></li>
                                <li><a href='https://www.quiltillion.com/'>Quiltillion</a></li>
                                <li><a href='https://www.quiltemporium.com/'>Quilt Emporium</a></li>
                                <li><a href='https://www.orangequiltbee.com/'>Orange Quilt Bee</a></li>
                                <li><a href='https://www.quiltypleasuressimivalley.com/'>Quilty Pleasure</a></li>
                                <li><a href='https://www.trishtacsew.com/'>Trish Tac Sew</a></li>
                            </ul>
                        </div>
                    </div>

                </Col>

                <Col md={6}>
                    <div className="box">
                        <div className="inner-box">
                            <h2>Favorite Designers</h2>
                            <ul>
                                <li><a href='https://prideandjoyquilting.com/'>Pride & Joy Quilting</a></li>
                                <li><a href='https://elizabethhartman.com/'>Elizabeth Hartman</a></li>
                                <li><a href='https://www.quiltemporium.com/'>Alison Glass</a></li>
                                <li><a href='https://www.latifahsaafirstudios.com/'>Latifah Saafir</a></li>
                                <li><a href='https://www.etsy.com/shop/quiltbynightdesigns/?etsrc=sdt'>Quilt by Night</a></li>
                                <li><a href='https://www.quiltallthethings.com/'>Melissa de Leon Mason</a></li>
                                <li><a href='https://www.thequiltersfaire.com/'>Quilter's Faire</a></li>
                                <li><a href='https://www.quiltingforcommunity.org/'>Quilting for Community</a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="box">
                        <div className="inner-box">
                            <h3>Wishlist</h3>
                            <ul>
                                <li><a href='https://oliso.com/collections/project-irons/products/m3pro-project-iron-raspberry'>Oliso M3 Pro(Mini Iron)</a></li>
                                <li><a href='https://sewingarts.com/products/add-a-quarter-ruler-6-inch?_pos=18&_sid=7af2c2250&_ss=r'>Add-a-Quarter-Ruler (6")</a></li>
                                <li><a href='https://www.trishtacsew.com/shop/c/p/Add-A-Quarter-Ruler-12in-Plus-x69960745.htm'>Add-a-Quarter-Ruler (12")</a></li>
                                <li><a href='https://www.fatquartershop.com/foundation-piecing-paper-quiet-play'>Kristy Lea Foundation Piecing Paper</a></li>
                                <li><a href='https://www.dickblick.com/items/olfa-rotating-cutting-mat-12-x-12/?clicktracking=true&wmcp=pla&wmcid=items&wmckw=57516-7012&country=us&currency=usd'>Rotating Cutting Mat</a></li>
                                <li><a href='https://www.quiltillion.com/shop/c/p/3-Scrappy-Triangle-FPP-x98963494.htm'>Scrappy Triangles FPP (3")</a></li>
                                <li><a href='https://www.quiltillion.com/shop/c/p/6-Scrappy-Triangle-FPP-x99209333.htm'>Scrappy Triangles FPP (6")</a></li>
                                <li><a href='https://www.quiltillion.com/shop/c/p/Scrappy-Half-Rect-Triangle-FPP-x98963468.htm'>Scrappy Half-Rect Triangle FPP</a></li>
                                <li><a href='https://prideandjoyquilting.com/products/size-class-15-color-pink-diamond-bobbin-box-keepers'>Bobbin Box & Keepers (Class 15/J)</a></li>

                            </ul>
                        </div>
                    </div>
                </Col>

                <Col>
                    <div className="box">
                        <div className="inner-box">
                            <h3>Always Accepting</h3>
                            <ul>
                                <li>Thread
                                    <ul>
                                        <li>Mettler 50wt (1000m/1094yd)</li>
                                        <li>Aurifil 50wt (1300m/1422yd)</li>
                                    </ul>
                                </li>
                                <li>
                                    Solid Fabrics:
                                    <ul>
                                        <li>Confetti Cotton Solids</li>
                                        <li>Art Gallery Fabrics</li>
                                        <li>Moda Bella</li>
                                        <li>Kona Cotton</li>
                                    </ul>
                                </li>
                                <li>
                                    Ruby Star Society Fabrics:
                                    <ul>
                                        <li>Speckled</li>
                                        <li>Selvedge: Magic, Letters, & Icons</li>
                                        <li>Starry</li>
                                    </ul>
                                </li>
                                <li>Fabric Bundles</li>
                                <ul>
                                    <li>Fat Quarter</li>
                                    <li>Half Yard</li>
                                    <li>Layer Cakes</li>
                                    <li>5" Charm Packs</li>

                                </ul>
                                <li>Quilting Patterns</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}