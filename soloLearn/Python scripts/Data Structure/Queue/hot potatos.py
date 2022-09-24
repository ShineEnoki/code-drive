from queue import Queue
def hotpotatos(namelist,No):
    q=Queue()
    for name in namelist:
        q.enqueue(name)
    while q.size() > 1:
        for i in range(No):
            p = q.dequeue()                   #p = selected person
            q.enqueue(p)
        p= q.dequeue()
        print(p)
    return q.dequeue()

print(hotpotatos(['a','b','c','d'],3))
        
