import React from 'react';
import { connect } from 'react-redux';
import { page5Request } from '../actions/pageActions';

class Page5 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tableData: []
    };

    document.title = "Page 5";

    this.props.page5Request().then(({data}) => {

      if(this.state.tableData) {
        this.setState({ tableData: data.map((row, key) => {


          if(key < data.length - 1) {
            return (
              <tr key={key}>
                <td className="stream">
                  <span className="text-primary"> {row.stream} </span></td>
                <td className="files">
                  <span className="text-primary"> {row.files} </span></td>
                <td>
                  <span className="text-ellipsis"> {row.Date} </span></td>
                <td>
                  <span className="text-success"><strong> {row.errors} </strong></span></td>
              </tr>
            );
          } else {
            return (
              <tr key={key}>
                <td className="stream">
                  <span className="text-muted"> {row.stream} </span></td>
                <td className="files">
                  <span className="text-primary"> {row.files} </span></td>
                <td>
                  <span className="text-ellipsis"> {row.Date} </span></td>
                <td>
                  <span className="text-danger"><strong> {row.errors} </strong></span></td>
              </tr>
            );
          }

        }) })
      }
    });
  }

  newStream(e) {
    e.preventDefault();

    this.props.history.push('/newstream');
  }

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
                        <span className="page-title"> Page 5 Table </span>
                    </div>

                    <table className="table-responsive table table-hover">
                      <thead>
                        <tr>
                          <th className="stream"> Stream </th>
                          <th className="files"> Files </th>
                          <th> Last Active </th>
                          <th> Errors </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.tableData}
                      </tbody>
                    </table>

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

export default connect(null, { page5Request })(Page5);
