from queue import Queue
class PQueue:
    def __init__(self):
        self.items = {}
    def isEmpty(self):
        return len(self.items) == 0
    def enqueue(self, item,priority=0):
        if priority not in self.items:
            self.items[priority] = Queue()
            queue = self.items[priority]
            queue.enqueue(item)

    def dequeue(self):
            keys = sorted(list(self.items.keys()))
            print(keys)
            if len(keys) > 0 :
                cursor = keys[-1]
                myqueue = self.items[cursor]
                val = myqueue.dequeue()
                if myqueue.size() == 0 :
                    del self.items[cursor]
                return val
            return ""
    def size(self):
        size = 0
        for key in self.items.keys():
            size = size + self.items[key].size()
        return size

    
p = PQueue()
p.enqueue("HELLO",0)
p.enqueue("H",1)
p.enqueue("E",3)
p.enqueue("L",5)
p.enqueue("O",0)
p.enqueue("LLO",2)

print(p.size())
print(p.dequeue())


    