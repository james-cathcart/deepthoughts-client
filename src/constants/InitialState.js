const initialState = {

  notes: [
    {
      id: "mockNote1ID",
      body: "<h1>Mock Linux References</h1>\n<p>Do stuff with the command line!!! Here's how to get started...</p>",
      created: "2021-09-27T12:00:00",
      lastViewed: "2021-09-27T14:00:00",
    },
    {
      id: "mockNote2ID",
      body: "<h1>Mock Storage Locker Combo</h1>\n<p>Up Down Left Left Up Right Right</p>",
      created: "2021-09-24T12:00:00",
      lastViewed: "2021-09-24T16:00:00",
    },
  ],
  currentNote: {
    id: "mockNote1ID",
    body: "<h1>Mock Linux References</h1>\n<p>Do stuff with the command line!!! Here's how to get started...</p>",
    created: "2021-09-27T12:00:00",
    lastViewed: "2021-09-27T14:00:00",
  }

};

export default initialState;