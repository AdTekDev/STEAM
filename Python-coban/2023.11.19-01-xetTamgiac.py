a = int ( input("nhap vao Do-Dai canh a: ") )
b = int ( input("nhap vao Do-Dai canh b: ") )
c = int ( input("nhap vao Do-Dai canh c: ") )

if (a + b > c and  a + c > b):
    if (a == b and a == c):
        print("day la tam giac DEU")
    elif (a == b):
        print("day la tam giac CAN C")
    elif (a == c):
        print("day la tam giac CAN B")
    elif (c == b):
        print("day la tam giac CAN A")
    else:
        print("day la tam giac ...")
else:
    print("day KO PHAI la tam giac")
