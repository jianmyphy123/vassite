import React from 'react';

class NewStream extends React.Component {
  render() {
    return (
      <div className="content-page">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 center-page" style={{maxWidth: 750}}>
                <div className="row m-t-20">
                  <div className="card-box inner-box" style={{minHeight: 800}}>

                    <div className="row page-header">
                        <span className="page-title"> New Stream </span>
                        <a href="main.html" className="btn btn-primary pull-right btn-bordred btn-rounded waves-effect waves-light p-lr-35"> Cancel </a>
                    </div>

                    <table className="table-responsive table table-hover">
                    </table>
                    <input type="text" />
                    <button>OK</button>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default NewStream;
