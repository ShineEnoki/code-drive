import time
def sum(n):
    start = time.time()
    total = 0
    for i in range(1,n+1):
        total = total + i
    end =time.time()
    return total, end-start

def sum1(n):
    start = time.time()
    total = 0
    total = n*(n+1)/2
    end =time.time()
    return total, end-start

print("Sum value is %d , %.7f seconds" % sum(50000000))
print("Sum value is %d , %.7f seconds" % sum1(50000000))