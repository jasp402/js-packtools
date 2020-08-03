function info() {
    let arMethods = sourceLib;
    return new Proxy(arMethods, {
        get: function (obj, prop) {
            let result, categories = {};
            if (prop in obj) {
                return obj[prop]
            }
            if (prop === 'number') {
                return obj.length
            }
            for (let product of obj) {
                if (product.name === prop) {
                    result = product
                }
                if (categories[product.category]) {
                    categories[product.category].push(product)
                } else {
                    categories[product.category] = [product]
                }
            }
            if (result) {
                return result
            }
            if (prop === 'names') {
                return Object.keys(obj).map(items => obj[items].name).filter(Boolean)
            }
            if (prop === 'tests') {
                return Object.keys(obj).map(items => obj[items].test).filter(Boolean)
            }
            if (prop in categories) {
                return categories[prop]
            }
            if (prop === 'categories') {
                return Object.keys(categories)
            }
            return undefined;
        }
    });
}