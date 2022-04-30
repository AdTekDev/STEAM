
# ...
colors = ["red" , "yellow" , "green" , "cyan", "magenta"]



for i in range(8):
  for j in range(8):
    x = 200 - i*50
    y = 200 - j*50
    fillcolor(  colors[ (i+j) % 5])
    penup()
    setposition(x, y)
    pendown()
    begin_fill()
    forward(50)
    left(120)
    forward(50)
    left(120)
    forward(50)
    left(120)
    end_fill()
