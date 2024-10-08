console.group(`\x1b[1m%s\x1b[0m`, 'Optional chain and nullish coalescing');
const adventure = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};
// 1. obj.val?.prop
// --------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n1. obj.val?.prop`);
const catName = adventure.cat?.name;
const dogName = adventure.dog?.name;

console.log(`catName:`, catName);
console.log(`dogName:`, dogName);

// 2. obj.val?.[exp]
// --------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n2. obj.val?.[exp]`);
// Ex:
const printMagicIndex = function (arr) {
    console.log(`printMagicIndex: ${arr?.[2]}`);
};

printMagicIndex();
printMagicIndex([1, 2, 3, 4, 5, 6]);

// -----------
// Ex:
const myColor = {
    val: {
        options: {
            colors: ['red', 'green', 'blue']
        }
    }
};

const dynamicProperty = 2;
const result = myColor.val?.options?.colors?.[dynamicProperty];

console.log(`\nmyColor:`, result);

// -----------
// Ex:
const products = {
    val: {
        items: [
            { id: 1, name: 'Iphone 7' },
            { id: 2, name: 'Iphone 10' },
            { id: 3, name: 'Iphone 15' }
        ]
    }
};

const itemId = 2;
const itemIdex = 2;

const product1 = products.val?.items?.find((item) => item.id === itemId);
const product2 = products.val?.items?.[itemIdex];

console.log('\nproduct: ', product1); // Iphone 10
console.log('product: ', product2); // Iphone 15

// 3. obj.func?.(args)
// --------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n3. obj.func?.(args)`);
// Ex1:
const member = {
    name: 'Carl',
    detail: {
        age: 82,
        location: ' Paradise Falls'
    },
    getAge() {
        return this.detail?.age;
    }
};

const customerName = member.name?.getName?.();
const customerAge = member.getAge?.();

console.log(`getName : ${customerName}`); // Method does not exist, customerName is undefined
console.log(`getAge : ${customerAge}`); // 82

// Ex2:
const myMessage = 'Hello, Optional Chaining';

const obj = {
    func: (message) => {
        console.log(`\nFunction execute: ${message}`);
    }
};

obj.func?.(myMessage);

// 4. Combining with the Nullish coalescing operator
// --------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n4. Combining with the Nullish coalescing operator`);
const printCustomerCity = function (customer) {
    const customerCity = customer?.city ?? 'Unknown city';

    console.log(`customer city:`, customerCity);
};

const nathan = {
    name: 'Nathan',
    city: 'Paris'
};

const carl = {
    name: 'Carl',
    details: {
        age: 30
    }
};

printCustomerCity(nathan);
printCustomerCity(carl);

// Ex: Array
const users = [
    {
        name: 'Tom',
        email: 'hikva@azgazele.yt'
    }
];

console.log(users[0]?.name ?? 'User array empty');
console.groupEnd();
