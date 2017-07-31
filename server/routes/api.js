const express = require('express');
const router = express.Router();

import page1 from '../data/page1.json';
import page2 from '../data/page2.json';
import page3 from '../data/page3.json';
import page4 from '../data/page4.json';
import page5 from '../data/page5.json';
import page6 from '../data/page6.json';
import page7 from '../data/page7.json';

/* GET home page. */
router.get('/page1', function(req, res) {
  res.json(page1);
});

router.get('/page2', function(req, res) {
  res.json(page2);
});

router.get('/page3', function(req, res) {
  res.json(page3);
});

router.get('/page4', function(req, res) {
  res.json(page4);
});

router.get('/page5', function(req, res) {
  res.json(page5);
});

router.get('/page6', function(req, res) {
  res.json(page6);
});

router.get('/page7', function(req, res) {
  res.json(page7);
});

module.exports = router;
