#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import sys

# --------------------------------

if __name__ == '__main__':

  with open(os.path.join(sys.path[0], 'input.txt')) as f:
    print(sum([int(n) for n in f.read().splitlines()]))
