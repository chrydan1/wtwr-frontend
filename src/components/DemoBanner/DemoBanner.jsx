import "./DemoBanner.css";

function DemoBanner() {
  return (
    <p className="demo-banner">
      <span className="demo-banner__tag">Demo</span>
      The backend server is offline, so this version runs only in your
      browser. You can sign up, log in and add clothes, but nothing is saved
      after you reload the page.
    </p>
  );
}

export default DemoBanner;
