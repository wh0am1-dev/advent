#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import re
import sys

# --------------------------------

class Record:

  _WHO  = r'(?P<id>\#\d+)'
  _WHEN = r'\[\d{4}-(?P<date>\d{2}-\d{2}) \d{2}:(?P<time>\d{2})\]'


  def __init__(self):
    self.rec = {}


  def _decode(self, entry):
    who = re.search(Record._WHO, entry)
    when = re.search(Record._WHEN, entry)

    return {
      'date':  when.group('date'),
      'time':  when.group('time'),
      'id':    who and who.group('id'),
      'wake':  'wakes up' in entry,
      'sleep': 'falls asleep' in entry,
    }

# --------------------------------

if __name__ == '__main__':

  with open(os.path.join(sys.path[0], 'input.txt')) as f:
    data = f.read().splitlines()

  data.sort()
