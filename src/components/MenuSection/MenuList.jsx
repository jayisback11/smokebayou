import React from "react";
import data from "../../data.json";

const MenuList = () => {
  const sectionStyle = {
    marginBottom: "40px",
  };
  const headerStyle = {
    backgroundColor: data.theme.color,
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
  };
  const listStyle = {
    listStyle: "none",
    paddingLeft: 0,
  };
  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "2px 0",
    borderBottom: "1px solid #ccc",
  };
  const priceStyle = {
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        lineHeight: 1.6,
        background: "#f8f8f8",
        color: "#333",
      }}
    >
      <h1 style={{ color: data.theme.color }}>
        {data.welcome.businessname} Menu
      </h1>

      {/* Combo Meat Plates */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Combo Meat Plates</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>
              3‑Meat Combo (ribs, chicken quarter & sausage) w/ 2 sides
            </span>
            <span style={priceStyle}>$28.99</span>
          </li>
          <li style={itemStyle}>
            <span>Brisket & Ribs Combo (½ lb brisket, 4 ribs) w/ 2 sides</span>
            <span style={priceStyle}>$32.50</span>
          </li>
          <li style={itemStyle}>
            <span>
              4‑Meat Combo (brisket, ribs, chicken, sausage) w/ 2 sides
            </span>
            <span style={priceStyle}>$48.99</span>
          </li>
          <li style={itemStyle}>
            <span>
              5‑Meat Combo (brisket, ribs, chicken, pulled pork, sausage) w/ 2
              sides
            </span>
            <span style={priceStyle}>$57.99</span>
          </li>
        </ul>
      </div>

      {/* Smoked Entrees */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Smoked Entrees</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>½ lb Smoked Brisket w/ 2 sides</span>
            <span style={priceStyle}>$19.75</span>
          </li>
          <li style={itemStyle}>
            <span>Ribs (4) w/ 2 sides</span>
            <span style={priceStyle}>$18.99</span>
          </li>
          <li style={itemStyle}>
            <span>Pulled Pork (½ lb) w/ 2 sides</span>
            <span style={priceStyle}>$17.49</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Quarter w/ 2 sides</span>
            <span style={priceStyle}>$16.75</span>
          </li>
          <li style={itemStyle}>
            <span>Smoked Sausage Link w/ 2 sides</span>
            <span style={priceStyle}>$16.75</span>
          </li>
        </ul>
      </div>

      {/* Burritos */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Burritos</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Brisket Burrito w/ side</span>
            <span style={priceStyle}>$18.50</span>
          </li>
          <li style={itemStyle}>
            <span>Pulled Pork Burrito w/ side</span>
            <span style={priceStyle}>$18.50</span>
          </li>
          <li style={itemStyle}>
            <span>Rib Burrito w/ side</span>
            <span style={priceStyle}>$18.50</span>
          </li>
          <li style={itemStyle}>
            <span>Chicken Burrito w/ side</span>
            <span style={priceStyle}>$16.50</span>
          </li>
          <li style={itemStyle}>
            <span>Ultimate Burrito (all meats) w/ side</span>
            <span style={priceStyle}>$28.50</span>
          </li>
        </ul>
      </div>

      {/* Sandwiches */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Sandwiches</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Brisket Sandwich on Garlic Texas Toast w/ 1 side</span>
            <span style={priceStyle}>$17.25</span>
          </li>
          <li style={itemStyle}>
            <span>Pulled Pork Sandwich on Garlic Texas Toast w/ 1 side</span>
            <span style={priceStyle}>$15.00</span>
          </li>
          <li style={itemStyle}>
            <span>Rib Sandwich on Garlic Texas Toast w/ 1 side</span>
            <span style={priceStyle}>$15.00</span>
          </li>
        </ul>
      </div>

      {/* Nachos */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Nachos</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Ultimate Nachos (all meats)</span>
            <span style={priceStyle}>$28.50</span>
          </li>
          <li style={itemStyle}>
            <span>Smoked Brisket Nachos</span>
            <span style={priceStyle}>$18.99</span>
          </li>
          <li style={itemStyle}>
            <span>Pulled Pork Nachos</span>
            <span style={priceStyle}>$16.75</span>
          </li>
          <li style={itemStyle}>
            <span>Smoked Ribs Nachos</span>
            <span style={priceStyle}>$17.49</span>
          </li>
          <li style={itemStyle}>
            <span>Sausage Nachos</span>
            <span style={priceStyle}>$14.50</span>
          </li>
          <li style={itemStyle}>
            <span>Regular Nachos</span>
            <span style={priceStyle}>$8.50</span>
          </li>
        </ul>
      </div>

      {/* Sides by Portion */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Sides</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>Mac N Cheese</span>
            <span style={priceStyle}>$4.00 (16oz)</span>
          </li>
          <li style={itemStyle}>
            <span>Baked Beans</span>
            <span style={priceStyle}>$4.00</span>
          </li>
          <li style={itemStyle}>
            <span>Potato Salad</span>
            <span style={priceStyle}>$4.00</span>
          </li>
          <li style={itemStyle}>
            <span>Coleslaw</span>
            <span style={priceStyle}>$4.00</span>
          </li>
          <li style={itemStyle}>
            <span>Smoked Cabbage</span>
            <span style={priceStyle}>$4.00</span>
          </li>
          <li style={itemStyle}>
            <span>Candied Yams</span>
            <span style={priceStyle}>$4.00</span>
          </li>
          <li style={itemStyle}>
            <span>Smoked Collards</span>
            <span style={priceStyle}>$4.00</span>
          </li>
          <li style={itemStyle}>
            <span>Fries</span>
            <span style={priceStyle}>$5.00</span>
          </li>
        </ul>
      </div>

      {/* Drinks & Sweets */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Drinks & Sweets</h2>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <span>32 oz Bayou Juice (pineapple‑lemonade special)</span>
            <span style={priceStyle}>$8.50</span>
          </li>
          <li style={itemStyle}>
            <span>1 gallon Bayou Juice</span>
            <span style={priceStyle}>$23.50</span>
          </li>
          <li style={itemStyle}>
            <span>7‑Up Cake slice</span>
            <span style={priceStyle}>$5.50</span>
          </li>
          <li style={itemStyle}>
            <span>Red Velvet slice</span>
            <span style={priceStyle}>$6.50</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuList;
