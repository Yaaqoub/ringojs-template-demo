/**
 * @author Yaaqoub SEMLALI <semlali.yaaqoub@gmail.com>
 */

module.exports = function(postsModel) {

    let p = new postsModel({
        'title': 'Post Title Example',
        'content': 'Post Content Example'
    });
    
    p.save();
};