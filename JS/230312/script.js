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
