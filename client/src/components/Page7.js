import React from 'react';

export default () => {
  return (
    <div className="content-page">

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 center-page">
              <div className="row m-t-20">

                <div className="card-box inner-box">

                  <div className="row page-header">
                      <span className="page-title"> List all streams </span>
                      <a href="new_stream.html" className="btn btn-primary pull-right btn-bordred btn-rounded waves-effect waves-light p-lr-35"> New stream </a>
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
                        <tr>
                            <td className="stream">
                                <span className="text-primary"> Send nighty partner report to client with blablabla blablabla blablabla </span></td>
                            <td className="files">
                                <span className="text-primary"> 342 </span></td>
                            <td>
                                <span className="text-ellipsis"> 03:53 pm - 03/15/2016 </span></td>
                            <td>
                                <span className="text-success"><strong> None </strong></span></td>
                        </tr>
                        <tr>
                            <td className="stream">
                                <span className="text-primary"> Receive hourly targeting data from Walm blablabla blablabla blablabla </span></td>
                            <td className="files">
                                <span className="text-primary"> 12,438 </span></td>
                            <td>
                                <span className="text-ellipsis"> 03:53 pm - 03/15/2016 </span></td>
                            <td>
                                <span className="text-success"><strong> None </strong></span></td>
                        </tr>
                        <tr>
                            <td className="stream">
                                <span className="text-muted"> Weekly Salesforce forecast data </span></td>
                            <td className="files">
                                <span className="text-primary"> 0 </span></td>
                            <td>
                                <span className="text-ellipsis"> 03:53 pm - 03/15/2016 </span></td>
                            <td>
                                <span className="text-danger"><strong> 3 </strong></span></td>
                        </tr>
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
