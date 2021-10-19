import React, { useEffect, useState } from "react";
import { Col, Container, Button, Form, Row } from "react-bootstrap";
import "./BMICalculator.css";
const BMICalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [bmiMsg, setbBmiMsg] = useState("");

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleHeight = (e) => {
    const heightInCM = e.target.value;
    setHeight(heightInCM / 100);
  };
  console.log(bmi);
  useEffect(() => {
    if (bmi === 0) {
      setbBmiMsg("");
    } else if (bmi > 0 && bmi < 16.0) {
      setbBmiMsg("You are Severely Underweight. It's not a good BMI");
    } else if (bmi >= 16.5 && bmi < 18.4) {
      setbBmiMsg("");
      setbBmiMsg("You are Underweight. You should gain some weight");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setbBmiMsg("");
      setbBmiMsg("Great!. Your BMI is Normal. Keep yourself fit");
    } else if (bmi >= 25.0 && bmi < 29.9) {
      setbBmiMsg("");
      setbBmiMsg("You are Overweight. Do workout regularly");
    } else if (bmi >= 30.0 && bmi < 34.9) {
      setbBmiMsg("");
      setbBmiMsg("You are Moderately Obese. Do Diet and workout regularly");
    } else if (bmi >= 35.0 && bmi < 39.9) {
      setbBmiMsg("");
      setbBmiMsg(
        "You are Severely Obese. Do Diet and workout regularly. Get Doctor Consultancy"
      );
    } else if (bmi >= 40.0) {
      setbBmiMsg("");
      setbBmiMsg(
        "Healt Risk....You are Morbidly Obese. Do Diet and workout regularly. Get Doctor Consultancy"
      );
    }
  }, [bmi]);
  const calcBMI = (e) => {
    e.preventDefault();
    const calcBmi = weight / (height * height);
    const bmiTwoDigit = calcBmi.toFixed(2);
    setBmi(parseInt(bmiTwoDigit));
  };
  return (
    <>
      <section id="bmi-calculator" className="py-5">
        <Container className="bmi-content">
          <Row>
            <h2 className="fs-1 py-4">
              Calculate Your <span className="site-aqua">BMI</span>
            </h2>
            <Col>
              <Form onSubmit={calcBMI} className="bmi-calc py-4 w-75 mx-auto">
                <Form.Group className="mb-3" controlId="weight">
                  <Form.Label className="fs-3">Weight (KG)</Form.Label>
                  <Form.Control
                    className="w-25 mx-auto"
                    type="number"
                    name="weight"
                    onKeyUp={handleWeight}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="fs-3">Height (CM)</Form.Label>
                  <Form.Control
                    className="w-25 mx-auto"
                    type="number"
                    name="height"
                    onKeyUp={handleHeight}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="site-btn">
                  Calculate
                </Button>
              </Form>
            </Col>
            <Col>
              <h2>
                Your BMI is: <span className="site-aqua">{bmi}</span>
              </h2>
              <p>{bmiMsg}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BMICalculator;
