const initialState = {

  notes: [
    {
      id: "mockNote1ID",
      body: "<h1>Mock Note 1</h1>\n<p>Enter text here...</p>",
      created: "2021-09-27T12:00:00",
      lastViewed: "2021-09-27T14:00:00",
    },
    {
      id: "mockNote2ID",
      body: "<h1>Mock Note 2</h1>\n<p>Enter text here...</p>",
      created: "2021-09-24T12:00:00",
      lastViewed: "2021-09-24T16:00:00",
    },
  ],
  currentNote: {
    id: "mockNote1ID",
    body: "<h1>Mock Note 1</h1>\n<p>Enter text here...</p>",
    created: "2021-09-27T12:00:00",
    lastViewed: "2021-09-27T14:00:00",
  }

};

export default initialState;