# -*- coding: utf-8 -*-

if __name__ == '__main__':
  with open('input.txt') as f:
    print(sum([int(n) for n in f.read().splitlines()]))
