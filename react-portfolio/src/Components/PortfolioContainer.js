import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import ContactForm from "./Pages/ContactForm";
import Resume from "./Pages/Resume";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  console.log("My current page is", currentPage);
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "ContactForm") {
      return <ContactForm />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
  );
}

export default PortfolioContainer;