<div
  id="navbartoggle"
  className={this.state.scroll > 600 ? "is-black nav-bg" : "nav-bg"}
>
  <div class=" d-flex justify-content-between py-2">
    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 ">
      <a href="/">
        <img
          class="mainlogo img-responsive"
          src="img/logomaverickwhite.png"
          alt="logo"
        />
      </a>
    </div>
    <div className="menu">
      <a href="/">
        <button class="btn btn-become-tutor my-2 my-sm-0">Home</button>
      </a>
      <a href="/">
        <button class="btn btn-become-tutor my-2 my-sm-0">Tutorials</button>
      </a>
      <a href="/">
        <button class="btn btn-become-tutor my-2 my-sm-0">Pricing</button>
      </a>
    </div>
  </div>
</div>;
