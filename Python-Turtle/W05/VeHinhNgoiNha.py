

from turtle  import *


# Noc nha 
penup()
setposition(0, 120)
pendown()
goto(100,180)
goto(200,120)

# Than nha
goto(200,0)
goto(0,0)
goto(0,120)


# Cua so
soluong = 4

for i in range(soluong):
  penup()
  setposition(20+i*20,40)
  pendown()
  goto(20+i*20,40+(soluong-1)*20)

for i in range(soluong):
  penup()
  setposition(20,40+i*20)
  pendown()
  goto(20+(soluong-1)*20 ,40+i*20)

