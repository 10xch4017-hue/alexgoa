import React from "react";
import ImageCarousel from "../components/ImageCarousel";
import ChoosePanel from "../components/ChoosePanel";
import Services from "../components/Services";
import CTASection from "../components/CTASection";
import OptimizedServices from "../components/OptimizedServices";
import StatsCounter from "../components/StatsCounter";
import BrandCarousel from "../components/BrandCarousel";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";

const HomePage = () => {
  return (
    <>
      <ImageCarousel />
      {/* Animated Background Wrapper */}
      <section className="animated-bg">
        <ChoosePanel />
      </section>
      <Services />
      <CTASection />
      <OptimizedServices />
      <StatsCounter />
      <BrandCarousel />
      <ContactSection />
      <FAQ />
      {/* SEO Content Section */}{" "}
      <section
        style={{
          background: "#ffffff",
          color: "#111111",
          padding: "80px 20px",
        }}
      >
        {" "}
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", lineHeight: "1.9" }}
        >
          {" "}
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            {" "}
            Betting Platform Solutions & Panel Management Systems{" "}
          </h2>{" "}
          {/* Betting Panel Provider */}{" "}
          <div style={{ marginBottom: "60px" }}>
            {" "}
            <h3 style={{ fontSize: "30px", marginBottom: "20px" }}>
              {" "}
              <a
                href="https://alexgoa.com/betting-panel-provider"
                style={{ color: "#111111", textDecoration: "none" }}
              >
                {" "}
                Betting Panel Provider{" "}
              </a>{" "}
            </h3>{" "}
            <p>
              {" "}
              Online betting platforms require stable backend systems to manage
              users, betting activity, transactions, and operational controls
              efficiently. A{" "}
              <a href="https://alexgoa.com/betting-panel-provider">
                {" "}
                betting panel provider{" "}
              </a>{" "}
              helps businesses handle these operations through centralized
              systems designed for scalability and real-time management.{" "}
            </p>{" "}
            <p>
              {" "}
              As betting platforms continue expanding across global digital
              markets, businesses increasingly focus on systems that support
              scalability, security, and operational efficiency.{" "}
            </p>{" "}
          </div>{" "}
          {/* Rental Betting ID Panel */}{" "}
          <div style={{ marginBottom: "60px" }}>
            {" "}
            <h3 style={{ fontSize: "30px", marginBottom: "20px" }}>
              {" "}
              <a
                href="https://alexgoa.com/rental-betting-id-panel/"
                style={{ color: "#111111", textDecoration: "none" }}
              >
                {" "}
                Rental Betting ID Panel{" "}
              </a>{" "}
            </h3>{" "}
            <p>
              {" "}
              Rental betting ID panel systems are designed to simplify betting
              operations through centralized user and transaction
              management.{" "}
            </p>{" "}
            <p>
              {" "}
              Modern betting operations depend on stable systems capable of
              handling multiple users, transaction tracking, and API
              synchronization efficiently.{" "}
              <a href="https://alexgoa.com/rental-betting-id-panel/">
                {" "}
                Rental betting ID panel{" "}
              </a>{" "}
              systems support these requirements through scalable backend
              infrastructure.{" "}
            </p>{" "}
          </div>{" "}
          {/* Master Panel Provider India */}{" "}
          <div style={{ marginBottom: "60px" }}>
            {" "}
            <h3 style={{ fontSize: "30px", marginBottom: "20px" }}>
              {" "}
              <a
                href="https://alexgoa.com/master-panel-provider-india/"
                style={{ color: "#111111", textDecoration: "none" }}
              >
                {" "}
                Master Panel Provider India{" "}
              </a>{" "}
            </h3>{" "}
            <p>
              {" "}
              Master panel provider India systems help businesses manage
              large-scale betting operations through centralized backend
              infrastructure and operational controls.{" "}
            </p>{" "}
            <p>
              {" "}
              As online betting environments become more competitive, businesses
              require structured systems capable of handling real-time betting
              activity efficiently.{" "}
              <a href="https://alexgoa.com/master-panel-provider-india/">
                {" "}
                Master panel provider India{" "}
              </a>{" "}
              solutions support scalable betting environments and operational
              stability.{" "}
            </p>{" "}
          </div>{" "}
          {/* Reddy Anna Panel Provider */}{" "}
          <div>
            {" "}
            <h3 style={{ fontSize: "30px", marginBottom: "20px" }}>
              {" "}
              <a
                href="https://alexgoa.com/reddy-anna-panel-provider"
                style={{ color: "#111111", textDecoration: "none" }}
              >
                {" "}
                Reddy Anna Panel Provider{" "}
              </a>{" "}
            </h3>{" "}
            <p>
              {" "}
              Reddy Anna panel provider systems support online betting
              operations through structured backend management, API integration,
              and operational control systems.{" "}
            </p>{" "}
            <p>
              {" "}
              Modern betting platforms depend on real-time systems, secure
              infrastructure, and organized operational management to maintain
              smooth performance.{" "}
              <a href="https://alexgoa.com/reddy-anna-panel-provider">
                {" "}
                Reddy Anna panel provider{" "}
              </a>{" "}
              systems help simplify betting operations while supporting scalable
              infrastructure and centralized management.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>
    </>
  );
};

export default HomePage;
