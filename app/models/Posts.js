module.exports = function(store) {

    let Posts = store.defineEntity('Posts', {
        properties: {
            slug: {
                type: "text"
            },
        }});

    return Posts;
};