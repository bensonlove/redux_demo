// 异步action至少需要三种action
// { type: 'FETCH_POSTS' }
// { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
// { type: 'FETCH_POSTS', status: 'success', response: { ... } }
// 或者
// { type: 'FETCH_POSTS_REQUEST' }
// { type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
// { type: 'FETCH_POSTS_SUCCESS', response: { ... } }
// 
// 