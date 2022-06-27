import React from 'react'
import {
  Row,
  Col
} from 'reactstrap'
import ListProduct from '../../assets/NoPath-Copy/NoPath-Copy-small.png'


const Items = ({products}) => {
  return (
    <>
      <Row className="list-item-group">
        <Col><img src={ListProduct} alt="" /></Col>
        <Col className="detail-product">
          <Row>
            <Col>
              <Row className="product-name">[Nama Produk]</Row>
              <Row className="product-detail">
                <Col>Rp. XXX</Col>
                <Col>[jml terjual]</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Items