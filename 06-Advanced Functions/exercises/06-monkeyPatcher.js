function solution(arguments) {

    if (arguments === 'upvote') {
        this.upvotes++;
    } else if (arguments === 'downvote') {
        this.downvotes++;
    } else if (arguments === 'score') {
        let upVotes = this.upvotes;
        let downVotes = this.downvotes;
        let totalVotes = upVotes + downVotes;

        if (totalVotes > 50) {
            let numToAdd = Math.ceil(Math.max(upVotes, downVotes) * 0.25);
            upVotes += numToAdd;
            downVotes += numToAdd;
        }

        let positiveVotes = this.upvotes / totalVotes * 100;
        let balance = upVotes - downVotes;
        let rating = 'new';

        if (positiveVotes > 66) {
            rating = 'hot';
        } else if (balance >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular'
        }

        if (totalVotes < 10) {
            rating = 'new';
        }

        return [upVotes, downVotes, balance, rating];
    }
}

var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

solution.call(forumPost, 'upvote');
var answer = solution.call(forumPost, 'score');
console.log(answer)

// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score');
// console.log(score); // [127, 127, 0, 'controversial']
// solution.call(post, 'upvote');
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// score = solution.call(post, 'score');
// console.log(score)
