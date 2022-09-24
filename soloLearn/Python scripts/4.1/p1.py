class Stack:
    def __init__(self):
        self.items = []
    def is_empty(self):
        return self.items == []
    def push(self, item):
        self.items.append(item)
    def pop(self):
        return self.items.pop()
    def peek(self):
        return self.items[len(self.items) - 1]
    def size(self):
        return len(self.items) #function name က(push တို့ peek တို့က) အရေးမပါဘူး
    
def d8(dn):         
    s=Stack()        
    while dn > 0:
        x = dn % 8
        s.push(x)
        dn = dn // 8
    bs = " "       # bs = binary string
    while not s.is_empty():
        bs = bs + str(s.pop())
    return bs

print(d8(668))