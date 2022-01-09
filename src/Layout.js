import QuoteCard from './QuoteCard';

const Layout = () => {
  return (
    <div>
      <div className="row mt-5"></div>
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <QuoteCard />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Layout;
