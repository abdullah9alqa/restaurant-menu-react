import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const ItemsList = ({ itemsData }) => {
  return (
    <Row>
      {itemsData.length >= 1 ? (
        itemsData.map((item) => (
          <Col
            as={motion.div}
            key={item.id}
            xs={12}
            md={6}
            lg={4}
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Card className="item-card">
              <Card.Img
                className="img-item"
                src={item.imgUrl}
                alt={item.title}
              />

              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  <span>{item.title}</span>
                  <span className="item-price">{item.price}</span>
                </Card.Title>

                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Col xs={12}>
          <h3 className="text-center">لا يوجد أصناف</h3>
        </Col>
      )}
    </Row>
  );
};

export default ItemsList;
