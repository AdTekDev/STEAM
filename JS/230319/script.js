class  HatDau_PacMan {
  x;
  y;
  r;
  color;
  conKhong;

  constructor(vtX, vtY, bkR) {
    this.x = vtX;
    this.y = vtY;
    this.r = bkR;
    this.color = "red";
    this.conKhong = true;
  }

  biDungPacMan(pX,pY,dx,dy) {
    var diemCong = 0;
    if (
      ((pX + dx >= this.x - this.r)
        && (pX < this.x + this.r)
        && (pY + dy >= this.y - this.r)
        && (pY <= this.y + this.r))
    ) {
      this.color = "gray";
      this.conKhong = false;
      diemCong = 100;
    } else {
      diemCong = 0;
    }
    return diemCong;
  }

  veHatDau() {
    return  "" + "<circle   "
      + " cx=" + this.x
      + " cy=" + this.y
      + " r=" + this.r
      + " fill=" + this.color
      + " />";
  }
  
}


class  Ghost_PacMan {
  x;
  y;
  wx;
  wy;
  tocdo;
  linkImg;
  conKhong;

  constructor(vtX, vtY, rong, cao, hinhanh) { 
    this.x = vtX;
    this.y = vtY;
    this.wx = rong;
    this.wy = cao;
    this.linkImg = hinhanh;
    this.tocdo = 10;
  }

  diChuyenNgauNhien() {
    let huong = Math.floor(Math.random() * 4); // 0..3
    if (huong == 0) {
      this.x -= this.tocdo;
    } else if (huong == 1) {
      this.x += this.tocdo;
    } else if (huong == 2) {
      this.y -= this.tocdo;
    } else {
      this.y += this.tocdo;
    }
  }

  biDungPacMan(pX,pY,dx,dy) {
    let thua = false;
    if (
      ((pX + dx >= this.x - this.wx)
        && (pX < this.x + this.wx)
        && (pY + dy >= this.y - this.wy)
        && (pY <= this.y + this.wy))
    ) {
      this.conKhong = false;
      thua = true;
    } else {
      thua = false;
    }
    return thua;
  }

  veGhost() {
    return  "" + "<image   "
      + " x=" + this.x
      + " y=" + this.y
      + " height=" + this.wy
      + " width=" + this.wx
      + " href=" + this.linkImg
      + " />";
  }
  
}
