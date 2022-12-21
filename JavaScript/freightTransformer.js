function transform(freightItems){
    let trasnformedItems = []

    trasnformedItems = freightItems.map(item => item.toUpperCase())

    return trasnformedItems
}

const transformed = transform(["dog", "ray gun", "cat"]);
console.log("Transformed Items");
console.log(transformed);