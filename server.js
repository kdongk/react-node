const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '961222',
            'gender': '남자',
            'job': '의적'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '이동현',
            'birthday': '960630',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '김김김',
            'birthday': '923423',
            'gender': '여자',
            'job': '대학생'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
