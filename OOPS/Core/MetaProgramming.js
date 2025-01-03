//* JavaScript provides Proxy and Reflect for meta-programming,
//*  allowing you to control object behavior at runtime.

const handler = {
    get(target, property) {
      return property in target ? target[property] : `Property ${property} not found`;
    },
  };
  
  const obj = { name: "Nanda" };
  const proxy = new Proxy(obj, handler);
  
  console.log(proxy.name); // Output: Nanda
  console.log(proxy.age); // Output: Property age not found
  