
a = float ( input("nhap he so A: ") )
b = float ( input("nhap he so B: ") )
c = float ( input("nhap he so C: ") )

if (a == 0):
    if (b == 0):
        if (c == 0):
            print("Vo so nghiem !")
        else:
            print(" Vo NGHIEM ! ")
    else:
        print("Ptb I co nghiem ", -c/b)
else:
    delta = b*b - 4*a*c
  
