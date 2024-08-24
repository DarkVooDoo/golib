package golib

import "slices"

type QueueEnqueueterface[K any] interface{
    Enqueue(K)
    Dequeue()K
    Front()K
    Rear()K
    IsFull()bool
    Queue()[]K
    Size()int
}

type Queue[K any] struct{
    List []K
    Length int
}

func (q *Queue[K]) Enqueue(value K){
    if q.Length > len(q.List){
        q.List = append(q.List, value)
    }
}

func (q *Queue[K])Dequeue()K{
    out := q.List[0]
    q.List = slices.Delete(q.List, 0, 1)
    return out
}

func (q *Queue[K])Front()K{
    return q.List[0]
}

func (q *Queue[K])Rear()K{
    return q.List[len(q.List)-1]
}

func (q *Queue[K])IsFull()bool{
    if q.Length == len(q.List) {
        return true
    }else{
        return false
    }
}

func (q *Queue[K]) Queue()[]K{
    return q.List
}

func (q *Queue[K])Size()int{
    return len(q.List)
}

