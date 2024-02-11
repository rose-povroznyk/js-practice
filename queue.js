//////////////Queue

class Queue {
  constructor() {
    this._head = 0;
    this._tail = 0; //tail відповідає на питання, який елемент має бути останнім
  }
  get size() {
    return this._tail - this._head;
  }
  enqueue(value) {
    //вставляє елемент в кінець черги
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }
  dequeue() {
    //видаляє елемент з початку черги
    if (this.size > 0) {
      const firstItem = this[this._head];
      delete this[this._head];
      this._head++;
      return firstItem;
    }
    return undefined;
  }
}

const queue1 = new Queue();
queue1.enqueue('task1');
queue1.enqueue('task2');
queue1.enqueue('task3');
queue1.dequeue();
queue1.enqueue('task4');
queue1.enqueue('task5');
queue1.enqueue('task6');
