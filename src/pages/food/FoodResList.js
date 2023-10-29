import React from "react";
import { Container, Card } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../../assets/111.jpg";
import { findByLocalCode } from "../../api/restaurant";
import { Link } from "react-router-dom";
import { asyncFindByFoodCode } from "../../store/restaurantSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const FoodResList = () => {
  const dispatch = useDispatch();
  const { foodCode } = useParams();

  const restaurantList = useSelector(
    (state) => state.restaurant.restaurantList
  );

  useEffect(() => {
    console.log(foodCode);
    dispatch(asyncFindByFoodCode(foodCode));
  }, [dispatch, foodCode]);

  console.log("restaurantList:", restaurantList); // 확인용 console.log 추가

  return (
    <Container
      style={{
        gap: "20px",
        paddingTop: "120px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {restaurantList.map((restaurant) => (
        <Link to={`/restaurant/${restaurant.resCode}`} key={restaurant.resCode}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={"/upload/" + restaurant?.resPicture} />
            <Card.Body>
              <Card.Text>
                <span
                  className="restaurant-name"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    display: "block",
                  }}
                >
                  {restaurant.resName}
                </span>

                <StarFill
                  className="bi bi-star-fill"
                  style={{
                    fontSize: "1.3rem",
                    color: "#fbe94b",
                    margin: "3px",
                  }}
                />
                <span style={{ fontSize: "1.3rem" }}>
                  평점
                  {/* {location.rating} */}
                </span>
                <span
                  className="last-line"
                  style={{ fontSize: "1.1rem", display: "block" }}
                >
                  {restaurant.food.foodType}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </Container>
  );
};

export default FoodResList;
