
class TraiBanh {
  x;
  y;
  r;
  tocdoX;
  tocdoY;


  constructor(vtX, vtY, rr, tdx, tdy) {
    this.x = vtX;
    this.y = vtY;
    this.r = rr;
    this.tocdoX = tdx;
    this.tocdoY = tdy;
  }


  diChuyen(x1, y1, x2, y2, duration) {
    let tx = Math.floor(this.tocdoX * duration / 1000);
    let ty = Math.floor(this.tocdoY * duration / 1000);
    if (this.x + tx < x1) {
      this.tocdoX = -this.tocdoX;
      this.x = x1 + Math.abs(this.x + tx - x1);
    } if (this.x + tx > x2) {
      this.tocdoX = -this.tocdoX;
      this.x = x2 - Math.abs(this.x + tx - x2);
    } else {
      this.x = this.x + tx;
    }

    if (this.y + ty < y1) {
      this.tocdoY = -this.tocdoY;
      this.y = y1 + Math.abs(this.y + ty - y1);
    } if (this.y + ty > y2) {
      this.tocdoY = -this.tocdoY;
      this.y = y2 - Math.abs(this.y + ty - y2);
    } else {
      this.y = this.y + ty;
    }

  }



  veTraiBanh() {
    return "" + "<circle   "
      + " cx=" + this.x
      + " cy=" + this.y
      + " r=" + this.r
      + " fill=blue"
      + " />";
  }

}


//----------------------------------------------------------------
//----------------------------------------------------------------
class BiaDoBanh {
  x;
  y;
  wx;
  hy;
  tocdo;
  chieudichuyen;
  phia;


  constructor(vtX, vtY, zx, zy, td, chieu) {
    this.x = vtX;
    this.y = vtY;
    this.wx = zx;
    this.hy = zy;
    this.tocdo = td;
    this.phia = chieu;
  }


  diChuyen(x1, y1, x2, y2, duration, direction) {
    //let ty = Math.floor(this.tocdo * duration / 1000);
    this.chieudichuyen = direction;
    let ty = 0;
    if (direction < 0)
      ty = -this.tocdo;
    else
      ty = this.tocdo;
    
    if (this.y + ty < y1) {
      this.tocdo = 0;
      this.y = y1;
    } if (this.y + ty + this.hy > y2) {
      this.tocdo = 0;
      this.y = y2 - this.hy;
    } else {
      this.y = this.y + ty;
    }

  }


  DungBanh(bx,by,br) {
    dung = 0;
    if (this.y <= by &&  by <=  thisy + this.hy) {
      if (
        (this.phia > 0 && this.x <= bx+br  &&  bx <=  this.x + this.wx)
      || (this.phia <= 0 && this.x <= bx-br  &&  bx >=  this.x + this.wx)
      ) {
        if (this.chieudichuyen < 0) {
          dung = -1;
        } else if (this.chieudichuyen < 0) {
          dung = 1;
        } else {
          dung = 2;
        }
      }
    }

    return dung;
  }



  Ve() {
    return "" + "<rect   "
      + " x=" + this.x
      + " y=" + this.y
      + " width=" + this.wx
      + " height=" + this.hy
      + " fill=blue"
      + " />";
  }

}
