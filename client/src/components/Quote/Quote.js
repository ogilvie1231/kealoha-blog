import React from "react";

const GetQuote = () => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Access the result here
      alert(this.responseText);
    }
  };
  xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "akid-kkia0-aodilai");
  xhttp.send();
  //   getQuote();

  return (
    <div>
      {/* <span style="z-index:50;font-size:0.9em; font-weight: bold;">
        <img
          src="https://theysaidso.com/branding/theysaidso.png"
          height="20"
          width="20"
          alt="theysaidso.com"
        />
        <a
          href="https://theysaidso.com"
          title="Powered by quotes from theysaidso.com"
          style="color: #ccc; margin-left: 4px; vertical-align: middle;"
        >
          They Said So®
        </a>
      </span> */}
    </div>
  );
};

export default GetQuote;
