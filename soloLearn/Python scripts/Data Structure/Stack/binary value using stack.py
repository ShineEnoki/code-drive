from stack import Stack
def d2(dn):         # d2= divided by 2
    s=Stack()        #dn = decimal number
    while dn > 0:
        x = dn % 2
        s.push(x)
        dn = dn // 2
    bs = " "       # bs = binary string
    while not s.is_empty():
        bs = bs + str(s.pop())
    return bs

print(d2(668))

