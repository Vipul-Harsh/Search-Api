const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Cite } = require('citation-js');

const app = express();
const port = 8080; 

app.use(bodyParser.json());
app.use(cors());

app.get('/search', (req, res) => {
  res.send("Hello from");
});

app.post('/search', async (req, res) => {
  try {
    const response = await axios.post('https://api.gyanibooks.com/search_publication/', req.body);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/generate-citations', (req, res) => {
  try {
    const { bibtext, citationStyles } = req.body;

    const formattedCitations = {};

    citationStyles.forEach((style) => {
      const cite = new Cite(bibtext);
      cite.format({ type: 'string', style });

      const inTextCitation = cite.get()[0].value;
      formattedCitations[style] = inTextCitation;
    });

    res.json({ citations: formattedCitations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
