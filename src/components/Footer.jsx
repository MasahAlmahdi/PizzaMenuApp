function Footer() {
  const hours = new Date().getHours();
  const openH = 9;
  const closeH = 23;
  const isOpen = hours >= openH && hours <= closeH;
  console.log(hours);
  // if (hours >= openH && hours <= closeH) {
  //   alert("were currently open");
  // } else {
  //   alert("were currently closed!");
  // }
  return (
    <div>
      {isOpen && (
        <div className="order">
          <p>We're open untill {closeH}:00, Come visit us or order online</p>
          <button className="btn">Order Now</button>
        </div>
      )}
    </div>
  );
}

export default Footer;
