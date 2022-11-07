const state = {
  dialogsPage: {
    dialogs: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Hello' },
      { id: 3, message: 'How are you?' },
      { id: 4, message: 'Bla-bla' },
      { id: 5, message: 'Yo' },
    ],
    users: [
        { id: 1, userName: 'Anton', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVaLVFX1et-KJOG0Y4nQYh4kRVsRwBpT8OzQ&usqp=CAU' },
        { id: 2, userName: 'Masha', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLRAlpUwgnA01Ksosn99mzvGi1dZEeLS0Mw&usqp=CAU' },
        { id: 3, userName: 'Sasha', avatar:'data:image/png;base64,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' },
        { id: 4, userName: 'Anya', avatar:'data:image/png;base64,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' },
        { id: 5, userName: 'Dima', avatar:'data:image/jpeg;base64,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' },
      ],
  },
  postsPage: {
    posts: [
      { id: 1, likes: 28, content: "What's up?" },
      { id: 2, likes: 12, content: 'I am tired' },
      { id: 3, likes: 178, content: 'I love pizza' },
      { id: 4, likes: 3, content: 'I bougth a cat yestarday' },
      { id: 5, likes: 77, content: 'It is my first post' },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: 'First' },
      { id: 2, name: 'Second' },
      { id: 3, name: 'Third' },
    ],
  },
};

export default state;
