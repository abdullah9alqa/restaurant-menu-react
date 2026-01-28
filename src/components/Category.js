import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Category = ({ filterbyCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

  return (
    <Row className="my-2 mb-5">
      <Col className="d-flex justify-content-center">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="d-flex flex-wrap justify-content-center"
        >
          {allCategory.length >= 1 ? (
            allCategory.map((cat) => (
              <div key={cat}>
                <button
                  onClick={() => onFilter(cat)}
                  style={{ border: "1px solid #b45b35" }}
                  className="btn mx-2 my-1"
                >
                  {cat}
                </button>
              </div>
            ))
          ) : (
            <h4>لا يوجد تصنيفات الآن</h4>
          )}
        </motion.div>
      </Col>
    </Row>
  );
};

export default Category;
