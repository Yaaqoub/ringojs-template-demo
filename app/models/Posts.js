/**
 * @author Yaaqoub SEMLALI <semlali.yaaqoub@gmail.com>
 */

module.exports = function(store) {

    let Posts = store.defineEntity('Posts', {
        properties: {
            title: {
                type: "text"
            },

            content: {
                type: "text"
            }
        }});

    return Posts;
};