import React, { Component } from "react";

export default class Se_index extends Component {
  constructor(props) {
    super(props);
    this.state = { trangthai:0 };
  }
  thongbao = () => {
    alert("Cách xử lý tương tác trong React Js");
  };
  thongbao2 = (x, y) => {
    alert(x + y);
  };
  thongbao3 = (x, y)0 => {
    alert("Thay gi chua");
  };

  rend_form = () => (
    <div>
      <input type="text" name="ten" ref = {(dulieunhap)=>{ this.trunggian = dulieunhap }} className="form-control" defaultValue={this.props.tieude}></input>
      <button type="button" className="btn btn-warning" onClick={()=>this.save_bt()}>
        Save
      </button>
    </div>
  );

  rend_button = () => (
    <div className="btn-group" role="group">
      <button type="button" className="btn btn-primary" onClick={()=>this.edit_bt()}>
        Edit
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => this.thongbao2(5, 5)}
      >
        Middle
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={this.thongbao3.bind(this, "Ho ho")}
      >
        Right
      </button>
    </div>
  );

  displayCheck = () => {
    if (this.state.trangthai === 0) {
        return this.rend_button();
    } else {
        return this.rend_form();
    }
  }

  edit_bt=()=>
  {
    return this.setState({trangthai:1});
  }
  save_bt=()=>
  {
    this.setState({trangthai:0});
    console.log(this.trunggian.value);
  }

  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className={"col-lg-6 " + this.props.vitri}>
                <div className="p-5">
                  <img
                    className="img-fluid rounded-circle"
                    src={this.props.link_anh}
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                <h2 className="display-4">{this.props.tieude}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                  {this.displayCheck()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
