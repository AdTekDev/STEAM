#       *
#      ***
#     *****
#       *
#      ***
#     *****
#    *******
#   *********
#       *
#       *
#       *
#  ************

bd = 3
n = bd
soTang = 5
for T in range(soTang):
    for i in range(n):
        print(" "*(2*(soTang-T)+n-i) + "*"*(2*i+1))
    n += 2
    
n = bd
for i in range(n):
    print(" "*(2*soTang+n) + "*")

print(" " + "*"*(2*(2*soTang+n)-1))