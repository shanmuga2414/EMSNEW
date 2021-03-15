import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle

        return (
            <div className="breadcrumb-area">
			  <div className="container">
			    <div className="row">
			      <div className="col-md-12">
			        <div className="breadcrumb-inner d-flex justify-content-between">
			          <h2 className="page-title">{ HeaderTitle }</h2>
			          <ul className="page-list">
			            <li><Link to="/">Home</Link></li>
			            <li><Link to="/">{ HeaderTitle }</Link></li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        )
    }
}


export default Page_header