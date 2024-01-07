#     *
#    ***
#   *****
#     *
#     *
#    ***
#   *****
#     *
#     *
#     *
#   *****

n = 3
for i in range(n):
    print(" "*(n-i) + "*"*(2*i+1))
print(" "*n + "*")

for i in range(n):
    print(" "*(n-i) + "*"*(2*i+1))

for i in range(n):
    print(" "*n + "*")

print(" " + "*"*(2*n-1))