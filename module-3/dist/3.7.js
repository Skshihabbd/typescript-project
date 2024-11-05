"use strict";
{
    //statics in OOP
    class Counter {
        constructor() {
            this.count = 0;
        }
        increment() {
            return (this.count = this.count + 1);
        }
        decrement() {
            return (this.count = this.count - 1);
        }
    }
    //   আলাদা আলাদা memory তে জমা হয় তার জন্য  প্রতিবার  আলাদা ভাবে variable এ declare করলে নতুন করে শুরু করে value দেই। উপরের console লগ এর উপর নির্ভর করেনা যে ওটাতে কি পরিবর্তন হল তার উপর পরবর্তী তে বাড়াবে নাকি কমাবে value.
    const instance1 = new Counter();
    console.log(instance1.increment()); //1->>different memory
    console.log(instance1.increment()); //2->>different memory
    console.log(instance1.increment()); //3->>different memory
    const instance2 = new Counter();
    console.log(instance2.increment()); // 1->>different memory
    console.log(instance2.increment()); // 2->>different memory
    //
    {
        class Counter {
            increment() {
                return (Counter.count = Counter.count + 1);
            }
            decrement() {
                return (Counter.count = Counter.count - 1);
            }
        }
        Counter.count = 0;
        const instance1 = new Counter();
        console.log(instance1.increment()); //1->>this time store same memory for using static memory
        console.log(instance1.increment()); //2->>this time store same memory for using static memory
        console.log(instance1.increment()); //3->>this time store same memory for using static memory
        const instance2 = new Counter();
        console.log(instance2.increment()); // 4->>this time store same memory for using static memory
        console.log(instance2.increment()); // 5->>this time store same memory for using static memory
    }
    //
    {
        // make this method static
        class Counter {
            static increment() {
                return (Counter.count = Counter.count + 1);
            }
            static decrement() {
                return (Counter.count = Counter.count - 1);
            }
        }
        Counter.count = 0;
        //const instance1 = new Counter();
        console.log(Counter.increment()); //1->>this time store same memory for using static memory
        console.log(Counter.increment()); //2->>this time store same memory for using static memory
        console.log(Counter.increment()); //3->>this time store same memory for using static memory
        //const instance2 = new Counter();
        console.log(Counter.increment()); // 4->>this time store same memory for using static memory
        console.log(Counter.increment()); // 5->>this time store same memory for using static memory
    }
    //
}
